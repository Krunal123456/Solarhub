"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Leaf, Users, Award, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">About NextGen Solar</h1>
          <p className="text-lg text-muted-foreground mb-8">
            We are on a mission to accelerate Maharashtra&apos;s transition to sustainable energy. 
            With over a decade of experience, we provide premium, end-to-end solar solutions for residential, commercial, and industrial clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="aspect-video bg-muted rounded-3xl overflow-hidden relative shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/images/about_hero_image_1781686092202.png')` }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Our Vision for a Brighter Future</h2>
            <p className="text-muted-foreground text-lg">
              At NextGen Solar, we believe that clean, renewable energy should be accessible to everyone. We handle everything from initial consultation and custom design to professional installation and ongoing maintenance.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "MNRE Approved Channel Partner",
                "Tier-1 Solar Panels & Inverters",
                "Complete Subsidy Documentation Support",
                "25-Year Performance Warranty"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, title: "1000+", desc: "Happy Families" },
            { icon: Zap, title: "5MW+", desc: "Power Installed" },
            { icon: Award, title: "10+ Years", desc: "Industry Experience" },
            { icon: Leaf, title: "10K+ Tons", desc: "CO2 Reduced" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.title}</h3>
              <p className="text-muted-foreground font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
