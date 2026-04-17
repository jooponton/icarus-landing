"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/pilot";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push(next);
      router.refresh();
    }
  };

  const handleOAuth = async (provider: "google" | "azure") => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${next}`,
      },
    });
    if (error) setError(error.message);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4">
      <div className="liquid-glass w-full max-w-md rounded-2xl p-8">
        <div className="mb-8 flex justify-center">
          <Logo variant="lockup" className="text-2xl" iconSize={24} />
        </div>

        <h1 className="mb-6 text-center text-2xl font-bold text-white">
          Sign in to Atria
        </h1>

        {error && (
          <p className="mb-4 rounded-lg bg-red-500/10 px-4 py-2 font-[family-name:var(--font-jetbrains-mono)] text-sm text-red-400">
            {error}
          </p>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-4">
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
          <div>
            <label htmlFor="password" className="mb-1 block font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium uppercase tracking-widest text-white/40">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="liquid-btn-amber w-full font-semibold"
            size="lg"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
          <div className="text-right">
            <Link href="/forgot-password" className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/40 hover:text-amber-500">
              Forgot password?
            </Link>
          </div>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/30">or continue with</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => handleOAuth("google")}
            className="liquid-btn flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button
            onClick={() => handleOAuth("azure")}
            className="liquid-btn flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm"
          >
            <svg className="h-4 w-4" viewBox="0 0 21 21">
              <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
              <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
              <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
              <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
            </svg>
            Microsoft
          </button>
        </div>

        <p className="mt-6 text-center font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/40">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-amber-500 hover:text-amber-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
