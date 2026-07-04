"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants}>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary-400 mb-6">
                Senior Flutter Developer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight"
            >
              Ahmed
              <br />
              Ibrahim
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-xl sm:text-2xl text-foreground/80 font-medium"
            >
              Building scalable Flutter apps for Android & iOS.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-base text-foreground/50 leading-relaxed max-w-xl"
            >
              I build production-ready mobile applications with Flutter, combining clean
              architecture, exceptional user experience, and scalable engineering practices.
              Currently expanding into native iOS development with Swift.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Button
                variant="primary"
                size="lg"
                href="/resume/Ahmed_Ibrahim.pdf"
                download
                icon={<Download size={18} />}
              >
                Download CV
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/resume/Ahmed_Ibrahim.pdf"
                target="_blank"
                icon={<ExternalLink size={18} />}
              >
                Preview CV
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#projects"
                icon={<ExternalLink size={18} />}
              >
                View Projects
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href="#contact"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5 mt-10 pt-8 border-t border-overlay/5"
            >
              <a
                href="https://www.linkedin.com/in/elsankary99/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/elsankary99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="mailto:elsankary99@gmail.com"
                className="text-foreground/40 hover:text-primary-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </motion.div>
          </div>

          {/* Right - Portrait */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative flex items-center justify-center">
              {/* Glow behind */}
              <div className="absolute w-[130%] h-[130%] rounded-full bg-gradient-to-br from-primary-500/15 via-purple-500/15 to-blue-500/15 blur-3xl" />
              {/* Gradient ring */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-500 via-purple-600 to-blue-600 p-[3px] shadow-2xl shadow-primary-600/20">
                {/* Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src="/images/my_image/my_image.JPEG"
                    alt="Ahmed Ibrahim"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/30 hover:text-foreground/60 transition-colors"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
