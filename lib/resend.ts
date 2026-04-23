import "server-only";
import { Resend } from "resend";

let cached: Resend | null = null;

export function getResend() {
  if (cached) return cached;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("Missing RESEND_API_KEY");
  cached = new Resend(key);
  return cached;
}

export function getFromAddress() {
  return process.env.EMAIL_FROM ?? "Atria <noreply@atria.build>";
}
