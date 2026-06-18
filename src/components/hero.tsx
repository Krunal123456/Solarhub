"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calculator, CheckCircle2, ShieldCheck, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "./animated-counter";
import Link from "next/link";

const features = [
  { icon: ShieldCheck, text: "25 Years Warranty" },
  { icon: CheckCircle2, text: "MNRE Approved" },
  { icon: Zap, text: "Net Metering Support" },
  { icon: Clock, text: "Fast Installation" },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 25, suffix: "+", label: "Years Warranty" },
  { value: 100, suffix: "%", label: "Satisfaction" },
];

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Media - using CSS background instead of next/image to avoid remote host config */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')`,
          }}
          role="img"
          aria-label="Solar Panels Installation"
        />
      </div>

      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-start text-white">
        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium tracking-wide">MNRE Approved Solar Installation Partner</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight mb-6"
        >
          Save Up To <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">90%</span> On Electricity Bills
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10"
        >
          Join the green revolution with HighTech Solar System. Premium quality panels, expert installation, and hassle-free government subsidy assistance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-8 text-lg w-full sm:w-auto group font-bold">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="glass hover:bg-white/20 text-white border-white/30 rounded-full h-14 px-8 text-lg w-full sm:w-auto">
            <Calculator className="mr-2 h-5 w-5" />
            Calculate Savings
          </Button>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/20 pt-8 w-full max-w-4xl"
        >
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
                <feature.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm md:text-base font-medium">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 right-0 lg:right-10 transform translate-y-1/2 z-30 hidden md:block"
      >
        <div className="glass-card rounded-2xl p-8 grid grid-cols-2 gap-8 shadow-2xl dark:bg-black/40">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl font-bold text-foreground mb-1 flex items-center justify-center">
                <AnimatedCounter from={0} to={stat.value} duration={2.5} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
