"use client";

import { motion } from "framer-motion";
import { ServicesSection } from "@/components/services-section";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Our Solar Services</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive end-to-end solar solutions tailored for residential, commercial, and industrial requirements.
          </p>
        </motion.div>

        {/* Reusing the highly-polished services component */}
        <ServicesSection />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 glass-card p-8 md:p-12 rounded-3xl bg-primary/5 border-primary/20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The NextGen Solar Advantage</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                We don&apos;t just install solar panels; we engineer sustainable energy systems optimized for maximum generation and longevity.
              </p>
              <ul className="space-y-4">
                {["Site Inspection & Shading Analysis", "Custom 3D System Design", "Net Metering Liasioning", "Bank Financing Assistance", "Lifetime AMC Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div 
              className="h-[400px] rounded-2xl bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=2076&auto=format&fit=crop')` }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
