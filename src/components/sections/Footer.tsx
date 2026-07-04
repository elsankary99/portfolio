"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/elsankary99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/elsankary99/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:elsankary99@gmail.com"
              className="text-white/30 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-sm text-white/30 text-center">
            &copy; {new Date().getFullYear()} Ahmed Ibrahim. Built with Next.js, Tailwind CSS & Framer Motion.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl text-white/30 hover:text-white hover:bg-white/5 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
