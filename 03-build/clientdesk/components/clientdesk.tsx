"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import ClaudeChat from "./claude-chat";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Plus,
  MagnifyingGlass,
  CalendarBlank,
  Check,
  CheckCircle,
  Clock,
  DownloadSimple,
  X,
  FileText,
  WarningCircle,
  ArrowClockwise,
  CaretRight,
  LinkSimple,
  Tray,
  Users,
  CheckSquare,
  VideoCamera,
  Plugs,
  NotePencil,
  Quotes,
} from "@phosphor-icons/react";
import type { Client, Meeting, Task, Workspace } from "@/lib/domain";
type View =
  | "workspace"
  | "clients"
  | "meetings"
  | "followups"
  | "connections"
  | "client";
type Draft = {
  client_id: string;
  meeting_id: string;
  title: string;
  assignee: string;
  due_date: string;
  operation_id: string;
};
const navItems: [View, string][] = [
  ["workspace", "Workspace"],
  ["clients", "Clients"],
  ["meetings", "Meetings"],
  ["followups", "Follow-ups"],
];
const initialRoute = () => {
  if (typeof window === "undefined")
    return { view: "workspace" as View, client: "" };
  const p = new URLSearchParams(location.search);
  const v = p.get("view") as View;
  return {
    view: [
      "workspace",
      "clients",
      "meetings",
      "followups",
      "connections",
      "client",
    ].includes(v)
      ? v
      : ("workspace" as View),
    client: p.get("client") || "",
  };
};
const shortDate = (d: string) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    timeZone: "America/Toronto",
  }).format(new Date(d.length === 10 ? d + "T12:00:00Z" : d));
const clock = (d: string) =>
  new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Toronto",
  }).format(new Date(d));
const fullDate = (d: string) =>
  new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "America/Toronto",
  }).format(new Date(d));
