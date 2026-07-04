"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Layers,
  Zap,
  Link,
  Flame,
  Box,
  Rocket,
  Shield,
  CheckSquare,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  layers: Layers,
  zap: Zap,
  link: Link,
  flame: Flame,
  box: Box,
  rocket: Rocket,
  shield: Shield,
  "check-square": CheckSquare,
};

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What I Do"
          title="Turning complex problems into elegant solutions."
          description="From architecture to deployment, I cover the full mobile development lifecycle."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Box;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-500">
                  <Icon size={20} className="text-primary-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
