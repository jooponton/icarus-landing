import { ArrowUpRight, FileDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const MESCHAC_AVATAR = "https://avatars.githubusercontent.com/u/47919550?v=4";
const BERNARD_AVATAR = "https://avatars.githubusercontent.com/u/31113941?v=4";
const THEO_AVATAR = "https://avatars.githubusercontent.com/u/68236786?v=4";
const GLODIE_AVATAR = "https://avatars.githubusercontent.com/u/99137927?v=4";

type Deal = {
  id: number;
  date: string;
  status: "Cleared" | "Pending" | "Blocked";
  statusVariant: "success" | "warning" | "danger";
  parcel: string;
  lead: { name: string; avatar: string };
  value: string;
};

const DEALS: Deal[] = [
  {
    id: 1,
    date: "03/18/2026",
    status: "Cleared",
    statusVariant: "success",
    parcel: "1432 Alameda Ave",
    lead: { name: "M. Alvarez", avatar: MESCHAC_AVATAR },
    value: "$24.2M",
  },
  {
    id: 2,
    date: "03/14/2026",
    status: "Pending",
    statusVariant: "warning",
    parcel: "Cooper & 3rd",
    lead: { name: "B. Ngandu", avatar: BERNARD_AVATAR },
    value: "$18.8M",
  },
  {
    id: 3,
    date: "03/09/2026",
    status: "Cleared",
    statusVariant: "success",
    parcel: "Northgate Lot 12",
    lead: { name: "G. Lukose", avatar: GLODIE_AVATAR },
    value: "$41.0M",
  },
  {
    id: 4,
    date: "03/02/2026",
    status: "Blocked",
    statusVariant: "danger",
    parcel: "Riverside Lot 9",
    lead: { name: "T. Balick", avatar: THEO_AVATAR },
    value: "$12.4M",
  },
];

function StatusBadge({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "success" | "warning" | "danger";
}) {
  const styles = {
    success: "bg-emerald-500/10 text-emerald-300 ring-emerald-400/20",
    warning: "bg-amber-500/10 text-amber-300 ring-amber-400/25",
    danger: "bg-rose-500/10 text-rose-300 ring-rose-400/20",
  }[variant];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium ring-1 ring-inset",
        styles
      )}
    >
      {children}
    </span>
  );
}

