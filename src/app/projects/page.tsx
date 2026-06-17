"use client";

import { motion } from "framer-motion";
import { MapPin, Zap } from "lucide-react";

const projects = [
  {
    title: "5kW Residential Installation",
    location: "Pune, Maharashtra",
    generation: "7,500 kWh/year",
    type: "Residential",
    image: "/images/proj_res_image_1781686039082.png"
  },
  {
    title: "50kW Commercial Setup",
    location: "Nashik, Maharashtra",
    generation: "75,000 kWh/year",
    type: "Commercial",
    image: "/images/proj_com_image_1781686051619.png"
  },
  {
    title: "250kW Factory Roof",
    location: "Aurangabad, Maharashtra",
    generation: "375,000 kWh/year",
    type: "Industrial",
    image: "/images/proj_ind_image_1781686065073.png"
  },
  {
    title: "10kW Villa System",
    location: "Nagpur, Maharashtra",
    generation: "15,000 kWh/year",
    type: "Residential",
    image: "/images/proj_vil_image_1781686079049.png"
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Our Success Stories</h1>
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of successful solar installations across Maharashtra.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <span className="inline-block px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/50 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                  {project.type}
                </span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <div className="flex items-center gap-6 text-sm text-gray-300">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" /> {project.location}</span>
                  <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-accent" /> {project.generation}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
