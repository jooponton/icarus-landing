import Image from "next/image";
import {
  ArrowUp,
  CalendarCheck,
  Globe,
  Layout,
  Play,
  Plus,
  Signature,
  Sparkles,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

const MESCHAC_AVATAR = "https://avatars.githubusercontent.com/u/47919550?v=4";
const BERNARD_AVATAR = "https://avatars.githubusercontent.com/u/31113941?v=4";
const THEO_AVATAR = "https://avatars.githubusercontent.com/u/68236786?v=4";
const GLODIE_AVATAR = "https://avatars.githubusercontent.com/u/99137927?v=4";

function Card({
  className,
  soft,
  children,
}: {
  className?: string;
  soft?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 text-white shadow-lg shadow-black/30",
        soft ? "bg-white/[0.02]" : "bg-[#141414]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="bg-[#0f0f0f] py-24 px-6 md:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-3 font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-widest text-amber-500">
          Inside the loop
        </p>
        <h2 className="max-w-2xl text-balance text-3xl font-bold text-white md:text-5xl">
          Designed for the acquisitions-to-decision workflow
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card soft className="col-span-full overflow-hidden pt-6 pl-6">
            <Layout className="size-5 text-amber-400" />
            <h3 className="mt-5 text-lg font-semibold text-white">
              One canvas, from parcel to deal memo
            </h3>
            <p className="mt-3 max-w-xl text-balance font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60">
              Site imagery, massing options, zoning envelope, and yield numbers on the same surface — no switching between CAD, GIS, and deck software to answer one question.
            </p>
            <div className="-ml-2 -mt-2 mr-0.5 pl-2 pt-2 [mask-image:linear-gradient(to_bottom,black_85%,transparent)]">
              <div className="relative mx-auto mt-8 h-96 overflow-hidden rounded-tl-xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black/60 ring-1 ring-white/5">
                <Image
                  src="/after-icarus.png"
                  alt="Atria product mockup — photoreal site overlay with massing and zoning envelope"
                  width={2528}
                  height={1586}
                  priority={false}
                  className="h-full w-full object-cover object-left-top"
                />
              </div>
            </div>
          </Card>

          <Card soft className="overflow-hidden p-6">
            <Target className="size-5 text-amber-400" />
            <h3 className="mt-5 text-lg font-semibold text-white">
              Ship to the whole deal team
            </h3>
            <p className="mt-3 text-balance font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60">
              Turn a Monday-morning site fly into a Friday sign-off. Acquisitions, design, and GC all work off the same geometry.
            </p>
            <MeetingIllustration />
          </Card>

          <Card soft className="group overflow-hidden px-6 pt-6">
            <CalendarCheck className="size-5 text-amber-400" />
            <h3 className="mt-5 text-lg font-semibold text-white">
              Sign-off-ready markup
            </h3>
            <p className="mt-3 text-balance font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60">
              Annotate the photoreal overlay, redline the massing, sign off on the option that clears the envelope. No CAD license required.
            </p>
            <CodeReviewIllustration />
          </Card>

          <Card soft className="group overflow-hidden px-6 pt-6">
            <Sparkles className="size-5 text-amber-400" />
            <h3 className="mt-5 text-lg font-semibold text-white">
              Ask Emily
            </h3>
            <p className="mt-3 text-balance font-[family-name:var(--font-jetbrains-mono)] text-sm text-white/60">
              Prompt any candidate site the way you&apos;d prompt an analyst. &ldquo;Run the buildable envelope on parcel 9&rdquo; — she returns it.
            </p>
            <div className="-mx-2 -mt-2 px-2 pt-2 [mask-image:linear-gradient(to_bottom,black_50%,transparent)]">
              <AIAssistantIllustration />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function MeetingIllustration() {
  const avatars = [
    { src: MESCHAC_AVATAR, alt: "Méschac Irung" },
    { src: BERNARD_AVATAR, alt: "Bernard Ngandu" },
    { src: THEO_AVATAR, alt: "Théo Balick" },
    { src: GLODIE_AVATAR, alt: "Glodie Lukose" },
  ];

  return (
    <Card aria-hidden className="mt-9 aspect-video p-4">
      <div className="mb-0.5 text-sm font-semibold text-white">
        Site walkthrough review
      </div>
      <div className="mb-4 flex gap-2 text-sm">
        <span className="text-white/50">2:30 – 3:45 PM</span>
      </div>
      <div className="mb-2 flex -space-x-1.5">
        {avatars.map((avatar, i) => (
          <div
            key={i}
            className="size-7 rounded-full border border-white/10 bg-[#0a0a0a] p-0.5 shadow shadow-black/40"
          >
            <img
              className="aspect-square rounded-full object-cover"
              src={avatar.src}
              alt={avatar.alt}
              height={460}
              width={460}
            />
          </div>
        ))}
      </div>
      <div className="text-sm font-medium text-white/55">
        Massing + envelope sign-off
      </div>
    </Card>
  );
}

function CodeReviewIllustration() {
  return (
    <div aria-hidden className="relative mt-6">
      <Card className="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3">
        <div className="mb-3 flex items-center gap-2">
          <div className="size-6 rounded-full border border-white/10 bg-[#0a0a0a] p-0.5 shadow shadow-black/40">
            <img
              className="aspect-square rounded-full object-cover"
              src={MESCHAC_AVATAR}
              alt="Reviewer"
              height={460}
              width={460}
            />
          </div>
          <span className="text-sm font-medium text-white/75">M. Alvarez</span>
          <span className="text-xs text-white/40">2m</span>
        </div>
        <div className="ml-8 space-y-2">
          <div className="h-2 rounded-full bg-white/10" />
          <div className="h-2 w-3/5 rounded-full bg-white/10" />
          <div className="h-2 w-1/2 rounded-full bg-white/10" />
        </div>
        <Signature className="ml-8 mt-3 size-5 text-amber-400" />
      </Card>
      <Card className="absolute -top-4 right-0 flex aspect-[3/5] w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
        <div className="m-auto flex size-10 rounded-full bg-white/5">
          <Play className="m-auto size-4 fill-white/60 stroke-white/60" />
        </div>
      </Card>
    </div>
  );
}

function AIAssistantIllustration() {
  return (
    <Card
      aria-hidden
      className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0"
    >
      <div className="w-fit">
        <Sparkles className="size-3.5 fill-amber-300 stroke-amber-300" />
        <p className="mt-2 line-clamp-2 text-sm text-white/85">
          Run the buildable envelope on parcel 9 — 280 units, 15K retail, conforming.
        </p>
      </div>
      <div className="-mx-3 -mb-3 mt-3 space-y-3 rounded-lg bg-white/5 p-3">
        <div className="text-sm text-white/50">Ask Emily</div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              className="flex size-7 items-center justify-center rounded-2xl border border-white/10 text-white/70 hover:bg-white/5"
            >
              <Plus className="size-4" />
            </button>
            <button
              type="button"
              className="flex size-7 items-center justify-center rounded-2xl border border-white/10 text-white/70 hover:bg-white/5"
            >
              <Globe className="size-4" />
            </button>
          </div>
          <button
            type="button"
            className="flex size-7 items-center justify-center rounded-2xl bg-amber-500 text-black"
          >
            <ArrowUp strokeWidth={3} className="size-4" />
          </button>
        </div>
      </div>
    </Card>
  );
}
