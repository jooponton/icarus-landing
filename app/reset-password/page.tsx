"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
    } else {
      setDone(true);
      setTimeout(() => {
        router.push("/pilot");
        router.refresh();
      }, 2000);
    }
    setLoading(false);
  };

  if (done) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4">
        <div className="liquid-glass-amber w-full max-w-md rounded-2xl p-8 text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-semibold text-green-400">Password updated</span>
          </div>
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60">Redirecting you now...</p>
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
          Set a new password
        </h1>
        <p className="mb-6 text-center font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/40">
          Enter your new password below.
        </p>

        {error && (
          <p className="mb-4 rounded-lg bg-red-500/10 px-4 py-2 font-[family-name:var(--font-jetbrains-mono)] text-sm text-red-400">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="mb-1 block font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium uppercase tracking-widest text-white/40">
              New password
            </label>
            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 6 characters"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
            />
          </div>
          <div>
            <label htmlFor="confirm" className="mb-1 block font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium uppercase tracking-widest text-white/40">
              Confirm password
            </label>
            <input
              id="confirm"
              type="password"
              required
              minLength={6}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Re-enter password"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="liquid-btn-amber w-full font-semibold"
            size="lg"
          >
            {loading ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </div>
    </div>
  );
}
