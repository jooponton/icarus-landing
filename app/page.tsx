import Hero from "@/components/Hero";
import { HowItWorks, Problem, Waitlist, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Problem />
      <Waitlist />
      <Footer />
    </main>
  );
}
