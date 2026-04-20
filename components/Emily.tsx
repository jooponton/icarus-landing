import { ArrowUp, Globe, Plus, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type ResultItem = {
  mark: "✓" | "!";
  tone: "emerald" | "amber";
  label: string;
  meta: string;
};

const RESULTS: ResultItem[] = [
  { mark: "✓", tone: "emerald", label: "1432 Alameda", meta: "6.8% YoC · clears 85' overlay" },
  { mark: "✓", tone: "emerald", label: "Cooper & 3rd", meta: "6.2% YoC · clears 85' overlay" },
  { mark: "!", tone: "amber", label: "Northgate Lot 12", meta: "4.9% YoC · envelope fails" },
];

function EmilyChat() {
  return (
    <div className="relative space-y-5 rounded-2xl border border-white/10 bg-[#141414]/95 p-6 shadow-2xl shadow-black/60 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-600 text-xs font-semibold text-black">
            E
          </div>
          <span className="text-sm font-medium text-white">Emily</span>
        </div>
        <span className="rounded-full border border-amber-400/25 bg-amber-500/[0.06] px-2 py-0.5 font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-wider text-amber-300/90">
          claude-sonnet-4-6
        </span>
      </div>

      <div>
        <Sparkles className="size-3.5 fill-amber-300 stroke-amber-300" />
        <p className="mt-2 text-sm leading-relaxed text-white/90">
          Which parcels in my queue clear 6% yield-on-cost and fit the new
          height overlay?
        </p>
        <ul className="mt-4 space-y-2 font-[family-name:var(--font-jetbrains-mono)] text-sm">
          {RESULTS.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span
                className={cn(
                  "inline-flex size-4 items-center justify-center rounded-full text-[10px] font-bold",
                  item.tone === "emerald"
                    ? "bg-emerald-500/15 text-emerald-300"
                    : "bg-amber-500/15 text-amber-300"
                )}
              >
                {item.mark}
              </span>
              <span className="font-medium text-white">{item.label}</span>
              <span className="text-white/35">·</span>
              <span className="text-white/60">{item.meta}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="-mx-3 -mb-3 space-y-3 rounded-xl bg-white/5 p-3">
        <div className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/45">
          Ask Emily
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Attach"
              className="flex size-7 items-center justify-center rounded-2xl border border-white/10 text-white/70 hover:bg-white/5"
            >
              <Plus className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Search"
              className="flex size-7 items-center justify-center rounded-2xl border border-white/10 text-white/70 hover:bg-white/5"
            >
              <Globe className="size-4" />
            </button>
          </div>
          <button
            type="button"
            aria-label="Send"
            className="flex size-7 items-center justify-center rounded-2xl bg-amber-500 text-black"
          >
            <ArrowUp strokeWidth={3} className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Emily() {
  return (
    <section id="emily" className="bg-[#0a0a0a] px-6 py-24 md:px-12">
      <div className="mx-auto w-full max-w-3xl">
        <p className="mb-3 font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-widest text-amber-500">
          Meet Emily
        </p>
        <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
          <span className="text-white/50">
            Your deal team&apos;s new analyst,
          </span>{" "}
          powered by Claude Sonnet 4.6
        </h2>
        <p className="mt-6 max-w-2xl font-[family-name:var(--font-jetbrains-mono)] text-base text-white/60">
          Emily sits on top of your deal queue, your zoning data, and every
          render Mesa has ever made. Ask the question, get the answer — cited to
          the parcel, the policy, and the geometry.
        </p>

        <div className="mt-12 space-y-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(135deg,#1e1b4b_0%,#312e81_20%,#4c1d95_45%,#1e3a8a_72%,#0b1026_100%)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_15%_10%,rgba(168,85,247,0.55),transparent_65%)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_90%_20%,rgba(236,72,153,0.35),transparent_60%)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_85%_95%,rgba(34,211,238,0.3),transparent_60%)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_45%_50%_at_20%_95%,rgba(59,130,246,0.3),transparent_60%)]"
            />
            <div className="relative mx-auto max-w-md p-6 sm:p-12">
              <EmilyChat />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">
                Query any deal
              </h3>
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm leading-relaxed text-white/60">
                Ask the way you&apos;d ask a senior analyst. Emily pulls yields,
                comps, and zoning context straight from your live queue.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">
                Draft from the canvas
              </h3>
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm leading-relaxed text-white/60">
                Deal memo, pro-forma, and design narrative — generated from the
                geometry on screen, stamped with assumptions and version.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">
                Catch what you&apos;d miss
              </h3>
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm leading-relaxed text-white/60">
                Every zoning code update, every new comp within range. Emily
                flags the deal that just changed shape before the review does.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
