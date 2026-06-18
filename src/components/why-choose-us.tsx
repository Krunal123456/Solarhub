"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Clock, Leaf, Zap } from "lucide-react";

const reasons = [
  { icon: Award, title: "MNRE Approved", desc: "Certified by the Ministry of New and Renewable Energy." },
  { icon: Users, title: "Experienced Engineers", desc: "Expert team with 10+ years in solar installation." },
  { icon: Zap, title: "Premium Panels", desc: "Tier-1 monocrystalline panels for highest efficiency." },
  { icon: Shield, title: "25 Year Warranty", desc: "Long-term performance guarantee on panels." },
  { icon: Clock, title: "Fast Installation", desc: "Project completion within 3-5 days of approval." },
  { icon: Leaf, title: "Best ROI", desc: "Optimized designs to ensure maximum savings and quick payback." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Why Choose HighTech Solar System?
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl glass-card hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <reason.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
