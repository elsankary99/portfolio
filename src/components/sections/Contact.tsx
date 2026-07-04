"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, Send, Check, Phone, Loader2, AlertCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let&apos;s work together."
          description="Have a project in mind? Let&apos;s talk about how I can help."
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Get in touch
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas,
                  or opportunities to push the boundaries of what&apos;s possible
                  with mobile technology.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:elsankary99@gmail.com"
                  className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary-400 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-xl bg-overlay/[0.05] flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                    <Mail size={18} />
                  </span>
                  elsankary99@gmail.com
                </a>
                <a
                  href="tel:+201285805818"
                  className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary-400 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-xl bg-overlay/[0.05] flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                    <Phone size={18} />
                  </span>
                  +20 128 580 5818
                </a>
                <a
                  href="https://www.linkedin.com/in/elsankary99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary-400 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-xl bg-overlay/[0.05] flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                    <Linkedin size={18} />
                  </span>
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/elsankary99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary-400 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-xl bg-overlay/[0.05] flex items-center justify-center group-hover:bg-primary-500/10 transition-colors">
                    <Github size={18} />
                  </span>
                  GitHub Profile
                </a>
              </div>

              <Button
                variant="secondary"
                href="/resume/Ahmed_Ibrahim.pdf"
                download
                icon={<Download size={16} />}
              >
                Download Resume
              </Button>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl bg-overlay/[0.03] border border-overlay/[0.06] space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground/60 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-overlay/[0.05] border border-overlay/[0.1] text-foreground placeholder-foreground/20 text-sm focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground/60 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-overlay/[0.05] border border-overlay/[0.1] text-foreground placeholder-foreground/20 text-sm focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                      className="block text-sm font-medium text-foreground/60 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-xl bg-overlay/[0.05] border border-overlay/[0.1] text-foreground placeholder-foreground/20 text-sm focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                      className="block text-sm font-medium text-foreground/60 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-overlay/[0.05] border border-overlay/[0.1] text-foreground placeholder-foreground/20 text-sm focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/30 transition-all resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className={cn(
                    "w-full",
                    status === "loading" && "opacity-70 pointer-events-none"
                  )}
                  icon={
                    status === "loading" ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : status === "success" ? (
                      <Check size={18} />
                    ) : status === "error" ? (
                      <AlertCircle size={18} />
                    ) : (
                      <Send size={18} />
                    )
                  }
                >
                  {status === "loading"
                    ? "Sending..."
                    : status === "success"
                    ? "Message Sent!"
                    : status === "error"
                    ? "Failed to Send"
                    : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
