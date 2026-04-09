"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Grab a few pictures or video",
      body: "Fly your drone, or snap a few pictures of your plot or patch of land. (Any land works, why limit your imagination?)",
    },
    {
      num: "2",
      title: "Describe your vision",
      body: "Chat with our AI architect. Tell it what you want — style, size, vibe. It asks the right questions.",
    },
    {
      num: "3",
      title: "See it in 3D",
      body: "Your building appears on your actual lot. Walk around it. Share it. Export it to any major tool (ArchiCAD, Revit, Vectorworks or SketchUp) for your developer or contractor and get building.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#0f0f0f] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-amber-500">
          How It Works
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-5xl">
          Three steps from idea to 3D reality
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
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
          The $10,000 gap between your idea and reality
        </h2>
        <p className="mb-4 text-base text-white/60 leading-relaxed">
          You have a vision for your property. Maybe it&apos;s a backyard ADU, a home
          addition, or a complete renovation. But to see what it could actually
          look like, you&apos;d need to hire an architect —{" "}
          <strong className="text-white">
            $5,000 to $15,000 just for initial concept renderings.
          </strong>{" "}
          Most people never take that first step. The project stays in their head
          for years.
        </p>
        <p className="text-base text-white/60 leading-relaxed">
          Atria changes that. For a fraction of the cost, in minutes instead of
          weeks, you can see your build on your actual property before committing
          a dollar to construction.
        </p>
      </div>
    </section>
  );
}

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="bg-[#0f0f0f] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-500">
          Join the Waitlist
        </p>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Be the first to try Atria
        </h2>
        <p className="mb-8 text-base text-white/60">
          We&apos;re onboarding homeowners one by one. Grab your spot.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-8">
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-green-400">You&apos;re on the list!</span>
            </div>
            <p className="text-sm text-white/60">We&apos;ll email you at <strong className="text-white">{email}</strong> when your spot opens up.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-amber-500 text-black hover:bg-amber-400 font-semibold"
            >
              Get Early Access
            </Button>
          </form>
        )}
        <p className="mt-4 text-xs text-white/30">No spam. We&apos;ll email you when it&apos;s ready.</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-8 px-6 text-center">
      <p className="text-sm font-semibold text-white">Atria.</p>
      <p className="mt-1 text-xs text-white/30">
        See your dream build before you spend a dime.
      </p>
      <p className="mt-3 text-xs text-white/20">
        © {new Date().getFullYear()} Atria. All rights reserved.
      </p>
    </footer>
  );
}
