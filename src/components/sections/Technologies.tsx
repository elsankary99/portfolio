"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <section id="technologies" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Technologies"
          title="My technology stack."
          description="The tools and frameworks I use to build production-grade applications."
        />

        <motion.div
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Badge
                variant={tech.category === "framework" ? "primary" : "default"}
                size="md"
                className="px-4 py-2"
              >
                {tech.name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