function Monogram({
  client,
  large = false,
}: {
  client: Client;
  large?: boolean;
}) {
  return (
    <span
      className={"monogram " + (large ? "large " : "") + client.id.slice(0, 5)}
      aria-hidden="true"
    >
      {client.initials}
    </span>
  );
}
function Source({ meeting }: { meeting: Meeting }) {
  return (
    <span className="source">
      <img src="/brands/fireflies.svg" alt="Fireflies" />
      <span>Meeting notes</span>
    </span>
  );
}
function Empty({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="empty">
      <Tray size={32} weight="light" />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
function Dialog({
  title,
  children,
  onClose,
  wide = false,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  wide?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    ref.current?.showModal();
    return () => ref.current?.close();
  }, []);
  return (
    <dialog
      className={"drawer " + (wide ? "wide" : "")}
      ref={ref}
      aria-label={title}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <section>
        <header className="drawer-head">
          <h2>{title}</h2>
          <button
            aria-label="Close dialog"
            className="icon-btn"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </header>
        {children}
      </section>
    </dialog>
  );
}
export default function ClientDesk() {
  const [data, setData] = useState<Workspace | null>(null),
    [route, setRoute] = useState<{ view: View; client: string }>({
      view: "workspace",
      client: "",
    }),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(""),
    [saving, setSaving] = useState(false),
    [notice, setNotice] = useState(""),
    [query, setQuery] = useState(""),
    [tab, setTab] = useState("overview"),
    [taskFilter, setTaskFilter] = useState<"open" | "done">("open");
  const [modal, setModal] = useState<
      "client" | "task" | "search" | "import" | "brief" | null
    >(null),
    [draft, setDraft] = useState<Draft | null>(null),
    [review, setReview] = useState(false),
    [formError, setFormError] = useState(""),
    [expanded, setExpanded] = useState<string | null>(null);
  const [providers, setProviders] = useState({
    fireflies: false,
    calendly: false,
  });
  const searchRef = useRef<HTMLInputElement>(null);
  const [briefId, setBriefId] = useState("northstar");
  const [importKind, setImportKind] = useState<"meeting" | "event">("meeting");
  const previewBrief = (c: Client) => {
    setBriefId(c.id);
    setModal("brief");
  };
  const load = useCallback(async () => {
    setError("");
    try {
      const r = await fetch("/api/workspace", { cache: "no-store" });
      const body = await r.json();
      if (!r.ok) throw Error(body.error);
      setData(body.data);
      setProviders(body.providers);
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Unable to load your workspace.",
      );
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    setRoute(initialRoute());
    load();
    const back = () => {
      setRoute(initialRoute());
      setTab("overview");
    };
    addEventListener("popstate", back);
    return () => removeEventListener("popstate", back);
  }, [load]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 4500);
    return () => clearTimeout(timer);
  }, [notice]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)
      ) {
        e.preventDefault();
        setQuery("");
        setModal("search");
      }
    };
    addEventListener("keydown", key);
    return () => removeEventListener("keydown", key);
  }, []);
  const go = (view: View, client = "") => {
    setRoute({ view, client });
    setQuery("");
    setTab("overview");
    history.pushState(
      null,
      "",
      view === "workspace"
        ? "/"
        : `/?view=${view}${client ? "&client=" + encodeURIComponent(client) : ""}`,
    );
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const close = () => {
    if (saving) return;
    setModal(null);
    setFormError("");
    setReview(false);
    setImportKind("meeting");
  };
  const change = async (action: string, payload: unknown) => {
    setSaving(true);
    setFormError("");
    try {
      const res = await fetch("/api/workspace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, payload }),
      });
      const body = await res.json();
      if (!res.ok) throw Error(body.error);
      setData(body.data);
      return body.result;
    } catch (e) {
      const msg =
        e instanceof Error ? e.message : "We could not save that change.";
      setFormError(msg);
      throw e;
    } finally {
      setSaving(false);
    }
  };
  const openTask = (client: Client, meeting?: Meeting) => {
    const m =
      meeting ||
      data?.meetings
        .filter((m) => m.client_id === client.id && m.status === "available")
        .sort((a, b) => b.held_at.localeCompare(a.held_at))[0];
    if (!m) {
      setNotice("Add available meeting evidence before creating a follow-up.");
      return;
    }
    const date = new Date();
    date.setDate(date.getDate() + 2);
    setDraft({
      client_id: client.id,
      meeting_id: m.id,
      title:
        m.id === "meeting-001"
          ? "Prepare the onboarding checklist"
          : "Follow up on " + m.title.toLowerCase(),
      assignee: "Alex Morgan",
      due_date: date.toISOString().slice(0, 10),
      operation_id: crypto.randomUUID(),
    });
    setReview(false);
    setFormError("");
    setModal("task");
  };
  const saveTask = async () => {
    if (!draft) return;
    try {
      await change("task.save", { ...draft, confirmed: true });
      setModal(null);
      setNotice("Follow-up saved. Ready for your next conversation.");
    } catch {}
  };
  const setStatus = async (t: Task) => {
    try {
      await change("task.status", {
        id: t.id,
        status: t.status === "open" ? "done" : "open",
      });
      setNotice(
        t.status === "open" ? "Follow-up completed." : "Follow-up reopened.",
      );
    } catch {
      setNotice("Could not update this follow-up. Please try again.");
    }
  };
  const client = data?.clients.find((c) => c.id === route.client);
  const openTasks = data?.tasks.filter((t) => t.status === "open") || [];
  const meetingFor = (id: string) =>
    data?.meetings
      .filter((m) => m.client_id === id)
      .sort((a, b) => b.held_at.localeCompare(a.held_at)) || [];
  const nextEvents = (id?: string) =>
    data?.events
      .filter(
        (e) =>
          e.status === "active" &&
          (!id || e.client_id === id) &&
          new Date(e.starts_at) >= new Date(new Date().toDateString()),
      )
      .sort((a, b) => a.starts_at.localeCompare(b.starts_at)) || [];
  const exportBrief = (c: Client) => {
    const a = document.createElement("a");
    a.href = "/api/workspace?export=brief&client=" + encodeURIComponent(c.id);
    a.download = "client-brief.md";
    a.click();
  };
  const clientRows = (clients: Client[]) =>
    clients.length ? (
      <div className="client-list">
        <div className="list-labels">
          <span>Client</span>
          <span>Latest conversation</span>
          <span>Follow-ups</span>
          <span />
        </div>
        {clients.map((c) => {
          const m = meetingFor(c.id)[0],
            count = openTasks.filter((t) => t.client_id === c.id).length;
          return (
            <a
              key={c.id}
              href={"/?view=client&client=" + c.id}
              className="client-row"
              onClick={(e) => {
                e.preventDefault();
                go("client", c.id);
              }}
            >
              <div className="client-name">
                <Monogram client={c} />
                <div>
                  <h3>{c.name}</h3>
                  <span>
                    {c.contact} <b className="dot-sep">·</b> {c.sector}
                  </span>
                </div>
              </div>
              <div className="latest-cell">
                {m ? (
                  <>
                    <span>{shortDate(m.held_at)}</span>
                    <small
                      className={m.status === "unavailable" ? "missing" : ""}
                    >
                      {m.status === "available"
                        ? "Meeting notes available"
                        : "Transcript unavailable"}
                    </small>
                  </>
                ) : (
                  <>
                    <span>Just getting started</span>
                    <small>No meetings yet</small>
                  </>
                )}
              </div>
              <div className="follow-cell">
                {count ? (
                  <>
                    <span className="tiny-dot" />
                    {count} open
                  </>
                ) : (
                  <span className="muted">Nothing open</span>
                )}
              </div>
              <ArrowUpRight size={21} />
            </a>
          );
        })}
      </div>
    ) : (
      <Empty title="No matching clients">
        Try another name, company or email.
      </Empty>
    );
  const taskRows = (tasks: Task[], emptyStatus: "open" | "done" = "open") =>
    tasks.length ? (
      <div className="task-list">
        {tasks.map((t) => {
          const c = data!.clients.find((c) => c.id === t.client_id)!;
          return (
            <div className="task-row" key={t.id}>
              <button
                className={
                  "task-check " + (t.status === "done" ? "checked" : "")
                }
                aria-label={
                  (t.status === "open" ? "Complete " : "Reopen ") + t.title
                }
                disabled={saving}
                onClick={() => setStatus(t)}
              >
                {t.status === "done" && <Check size={14} weight="bold" />}
              </button>
              <div>
                <button
                  className={
                    "task-title " + (t.status === "done" ? "done" : "")
                  }
                  onClick={() => go("client", c.id)}
                >
                  {t.title}
                </button>
                <p>
                  {c.name}
                  <span className="dot-sep">·</span>
                  {t.assignee}
                </p>
              </div>
              <span className="due">
                <CalendarBlank size={15} />
                {shortDate(t.due_date)}
              </span>
            </div>
          );
        })}
      </div>
    ) : (
      <Empty
        title={
          emptyStatus === "done"
            ? "Your completed work will appear here"
            : "You’re all caught up"
        }
      >
        {emptyStatus === "done"
          ? "Complete a follow-up to keep a record of what moved forward."
          : "Open a client’s meeting to prepare the next thoughtful follow-up."}
      </Empty>
    );
  const meetingCard = (m: Meeting, compact = false) => {
    const c = data!.clients.find((c) => c.id === m.client_id)!;
    return (
      <article
        className={"meeting-card " + (compact ? "compact" : "")}
        key={m.id}
      >
        <div className="meeting-meta">
          <Source meeting={m} />
          <span>
            {shortDate(m.held_at)} <span className="dot-sep">·</span>{" "}
            {clock(m.held_at)}
          </span>
        </div>
        <div className="meeting-title">
          <h3>{m.title}</h3>
          {route.view !== "client" && (
            <button
              className="text-link muted"
              onClick={() => go("client", c.id)}
            >
              {c.name}
              <ArrowUpRight size={14} />
            </button>
          )}
        </div>
        {m.summary ? (
          <>
            <p className="meeting-summary">{m.summary}</p>
            <div className="evidence-note">
              <LinkSimple size={15} />
              <span>
                Source <code>{m.source_id}</code>
              </span>
              <span className="sync-stamp">
                Synced {shortDate(m.synced_at)}
              </span>
            </div>
          </>
        ) : (
          <div className="unavailable">
            <WarningCircle size={21} />
            <div>
              <strong>Transcript unavailable</strong>
              <p>
                The meeting is recorded, but its notes haven’t arrived. No
                summary has been inferred.
              </p>
            </div>
          </div>
        )}
        <div className="meeting-actions">
          {m.summary ? (
            <>
              <button
                className="text-link"
                aria-expanded={expanded === m.id}
                onClick={() => setExpanded(expanded === m.id ? null : m.id)}
              >
                <FileText size={17} />
                {expanded === m.id ? "Hide transcript" : "Read transcript"}
              </button>
              <button className="text-link" onClick={() => openTask(c, m)}>
                Prepare follow-up
                <ArrowRight size={17} />
              </button>
            </>
          ) : (
            <button
              className="text-link"
              onClick={() => {
                go("connections");
                setModal("import");
              }}
            >
              Import meeting notes
              <ArrowRight size={17} />
            </button>
          )}
        </div>
        {expanded === m.id && (
          <div className="transcript">
            <span className="eyebrow">Meeting transcript</span>
            <p>
              {m.transcript ||
                "A summary is available, but the full transcript was not supplied."}
            </p>
          </div>
        )}
      </article>
    );
  };
  const eventCard = (id?: string) => {
    const event = nextEvents(id)[0];
    if (!event)
      return (
        <aside className="next-call">
          <div className="panel-label">
            <CalendarBlank size={17} />
            Next conversation
          </div>
          <Empty title="Room for the next conversation">
            No upcoming call is recorded for this client.
          </Empty>
        </aside>
      );
    const c = data!.clients.find((c) => c.id === event.client_id)!;
    return (
      <aside className="next-call">
        <div className="panel-label">
          <span>
            <CalendarBlank size={17} />
            Next conversation
          </span>
          <img src="/brands/calendly.svg" alt="Calendly" />
        </div>
        <div className="calendar-date">
          <span>
            {new Intl.DateTimeFormat("en", {
              day: "2-digit",
              timeZone: "America/Toronto",
            }).format(new Date(event.starts_at))}
          </span>
          <div>
            <strong>
              {new Intl.DateTimeFormat("en", {
                weekday: "long",
                timeZone: "America/Toronto",
              }).format(new Date(event.starts_at))}
            </strong>
            <p>
              {shortDate(event.starts_at)} <span className="dot-sep">·</span>
              {clock(event.starts_at)}
            </p>
          </div>
        </div>
        <h3>{event.title}</h3>
        <p>
          {c.name} <span className="dot-sep">·</span>
          {c.contact}
        </p>
        <div className="call-footer">
          <span>30 min · Toronto time</span>
          <button className="text-link" onClick={() => previewBrief(c)}>
            Get brief
            <ArrowUpRight size={16} />
          </button>
        </div>
      </aside>
    );
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="app-header">
        <a
          href="/"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            go("workspace");
          }}
        >
          <span className="brand-mark">
            c<span />
          </span>
          clientdesk<span className="brand-period">.</span>
        </a>
        <nav aria-label="Main navigation">
          {navItems.map(([view, label]) => (
            <a
              key={view}
              href={view === "workspace" ? "/" : "/?view=" + view}
              aria-current={
                route.view === view ||
                (view === "clients" && route.view === "client")
                  ? "page"
                  : undefined
              }
              onClick={(e) => {
                e.preventDefault();
                go(view);
              }}
            >
              {label}
              {view === "followups" && openTasks.length > 0 && (
                <span className="nav-count">{openTasks.length}</span>
              )}
            </a>
          ))}
        </nav>
        <div className="header-tools">
          <button
            className="search-trigger"
            onClick={() => {
              setQuery("");
              setModal("search");
            }}
            aria-label="Find a client"
          >
            <MagnifyingGlass size={20} />
            <kbd>/</kbd>
          </button>
          <button
            className={
              "icon-btn " + (route.view === "connections" ? "selected" : "")
            }
            onClick={() => go("connections")}
            aria-label="Connections"
          >
            <Plugs size={21} />
          </button>
          <span className="profile" aria-label="Alex Morgan">
            AM
          </span>
        </div>
      </header>
      <div className="workspace-strip">
        <span>
          <span className="workspace-dot" />
          Alex’s workspace <CaretRight size={12} />
          <span className="muted">
            {route.view === "client"
              ? client?.name || "Client"
              : route.view === "followups"
                ? "Follow-ups"
                : route.view[0].toUpperCase() + route.view.slice(1)}
          </span>
        </span>
        <span className="practice-label">
          Practice workspace <span>· Fictional clients</span>
        </span>
      </div>
      <main id="main" tabIndex={-1}>
        {loading ? (
          <div
            className="loading-shell"
            aria-label="Loading workspace"
            role="status"
          >
            <div />
            <div />
            <div />
            <div />
          </div>
        ) : error ? (
          <div className="error-page">
            <WarningCircle size={40} />
            <h1>Your workspace needs a moment</h1>
            <p>{error}</p>
            <button
              className="button primary"
              onClick={() => {
                setLoading(true);
                load();
              }}
            >
              <ArrowClockwise size={18} />
              Try again
            </button>
          </div>
        ) : (
          data && (
            <>
              {route.view === "workspace" && (
                <>
                  <div className="page-heading">
                    <div>
                      <p className="eyebrow">
                        {fullDate(new Date().toISOString())}
                      </p>
                      <h1>
                        Your client desk<span className="accent">.</span>
                      </h1>
                      <p className="page-intro">
                        A little context. A clear next step.
                      </p>
                    </div>
                    <button
                      className="button primary"
                      onClick={() => {
                        setFormError("");
                        setModal("client");
                      }}
                    >
                      <Plus size={18} weight="bold" />
                      New client
                    </button>
                  </div>
                  <div className="workspace-summary">
                    <span>
                      <strong>
                        {String(data.clients.length).padStart(2, "0")}
                      </strong>
                      clients in your care
                    </span>
                    <span>
                      <strong>
                        {String(openTasks.length).padStart(2, "0")}
                      </strong>
                      open follow-up{openTasks.length !== 1 ? "s" : ""}
                    </span>
                    <span>
                      <strong>
                        {String(nextEvents().length).padStart(2, "0")}
                      </strong>
                      upcoming conversation
                      {nextEvents().length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="workspace-grid">
                    <section className="directory">
                      <div className="section-heading">
                        <h2>People you’re working with</h2>
                        <button
                          className="text-link"
                          onClick={() => go("clients")}
                        >
                          All clients
                          <ArrowUpRight size={16} />
                        </button>
                      </div>
                      {clientRows(data.clients)}
                      <div className="section-heading second-section">
                        <h2>The next few moves</h2>
                        <button
                          className="text-link"
                          onClick={() => go("followups")}
                        >
                          Follow-ups
                          <ArrowUpRight size={16} />
                        </button>
                      </div>
                      {taskRows(openTasks.slice(0, 3))}
                    </section>
                    <div className="right-rail">
                      {eventCard()}
                      <aside className="attention">
                        <span className="eyebrow">Worth a look</span>
                        <Quotes size={26} weight="light" />
                        <h3>Good follow-ups start with the conversation.</h3>
                        <p>
                          Maya asked for an onboarding checklist. The timing
                          still needs a decision.
                        </p>
                        <button
                          className="text-link"
                          onClick={() => go("client", "northstar")}
                        >
                          Review Northstar’s notes
                          <ArrowRight size={17} />
                        </button>
                      </aside>
                    </div>
                  </div>
                  <div className="section-heading">
                    <h2>Recent conversations</h2>
                    <button
                      className="text-link"
                      onClick={() => go("meetings")}
                    >
                      All meetings
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                  <div className="recent-grid">
                    {[...data.meetings]
                      .sort((a, b) => b.held_at.localeCompare(a.held_at))
                      .slice(0, 2)
                      .map((m) => meetingCard(m, true))}
                  </div>
                </>
              )}
              {route.view === "clients" && (
                <>
                  <div className="page-heading">
                    <div>
                      <p className="eyebrow">Your relationships</p>
                      <h1>
                        Clients<span className="accent">.</span>
                      </h1>
                      <p className="page-intro">
                        The people, the context, and what comes next.
                      </p>
                    </div>
                    <button
                      className="button primary"
                      onClick={() => {
                        setFormError("");
                        setModal("client");
                      }}
                    >
                      <Plus size={18} />
                      New client
                    </button>
                  </div>
                  <div className="toolbar">
                    <label className="search-field">
                      <MagnifyingGlass size={19} />
                      <input
                        aria-label="Search clients"
                        placeholder="Find a client, contact or email…"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </label>
                    <span className="muted">{data.clients.length} clients</span>
                  </div>
                  {clientRows(
                    data.clients.filter((c) =>
                      (c.name + " " + c.contact + " " + c.email)
                        .toLowerCase()
                        .includes(query.toLowerCase()),
                    ),
                  )}
                </>
              )}
              {route.view === "client" &&
                (client ? (
                  <>
                    <button className="back-link" onClick={() => go("clients")}>
                      <ArrowLeft size={15} />
                      All clients
                    </button>
                    <div className="client-heading">
                      <div>
                        <Monogram client={client} large />
                        <div>
                          <p className="eyebrow">{client.sector}</p>
                          <h1>{client.name}</h1>
                          <p>
                            {client.contact}
                            <span className="dot-sep">·</span>
                            {client.email}
                          </p>
                        </div>
                      </div>
                      <button
                        className="button"
                        onClick={() => previewBrief(client)}
                      >
                        <FileText size={18} />
                        Client brief
                      </button>
                    </div>
                    <div
                      className="tabs"
                      role="tablist"
                      aria-label="Client sections"
                    >
                      {["overview", "meetings", "follow-ups"].map((t) => (
                        <button
                          role="tab"
                          tabIndex={tab === t ? 0 : -1}
                          aria-selected={tab === t}
                          key={t}
                          onKeyDown={(e) => {
                            if (
                              e.key === "ArrowRight" ||
                              e.key === "ArrowLeft"
                            ) {
                              e.preventDefault();
                              const items = [
                                "overview",
                                "meetings",
                                "follow-ups",
                              ];
                              const next =
                                items[
                                  (items.indexOf(t) +
                                    (e.key === "ArrowRight" ? 1 : 2)) %
                                    3
                                ];
                              setTab(next);
                              const buttons =
                                e.currentTarget.parentElement?.querySelectorAll(
                                  "button",
                                );
                              (
                                buttons?.[
                                  items.indexOf(next)
                                ] as HTMLButtonElement
                              )?.focus();
                            }
                          }}
                          onClick={() => setTab(t)}
                        >
                          {t[0].toUpperCase() + t.slice(1)}
                          {t === "meetings" && (
                            <span>{meetingFor(client.id).length}</span>
                          )}
                        </button>
                      ))}
                    </div>
                    {tab === "overview" ? (
                      <div className="client-grid">
                        <div>
                          <div className="section-heading">
                            <h2>The latest conversation</h2>
                            <span className="muted">Context before action</span>
                          </div>
                          {meetingFor(client.id)[0] ? (
                            meetingCard(meetingFor(client.id)[0])
                          ) : (
                            <Empty title="A fresh start">
                              No meetings yet. Import your first meeting to give
                              the next follow-up some context.
                            </Empty>
                          )}
                          <div className="section-heading second-section">
                            <h2>Open follow-ups</h2>
                            <span className="count-label">
                              {
                                openTasks.filter(
                                  (t) => t.client_id === client.id,
                                ).length
                              }
                            </span>
                          </div>
                          {taskRows(
                            openTasks.filter((t) => t.client_id === client.id),
                          )}
                        </div>
                        <div className="right-rail">
                          {eventCard(client.id)}
                          <aside className="next-step">
                            <div className="panel-label">
                              <NotePencil size={18} />
                              Your next step
                            </div>
                            <h3>
                              {meetingFor(client.id).some(
                                (m) => m.status === "available",
                              )
                                ? "Turn the conversation into a clear follow-up."
                                : "Start with the evidence."}
                            </h3>
                            <p>
                              {meetingFor(client.id).some(
                                (m) => m.status === "available",
                              )
                                ? "You choose the action, owner and date. Review them together before anything is saved."
                                : "Add the meeting notes before proposing work on your client’s behalf."}
                            </p>
                            <button
                              className="button primary"
                              onClick={() =>
                                meetingFor(client.id).some(
                                  (m) => m.status === "available",
                                )
                                  ? openTask(client)
                                  : (go("connections"), setModal("import"))
                              }
                            >
                              {meetingFor(client.id).some(
                                (m) => m.status === "available",
                              )
                                ? "Prepare follow-up"
                                : "Import meeting"}
                              <ArrowRight size={17} />
                            </button>
                          </aside>
                        </div>
                      </div>
                    ) : tab === "meetings" ? (
                      <div className="meeting-column">
                        {meetingFor(client.id).length ? (
                          meetingFor(client.id).map((m) => meetingCard(m))
                        ) : (
                          <Empty title="No meetings yet">
                            Add the first meeting from Connections.
                          </Empty>
                        )}
                      </div>
                    ) : (
                      <>
                        {taskRows(
                          data.tasks.filter((t) => t.client_id === client.id),
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <Empty title="Client not found">
                    This client isn’t in your workspace.{" "}
                    <button className="text-link" onClick={() => go("clients")}>
                      Return to clients
                    </button>
                  </Empty>
                ))}
              {route.view === "meetings" && (
                <>
                  <div className="page-heading">
                    <div>
                      <p className="eyebrow">Keep the context</p>
                      <h1>
                        Conversations<span className="accent">.</span>
                      </h1>
                      <p className="page-intro">
                        What was said, where it came from, and what’s still
                        unknown.
                      </p>
                    </div>
                    <button
                      className="button"
                      onClick={() => {
                        setFormError("");
                        setModal("import");
                      }}
                    >
                      <Plus size={18} />
                      Import meeting
                    </button>
                  </div>
                  <div className="meetings-page">
                    <div className="meeting-column">
                      {[...data.meetings]
                        .sort((a, b) => b.held_at.localeCompare(a.held_at))
                        .map((m) => meetingCard(m))}
                    </div>
                    <div className="right-rail">
                      {eventCard()}
                      <p className="rail-note">
                        Each meeting keeps its original source. Missing notes
                        stay missing until evidence is available.
                      </p>
                    </div>
                  </div>
                </>
              )}
              {route.view === "followups" && (
                <>
                  <div className="page-heading">
                    <div>
                      <p className="eyebrow">Move the work forward</p>
                      <h1>
                        Follow-ups<span className="accent">.</span>
                      </h1>
                      <p className="page-intro">
                        Small commitments, with the conversation close by.
                      </p>
                    </div>
                    <span className="page-stat">
                      {openTasks.length}
                      <small>open</small>
                    </span>
                  </div>
                  <div className="tabs">
                    <button
                      className={taskFilter === "open" ? "active" : ""}
                      onClick={() => setTaskFilter("open")}
                    >
                      Open<span>{openTasks.length}</span>
                    </button>
                    <button
                      className={taskFilter === "done" ? "active" : ""}
                      onClick={() => setTaskFilter("done")}
                    >
                      Completed
                      <span>
                        {data.tasks.filter((t) => t.status === "done").length}
                      </span>
                    </button>
                  </div>
                  {taskRows(
                    data.tasks.filter((t) => t.status === taskFilter),
                    taskFilter,
                  )}
                  <p className="list-footnote">
                    <CheckCircle size={16} />
                    Every follow-up was reviewed before it was saved.
                  </p>
                </>
              )}
              {route.view === "connections" && (
                <>
                  <div className="page-heading">
                    <div>
                      <p className="eyebrow">Bring the context together</p>
                      <h1>
                        Connections<span className="accent">.</span>
                      </h1>
                      <p className="page-intro">
                        Meeting notes and calendar events, with a clear source.
                      </p>
                    </div>
                  </div>
                  <div className="connections-grid">
                    <article className="connection-card">
                      <img src="/brands/fireflies.svg" alt="Fireflies" />
                      <span className="connection-status">
                        {providers.fireflies
                          ? "Credential configured"
                          : "Sample source"}
                      </span>
                      <h2>The conversation, remembered.</h2>
                      <p>
                        Meeting summaries retain their source ID and the
                        original transcript. Reimporting the same source updates
                        one meeting.
                      </p>
                      <div className="connection-footer">
                        <span>
                          {
                            data.meetings.filter(
                              (m) => m.source === "fireflies",
                            ).length
                          }{" "}
                          meeting records
                        </span>
                        <button
                          className="button"
                          onClick={() => {
                            setFormError("");
                            setModal("import");
                          }}
                        >
                          Import record
                          <ArrowUpRight size={16} />
                        </button>
                      </div>
                    </article>
                    <article className="connection-card">
                      <img src="/brands/calendly.svg" alt="Calendly" />
                      <span className="connection-status">
                        {providers.calendly
                          ? "Credential configured"
                          : "Sample source"}
                      </span>
                      <h2>Know the next conversation.</h2>
                      <p>
                        Upcoming calls keep their original time and timezone.
                        Canceled events don’t appear as your next call.
                      </p>
                      <div className="connection-footer">
                        <span>{nextEvents().length} upcoming call</span>
                        <button
                          className="button"
                          onClick={() => {
                            setImportKind("event");
                            setFormError("");
                            setModal("import");
                          }}
                        >
                          Import event
                          <ArrowUpRight size={16} />
                        </button>
                      </div>
                    </article>
                  </div>
                  <div className="connection-info">
                    <Plugs size={25} />
                    <div>
                      <h3>Your practice data is clearly labeled.</h3>
                      <p>
                        This workspace starts with fictional records. A
                        configured credential is not proof of a successful live
                        connection. The course setup guide covers connecting a
                        dedicated teaching account and verifying one record.
                      </p>
                    </div>
                  </div>
                </>
              )}
              <footer className="app-footer">
                <span>
                  clientdesk<span className="accent">.</span>
                  <span className="footer-divider" />A little more connected.
                </span>
                <span>
                  <span className="tiny-dot green" />
                  Your changes stay in this workspace
                </span>
              </footer>
            </>
          )
        )}
      </main>
      {notice && (
        <div className="toast" role="status">
          <CheckCircle size={19} />
          {notice}
        </div>
      )}
      {modal === "client" && (
        <Dialog title="A new client" onClose={close}>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              try {
                const c = await change("client.create", Object.fromEntries(f));
                setModal(null);
                go("client", c.id);
                setNotice("Client added to your workspace.");
              } catch {}
            }}
          >
            <p className="form-intro">
              Start with the person behind the next conversation.
            </p>
            <label>
              Company or client name
              <input
                name="name"
                required
                maxLength={180}
                placeholder="e.g. Fieldwork Studio"
                autoFocus
              />
            </label>
            <label>
              Primary contact
              <input
                name="contact"
                required
                maxLength={180}
                placeholder="Full name"
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="name@company.com"
              />
            </label>
            <label>
              What they do
              <input
                name="sector"
                required
                maxLength={180}
                placeholder="e.g. Architecture & interiors"
              />
            </label>
            {formError && (
              <p className="form-error" role="alert">
                {formError}
              </p>
            )}
            <div className="form-actions">
              <button className="button" type="button" onClick={close}>
                Cancel
              </button>
              <button className="button primary" disabled={saving}>
                {saving ? "Adding…" : "Add client"}
                <ArrowRight size={17} />
              </button>
            </div>
          </form>
        </Dialog>
      )}
      {modal === "task" && draft && data && (
        <Dialog
          title={review ? "One last look" : "Prepare a follow-up"}
          onClose={close}
        >
          <div className="review-progress">
            <span className={!review ? "current" : ""}>01 Proposal</span>
            <ArrowRight size={14} />
            <span className={review ? "current" : ""}>02 Review & save</span>
          </div>
          <div className="draft-evidence">
            <span className="eyebrow">From the conversation</span>
            <p>
              “{data.meetings.find((m) => m.id === draft.meeting_id)?.summary}”
            </p>
            <small>
              {data.clients.find((c) => c.id === draft.client_id)?.name}
              <span className="dot-sep">·</span>
              {data.meetings.find((m) => m.id === draft.meeting_id)?.source_id}
            </small>
          </div>
          {!review ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setReview(true);
                setFormError("");
              }}
            >
              <p className="form-intro">
                This is a proposal. The meeting did not establish an owner or a
                delivery date.
              </p>
              <label>
                What’s the next action?
                <textarea
                  rows={2}
                  required
                  maxLength={180}
                  value={draft.title}
                  onChange={(e) =>
                    setDraft({ ...draft, title: e.target.value })
                  }
                />
              </label>
              <div className="form-pair">
                <label>
                  Who owns it?
                  <input
                    required
                    maxLength={180}
                    value={draft.assignee}
                    onChange={(e) =>
                      setDraft({ ...draft, assignee: e.target.value })
                    }
                  />
                </label>
                <label>
                  Proposed due date
                  <input
                    type="date"
                    required
                    value={draft.due_date}
                    onChange={(e) =>
                      setDraft({ ...draft, due_date: e.target.value })
                    }
                  />
                </label>
              </div>
              <div className="form-actions">
                <span className="muted">Nothing saved yet</span>
                <button className="button primary">
                  Review follow-up
                  <ArrowRight size={17} />
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="review-object">
                <span className="eyebrow">Ready for your decision</span>
                <h3>{draft.title}</h3>
                <dl>
                  <div>
                    <dt>Client</dt>
                    <dd>
                      {data.clients.find((c) => c.id === draft.client_id)?.name}
                    </dd>
                  </div>
                  <div>
                    <dt>Owner</dt>
                    <dd>{draft.assignee}</dd>
                  </div>
                  <div>
                    <dt>Due date</dt>
                    <dd>
                      {new Intl.DateTimeFormat("en", {
                        dateStyle: "long",
                        timeZone: "UTC",
                      }).format(new Date(draft.due_date + "T12:00:00Z"))}
                    </dd>
                  </div>
                  <div>
                    <dt>Supporting meeting</dt>
                    <dd>
                      {
                        data.meetings.find((m) => m.id === draft.meeting_id)
                          ?.title
                      }
                    </dd>
                  </div>
                </dl>
              </div>
              <p className="form-intro">
                Saving confirms this exact follow-up. It won’t send a message or
                update your calendar.
              </p>
              {formError && (
                <p className="form-error" role="alert">
                  {formError}
                </p>
              )}
              <div className="form-actions">
                <button
                  className="button"
                  onClick={() => setReview(false)}
                  disabled={saving}
                >
                  <ArrowLeft size={16} />
                  Edit proposal
                </button>
                <button
                  className="button primary"
                  onClick={saveTask}
                  disabled={saving}
                >
                  {saving ? "Saving…" : "Save follow-up"}
                  <Check size={17} />
                </button>
              </div>
            </>
          )}
        </Dialog>
      )}
      {modal === "search" && (
        <Dialog title="Find a client" onClose={close} wide>
          <label className="search-field search-modal">
            <MagnifyingGlass size={22} />
            <input
              autoFocus
              ref={searchRef}
              aria-label="Find a client"
              placeholder="Company, contact or email…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <div className="search-results">
            {data?.clients
              .filter((c) =>
                (c.name + " " + c.contact + " " + c.email)
                  .toLowerCase()
                  .includes(query.toLowerCase()),
              )
              .map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    go("client", c.id);
                    setModal(null);
                  }}
                >
                  <Monogram client={c} />
                  <span>
                    <strong>{c.name}</strong>
                    <small>{c.contact}</small>
                  </span>
                  <ArrowUpRight size={18} />
                </button>
              ))}
          </div>
        </Dialog>
      )}
      {modal === "import" && data && (
        <Dialog
          title={
            importKind === "meeting"
              ? "Bring in a meeting"
              : "Bring in a calendar event"
          }
          onClose={close}
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              try {
                const record = JSON.parse(String(f.get("record")));
                await change(importKind + ".import", {
                  ...record,
                  client_id: String(f.get("client_id")),
                });
                setModal(null);
                setImportKind("meeting");
                setNotice("Record imported. The source stays with it.");
              } catch (e) {
                if (e instanceof SyntaxError)
                  setFormError(
                    "That isn’t valid JSON yet. Check the record and try again.",
                  );
              }
            }}
          >
            <p className="form-intro">
              Choose the client explicitly, then paste a normalized source
              record. The source ID prevents duplicate imports.
            </p>
            <label>
              Client
              <select name="client_id" defaultValue={client?.id || "northstar"}>
                {data.clients.map((c) => (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {importKind === "meeting" ? "Meeting record" : "Calendar event"}
              <textarea
                className="json-input"
                name="record"
                rows={12}
                required
                defaultValue={JSON.stringify(
                  importKind === "event"
                    ? {
                        source_id: "demo-event-001",
                        starts_at:
                          data.events[0]?.starts_at || new Date().toISOString(),
                        timezone: "America/Toronto",
                        status: "active",
                        title: "Onboarding working session",
                      }
                    : {
                        source: "fireflies",
                        source_id: "demo-transcript-001",
                        held_at:
                          data.meetings[0]?.held_at || new Date().toISOString(),
                        title: "Making onboarding feel effortless",
                        summary:
                          "Maya requested an onboarding checklist before the next working session. No delivery date was agreed.",
                        transcript: data.meetings[0]?.transcript || null,
                        status: "available",
                      },
                  null,
                  2,
                )}
              />
            </label>
            {formError && (
              <p className="form-error" role="alert">
                {formError}
              </p>
            )}
            <div className="form-actions">
              <button className="button" type="button" onClick={close}>
                Cancel
              </button>
              <button className="button primary" disabled={saving}>
                {saving
                  ? "Importing…"
                  : importKind === "meeting"
                    ? "Import meeting"
                    : "Import event"}
                <ArrowRight size={17} />
              </button>
            </div>
          </form>
        </Dialog>
      )}
      {modal === "brief" &&
        data &&
        (() => {
          const c = data.clients.find((c) => c.id === briefId);
          if (!c) return null;
          const latest = meetingFor(c.id)[0];
          const upcoming = nextEvents(c.id)[0];
          const tasks = openTasks.filter((t) => t.client_id === c.id);
          return (
            <Dialog title="The conversation brief" onClose={close} wide>
              <div className="brief-preview">
                <div className="brief-cover">
                  <Monogram client={c} />
                  <div>
                    <span className="eyebrow">
                      Prepared for your next conversation
                    </span>
                    <h3>{c.name}</h3>
                    <p>
                      {c.contact} · {c.sector}
                    </p>
                  </div>
                </div>
                {upcoming && (
                  <div className="brief-appointment">
                    <CalendarBlank size={20} />
                    <div>
                      <strong>{upcoming.title}</strong>
                      <p>
                        {fullDate(upcoming.starts_at)} ·{" "}
                        {clock(upcoming.starts_at)} · Toronto
                      </p>
                    </div>
                  </div>
                )}
                <section className="brief-section">
                  <span className="brief-number">01</span>
                  <div>
                    <h3>What we know</h3>
                    <p>
                      {latest?.summary ||
                        "No meeting summary is available. We have not inferred one."}
                    </p>
                    {latest && (
                      <span className="brief-source">
                        <LinkSimple size={13} />
                        {latest.source_id} · {shortDate(latest.held_at)}
                      </span>
                    )}
                  </div>
                </section>
                <section className="brief-section">
                  <span className="brief-number">02</span>
                  <div>
                    <h3>Already in motion</h3>
                    {tasks.length ? (
                      <ul>
                        {tasks.map((t) => (
                          <li key={t.id}>
                            <strong>{t.title}</strong>
                            <span>
                              {t.assignee} · Due {shortDate(t.due_date)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No open follow-ups have been reviewed and saved.</p>
                    )}
                  </div>
                </section>
                <section className="brief-section">
                  <span className="brief-number">03</span>
                  <div>
                    <h3>Bring this to the conversation</h3>
                    <p>
                      {latest?.summary?.includes("No delivery date")
                        ? "Confirm when the checklist is needed and who will own the next step. A requested outcome is not yet an agreed deadline."
                        : "Confirm the next action, its owner and timing against the source meeting before making a commitment."}
                    </p>
                  </div>
                </section>
                <div className="brief-download">
                  <span>
                    Facts stay with their source.
                    <br />
                    Suggestions stay clearly proposed.
                  </span>
                  <button
                    className="button primary"
                    onClick={() => exportBrief(c)}
                  >
                    <DownloadSimple size={17} />
                    Export brief
                  </button>
                </div>
              </div>
            </Dialog>
          );
        })()}
      {data && (
        <ClaudeChat
          clients={data.clients}
          clientId={route.view === "client" ? route.client : undefined}
        />
      )}
    </>
  );
}
