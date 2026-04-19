import Logo from "@/components/Logo";

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
        <p className="mb-3 text-center font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-widest text-amber-500">
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
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60 leading-relaxed">{s.body}</p>
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
        <p className="mb-4 font-[family-name:var(--font-jetbrains-mono)] text-base text-white/60 leading-relaxed">
          Your acquisitions team evaluates 5–10 sites for every deal that closes. Custom feasibility renders run{" "}
          <strong className="text-white">
            $15,000 to $50,000 per site and take 3–6 weeks
          </strong>{" "}
          — so you run them only after you&apos;ve already committed capital, one option at a time, never on the long tail of your portfolio where the real repositioning upside is hiding.
        </p>
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-base text-white/60 leading-relaxed">
          Atria compresses that loop. Photorealistic, zoning-aware feasibility for any candidate site in under a day, for a fraction of the cost. Screen the whole pipeline. Walk into IC with multiple options and an envelope check that&apos;s already been run.
        </p>
      </div>
    </section>
  );
}

export function Waitlist() {
  return (
    <section id="waitlist" className="bg-[#0f0f0f] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-500">
          3 of 25 Beta Spots Open for Early Access
        </p>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Let&apos;s get you in.
        </h2>
        <p className="mb-8 font-[family-name:var(--font-jetbrains-mono)] text-base text-white/60">
          Currently in discovery with retail REIT redevelopment teams and merchant builder multifamily developers. Create an account, tell us about your pipeline, and we&apos;ll schedule a 30-minute conversation — no pitch, no demo theater.
        </p>

        <a
          href="/signup"
          className="liquid-btn-amber inline-block rounded-full px-8 py-3 text-sm font-semibold tracking-wide"
        >
          Request Beta Access →
        </a>

        <p className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/30">No spam. Quick call, no pitch.</p>
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
      <p className="mt-2 font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/30">
        From drone to deal memo. In a week, not a quarter.
      </p>
      <div className="mt-4 flex justify-center gap-5 font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/40">
        <a href="/privacy" className="hover:text-amber-500">Privacy</a>
        <a href="/terms" className="hover:text-amber-500">Terms</a>
      </div>
      <p className="mt-3 font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/20">
        © {new Date().getFullYear()} Atria. All rights reserved.
      </p>
    </footer>
  );
}
