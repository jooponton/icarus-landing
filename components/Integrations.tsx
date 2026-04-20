"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Brand = {
  id: number;
  name: string;
  domain: string;
  className: string;
};

const INTEGRATIONS: Brand[] = [
  { id: 1, name: "Propeller", domain: "propelleraero.com", className: "top-[8%] left-[6%]" },
  { id: 2, name: "DJI", domain: "dji.com", className: "top-[14%] left-[24%]" },
  { id: 3, name: "Skydio", domain: "skydio.com", className: "top-[6%] left-[44%]" },
  { id: 4, name: "DroneDeploy", domain: "dronedeploy.com", className: "top-[10%] right-[26%]" },
  { id: 5, name: "Pix4D", domain: "pix4d.com", className: "top-[16%] right-[8%]" },
  { id: 6, name: "Mapbox", domain: "mapbox.com", className: "top-[42%] left-[4%]" },
  { id: 7, name: "Esri", domain: "esri.com", className: "top-[46%] right-[4%]" },
  { id: 8, name: "Autodesk", domain: "autodesk.com", className: "top-[62%] left-[10%]" },
  { id: 9, name: "Rhino", domain: "rhino3d.com", className: "top-[60%] right-[12%]" },
  { id: 10, name: "SketchUp", domain: "sketchup.com", className: "bottom-[8%] left-[6%]" },
  { id: 11, name: "Graphisoft", domain: "graphisoft.com", className: "bottom-[14%] left-[30%]" },
  { id: 12, name: "Bentley", domain: "bentley.com", className: "bottom-[8%] right-[44%]" },
  { id: 13, name: "Unreal Engine", domain: "unrealengine.com", className: "bottom-[14%] right-[24%]" },
  { id: 14, name: "Unity", domain: "unity.com", className: "bottom-[6%] right-[6%]" },
];

const logoUrl = (domain: string) =>
  `https://cdn.brandfetch.io/${domain}/w/400/h/400`;

function FloatingLogo({
  mouseX,
  mouseY,
  brand,
  index,
}: {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  brand: Brand;
  index: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  React.useEffect(() => {
    const handleMouseMove = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(mouseX.current - cx, 2) + Math.pow(mouseY.current - cy, 2)
      );
      if (distance < 150) {
        const angle = Math.atan2(mouseY.current - cy, mouseX.current - cx);
        const force = (1 - distance / 150) * 50;
        x.set(-Math.cos(angle) * force);
        y.set(-Math.sin(angle) * force);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  const drift = 5 + (index % 5);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("absolute", brand.className)}
    >
      <motion.div
        title={brand.name}
        aria-label={brand.name}
        className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white p-3 shadow-xl shadow-black/50 md:h-20 md:w-20"
        animate={{
          y: [0, -8, 0, 8, 0],
          x: [0, 6, 0, -6, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: drift,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <img
          src={logoUrl(brand.domain)}
          alt={brand.name}
          className="h-8 w-8 object-contain md:h-10 md:w-10"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Integrations() {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[720px] w-full items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-24 md:px-12"
    >
      <div className="pointer-events-none absolute inset-0 h-full w-full">
        {INTEGRATIONS.map((brand, index) => (
          <FloatingLogo
            key={brand.id}
            mouseX={mouseX}
            mouseY={mouseY}
            brand={brand}
            index={index}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 text-center">
        <p className="mb-4 font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-widest text-amber-500">
          Integrations
        </p>
        <h2 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
          Plugs into the stack you already run
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-jetbrains-mono)] text-base text-white/60 md:text-lg">
          Drone captures, CAD, survey, and GIS flow into Atria. No new tools for your team to learn.
        </p>
        <a
          href="/signup"
          className="liquid-btn-amber mt-10 inline-block rounded-full px-8 py-3 text-sm font-semibold tracking-wide"
        >
          Request Beta Access →
        </a>
      </div>
    </section>
  );
}
