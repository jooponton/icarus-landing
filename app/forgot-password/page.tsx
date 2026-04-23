"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { sendPasswordResetEmail } from "./actions";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await sendPasswordResetEmail(email);

    if (!result.ok) {
      setError(result.error);
    } else {
      setSent(true);
    }
    setLoading(false);
  };

  if (sent) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4">
        <div className="liquid-glass-amber w-full max-w-md rounded-2xl p-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-semibold text-green-400">Check your email</span>
          </div>
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60">
            We sent a password reset link to{" "}
            <strong className="text-white">{email}</strong>. Click it to set a
            new password.
          </p>
          <Link
            href="/login"
            className="mt-4 inline-block text-sm text-amber-500 hover:text-amber-400"
          >
            Back to sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4">
      <div className="liquid-glass w-full max-w-md rounded-2xl p-8">
        <div className="mb-8 flex justify-center">
          <Logo variant="lockup" className="text-2xl" iconSize={24} />
        </div>

        <h1 className="mb-2 text-center text-2xl font-bold text-white">
          Reset your password
        </h1>
        <p className="mb-6 text-center font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/40">
          Enter your email and we&apos;ll send you a link to reset your password.
        </p>

        {error && (
          <p className="mb-4 rounded-lg bg-red-500/10 px-4 py-2 font-[family-name:var(--font-jetbrains-mono)] text-sm text-red-400">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium uppercase tracking-widest text-white/40">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourfirm.com"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="liquid-btn-amber w-full font-semibold"
            size="lg"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>

        <p className="mt-6 text-center font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/40">
          <Link href="/login" className="text-amber-500 hover:text-amber-400">
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
