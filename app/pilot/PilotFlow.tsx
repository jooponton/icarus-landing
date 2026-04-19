"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

type StepId = "you" | "firm" | "pipeline" | "needs";
const STEPS: { id: StepId; label: string }[] = [
  { id: "you", label: "You" },
  { id: "firm", label: "Firm" },
  { id: "pipeline", label: "Pipeline" },
  { id: "needs", label: "Needs" },
];

const ROLES = [
  "Development",
  "Redevelopment",
  "Acquisitions",
  "Investment Committee",
  "Entitlements",
  "BIM / AOR",
  "Design",
  "Product",
  "Architectural",
  "Structural",
  "Other",
];

const FIRM_TYPES = [
  { value: "Retail REIT / shopping center owner", hint: "Kimco, Brixmor, Regency" },
  { value: "Merchant builder multifamily", hint: "Mill Creek, Alliance, Wood Partners" },
  { value: "Office-to-residential converter", hint: "Class-B repositioning" },
  { value: "Mixed-use developer", hint: "Ground-floor retail + residential" },
  { value: "Residential builder / single-family", hint: "D.R. Horton, Lennar, Pulte" },
  { value: "Agricultural", hint: "Farmland, ag-industrial, cold storage" },
  { value: "Data center / compute", hint: "Hyperscale, colocation, edge" },
  { value: "Medical", hint: "MOB, hospital campus, outpatient" },
  { value: "Heavy industry / refinery", hint: "Petrochemical, energy, utilities" },
  { value: "Manufacturing and distribution", hint: "Plants, fulfillment, last-mile" },
  { value: "Resorts or hospitality", hint: "Hotels, resorts, branded residences" },
  { value: "Warehouse and building districts", hint: "Industrial parks, flex campuses" },
  { value: "Real estate private equity", hint: "Opportunistic, value-add, core-plus funds" },
  { value: "Real estate lending", hint: "Debt funds, bridge, construction lenders" },
  { value: "Brokerage", hint: "Investment sales, capital markets, advisory" },
  { value: "Other", hint: "Tell us in the next step" },
];

const PROJECTS_PER_YEAR = ["Under 5", "5–20", "20–50", "50+"];
const SITES_PER_DEAL = ["1–3", "4–10", "10+"];
const FEASIBILITY_SPEND = ["Under $10K", "$10K–$25K", "$25K–$50K", "$50K+"];
const TIMELINE = ["This month", "Next quarter", "Next 6 months", "Just exploring"];

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-white/30 outline-none transition-colors focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-widest text-white/50";

