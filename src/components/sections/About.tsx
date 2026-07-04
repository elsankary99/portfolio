"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Engineer by trade, problem solver by nature."
          description="A deep dive into who I am, how I work, and what drives me."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-white/70 leading-relaxed">
              My journey into software engineering started with curiosity about how
              mobile apps work under the hood. That curiosity evolved into a career
              spanning four years of building production applications used by real
              people across industries like FinTech, Healthcare, Ride Hailing, and
              beyond.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              I specialize in Flutter and Dart, but my real expertise lies in
              architecting scalable software. I believe great code is code that
              doesn&apos;t just work today, but can evolve tomorrow. That&apos;s why I
              champion Clean Architecture, SOLID principles, and modular design in
              every project I touch.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              What sets me apart is my engineering mindset. I don&apos;t just build
              features, I solve business problems. Whether it&apos;s optimizing
              a payment flow to reduce drop-off, designing a real-time tracking
              system that handles poor connectivity, or mentoring a junior developer
              through their first production PR, I approach every challenge with
              the same philosophy: build it right, build it clean, build it to last.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Collaboration is central to how I work. I thrive in cross-functional
              teams where I can contribute beyond just code, shaping product
              decisions, improving development workflows, and raising the bar for
              engineering excellence.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Right now I&apos;m expanding into native iOS development with Swift and
              SwiftUI. Not because Flutter isn&apos;t enough, but because I believe
              the best engineers understand the full stack of their platform. Every
              new language, every new framework, sharpens my ability to make better
              architectural decisions.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new tech,
              contributing to open source, or writing about my experiences as a
              software engineer.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <AnimatedCounter to={4} suffix="+" label="Years Experience" />
              <AnimatedCounter to={20} suffix="+" label="Apps Built" />
              <AnimatedCounter to={6} suffix="" label="Industries Served" />
              <AnimatedCounter to={99} suffix="%" label="Client Satisfaction" />
            </div>

            <div className="relative p-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600/10 via-purple-600/10 to-blue-600/10 border border-white/[0.06]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" />
              <div className="relative">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Currently Exploring
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Native iOS development with Swift and SwiftUI. Building a deeper
                  understanding of the Apple ecosystem while continuing to deliver
                  world-class Flutter applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
