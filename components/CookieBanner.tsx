"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "atria-cookie-consent";

type Consent = "accepted" | "declined";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== "accepted" && stored !== "declined") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {}
    if (value === "accepted") {
      const loader = (window as unknown as { __atriaLoadApollo?: () => void })
        .__atriaLoadApollo;
      if (typeof loader === "function") loader();
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 sm:pb-6">
      <div
        role="dialog"
        aria-live="polite"
        aria-label="Cookie preferences"
        className="liquid-glass pointer-events-auto w-full max-w-3xl rounded-2xl border border-white/15 bg-[#0f0f0f]/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="text-sm text-white/70">
            <p>
              We use cookies to keep you signed in and to understand how the site is used. See our{" "}
              <Link href="/cookies" className="text-amber-500 hover:text-amber-400">
                cookie policy
              </Link>{" "}
              for details.
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center gap-2 sm:justify-end">
            <button
              type="button"
              onClick={() => choose("declined")}
              className="liquid-btn rounded-full px-5 py-2 text-sm tracking-wide"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="liquid-btn-amber rounded-full px-5 py-2 text-sm font-semibold tracking-wide"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
