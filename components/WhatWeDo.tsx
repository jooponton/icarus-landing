"use client";

import { Box, Compass, Database, Scale } from "lucide-react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

const ITEMS: BentoItem[] = [
  {
    title: "Ground-truth visualization",
    meta: "mesh + image gen",
    description:
      "Best-in-class image and mesh generation locked to precise, geo-specific data — so what you render matches what you'll actually build.",
    icon: <Box className="w-4 h-4 text-amber-400" />,
    status: "Core",
    tags: ["Render", "Mesh", "Geo"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Autonomy-ready",
    meta: "Propeller + more",
    description:
      "Integrations with drone mappers and autonomous platforms for real-time analysis on haul roads, environmental signal, and geospatial telemetry.",
    icon: <Compass className="w-4 h-4 text-sky-400" />,
    status: "Integrations",
    tags: ["Drone", "Geospatial"],
  },
  {
    title: "Enterprise data engine",
    meta: "CAD · survey · structural",
    description:
      "Fuse foundational data from the rest of your team's workflow into Atria's models — the base for long-term, defensible differentiation.",
    icon: <Database className="w-4 h-4 text-emerald-400" />,
    status: "Live",
    tags: ["CAD", "Survey", "Structural"],
    colSpan: 2,
  },
  {
    title: "Zoning-aware",
    meta: "setbacks + envelope",
    description:
      "Buildable envelopes and zoning constraints applied automatically, producing review-ready geometry without manual codebook lookups.",
    icon: <Scale className="w-4 h-4 text-amber-400" />,
    status: "Beta",
    tags: ["Zoning", "Envelope"],
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-[#0a0a0a] py-24 px-6 md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-center font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-widest text-amber-500">
          What we do
        </p>
        <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-5xl">
          The full study, from feasibility to approval
        </h2>

        <div className="dark">
          <BentoGrid items={ITEMS} />
        </div>
      </div>
    </section>
  );
}
