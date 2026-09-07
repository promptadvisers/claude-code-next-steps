import { createHash, timingSafeEqual } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
export const digest = (value: string) => createHash("sha256").update(value).digest("hex");
export function secretMatches(value: string, expected: string) {
  return Boolean(value && expected) && timingSafeEqual(Buffer.from(digest(value)), Buffer.from(digest(expected)));
}
export class LimitError extends Error { status = 429; }
export class Quotas {
  private db: DatabaseSync;
  constructor(file: string) {
    this.db = new DatabaseSync(file);
    this.db.exec("PRAGMA journal_mode=WAL; CREATE TABLE IF NOT EXISTS limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires INTEGER NOT NULL)");
  }
  take(key: string, max: number, seconds: number, now = Date.now()) {
    const window = Math.floor(now / (seconds * 1000));
    const id = `${key}:${window}`;
    this.db.prepare("DELETE FROM limits WHERE expires < ?").run(now);
    const row = this.db.prepare("INSERT INTO limits(key,count,expires) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET count=count+1 RETURNING count").get(id, (window + 1) * seconds * 1000) as { count: number };
    if (row.count > max) throw new LimitError("This demo’s chat allowance is used for now. Please try again later.");
  }
  close() { this.db.close(); }
}
