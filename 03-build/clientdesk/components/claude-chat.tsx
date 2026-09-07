"use client";
import { useEffect, useRef, useState } from "react";
import {
  ChatCircle,
  ArrowUp,
  Stop,
  X,
  Copy,
  ArrowCounterClockwise,
} from "@phosphor-icons/react";
import type { Client } from "@/lib/domain";
type Message = { role: "user" | "assistant"; content: string };
export default function ClaudeChat({
  clients,
  clientId,
}: {
  clients: Client[];
  clientId?: string;
}) {
  const [mode, setMode] = useState("local-subscription");
  const [accessCode, setAccessCode] = useState("");
  const [accessOpen, setAccessOpen] = useState(true);
  const provider = "Claude";
  const hosted = mode === "hosted-claude";
  const [available, setAvailable] = useState(false),
    [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(clientId || clients[0]?.id || "");
  const [threads, setThreads] = useState<Record<string, Message[]>>({});
  const [draft, setDraft] = useState(""),
    [pending, setPending] = useState(""),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [copied, setCopied] = useState(-1);
  const dialog = useRef<HTMLDialogElement>(null),
    input = useRef<HTMLTextAreaElement>(null),
    end = useRef<HTMLDivElement>(null),
    scroll = useRef<HTMLDivElement>(null),
    controller = useRef<AbortController | null>(null);
  useEffect(() => {
    let active = true;
    fetch("/api/chat", { cache: "no-store" })
      .then((r) => r.json())
      .then((r) => {
        if (active) { setAvailable(r.available === true); setMode(r.mode || "local-subscription"); }
      })
      .catch(() => {});
    return () => {
      active = false;
      controller.current?.abort();
    };
  }, []);
  useEffect(() => {
    if (clientId) {
      controller.current?.abort();
      setSelected(clientId);
      setDraft("");
      setError("");
    }
  }, [clientId]);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      input.current?.focus();
    } else dialog.current?.close();
  }, [open]);
  useEffect(() => {
    if (!open) return;
    if ((threads[selected] || []).length || busy)
      end.current?.scrollIntoView({ block: "end", behavior: "instant" });
    else scroll.current?.scrollTo({ top: 0 });
  }, [threads, pending, busy, open, selected]);
  function close() {
    controller.current?.abort();
    setOpen(false);
  }
  async function send(question = draft) {
    if (controller.current || busy || !question.trim() || !selected || (hosted && !accessCode.trim())) return;
    const id = selected,
      text = question.trim(),
      history = threads[id] || [];
    const abort = new AbortController();
    controller.current = abort;
    setBusy(true);
    setError("");
    setPending(text);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(hosted ? { "X-ClientDesk-Access": accessCode } : {}) },
        body: JSON.stringify({
          clientId: id,
          message: text,
          history: history.slice(-6),
        }),
        signal: abort.signal,
      });
      const body = await response.json();
      if (!response.ok) {
        if (body.code === "access_required") { setAccessOpen(true); setAccessCode(""); }
        throw Error(body.error || `${provider} could not answer.`);
      }
      setAccessOpen(false);
      setThreads((all) => ({
        ...all,
        [id]: [
          ...history,
          { role: "user", content: text },
          { role: "assistant", content: body.answer },
        ],
      }));
      setDraft("");
    } catch (e) {
      setError(
        abort.signal.aborted
          ? "Reply stopped. Your question has been kept."
          : e instanceof Error
            ? e.message
            : `Unable to reach ${provider}.`,
      );
      setDraft(text);
    } finally {
      setBusy(false);
      setPending("");
      controller.current = null;
    }
  }
  const messages = threads[selected] || [];
  if (!available) return null;
  return (
    <>
      <button
        className="chat-launch"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <ChatCircle size={21} />
        <span>Ask {provider}</span>
        <span className="chat-local">{hosted ? "Demo" : "Local"}</span>
      </button>
      <dialog
        ref={dialog}
        className="claude-chat"
        aria-labelledby="claude-chat-title"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClose={() => setOpen(false)}
      >
        <div className="chat-shell">
          <header className="chat-head">
            <div className="chat-symbol">
              <ChatCircle size={25} />
            </div>
            <div>
              <h2 id="claude-chat-title">A second perspective.</h2>
              <p>{hosted ? "Claude · Your client in context" : "Claude · Running on your Mac"}</p>
            </div>
            <button
              className="icon-btn"
              aria-label={`Close ${provider} chat`}
              onClick={close}
            >
              <X size={22} />
            </button>
          </header>
          <div className="chat-context">
            <label htmlFor="chat-client">In context</label>
            <select
              id="chat-client"
              value={selected}
              disabled={busy}
              onChange={(e) => {
                setSelected(e.target.value);
                setDraft("");
                setError("");
                setCopied(-1);
              }}
            >
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
            <button
              className="icon-btn"
              aria-label="Start a new chat"
              disabled={busy || !messages.length}
              onClick={() => {
                setThreads((all) => ({ ...all, [selected]: [] }));
                setError("");
                setDraft("");
                input.current?.focus();
              }}
            >
              <ArrowCounterClockwise size={19} />
            </button>
          </div>
          <div
            ref={scroll}
            className="chat-scroll"
            role="log"
            aria-label={`Conversation with ${provider}`}
            aria-live="polite"
            aria-relevant="additions text"
          >
            {!messages.length && !busy && (
              <div className="chat-welcome">
                <span className="chat-kicker">Context before action</span>
                <h3>
                  What would you like
                  <br />
                  to think through?
                </h3>
                <p>
                  Ask about the conversation, prepare for the next call, or find
                  the words for a follow-up. Uses this client’s recent meetings, calendar entries and tasks; long notes may be excerpted.
                </p>
                <div className="chat-suggestions">
                  {[
                    "What do we know, and what is still unclear?",
                    "What should I ask on the next call?",
                    "Draft a short follow-up for me.",
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => {
                        setDraft(q);
                        input.current?.focus();
                      }}
                    >
                      {q}
                      <ArrowUp size={16} />
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m, i) => (
              <article className={"chat-message " + m.role} key={i}>
                <div className="chat-message-label">
                  {m.role === "user" ? "You" : provider}
                  {m.role === "assistant" && (
                    <button
                      className="icon-btn"
                      aria-label={"Copy answer " + Math.ceil((i + 1) / 2)}
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(m.content);
                          setCopied(i);
                        } catch {
                          setError(
                            "Copy was unavailable. You can select the answer text.",
                          );
                        }
                      }}
                    >
                      {copied === i ? <span>Copied</span> : <Copy size={16} />}
                    </button>
                  )}
                </div>
                <p>{m.content}</p>
              </article>
            ))}
            {busy && (
              <>
                <article className="chat-message user">
                  <div className="chat-message-label">You</div>
                  <p>{pending}</p>
                </article>
                <div className="chat-thinking" role="status">
                  <span />
                  Reading the client context…
                </div>
              </>
            )}
            <div ref={end} />
          </div>
          <form
            className="chat-composer"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            {error && (
              <p className="chat-error" role="alert">
                {error}
              </p>
            )}
            {hosted && (
              <div className="chat-access">
                {accessOpen ? (
                  <>
                    <label htmlFor="chat-access-code">Course chat access code</label>
                    <input id="chat-access-code" type="password" value={accessCode} autoComplete="off" maxLength={128} disabled={busy} placeholder="Enter the code from your host" onChange={(e) => setAccessCode(e.target.value)} />
                    <p>The code stays in this tab and clears when you reload.</p>
                  </>
                ) : <button type="button" onClick={() => setAccessOpen(true)}>Chat access connected · Change code</button>}
              </div>
            )}
            <label className="sr-only" htmlFor="chat-question">
              Ask {provider} about this client
            </label>
            <div className="chat-input">
              <textarea
                ref={input}
                id="chat-question"
                value={draft}
                maxLength={2000}
                disabled={busy}
                placeholder="Ask about this client…"
                rows={2}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey &&
                    !e.nativeEvent.isComposing
                  ) {
                    e.preventDefault();
                    void send();
                  }
                }}
              />
              {busy ? (
                <button
                  type="button"
                  className="chat-send"
                  key="stop-reply"
                  aria-label="Stop reply"
                  onClick={() => controller.current?.abort()}
                >
                  <Stop size={17} weight="fill" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="chat-send"
                  key="send-question"
                  aria-label={`Send to ${provider}`}
                  disabled={!draft.trim() || (hosted && !accessCode.trim())}
                >
                  <ArrowUp size={21} />
                </button>
              )}
            </div>
            <p className="chat-footnote">
              {hosted ? "Uses the connected Claude account. " : "Uses your Claude plan’s allowance. "}Drafts only; nothing is saved or sent to your client.
            </p>
          </form>
        </div>
      </dialog>
    </>
  );
}
