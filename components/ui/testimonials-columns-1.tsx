"use client";

import React from "react";
import { motion } from "framer-motion";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration,
}: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((loop) => (
          <React.Fragment key={loop}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="p-10 rounded-3xl border border-white/10 bg-white/[0.02] shadow-lg shadow-black/40 max-w-xs w-full"
              >
                <div className="text-white/80">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-white">
                      {name}
                    </div>
                    <div className="leading-5 opacity-60 tracking-tight text-white">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
