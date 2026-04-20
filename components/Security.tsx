import DottedMap from "dotted-map";
import { Activity, MapPin, Shield, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

function Cell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("p-8 md:p-10", className)}>{children}</div>;
}

function Eyebrow({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="mb-6 space-y-3">
      <div className="flex items-center gap-2">
        <Icon className="size-4 text-amber-400" />
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>
      <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm leading-relaxed text-white/60">
        {body}
      </p>
    </div>
  );
}

function RegionMap() {
  const map = new DottedMap({ height: 40, grid: "diagonal" });
  const svg = map.getSVG({
    radius: 0.22,
    color: "#ffffff26",
    shape: "circle",
    backgroundColor: "transparent",
  });
  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  return (
    <div className="relative h-40 overflow-hidden rounded-lg border border-white/10 bg-black/30">
      <img
        src={dataUri}
        alt=""
        aria-hidden
        className="h-full w-full object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/60" />
      <div className="absolute left-[22%] top-[44%] -translate-x-1/2 -translate-y-1/2">
        <span className="relative flex size-3">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-400 opacity-60" />
          <span className="relative inline-flex size-3 rounded-full bg-amber-500 ring-2 ring-amber-300/40" />
        </span>
      </div>
      <div className="absolute bottom-3 left-4 font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/70">
        us-east-2 · primary region
      </div>
    </div>
  );
}

function AccessLog() {
  return (
    <div className="space-y-2 font-[family-name:var(--font-jetbrains-mono)] text-xs">
      <div className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2">
        <div className="text-white/40">2:14 PM · REQUEST</div>
        <div className="mt-1 text-white/85">
          M. Alvarez requested access to{" "}
          <span className="text-amber-300">parcel-9</span>
        </div>
      </div>
      <div className="ml-6 rounded-lg border border-amber-400/30 bg-amber-500/[0.06] px-3 py-2">
        <div className="text-amber-300/80">2:14 PM · GRANTED</div>
        <div className="mt-1 text-white/85">
          Scoped to <span className="text-amber-300">view + comment</span>.
          Logged.
        </div>
      </div>
      <div className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2">
        <div className="text-white/40">2:41 PM · BLOCKED</div>
        <div className="mt-1 text-white/85">
          Cross-deal read on{" "}
          <span className="text-white/50 line-through">parcel-3</span> — denied
          by tenant policy
        </div>
      </div>
    </div>
  );
}

const AUDIT_POINTS = [12, 18, 14, 22, 28, 24, 34, 42, 38, 48, 56, 52, 64];
const EXPORT_POINTS = [2, 3, 3, 5, 4, 6, 8, 7, 9, 11, 10, 13, 15];

function AuditChart() {
  const width = 640;
  const height = 120;
  const max = Math.max(...AUDIT_POINTS) * 1.15;
  const step = width / (AUDIT_POINTS.length - 1);

  const toPath = (pts: number[]) => {
    const coords = pts.map((v, i) => {
      const x = i * step;
      const y = height - (v / max) * height;
      return `${x},${y}`;
    });
    return `M0,${height} L${coords.join(" L")} L${width},${height} Z`;
  };

  const toLine = (pts: number[]) =>
    pts
      .map((v, i) => {
        const x = i * step;
        const y = height - (v / max) * height;
        return `${i === 0 ? "M" : "L"}${x},${y}`;
      })
      .join(" ");

  return (
    <div className="relative mt-2">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-28 w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="audit-amber" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="audit-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={toPath(AUDIT_POINTS)} fill="url(#audit-amber)" />
        <path
          d={toLine(AUDIT_POINTS)}
          fill="none"
          stroke="#fbbf24"
          strokeWidth="1.5"
        />
        <path d={toPath(EXPORT_POINTS)} fill="url(#audit-sky)" />
        <path
          d={toLine(EXPORT_POINTS)}
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.5"
        />
      </svg>
      <div className="mt-3 flex items-center gap-5 font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/60">
        <span className="flex items-center gap-2">
          <span className="inline-block size-2 rounded-full bg-amber-400" />
          Views
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block size-2 rounded-full bg-sky-400" />
          Exports
        </span>
        <span className="ml-auto text-white/40">last 13 days</span>
      </div>
    </div>
  );
}

export default function Security() {
  return (
    <section id="security" className="bg-[#0f0f0f] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-widest text-amber-500">
            Security
          </p>
          <h2 className="text-balance text-3xl font-bold text-white md:text-5xl">
            Built for data your LPs ask about
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60 md:text-base">
            Deal-level isolation, regional residency, and a full audit trail —
            so the diligence question has a one-page answer.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/40 md:grid-cols-2 md:divide-x md:divide-y-0">
          <Cell>
            <Eyebrow
              icon={MapPin}
              title="Regional data residency"
              body="US-only hosting. Your site data, renders, and memos never leave the region you chose."
            />
            <RegionMap />
          </Cell>
          <Cell>
            <Eyebrow
              icon={Shield}
              title="Tenant isolation"
              body="Deal-level access control. Someone on one deal can't see another — and we can prove it."
            />
            <AccessLog />
          </Cell>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/40">
          <div className="relative flex items-center justify-center px-8 py-14 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(245,158,11,0.08),transparent_70%)]"
            />
            <div className="relative flex items-center gap-4 md:gap-6">
              <Zap className="size-8 text-amber-400 md:size-10" />
              <div>
                <div className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest text-amber-500/80">
                  Uptime
                </div>
                <div className="mt-1 text-2xl font-bold text-white md:text-4xl">
                  99.9% uptime, measured every minute
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/40 p-8 md:p-10">
          <Eyebrow
            icon={Activity}
            title="Audit trail"
            body="Every view, every export, every share. Logged, searchable, and exportable to your compliance tooling."
          />
          <AuditChart />
        </div>
      </div>
    </section>
  );
}
