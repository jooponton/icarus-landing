"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export default function AuthNav() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loaded, setLoaded] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoaded(true);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/">
          <Logo variant="lockup" className="text-xl" iconSize={20} />
        </Link>

        <div className="flex items-center gap-4">
          {loaded && !user && (
            <>
              <Link
                href="/login"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="liquid-btn-amber rounded-full px-5 py-2 text-sm font-semibold"
              >
                Sign Up
              </Link>
            </>
          )}
          {loaded && user && (
            <>
              <Link
                href="/pilot"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Pilot
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Log out
              </button>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-black">
                {(user.user_metadata?.full_name?.[0] || user.email?.[0] || "?").toUpperCase()}
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
