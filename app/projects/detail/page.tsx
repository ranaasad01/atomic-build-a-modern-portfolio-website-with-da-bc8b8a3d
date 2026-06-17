"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";
import { SITE_GITHUB } from "@/lib/data";
import { ExternalLink, Code2 as Github, ArrowLeft, CheckCircle, Layers, Zap, Shield, Code2, Server } from 'lucide-react';
import Link from "next/link";

// ─── Tech Stack Data ──────────────────────────────────────────────────────────

const techStack = [
  {
    category: "Frontend",
    icon: Layers,
    techs: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
  },
  {
    category: "Backend",
    icon: Server,
    techs: ["Node.js", "Prisma ORM", "PostgreSQL", "tRPC", "Zod"],
  },
  {
    category: "Infrastructure",
    icon: Zap,
    techs: ["Vercel Edge", "Upstash Redis", "Cloudflare CDN", "GitHub Actions"],
  },
  {
    category: "Auth & Security",
    icon: Shield,
    techs: ["NextAuth.js", "JWT", "Row-level Security", "RBAC"],
  },
];

// ─── Gallery Data ─────────────────────────────────────────────────────────────

const galleryItems = [
  {
    label: "Dashboard Overview",
    gradient: "from-indigo-900/60 to-purple-900/60",
    border: "border-indigo-500/20",
  },
  {
    label: "Cost Analytics",
    gradient: "from-blue-900/60 to-cyan-900/60",
    border: "border-blue-500/20",
  },
  {
    label: "Model Comparison",
    gradient: "from-violet-900/60 to-pink-900/60",
    border: "border-violet-500/20",
  },
  {
    label: "Alert Configuration",
    gradient: "from-emerald-900/60 to-teal-900/60",
    border: "border-emerald-500/20",
  },
];

// ─── Stat Data ────────────────────────────────────────────────────────────────

const stats = [
  { value: "98", label: "Lighthouse Score", suffix: "" },
  { value: "3", label: "LLM Providers", suffix: "" },
  { value: "2k+", label: "Active Users", suffix: "" },
];

// ─── Mock Dashboard Chart ─────────────────────────────────────────────────────