function TileGroup<T extends string>({
  options,
  value,
  onChange,
  columns = 2,
}: {
  options: readonly T[] | readonly { value: T; hint?: string }[];
  value: T | "";
  onChange: (v: T) => void;
  columns?: 1 | 2 | 3 | 4;
}) {
  const colClass = { 1: "grid-cols-1", 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-2 md:grid-cols-4" }[columns];
  return (
    <div className={`grid gap-2 ${colClass}`}>
      {options.map((opt) => {
        const v = typeof opt === "string" ? opt : opt.value;
        const hint = typeof opt === "string" ? undefined : opt.hint;
        const selected = value === v;
        return (
          <button
            key={v}
            type="button"
            onClick={() => onChange(v)}
            className={`rounded-lg border px-4 py-3 text-left text-sm transition-all ${
              selected
                ? "border-amber-500/60 bg-amber-500/10 text-white shadow-[0_0_0_1px_rgba(245,158,11,0.3),0_0_24px_-6px_rgba(245,158,11,0.5)]"
                : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            }`}
          >
            <div className="font-medium">{v}</div>
            {hint && <div className="mt-0.5 text-xs text-white/40">{hint}</div>}
          </button>
        );
      })}
    </div>
  );
}

export default function PilotFlow({
  defaultEmail,
  defaultName,
  userId,
}: {
  defaultEmail: string;
  defaultName: string;
  userId: string;
}) {
  const [stepIdx, setStepIdx] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [fullName, setFullName] = useState(defaultName);
  const [role, setRole] = useState("");
  const [roleOther, setRoleOther] = useState("");
  const [firm, setFirm] = useState("");
  const [firmType, setFirmType] = useState("");
  const [projectsPerYear, setProjectsPerYear] = useState("");
  const [sitesPerDeal, setSitesPerDeal] = useState("");
  const [feasibilitySpend, setFeasibilitySpend] = useState("");
  const [timeline, setTimeline] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [liveSite, setLiveSite] = useState("");

  const currentStep = STEPS[stepIdx].id;

  const roleValid = role && (role !== "Other" || roleOther.trim().length > 0);

  const canContinue =
    (currentStep === "you" && fullName.trim() && roleValid && firm.trim()) ||
    (currentStep === "firm" && firmType) ||
    (currentStep === "pipeline" && projectsPerYear && sitesPerDeal && feasibilitySpend && timeline) ||
    (currentStep === "needs" && bottleneck.trim().length > 0);

  const goNext = () => {
    if (!canContinue) return;
    if (stepIdx < STEPS.length - 1) setStepIdx(stepIdx + 1);
    else handleSubmit();
  };
  const goBack = () => stepIdx > 0 && setStepIdx(stepIdx - 1);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error: err } = await supabase.from("pilot_submissions").insert({
      user_id: userId,
      full_name: fullName,
      work_email: defaultEmail,
      firm,
      role,
      role_other: role === "Other" ? roleOther.trim() : null,
      firm_type: firmType,
      projects_per_year: projectsPerYear,
      sites_per_deal: sitesPerDeal,
      feasibility_spend: feasibilitySpend,
      timeline,
      live_site: liveSite.trim() || null,
      bottleneck: bottleneck.trim(),
    });

    if (err) {
      setError(err.message);
      setLoading(false);
      return;
    }

    await supabase.auth.updateUser({
      data: {
        pilot_submitted: true,
        full_name: fullName,
        firm,
        role: role === "Other" ? `Other: ${roleOther.trim()}` : role,
        firm_type: firmType,
      },
    });
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return <SuccessCard email={defaultEmail} name={fullName} />;
  }

  return (
    <div className="w-full">
      <ProgressDots current={stepIdx} total={STEPS.length} />

      <div className="liquid-glass mt-6 rounded-2xl p-6 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {currentStep === "you" && (
              <StepYou
                email={defaultEmail}
                fullName={fullName}
                setFullName={setFullName}
                role={role}
                setRole={setRole}
                roleOther={roleOther}
                setRoleOther={setRoleOther}
                firm={firm}
                setFirm={setFirm}
              />
            )}
            {currentStep === "firm" && (
              <StepFirm firmType={firmType} setFirmType={setFirmType} />
            )}
            {currentStep === "pipeline" && (
              <StepPipeline
                projectsPerYear={projectsPerYear}
                setProjectsPerYear={setProjectsPerYear}
                sitesPerDeal={sitesPerDeal}
                setSitesPerDeal={setSitesPerDeal}
                feasibilitySpend={feasibilitySpend}
                setFeasibilitySpend={setFeasibilitySpend}
                timeline={timeline}
                setTimeline={setTimeline}
              />
            )}
            {currentStep === "needs" && (
              <StepNeeds
                bottleneck={bottleneck}
                setBottleneck={setBottleneck}
                liveSite={liveSite}
                setLiveSite={setLiveSite}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {error && (
          <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">
            {error}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={stepIdx === 0}
            className="text-sm text-white/40 transition-colors hover:text-white/70 disabled:invisible"
          >
            ← Back
          </button>
          <Button
            type="button"
            onClick={goNext}
            disabled={!canContinue || loading}
            size="lg"
            className="liquid-btn-amber min-w-40 font-semibold"
          >
            {loading
              ? "Submitting..."
              : stepIdx === STEPS.length - 1
              ? "Submit"
              : "Continue →"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProgressDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i === current;
        const isDone = i < current;
        return (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              isActive
                ? "w-8 bg-amber-500"
                : isDone
                ? "w-1.5 bg-amber-500/50"
                : "w-1.5 bg-white/15"
            }`}
          />
        );
      })}
    </div>
  );
}

function StepHeading({ title, hint }: { title: React.ReactNode; hint: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
      <p className="mt-2 text-sm text-white/50">{hint}</p>
    </div>
  );
}

function StepYou({
  email,
  fullName,
  setFullName,
  role,
  setRole,
  roleOther,
  setRoleOther,
  firm,
  setFirm,
}: {
  email: string;
  fullName: string;
  setFullName: (v: string) => void;
  role: string;
  setRole: (v: string) => void;
  roleOther: string;
  setRoleOther: (v: string) => void;
  firm: string;
  setFirm: (v: string) => void;
}) {
  return (
    <>
      <StepHeading title="We need a little bit of info." hint={`Signed in as ${email}.`} />
      <div className="space-y-5">
        <div>
          <label htmlFor="fullName" className={labelClass}>Full name</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={inputClass}
            autoFocus
          />
        </div>
        <div>
          <label className={labelClass}>Your role</label>
          <TileGroup options={ROLES} value={role} onChange={setRole} columns={2} />
          {role === "Other" && (
            <input
              id="roleOther"
              type="text"
              value={roleOther}
              onChange={(e) => setRoleOther(e.target.value)}
              placeholder="Tell us your role"
              className={`${inputClass} mt-3`}
              autoFocus
            />
          )}
        </div>
        <div>
          <label htmlFor="firm" className={labelClass}>Firm</label>
          <input
            id="firm"
            type="text"
            value={firm}
            onChange={(e) => setFirm(e.target.value)}
            placeholder="Acme, Inc."
            className={inputClass}
          />
        </div>
      </div>
    </>
  );
}

function StepFirm({
  firmType,
  setFirmType,
}: {
  firmType: string;
  setFirmType: (v: string) => void;
}) {
  return (
    <>
      <StepHeading title="What kind of firm?" hint="This helps us tune many of the parameters our models will use for output." />
      <TileGroup options={FIRM_TYPES} value={firmType} onChange={setFirmType} columns={2} />
    </>
  );
}

function StepPipeline({
  projectsPerYear,
  setProjectsPerYear,
  sitesPerDeal,
  setSitesPerDeal,
  feasibilitySpend,
  setFeasibilitySpend,
  timeline,
  setTimeline,
}: {
  projectsPerYear: string;
  setProjectsPerYear: (v: string) => void;
  sitesPerDeal: string;
  setSitesPerDeal: (v: string) => void;
  feasibilitySpend: string;
  setFeasibilitySpend: (v: string) => void;
  timeline: string;
  setTimeline: (v: string) => void;
}) {
  return (
    <>
      <StepHeading
        title={
          <>
            How much do you{" "}
            <span className="font-[family-name:var(--font-instrument-serif)] italic font-normal">
              actually
            </span>{" "}
            build?
          </>
        }
        hint="Rough ranges are fine."
      />
      <div className="space-y-5">
        <div>
          <label className={labelClass}>Projects per year</label>
          <TileGroup options={PROJECTS_PER_YEAR} value={projectsPerYear} onChange={setProjectsPerYear} columns={4} />
        </div>
        <div>
          <label className={labelClass}>Sites screened per closed deal</label>
          <TileGroup options={SITES_PER_DEAL} value={sitesPerDeal} onChange={setSitesPerDeal} columns={3} />
        </div>
        <div>
          <label className={labelClass}>Feasibility / design / presentation spend per site</label>
          <TileGroup options={FEASIBILITY_SPEND} value={feasibilitySpend} onChange={setFeasibilitySpend} columns={4} />
        </div>
        <div>
          <label className={labelClass}>When do you need to present your next site study?</label>
          <TileGroup options={TIMELINE} value={timeline} onChange={setTimeline} columns={4} />
        </div>
      </div>
    </>
  );
}

function StepNeeds({
  bottleneck,
  setBottleneck,
  liveSite,
  setLiveSite,
}: {
  bottleneck: string;
  setBottleneck: (v: string) => void;
  liveSite: string;
  setLiveSite: (v: string) => void;
}) {
  return (
    <>
      <StepHeading title="What would you use us for?" hint="The more specific the better — we read every response." />
      <div className="space-y-5">
        <div>
          <label htmlFor="bottleneck" className={labelClass}>The biggest thing we could fix</label>
          <textarea
            id="bottleneck"
            value={bottleneck}
            onChange={(e) => setBottleneck(e.target.value)}
            maxLength={400}
            rows={4}
            placeholder="e.g. 'Our $30K concept renders take 4 weeks — we can't run them on the long tail of our pipeline.'"
            className={`${inputClass} resize-none`}
            autoFocus
          />
          <p className="mt-1 text-right text-xs text-white/25">
            {bottleneck.length}/400
          </p>
        </div>
        <div>
          <label htmlFor="liveSite" className={labelClass}>
            A specific site you&apos;d test us on <span className="text-white/30 normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="liveSite"
            type="text"
            value={liveSite}
            onChange={(e) => setLiveSite(e.target.value)}
            placeholder="Address, city, or 'pre-acquisition shopping center, DFW metro'"
            className={inputClass}
          />
        </div>
      </div>
    </>
  );
}

function SuccessCard({ email, name }: { email: string; name: string }) {
  const firstName = name.trim().split(/\s+/)[0] || "there";
  return (
    <div className="liquid-glass-amber rounded-2xl p-10 text-center">
      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        <span className="text-sm font-semibold text-green-400">Submitted</span>
      </div>
      <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
        Thanks, {firstName}.
      </h2>
      <p className="mx-auto max-w-md text-sm text-white/60">
        We&apos;ll reach out to{" "}
        <strong className="text-white">{email}</strong> soon to book a 30-minute
        conversation. No pitch.
      </p>
    </div>
  );
}
