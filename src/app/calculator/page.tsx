"use client";

import { motion } from "framer-motion";
import { SolarCalculator } from "@/components/solar-calculator";

export default function CalculatorPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Solar Savings Calculator</h1>
          <p className="text-lg text-muted-foreground">
            Estimate your potential savings, recommended system size, and government subsidies instantly.
          </p>
        </motion.div>

        <SolarCalculator />
      </div>
    </div>
  );
}
