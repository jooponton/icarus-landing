import {
  Box,
  Ellipsis,
  Layers,
  Palette,
  Sparkles,
  Sun,
} from "lucide-react";
import { cn } from "@/lib/utils";

function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/[0.02] text-white shadow-lg shadow-black/30",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function Mesa() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-3 font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-widest text-amber-500">
          Mesa · The Engine
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Meet Mesa, our text-to-image engine
        </h2>
        <p className="mb-12 mt-4 max-w-3xl text-balance font-[family-name:var(--font-jetbrains-mono)] text-base leading-relaxed text-white/60 md:text-lg">
          Mesa is built for architectural precision. Every generation is conditioned on real geometry — drone mesh, site survey, CAD — so what you render is what you&apos;ll build. Powered by depth-aware diffusion, photogrammetric reconstruction, and LoRAs fine-tuned on architectural detail.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="p-6">
            <div className="flex aspect-video items-center justify-center">
              <ConditioningIllustration className="w-full" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">
                Locked to the site
              </h3>
              <p className="mt-4 text-balance font-[family-name:var(--font-jetbrains-mono)] text-base text-white/60">
                Conditioned on your real inputs. The render sits on your parcel, not an AI hallucination of it.
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex aspect-video items-center justify-center">
              <PromptIllustration />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">
                Steered like a design tool
              </h3>
              <p className="mt-4 text-balance font-[family-name:var(--font-jetbrains-mono)] text-base text-white/60">
                Prompt the massing, material palette, and time of day. Mesa gives your architect a starting point, not a lucky roll.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ConditioningIllustration({ className }: { className?: string }) {
  const inputs = [
    "Drone mesh",
    "CAD overlay",
    "Site survey",
    "Zoning envelope",
    "Material library",
  ];
  return (
    <div
      className={cn(
        "[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]",
        className
      )}
    >
      <ul className="mx-auto w-fit font-mono text-xl font-medium text-white/35">
        {inputs.map((item, i) => (
          <li
            key={item}
            className={cn(
              "relative",
              i === 2 &&
                "text-white before:absolute before:-translate-x-[115%] before:text-amber-400 before:content-['Conditioning']"
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PromptIllustration() {
  return (
    <div className="relative">
      <div className="absolute -translate-y-[110%] -translate-x-[12.5%] flex items-center gap-2 rounded-lg border border-white/10 bg-[#141414] p-1 shadow-lg shadow-black/60">
        <div className="flex items-center gap-1 rounded-md bg-amber-500 px-2 py-1 text-xs font-medium text-black">
          <Sparkles className="size-3" />
          Generate
        </div>
        <span className="block h-4 w-px bg-white/15" />
        <div className="flex gap-0.5">
          <div className="flex size-7 items-center justify-center rounded-md text-white/60">
            <Box className="size-4" />
          </div>
          <div className="flex size-7 items-center justify-center rounded-md bg-white/10 text-white">
            <Layers className="size-4" />
          </div>
          <div className="flex size-7 items-center justify-center rounded-md text-white/60">
            <Palette className="size-4" />
          </div>
          <div className="flex size-7 items-center justify-center rounded-md text-white/60">
            <Sun className="size-4" />
          </div>
        </div>
        <span className="block h-4 w-px bg-white/15" />
        <div className="flex size-8 items-center justify-center text-white/60">
          <Ellipsis className="size-3" />
        </div>
      </div>
      <span className="text-white/85">
        <span className="bg-amber-500/15 py-1 text-amber-300">Tomorrow 8:30am</span>, golden hour, 280-unit massing.
      </span>
    </div>
  );
}
