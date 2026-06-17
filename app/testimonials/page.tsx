"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, Quote, Users, Award, ThumbsUp } from 'lucide-react';
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

type Relationship = "client" | "colleague" | "manager";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  relationship: Relationship;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "Lumina Labs",
    avatar: "SC",
    rating: 5,
    quote:
      "Alex delivered our AI dashboard ahead of schedule and exceeded every expectation. The attention to performance and UX detail was remarkable — our users noticed immediately. I would hire Alex again without hesitation.",
    relationship: "client",
  },
  {
    id: 2,
    name: "Marcus Williams",
    role: "Lead Engineer",
    company: "ShopWave",
    avatar: "MW",
    rating: 5,
    quote:
      "Working alongside Alex on the headless commerce platform was a masterclass in clean architecture. The codebase is a joy to maintain, and the Lighthouse scores speak for themselves. Truly one of the best engineers I have collaborated with.",
    relationship: "colleague",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Product Manager",
    company: "Aurora Systems",
    avatar: "PP",
    rating: 5,
    quote:
      "Alex translated complex product requirements into an elegant design system that three of our teams now rely on daily. Communication was always clear, timelines were respected, and the quality was consistently outstanding.",
    relationship: "client",
  },
  {
    id: 4,
    name: "James O'Brien",
    role: "Engineering Manager",
    company: "DevFlow Inc.",
    avatar: "JO",
    rating: 5,
    quote:
      "I managed Alex for two years and watched them grow into one of our most impactful engineers. The DevFlow CLI project alone saved our team hundreds of hours. Alex brings both technical depth and genuine care for the end user.",
    relationship: "manager",
  },
  {
    id: 5,
    name: "Lena Müller",
    role: "Senior Designer",
    company: "Freelance",
    avatar: "LM",
    rating: 5,
    quote:
      "As a designer, I am picky about developers who can faithfully implement my designs. Alex is the rare engineer who truly understands spacing, typography, and motion — the final product always looks exactly like the mockup, often better.",
    relationship: "colleague",
  },
  {
    id: 6,
    name: "David Kim",
    role: "Founder",
    company: "Stackr.io",
    avatar: "DK",
    rating: 5,
    quote:
      "We brought Alex in to rescue a struggling Next.js project. Within two weeks the performance issues were resolved, the codebase was refactored, and the team had a clear path forward. Exceptional problem-solving under pressure.",
    relationship: "client",
  },
  {
    id: 7,
    name: "Aisha Johnson",
    role: "Full-Stack Developer",
    company: "Open Source Contributor",
    avatar: "AJ",
    rating: 5,
    quote:
      "Alex reviewed my PR on the DevFlow CLI and provided the most thoughtful, constructive feedback I have ever received. The open-source community needs more contributors with this level of generosity and expertise.",
    relationship: "colleague",
  },
  {
    id: 8,
    name: "Tom Nakamura",
    role: "VP of Engineering",
    company: "Vercel Partner Agency",
    avatar: "TN",
    rating: 5,
    quote:
      "Alex consistently delivers production-ready code that our team can build on confidently. The combination of deep Next.js knowledge, strong design sensibility, and clear communication makes Alex an invaluable partner for any project.",
    relationship: "client",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function relationshipBadge(rel: Relationship) {
  switch (rel) {
    case "client":
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
          Client
        </span>
      );
    case "colleague":
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
          Colleague
        </span>
      );
    case "manager":
      return (
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/15 text-amber-400 border border-amber-500/20">
          Manager
        </span>
      );
  }
}

function StarRating({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < count ? "text-indigo-400 fill-indigo-400" : "text-white/20"}
        />
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/20 shrink-0">
      {initials}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TestimonialsPage() {
  const shouldReduce = useReducedMotion();

  const featured = testimonials.slice(0, 2);
  const rest = testimonials.slice(2);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-6"
          >
            {/* Badge */}
            <motion.div variants={shouldReduce ? {} : fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
                <Quote size={14} />
                Kind Words
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={shouldReduce ? {} : fadeInUp}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-br from-white to-indigo-400 bg-clip-text text-transparent">
                What People Say
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={shouldReduce ? {} : fadeInUp}
              className="max-w-2xl text-white/50 text-lg leading-relaxed"
            >
              Feedback from clients, colleagues, and collaborators I have had
              the privilege of working with.
            </motion.p>

            {/* Stat pills */}
            <motion.div
              variants={shouldReduce ? {} : fadeInUp}
              className="flex flex-wrap items-center justify-center gap-3 mt-2"
            >
              {[
                { label: "8+ Testimonials" },
                { label: "100% 5-Star" },
                { label: "3+ Years" },
              ].map((stat) => (
                <span
                  key={stat.label}
                  className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/70 text-sm font-medium"
                >
                  {stat.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. FEATURED TESTIMONIALS ────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featured.map((t, idx) => (
              <motion.div
                key={t.id}
                variants={
                  shouldReduce
                    ? {}
                    : idx % 2 === 0
                    ? slideInLeft
                    : slideInRight
                }
                className="bg-white/[0.04] border border-indigo-500/20 rounded-2xl p-8 flex flex-col gap-6"
              >
                {/* Large quote icon */}
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <Quote size={24} className="text-indigo-400" />
                </div>

                {/* Quote text */}
                <p className="text-lg text-white/80 italic leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Stars */}
                <StarRating count={t.rating} size={18} />

                {/* Author row */}
                <div className="flex items-center gap-3 flex-wrap">
                  <Avatar initials={t.avatar} />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold leading-tight">
                      {t.name}
                    </p>
                    <p className="text-white/50 text-sm">
                      {t.role} @ {t.company}
                    </p>
                  </div>
                  {relationshipBadge(t.relationship)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. ALL TESTIMONIALS GRID ─────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <motion.div
            variants={shouldReduce ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              More Testimonials
            </h2>
            <div className="mt-3 h-px w-16 bg-gradient-to-r from-indigo-500 to-transparent" />
          </motion.div>

          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rest.map((t) => (
              <motion.div
                key={t.id}
                variants={shouldReduce ? {} : scaleIn}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 flex flex-col gap-5 hover:border-indigo-500/30 transition-all duration-300"
              >
                {/* Small quote icon */}
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <Quote size={16} className="text-indigo-400/70" />
                </div>

                {/* Quote text */}
                <p className="text-white/70 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Stars */}
                <StarRating count={t.rating} size={13} />

                {/* Author row */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-indigo-500/20 shrink-0">
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm leading-tight">
                      {t.name}
                    </p>
                    <p className="text-white/40 text-xs">
                      {t.role} @ {t.company}
                    </p>
                  </div>
                  {relationshipBadge(t.relationship)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. STATS BANNER ─────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Users,
                value: "8+",
                label: "Happy Clients",
              },
              {
                icon: Award,
                value: "100%",
                label: "Satisfaction Rate",
              },
              {
                icon: ThumbsUp,
                value: "3+",
                label: "Years Experience",
              },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={shouldReduce ? {} : fadeInUp}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:border-indigo-500/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                  <stat.icon size={28} className="text-indigo-400" />
                </div>
                <p className="text-5xl font-bold bg-gradient-to-br from-white to-indigo-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-white/50 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. CTA SECTION ──────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="relative bg-white/[0.04] border border-indigo-500/20 rounded-3xl p-12 md:p-16 flex flex-col items-center text-center gap-6 overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Ready to Work Together?
              </h2>
              <p className="max-w-xl text-white/50 text-lg leading-relaxed">
                Let us build something great. I am currently available for
                freelance and contract work.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
