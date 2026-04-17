"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useState } from "react";

export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Fly the site",
      body: "Drone footage preferred; aerial imagery works for the first pass. Any candidate site in your redevelopment or acquisitions pipeline.",
    },
    {
      num: "2",
      title: "Describe the program",
      body: "Plain English: '280 units, 15K ground-floor retail, conforming to the current zoning envelope.' We check setbacks, FAR, and height limits as we generate.",
    },
    {
      num: "3",
      title: "Ship to IC",
      body: "Board-ready photorealistic overlay on the real site. Multiple design options, preliminary unit / SF / yield numbers, and clean CAD export your architect of record can pick up on day one.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#0f0f0f] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-amber-500">
          How It Works
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-5xl">
          Three steps from site to IC memo
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="liquid-glass glow-pulse-amber rounded-2xl p-8"
              style={{ animationDelay: `${i * 1.2}s` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-black">
                {s.num}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-500">
          The Problem We Solve
        </p>
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
          The $30K bottleneck between a site and an IC memo
        </h2>
        <p className="mb-4 text-base text-white/60 leading-relaxed">
          Your acquisitions team evaluates 5–10 sites for every deal that closes. Custom feasibility renders run{" "}
          <strong className="text-white">
            $15,000 to $50,000 per site and take 3–6 weeks
          </strong>{" "}
          — so you run them only after you&apos;ve already committed capital, one option at a time, never on the long tail of your portfolio where the real repositioning upside is hiding.
        </p>
        <p className="text-base text-white/60 leading-relaxed">
          Atria compresses that loop. Photorealistic, zoning-aware feasibility for any candidate site in under a day, for a fraction of the cost. Screen the whole pipeline. Walk into IC with multiple options and an envelope check that&apos;s already been run.
        </p>
      </div>
    </section>
  );
}

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="bg-[#0f0f0f] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-500">
          3 of 25 Beta Spots Open for Early Access
        </p>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Request a feasibility conversation
        </h2>
        <p className="mb-8 text-base text-white/60">
          Currently in discovery with retail REIT redevelopment teams and merchant builder multifamily developers. Drop your work email and we&apos;ll schedule a 30-minute conversation — no pitch, no demo theater.
        </p>

        {submitted ? (
          <div className="liquid-glass-amber rounded-2xl p-8">
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-green-400">We&apos;ll be in touch.</span>
            </div>
            <p className="text-sm text-white/60">We&apos;ll reach out to <strong className="text-white">{email}</strong> to book a 30-minute conversation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourfirm.com"
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
            />
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="liquid-btn-amber font-semibold"
            >
              {loading ? "Sending..." : "Request Conversation"}
            </Button>
          </form>
        )}
        {error && <p className="mt-3 text-xs text-red-400">{error}</p>}
        <p className="mt-4 text-xs text-white/30">No spam. 30 minutes, founder-led, no pitch.</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-8 px-6 text-center">
      <div className="flex justify-center">
        <Logo variant="lockup" className="text-2xl" iconSize={24} />
      </div>
      <p className="mt-2 text-xs text-white/30">
        From drone to deal memo. In a week, not a quarter.
      </p>
      <p className="mt-3 text-xs text-white/20">
        © {new Date().getFullYear()} Atria. All rights reserved.
      </p>
    </footer>
  );
}
