import { Camera, Crosshair, Layers, Scale, Settings2, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: Crosshair,
    title: "Geo-precise",
    body: "Every generation conditioned on real parcel geometry. No hallucinated setbacks, no vibes-based renders.",
  },
  {
    icon: Camera,
    title: "Photoreal",
    body: "Architectural-detail LoRAs render material, light, and massing the way your site actually sits.",
  },
  {
    icon: Settings2,
    title: "Controllable",
    body: "Prompt the program, massing, material palette, and time of day. Steer Mesa like a design tool.",
  },
  {
    icon: Layers,
    title: "Multi-modal",
    body: "Drone mesh, CAD overlay, and site survey feed the same model. Outputs honor all three.",
  },
  {
    icon: Zap,
    title: "Fast",
    body: "Option 1 to option 5 in minutes. Board-ready deliverables before the afternoon stand-up.",
  },
  {
    icon: Scale,
    title: "Zoning-aware",
    body: "Setbacks, FAR, and height limits baked into the generation, not checked after the fact.",
  },
];

export default function MesaFeatures() {
  return (
    <section className="bg-[#0f0f0f] py-12 md:py-20 px-6 md:px-12">
      <div className="mx-auto max-w-5xl space-y-8 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-6">
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-widest text-amber-500">
            Why Mesa
          </p>
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Built for architectural precision, not stock-image vibes
          </h2>
          <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60 md:text-base">
            Mesa is evolving beyond the base diffusion models — grounded conditioning, zoning intelligence, and control surfaces that match how your architect actually works.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y divide-white/10 border border-white/10 bg-[#0a0a0a]/40 *:p-10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon className="size-4 text-amber-400" />
                <h3 className="text-sm font-semibold text-white">{title}</h3>
              </div>
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-sm leading-relaxed text-white/60">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
