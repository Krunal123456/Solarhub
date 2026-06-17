"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, PenTool, FileText, CheckCircle, Wrench, Zap, BarChart } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Site Survey", desc: "Our engineers visit your site to assess feasibility and energy needs." },
  { icon: PenTool, title: "System Design", desc: "Custom 3D layout and shading analysis for maximum efficiency." },
  { icon: FileText, title: "Quotation", desc: "Detailed proposal with ROI, specs, and clear pricing." },
  { icon: CheckCircle, title: "Subsidy Approval", desc: "We handle all MNRE and DISCOM paperwork for you." },
  { icon: Wrench, title: "Installation", desc: "Expert installation by certified professionals within 3-5 days." },
  { icon: Zap, title: "Net Metering", desc: "Grid synchronization to ensure you get credited for extra power." },
  { icon: BarChart, title: "Monitoring", desc: "Real-time app access to monitor generation and savings." },
];

export function ProcessTimeline() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden" id="process">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Hassle-Free Installation Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground md:text-xl"
          >
            From site visit to grid connection, we manage everything so you don&apos;t have to.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}
                >
                  {/* Icon Node */}
                  <div className="absolute left-[28px] md:left-1/2 w-14 h-14 bg-background border-4 border-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-lg text-primary">
                    <step.icon className="w-6 h-6" />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors">
                      <div className="text-sm font-bold text-primary mb-2 tracking-wider">STEP 0{index + 1}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
