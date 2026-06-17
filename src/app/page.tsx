import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { SolarCalculator } from "@/components/solar-calculator";
import { ProcessTimeline } from "@/components/process-timeline";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <SolarCalculator />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessTimeline />
      <Testimonials />
    </>
  );
}
