"use client";

import { motion } from "framer-motion";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "Atria cut the time between a candidate site and a board-ready package from weeks to a single afternoon. The zoning-aware overlays alone paid for the pilot.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Megan Alvarez",
    role: "VP Development, mid-market REIT",
  },
  {
    text: "We replaced three tools with Atria's data engine. CAD, survey and structural inputs flow into one model — our deal memos finally match reality.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "David Chen",
    role: "Feasibility Lead",
  },
  {
    text: "The drone-to-site pipeline is wild. We fly a parcel in the morning and have a realistic massing study on the partner's desk the same day.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Omar Patel",
    role: "Development Analyst",
  },
  {
    text: "Our deal team stopped arguing about whether a rendering was accurate. If it's on the Atria overlay, it's buildable — end of discussion.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Priya Raman",
    role: "Acquisitions Associate",
  },
  {
    text: "We underwrote three deals in the time it used to take to underwrite one. Atria didn't just speed us up — it raised the quality of what we ship upstream.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "James O'Brien",
    role: "Managing Partner",
  },
  {
    text: "I'm a skeptic about AI in CRE. Atria is the first tool that actually respects the engineering constraints we care about.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Lena Kowalski",
    role: "Development Manager",
  },
  {
    text: "What used to be a six-week feasibility cycle is now a conversation. Our investors notice — we're closing faster and with more conviction.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Marcus Reid",
    role: "Site Selection Analyst",
  },
  {
    text: "The autonomous-capture integration with Propeller was the unlock. We're running site diligence the way infra teams run CI.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Sofia Martins",
    role: "Ops Coordinator, land developer",
  },
  {
    text: "Our architects hated giving up control. Then they saw Atria's mesh output match the survey to the inch. Now they won't open a project without it.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    name: "Hiro Tanaka",
    role: "Project Architect",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-12 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <p className="mb-3 font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-widest text-amber-500">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center">
            What our beta testers are saying
          </h2>
          <p className="text-center mt-5 text-white/60 font-[family-name:var(--font-jetbrains-mono)]">
            Feedback from analysts, design leads and anyone else we can get to come break things.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
