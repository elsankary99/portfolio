"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Apple,
  Play,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Case studies from production applications."
          description="Real projects, real challenges, real solutions. Each one built with care and shipped to users."
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
            >
              <div
                className="rounded-2xl bg-overlay/[0.03] border border-overlay/[0.06] overflow-hidden transition-all duration-500 hover:bg-overlay/[0.05]"
              >
                {/* Preview */}
                <div className="p-6 sm:p-8">
                  <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
                    {/* Screenshot placeholder */}
                    <div className="lg:col-span-2">
                      <div
                        className={`relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                      >
                        <div className="text-center p-6">
                          <span className="text-3xl font-bold text-foreground/90">
                            {project.title}
                          </span>
                          <p className="text-foreground/60 text-sm mt-2">
                            Screenshot placeholder
                          </p>
                          <p className="text-foreground/40 text-xs mt-1">
                            Replace with {project.title} app screenshots
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="lg:col-span-3 flex flex-col justify-center">
                      <span className="text-xs font-semibold tracking-widest uppercase text-primary-400 mb-2">
                        Featured Project
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-foreground/60 mt-1 mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-sm text-foreground/50 leading-relaxed line-clamp-3">
                        {project.overview}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <Badge key={tech} variant="primary" size="sm">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 6 && (
                          <Badge variant="outline" size="sm">
                            +{project.technologies.length - 6}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-3 mt-5">
                        {project.appStore && (
                          <a
                            href={project.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-foreground transition-colors"
                          >
                            <Apple size={14} />
                            App Store
                          </a>
                        )}
                        {project.googlePlay && (
                          <a
                            href={project.googlePlay}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-foreground transition-colors"
                          >
                            <Play size={14} />
                            Google Play
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-foreground transition-colors"
                          >
                            <Github size={14} />
                            GitHub
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors mt-4"
                      >
                        {expandedId === project.id ? (
                          <>
                            Less details <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            View case study <ChevronDown size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded case study */}
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-8 border-t border-overlay/[0.06] pt-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          {/* Role */}
                          <div>
                            <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-2">
                              My Role
                            </h4>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                              {project.role}
                            </p>
                          </div>

                          {/* Key Features */}
                          <div>
                            <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-2">
                              Key Features
                            </h4>
                            <ul className="space-y-1">
                              {project.keyFeatures.map((feature, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-foreground/60 flex gap-2"
                                >
                                  <span className="text-primary-400 shrink-0">&rsaquo;</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Challenges */}
                          <div>
                            <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-2">
                              Challenges
                            </h4>
                            <ul className="space-y-1">
                              {project.challenges.map((challenge, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-foreground/60 flex gap-2"
                                >
                                  <span className="text-red-400 shrink-0">&rsaquo;</span>
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Solutions */}
                          <div>
                            <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-2">
                              Solutions
                            </h4>
                            <ul className="space-y-1">
                              {project.solutions.map((solution, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-foreground/60 flex gap-2"
                                >
                                  <span className="text-green-400 shrink-0">&rsaquo;</span>
                                  {solution}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-2">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="primary" size="sm">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Results */}
                          <div>
                            <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground/40 mb-2">
                              Results
                            </h4>
                            <ul className="space-y-1">
                              {project.results.map((result, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-foreground/60 flex gap-2"
                                >
                                  <span className="text-primary-400 shrink-0">&#9679;</span>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-overlay/[0.06]">
                          {project.appStore && (
                            <a
                              href={project.appStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                            >
                              <Apple size={16} />
                              View on App Store
                              <ExternalLink size={14} />
                            </a>
                          )}
                          {project.googlePlay && (
                            <a
                              href={project.googlePlay}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                            >
                              <Play size={16} />
                              View on Google Play
                              <ExternalLink size={14} />
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                            >
                              <Github size={16} />
                              View Source
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
