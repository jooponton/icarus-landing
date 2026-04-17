"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

const ROLES = [
  "VP Development",
  "SVP Redevelopment",
  "Head of Acquisitions",
  "CIO / Investment Committee",
  "Director of Entitlements",
  "BIM Director / AOR",
  "Other",
];

const FIRM_TYPES = [
  "Retail REIT / shopping center owner",
  "Merchant builder multifamily",
  "Office-to-residential converter",
  "Mixed-use developer",
  "Other",
];

const PROJECTS_PER_YEAR = ["Under 5", "5–20", "20–50", "50+"];
const SITES_PER_DEAL = ["1–3", "4–10", "10+"];

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30";

const selectClass =
  "w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30";

const labelClass =
  "mb-1 block font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium uppercase tracking-widest text-white/40";

export default function PilotForm({
  defaultEmail,
  defaultName,
  userId,
}: {
  defaultEmail: string;
  defaultName: string;
  userId: string;
}) {
  const [fullName, setFullName] = useState(defaultName);
  const [firm, setFirm] = useState("");
  const [role, setRole] = useState("");
  const [firmType, setFirmType] = useState("");
  const [projectsPerYear, setProjectsPerYear] = useState("");
  const [sitesPerDeal, setSitesPerDeal] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.from("pilot_submissions").insert({
      user_id: userId,
      full_name: fullName,
      work_email: defaultEmail,
      firm,
      role,
      firm_type: firmType,
      projects_per_year: projectsPerYear,
      sites_per_deal: sitesPerDeal,
      bottleneck: bottleneck || null,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSubmitted(true);
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="liquid-glass-amber rounded-2xl p-8 text-center">
        <div className="mb-2 flex items-center justify-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-semibold text-green-400">
            We&apos;ll be in touch.
          </span>
        </div>
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60">
          We&apos;ll reach out to{" "}
          <strong className="text-white">{defaultEmail}</strong> within 48 hours
          to book a 30-minute conversation. No pitch, just research.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="liquid-glass rounded-2xl p-8"
    >
      {error && (
        <p className="mb-4 rounded-lg bg-red-500/10 px-4 py-2 font-[family-name:var(--font-jetbrains-mono)] text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email
          </label>
          <input
            id="email"
            type="email"
            value={defaultEmail}
            readOnly
            className={`${inputClass} cursor-not-allowed opacity-60`}
          />
        </div>
        <div>
          <label htmlFor="firm" className={labelClass}>
            Firm
          </label>
          <input
            id="firm"
            type="text"
            required
            value={firm}
            onChange={(e) => setFirm(e.target.value)}
            placeholder="Brixmor, Mill Creek, etc."
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="role" className={labelClass}>
            Role
          </label>
          <select
            id="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={selectClass}
          >
            <option value="" disabled>
              Select your role
            </option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="firmType" className={labelClass}>
            Firm type
          </label>
          <select
            id="firmType"
            required
            value={firmType}
            onChange={(e) => setFirmType(e.target.value)}
            className={selectClass}
          >
            <option value="" disabled>
              Select firm type
            </option>
            {FIRM_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="projectsPerYear" className={labelClass}>
            Projects per year
          </label>
          <select
            id="projectsPerYear"
            value={projectsPerYear}
            onChange={(e) => setProjectsPerYear(e.target.value)}
            className={selectClass}
          >
            <option value="" disabled>
              Select range
            </option>
            {PROJECTS_PER_YEAR.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sitesPerDeal" className={labelClass}>
            Sites screened per closed deal
          </label>
          <select
            id="sitesPerDeal"
            value={sitesPerDeal}
            onChange={(e) => setSitesPerDeal(e.target.value)}
            className={selectClass}
          >
            <option value="" disabled>
              Select range
            </option>
            {SITES_PER_DEAL.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="bottleneck" className={labelClass}>
          What bottleneck would you most want to solve?
        </label>
        <textarea
          id="bottleneck"
          value={bottleneck}
          onChange={(e) => setBottleneck(e.target.value)}
          maxLength={300}
          rows={3}
          placeholder="Optional — 300 characters max"
          className={`${inputClass} resize-none`}
        />
        <p className="mt-1 text-right font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/20">
          {bottleneck.length}/300
        </p>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="liquid-btn-amber mt-6 w-full font-semibold"
        size="lg"
      >
        {loading ? "Submitting..." : "Submit Intake"}
      </Button>

      <p className="mt-4 text-center font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/30">
        30-minute conversation, founder-led, no pitch. We don&apos;t share your
        info with anyone.
      </p>
    </form>
  );
}