function DealTableCard() {
  return (
    <section
      aria-label="Deal queue"
      className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] shadow-xl shadow-black/40"
    >
      <div className="space-y-2 border-b border-white/10 p-6">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/15" />
        </div>
        <h3 className="text-lg font-semibold leading-none tracking-tight text-white">
          Deal queue
        </h3>
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/55">
          Acquisition targets by underwriting status · last 30 days
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead className="sticky top-0 z-10 bg-white/[0.03] backdrop-blur supports-[backdrop-filter]:bg-white/[0.03]">
            <tr className="text-white/50 *:px-3 *:py-3 *:text-left *:font-[family-name:var(--font-jetbrains-mono)] *:text-xs *:font-medium *:uppercase *:tracking-wider">
              <th className="w-12">#</th>
              <th className="min-w-[120px]">Added</th>
              <th className="min-w-[120px]">Status</th>
              <th className="min-w-[200px]">Parcel</th>
              <th className="min-w-[160px]">Lead</th>
              <th className="min-w-[120px] pr-4 text-right">Value</th>
            </tr>
          </thead>
          <tbody>
            {DEALS.map((deal, idx) => (
              <tr
                key={deal.id}
                className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/[0.02] *:px-3 *:py-3"
              >
                <td className="font-[family-name:var(--font-jetbrains-mono)] text-white/40">
                  {idx + 1}
                </td>
                <td className="whitespace-nowrap font-[family-name:var(--font-jetbrains-mono)] text-white/70">
                  {deal.date}
                </td>
                <td>
                  <StatusBadge variant={deal.statusVariant}>
                    {deal.status}
                  </StatusBadge>
                </td>
                <td className="font-medium text-white">{deal.parcel}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="size-7 overflow-hidden rounded-full ring-1 ring-white/10">
                      <img
                        src={deal.lead.avatar}
                        alt={deal.lead.name}
                        width={28}
                        height={28}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="truncate font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/80">
                      {deal.lead.name}
                    </span>
                  </div>
                </td>
                <td className="pr-4 text-right font-[family-name:var(--font-jetbrains-mono)] font-medium tabular-nums text-white">
                  {deal.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 p-4 font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/50">
        <span>
          Showing <strong className="text-white/75">4</strong> of 27 active
        </span>
        <span>Updated 2m ago</span>
      </div>
    </section>
  );
}

const SPARKLINE = [14, 18, 16, 22, 20, 28, 26, 33, 31, 38, 42, 40, 48, 52];

function CompsIllustration() {
  const width = 360;
  const height = 80;
  const max = Math.max(...SPARKLINE) * 1.15;
  const step = width / (SPARKLINE.length - 1);

  const line = SPARKLINE.map((v, i) => {
    const x = i * step;
    const y = height - (v / max) * height;
    return `${i === 0 ? "M" : "L"}${x},${y}`;
  }).join(" ");

  const area = `${line} L${width},${height} L0,${height} Z`;

  return (
    <div className="space-y-3 rounded-xl border border-white/10 bg-[#0d0d0d] p-4">
      <div className="flex items-center justify-between">
        <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/55">
          Comp set · $/SF · TTM
        </span>
        <span className="inline-flex items-center gap-1 font-[family-name:var(--font-jetbrains-mono)] text-xs text-amber-300">
          <ArrowUpRight className="size-3" />
          +12.4%
        </span>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-20 w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="comps-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#comps-fill)" />
        <path d={line} fill="none" stroke="#fbbf24" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function ProFormaIllustration() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/55">
          parcel-9 · pro-forma.pdf
        </span>
        <FileDown className="size-4 text-amber-400" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-white/[0.03] p-3">
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-wider text-white/45">
            Units
          </div>
          <div className="mt-1 text-xl font-semibold text-white tabular-nums">
            280
          </div>
        </div>
        <div className="rounded-lg bg-white/[0.03] p-3">
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-wider text-white/45">
            Yield-on-cost
          </div>
          <div className="mt-1 text-xl font-semibold text-white tabular-nums">
            6.8%
          </div>
        </div>
        <div className="rounded-lg bg-white/[0.03] p-3">
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-wider text-white/45">
            TDC
          </div>
          <div className="mt-1 text-xl font-semibold text-white tabular-nums">
            $94.2M
          </div>
        </div>
        <div className="rounded-lg bg-amber-500/10 p-3 ring-1 ring-inset ring-amber-400/25">
          <div className="font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-wider text-amber-300/80">
            IRR · untrended
          </div>
          <div className="mt-1 text-xl font-semibold text-amber-200 tabular-nums">
            16.4%
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pipeline() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-24 md:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-3 font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-widest text-amber-500">
          The deal queue
        </p>
        <h2 className="text-balance text-3xl font-bold text-white md:text-5xl">
          Every parcel, every status, on one page
        </h2>
        <p className="mb-12 mt-4 max-w-2xl text-balance font-[family-name:var(--font-jetbrains-mono)] text-base leading-relaxed text-white/60">
          Atria keeps the acquisition queue honest. No spreadsheets lost in
          email, no comps out of date, no review running on stale numbers.
        </p>

        <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-4 sm:p-6">
          <DealTableCard />
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="size-4 text-amber-400" />
              <h3 className="text-xl font-semibold text-white">
                Comps that keep up with the market
              </h3>
            </div>
            <p className="mb-6 font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60">
              Live rent and sale comps for every parcel in your queue. The
              underwriting updates when the market does.
            </p>
            <CompsIllustration />
          </div>
          <div>
            <div className="mb-4 flex items-center gap-2">
              <FileDown className="size-4 text-amber-400" />
              <h3 className="text-xl font-semibold text-white">
                Pro-forma export in one click
              </h3>
            </div>
            <p className="mb-6 font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60">
              Board-ready pro-forma straight from the canvas. Numbers, assumptions,
              and the massing they came from, all stamped with a version.
            </p>
            <ProFormaIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
