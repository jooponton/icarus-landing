import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Features from "@/components/Features";
import Pipeline from "@/components/Pipeline";
import Mesa from "@/components/Mesa";
import MesaFeatures from "@/components/MesaFeatures";
import Emily from "@/components/Emily";
import Integrations from "@/components/Integrations";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import { HowItWorks, Problem, Waitlist, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Features />
      <Pipeline />
      <Mesa />
      <MesaFeatures />
      <Emily />
      <HowItWorks />
      <Integrations />
      <Security />
      <Problem />
      <Testimonials />
      <Waitlist />
      <Footer />
    </main>
  );
}
