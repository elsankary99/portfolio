"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";

function getSkillLevelColor(level: number) {
  if (level >= 5) return "bg-primary-500";
  if (level >= 4) return "bg-primary-500/80";
  if (level >= 3) return "bg-primary-500/60";
  return "bg-primary-500/40";
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Tools, technologies, and expertise."
          description="A comprehensive overview of what I bring to the table."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
            >
              <h3 className="text-sm font-semibold tracking-wider uppercase text-white/40 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group relative">
                    <Badge variant="default" size="md">
                      <div className="flex items-center gap-1.5">
                        {skill.level && (
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${getSkillLevelColor(skill.level)}`}
                          />
                        )}
                        {skill.name}
                      </div>
                    </Badge>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
