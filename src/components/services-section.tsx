"use client";

import { motion } from "framer-motion";
import { Home, Building2, Factory, Droplets, Sun, Wrench, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Residential Solar",
    description: "Power your home with clean energy and save up to 90% on electricity bills.",
    icon: Home,
  },
  {
    title: "Commercial Solar",
    description: "Reduce operational costs and achieve sustainability goals for your business.",
    icon: Building2,
  },
  {
    title: "Industrial Solar",
    description: "Large-scale solar plants designed for high energy consumption facilities.",
    icon: Factory,
  },
  {
    title: "Agriculture Solar Pumps",
    description: "Reliable water pumping solutions for farmers powered by the sun.",
    icon: Droplets,
  },
  {
    title: "Solar Water Heater",
    description: "Efficient water heating systems for domestic and commercial use.",
    icon: Sun,
  },
  {
    title: "AMC & Maintenance",
    description: "Comprehensive annual maintenance contracts for peak performance.",
    icon: Wrench,
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background relative" id="services">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Our Solar Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground md:text-xl"
          >
            Comprehensive end-to-end solar energy solutions tailored for every need.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group overflow-hidden bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/contact">
                    <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary text-muted-foreground group/btn">
                      Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
