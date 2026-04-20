"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Circle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import HeroWave from "@/components/ui/dynamic-wave-canvas-background";
import { AwardBadge } from "@/components/ui/award-badge";

const ROTATING_WORDS = [
  "adaptive reuse pad",
  "mixed-use infill",
  "multifamily wrap",
  "office conversion",
  "dark anchor",
  "surface-lot teardown",
  "mall repositioning",
  "build-to-rent",
  "podium deal",
  "garden-style infill",
  "5-over-1 wrap",
  "shopping center",
  "high-rise",
  "distribution center",
  "data center",
  "urban redevelopment",
  "Class A office",
  "light industrial",
  "tilt-up warehouse",
];

const LOGOS = [
  { name: "Kimco Realty", src: "/logos/kimco.png" },
  { name: "Brixmor", src: "/logos/brixmor.svg" },
  { name: "Blackstone", src: "/logos/blackstone.svg" },
  { name: "D.R. Horton", src: "/logos/dr-horton.svg", large: true },
  { name: "Camden", src: "/logos/camden.png" },
  { name: "Tishman Speyer", src: "/logos/tishman-speyer.png" },
  { name: "Hines", src: "/logos/hines.svg" },
];

// Architectural blueprint accent — replaces the abstract pill shapes
function BlueprintAccent({
  className,
  delay = 0,
  src,
  width = 340,
  height = 260,
  rotate = 0,
  opacity = 0.07,
}: {
  className?: string;
  delay?: number;
  src: string;
  width?: number;
  height?: number;
  rotate?: number;
  opacity?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40, rotate: rotate - 8 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.8,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number],
        opacity: { duration: 1.6 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 16,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height, opacity }}
      >
        {/* Blueprint tint layer */}
        <div
          className="absolute inset-0 rounded-sm"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,179,237,0.08) 0%, transparent 70%)",
          }}
        />
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          className="w-full h-full object-contain"
          style={{
            filter:
              "invert(1) sepia(1) saturate(2) hue-rotate(190deg) brightness(1.4)",
          }}
          aria-hidden
        />
      </motion.div>
    </motion.div>
  );
}

function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const word = ROTATING_WORDS[index];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === word) {
      setIsTyping(false);
      const pause = setTimeout(() => {
        setIsTyping(true);
        setIsDeleting(true);
      }, 1500);
      return () => clearTimeout(pause);
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
      return;
    }

    setIsTyping(true);
    const id = setTimeout(() => {
      setDisplayed(isDeleting ? word.slice(0, displayed.length - 1) : word.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(id);
  }, [displayed, isDeleting, index]);

  return (
    <>
      {displayed}
      <span
        className={isTyping ? "animate-cursor-blink" : "opacity-100"}
      >
        |
      </span>
    </>
  );
}

function HeroGeometric({
  badge = "Early Access — Limited Spots",
  title1 = "See your dream build",
  title2 = "before you spend a dime.",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="relative h-[calc(100vh-4rem)] min-h-[700px] w-full flex flex-col items-center justify-center overflow-hidden bg-[#030303]">
      {/* Dynamic wave canvas — animated background */}
      <div className="absolute inset-0">
        <HeroWave />
      </div>

      {/* Subtle blueprint-blue ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/[0.12] via-transparent to-indigo-900/[0.08] blur-3xl" />

      {/* Architectural blueprint accents */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floorplan — top left, slightly rotated */}
        <BlueprintAccent
          src="/floorplan-a.svg"
          delay={0.3}
          width={420}
          height={320}
          rotate={-6}
          opacity={0.09}
          className="left-[-6%] top-[8%]"
        />

        {/* Elevation drawing — top right */}
        <BlueprintAccent
          src="/elevation-front.svg"
          delay={0.5}
          width={380}
          height={220}
          rotate={5}
          opacity={0.08}
          className="right-[-4%] top-[5%]"
        />

        {/* ADU / studio floorplan — bottom left */}
        <BlueprintAccent
          src="/floorplan-b.svg"
          delay={0.4}
          width={300}
          height={240}
          rotate={8}
          opacity={0.08}
          className="left-[2%] bottom-[4%]"
        />

        {/* Site plan — bottom right */}
        <BlueprintAccent
          src="/site-plan.svg"
          delay={0.6}
          width={280}
          height={250}
          rotate={-10}
          opacity={0.07}
          className="right-[3%] bottom-[2%]"
        />

        {/* Small floorplan repeat — upper center-right, very faint */}
        <BlueprintAccent
          src="/floorplan-a.svg"
          delay={0.7}
          width={200}
          height={150}
          rotate={15}
          opacity={0.05}
          className="right-[28%] top-[3%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Product Hunt award badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center mb-6"
          >
            <AwardBadge type="product-of-the-day" place={1} />
          </motion.div>

          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 whitespace-nowrap">
                See your <RotatingWord />
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-white/90 to-indigo-300">
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-base sm:text-lg md:text-xl text-white/40 mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              Fly a candidate site. Describe the program. See a buildable, zoning-aware overlay on the real footage and ship a board-ready package to IC.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/signup"
              className="liquid-btn-amber px-8 py-3 rounded-full font-semibold text-sm tracking-wide"
            >
              Request Beta Access →
            </a>
            <a
              href="#how-it-works"
              className="liquid-btn px-8 py-3 rounded-full text-sm tracking-wide"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Social proof logos */}
          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 w-full max-w-3xl mx-auto"
          >
            <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-white/30 uppercase tracking-widest text-center mb-6">
              Trusted with feedback from some of the best
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
              <div className="flex animate-logo-scroll">
                {[...LOGOS, ...LOGOS].map((logo, i) => (
                  <div
                    key={`${logo.name}-${i}`}
                    className="flex-shrink-0 mx-12 flex items-center justify-center opacity-80 grayscale brightness-150 hover:opacity-100 transition-opacity"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className={`w-auto object-contain ${logo.large ? "h-16 max-w-[260px]" : "h-10 max-w-[180px]"}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Top & bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