function MockDashboard() {
  const bars = [60, 80, 45, 90, 70, 55, 85, 65, 75, 50, 95, 40];
  return (
    <div className="w-full h-full p-6 flex flex-col gap-4">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-400/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <div className="w-2 h-2 rounded-full bg-green-400/70" />
        </div>
        <div className="h-2 w-24 rounded-full bg-white/10" />
      </div>
      {/* Stat pills */}
      <div className="grid grid-cols-3 gap-2">
        {["$1,240", "98ms", "2.4M"].map((val, i) => (
          <div
            key={i}
            className="bg-white/[0.06] border border-white/[0.08] rounded-lg p-2 text-center"
          >
            <div className="text-indigo-400 font-bold text-sm">{val}</div>
            <div className="text-white/30 text-[10px] mt-0.5">
              {["Cost", "Latency", "Tokens"][i]}
            </div>
          </div>
        ))}
      </div>
      {/* Chart bars */}
      <div className="flex-1 flex items-end gap-1.5 pt-2">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-sm bg-gradient-to-t from-indigo-600/80 to-indigo-400/60"
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
      {/* X-axis labels */}
      <div className="flex gap-1.5">
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
          (m) => (
            <div key={m} className="flex-1 text-center text-[8px] text-white/20">
              {m}
            </div>
          )
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectDetailPage() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* ── 1. HERO BANNER ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#0f0f0f] pt-28 pb-20">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            variants={shouldReduce ? {} : fadeIn}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              All Projects
            </Link>
          </motion.div>

          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: text */}
            <div>
              <motion.div
                variants={shouldReduce ? {} : fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6"
              >
                <CheckCircle size={12} />
                Case Study
              </motion.div>

              <motion.h1
                variants={shouldReduce ? {} : fadeInUp}
                className="text-4xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-br from-white to-indigo-400 bg-clip-text text-transparent"
              >
                Lumina AI Dashboard
              </motion.h1>

              <motion.p
                variants={shouldReduce ? {} : fadeInUp}
                className="text-lg text-white/60 mb-8 leading-relaxed"
              >
                Real-time analytics for AI model performance
              </motion.p>

              <motion.div
                variants={shouldReduce ? {} : fadeInUp}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="https://lumina.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200 shadow-lg shadow-indigo-500/25"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
                <a
                  href={SITE_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  <Github size={15} />
                  View on GitHub
                </a>
              </motion.div>
            </div>

            {/* Right: mock dashboard */}
            <motion.div
              variants={shouldReduce ? {} : scaleIn}
              className="relative"
            >
              <div className="rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/10 overflow-hidden shadow-2xl shadow-indigo-500/10"
                style={{ minHeight: 320 }}
              >
                <MockDashboard />
              </div>
              {/* Decorative glow under card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-indigo-600/20 blur-2xl rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. PROBLEM / SOLUTION ──────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <motion.div
            variants={shouldReduce ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">The Story</h2>
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problem */}
            <motion.div
              variants={shouldReduce ? {} : slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 rounded-full bg-indigo-500" />
                <h3 className="text-xl font-semibold text-white">The Problem</h3>
              </div>
              <p className="text-white/60 leading-relaxed">
                AI engineering teams were flying blind. With models spread across OpenAI,
                Anthropic, and Cohere, there was no unified view of LLM costs, latency
                distributions, or token usage. Budget overruns crept up unnoticed, and
                performance regressions went undetected until they hit production. Teams
                were stitching together spreadsheets and ad-hoc scripts just to answer
                basic questions like &ldquo;which model is cheapest for our use case?&rdquo;
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "No cross-provider cost visibility",
                  "Manual latency tracking via logs",
                  "Zero alerting on budget thresholds",
                  "Siloed data across teams",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/50">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              variants={shouldReduce ? {} : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 rounded-full bg-purple-500" />
                <h3 className="text-xl font-semibold text-white">The Solution</h3>
              </div>
              <p className="text-white/60 leading-relaxed">
                Lumina aggregates data from OpenAI, Anthropic, and Cohere via a unified
                API layer that normalises provider-specific schemas into a consistent
                metric format. Real-time interactive charts surface cost trends, p50/p95
                latency, and token throughput at a glance. Configurable alerts fire on
                Slack or email when spend crosses thresholds, and a built-in forecasting
                engine projects monthly costs based on rolling usage patterns.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Unified API layer across 3 providers",
                  "Real-time Recharts dashboards",
                  "Configurable budget alerts",
                  "30-day cost forecasting engine",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/50">
                    <CheckCircle size={13} className="mt-0.5 text-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. TECH STACK ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Tech Stack</h2>
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          </motion.div>

          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
          >
            {techStack.map(({ category, icon: Icon, techs }) => (
              <motion.div
                key={category}
                variants={shouldReduce ? {} : scaleIn}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-indigo-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-3">{category}</h3>
                <ul className="space-y-1.5">
                  {techs.map((tech) => (
                    <li key={tech} className="flex items-center gap-2 text-xs text-white/50">
                      <span className="w-1 h-1 rounded-full bg-indigo-500/60 flex-shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. IMAGE GALLERY ───────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Gallery</h2>
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
          </motion.div>

          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {galleryItems.map(({ label, gradient, border }) => (
              <motion.div
                key={label}
                variants={shouldReduce ? {} : scaleIn}
                className={`relative rounded-2xl bg-gradient-to-br ${gradient} border ${border} overflow-hidden group cursor-pointer`}
                style={{ minHeight: 220 }}
              >
                {/* Fake UI lines */}
                <div className="absolute inset-0 p-5 flex flex-col gap-3 opacity-40">
                  <div className="h-2 w-1/3 rounded-full bg-white/20" />
                  <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
                  <div className="flex-1 grid grid-cols-3 gap-2 mt-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="rounded-lg bg-white/10" />
                    ))}
                  </div>
                </div>
                {/* Label overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-sm font-medium text-white/90">{label}</span>
                </div>
                {/* Hover shimmer */}
                <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. RESULTS & LINKS ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Results</h2>
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto" />
          </motion.div>

          {/* Stat cards */}
          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14"
          >
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={shouldReduce ? {} : scaleIn}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 text-center hover:border-indigo-500/30 transition-colors duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-br from-white to-indigo-400 bg-clip-text text-transparent mb-2">
                  {value}
                </div>
                <div className="text-sm text-white/50">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={shouldReduce ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://lumina.demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              <ExternalLink size={16} />
              View Live Demo
            </a>
            <a
              href={SITE_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium transition-all duration-200 hover:-translate-y-0.5"
            >
              <Github size={16} />
              GitHub Repository
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
