"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, ArrowUp } from 'lucide-react';
import { SITE_NAME, SITE_TAGLINE, socialLinks, navLinks } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export default function Footer() {
  const shouldReduce = useReducedMotion();

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/[0.06] overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={shouldReduce ? {} : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {/* Brand */}
          <motion.div
            variants={shouldReduce ? {} : fadeInUp}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/25">
                AM
              </span>
              <span className="font-semibold text-white">{SITE_NAME}</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {SITE_TAGLINE}. Building thoughtful digital experiences with clean
              code and intentional design.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div variants={shouldReduce ? {} : fadeInUp}>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div variants={shouldReduce ? {} : fadeInUp}>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
                    >
                      <Icon
                        size={15}
                        className="text-white/30 group-hover:text-indigo-400 transition-colors"
                      />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={shouldReduce ? {} : fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} {SITE_NAME}. Crafted with care.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-white/70 transition-colors group"
            whileHover={shouldReduce ? {} : { y: -2 }}
            whileTap={shouldReduce ? {} : { scale: 0.95 }}
            aria-label="Scroll to top"
          >
            Back to top
            <span className="w-6 h-6 rounded-md bg-white/[0.06] group-hover:bg-white/[0.12] flex items-center justify-center transition-colors">
              <ArrowUp size={12} />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}