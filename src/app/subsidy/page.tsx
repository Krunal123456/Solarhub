"use client";

import { motion } from "framer-motion";
import { CheckCircle2, IndianRupee, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SubsidyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-semibold rounded-full mb-4">
            PM Surya Ghar Yojana
          </span>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Government Subsidy Guide</h1>
          <p className="text-lg text-muted-foreground">
            Get up to ₹78,000 direct subsidy in your bank account for residential rooftop solar installations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-3xl border-primary/20 bg-primary/5"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <IndianRupee className="w-6 h-6 text-primary" /> Subsidy Structure
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 pb-4 border-b border-border/50">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center font-bold text-lg shrink-0">1kW</div>
                <div>
                  <h3 className="font-bold text-lg">₹30,000</h3>
                  <p className="text-sm text-muted-foreground">For up to 1kW system</p>
                </div>
              </li>
              <li className="flex items-start gap-4 pb-4 border-b border-border/50">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center font-bold text-lg shrink-0">2kW</div>
                <div>
                  <h3 className="font-bold text-lg">₹60,000</h3>
                  <p className="text-sm text-muted-foreground">For 1kW to 2kW system</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center font-bold text-lg shrink-0">3kW+</div>
                <div>
                  <h3 className="font-bold text-lg text-primary">₹78,000</h3>
                  <p className="text-sm text-muted-foreground">Maximum subsidy for 3kW or higher</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-accent" /> Required Documents
              </h2>
              <ul className="space-y-3">
                {[
                  "Latest Electricity Bill (Last 6 Months)",
                  "Aadhar Card of the Applicant",
                  "Cancelled Cheque / Bank Passbook",
                  "Passport Size Photograph",
                  "Property Tax Receipt"
                ].map((doc, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-2">We Handle the Paperwork!</h3>
              <p className="text-primary-foreground/80 mb-6">
                HighTech Solar System manages the entire subsidy application and approval process on your behalf, absolutely free of cost.
              </p>
              <Link href="/contact" className="block w-full">
                <Button variant="secondary" size="lg" className="w-full">
                  Apply for Subsidy
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
