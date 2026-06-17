"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, ExternalLink, Code2, Palette, Server, Wrench, Star, CheckCircle, Download, Sparkles, ArrowUp } from 'lucide-react';
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_EMAIL,
  SITE_GITHUB,
  SITE_LINKEDIN,
  SITE_TWITTER,
  socialLinks,
} from "@/lib/data";

// ─── Inline data ─────────────────────────────────────────────────────────────

const projects = [
  {
    slug: "lumina-ai",
    title: "Lumina AI Dashboard",
    tagline: "Real-time analytics for AI model performance",
    description:
      "A full-stack SaaS dashboard that visualises token usage, latency, and cost across multiple LLM providers. Built with Next.js 14, Prisma, and Recharts.",
    tags: ["Next.js", "TypeScript", "Prisma", "Recharts", "Tailwind"],
    image: "https://shopwave.com/thumbs/open-graph-56769_opengraph-square.jpg",
    liveUrl: "https://lumina.demo",
    githubUrl: SITE_GITHUB,
    featured: true,
  },
  {
    slug: "shopwave",
    title: "ShopWave E-Commerce",
    tagline: "Headless commerce with blazing-fast UX",
    description:
      "A headless Shopify storefront powered by Next.js App Router and the Storefront API. Achieves 98 Lighthouse score with edge-cached product pages.",
    tags: ["Next.js", "Shopify", "GraphQL", "Framer Motion", "Vercel"],
    image: "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0t1cvuttkbzeuz43uytv.png",
    liveUrl: "https://shopwave.demo",
    githubUrl: SITE_GITHUB,
    featured: true,
  },
  {
    slug: "devflow",
    title: "DevFlow CLI",
    tagline: "Automate your Git workflow in seconds",
    description:
      "An open-source Node.js CLI tool with 2 k+ GitHub stars that scaffolds conventional commits, changelogs, and semantic versioning in one command.",
    tags: ["Node.js", "TypeScript", "Commander.js", "Ink", "Open Source"],
    image: "https://wiki.gccollab.ca/images/5/54/Aurora_Logo.png",
    liveUrl: undefined,
    githubUrl: SITE_GITHUB,
    featured: true,
  },
  {
    slug: "aurora-design",
    title: "Aurora Design System",
    tagline: "A token-driven component library for teams",
    description:
      "A Figma-to-code design system with 60+ accessible React components, dark/light theming, and Storybook documentation used by 3 product teams.",
    tags: ["React", "Storybook", "Radix UI", "CSS Variables", "Figma"],
    image: "https://www.uxpin.com/studio/wp-content/uploads/2024/04/next-js-vs-react.png",
    liveUrl: "https://aurora.demo",
    githubUrl: SITE_GITHUB,
    featured: false,
  },
];

const skills = [
  { name: "React & Next.js", level: 95, category: "frontend" as const },
  { name: "TypeScript", level: 92, category: "frontend" as const },
  { name: "Tailwind CSS", level: 90, category: "frontend" as const },
  { name: "Framer Motion", level: 82, category: "frontend" as const },
  { name: "Node.js", level: 88, category: "backend" as const },
  { name: "PostgreSQL", level: 80, category: "backend" as const },
  { name: "GraphQL", level: 78, category: "backend" as const },
  { name: "Prisma / Drizzle", level: 84, category: "backend" as const },
  { name: "Figma", level: 85, category: "design" as const },
  { name: "Design Systems", level: 80, category: "design" as const },
  { name: "Docker", level: 74, category: "tooling" as const },
  { name: "CI/CD & Vercel", level: 86, category: "tooling" as const },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO at Luminary Labs",
    avatar: "https://picsum.photos/seed/05b6053c41a2/800/600",
    quote:
      "Alex delivered a production-ready dashboard in 6 weeks that our in-house team estimated at 4 months. The code quality and attention to UX detail were exceptional.",
    stars: 5,
  },
  {
    id: 2,
    name: "Marcus Webb",
    role: "Founder, ShopWave",
    avatar: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/aewahyauhdstskbbuq43",
    quote:
      "Our conversion rate jumped 23% after Alex rebuilt our storefront. The performance improvements alone paid for the project in the first month.",
    stars: 5,
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Lead Designer at Forma",
    avatar: "https://media.licdn.com/dms/image/v2/D5622AQE3NpM1FP01Yg/feedshare-shrink_800/B56Zf4pvKcGUAg-/0/1752223383746?e=2147483647&v=beta&t=C11dC6M36dpAKpcbBRMtusPrnkgE-cNJfHc93ZNpFoQ",
    quote:
      "Working with Alex is rare — someone who bridges design and engineering fluently. The Aurora design system he built is still the backbone of our product.",
    stars: 5,
  },
];

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end web applications built with Next.js, TypeScript, and modern backend stacks. From MVP to production-grade architecture.",
    highlights: ["Next.js 14 App Router", "REST & GraphQL APIs", "Database design & ORM"],
  },
  {
    icon: Palette,
    title: "UI/UX Design & Implementation",
    description:
      "Pixel-perfect interfaces that balance aesthetics with usability. I design in Figma and implement with Tailwind and Framer Motion.",
    highlights: ["Figma prototyping", "Design systems", "Micro-interactions"],
  },
  {
    icon: Server,
    title: "Performance & Architecture",
    description:
      "Auditing and refactoring existing codebases for speed, scalability, and maintainability. Lighthouse 90+ is the baseline.",
    highlights: ["Core Web Vitals", "Edge & CDN strategy", "Code splitting"],
  },
  {
    icon: Wrench,
    title: "Developer Tooling",
    description:
      "Custom CLI tools, monorepo setups, CI/CD pipelines, and internal developer platforms that multiply team velocity.",
    highlights: ["CI/CD automation", "Monorepo (Turborepo)", "Open-source tooling"],
  },
];

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "40+", label: "Projects shipped" },
  { value: "98", label: "Avg Lighthouse score" },
  { value: "2k+", label: "GitHub stars" },
];

const categoryColors: Record<string, string> = {
  frontend: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20",
  backend: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  design: "bg-pink-500/15 text-pink-300 border-pink-500/20",
  tooling: "bg-amber-500/15 text-amber-300 border-amber-500/20",
};

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

// ─── Sub-components (inline) ──────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
      <Sparkles size={11} />
      {children}
    </div>
  );
}

function SkillBar({ name, level, category }: { name: string; level: number; category: string }) {
  const shouldReduce = useReducedMotion();
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-white/70 group-hover:text-white transition-colors">{name}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full border ${categoryColors[category] ?? "bg-white/10 text-white/50 border-white/10"}`}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={shouldReduce ? { duration: 0 } : { duration: 0.9, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function HomePage() {
  const shouldReduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const filteredSkills =
    activeCategory === "all" ? skills : skills.filter((s) => s.category === activeCategory);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-[#0f0f0f] text-white overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-400/6 rounded-full blur-[80px]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.div variants={shouldReduce ? {} : fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/60 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for new projects
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={shouldReduce ? {} : fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08]"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {SITE_NAME}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={shouldReduce ? {} : fadeInUp}
              className="text-xl sm:text-2xl text-white/50 font-light max-w-2xl"
            >
              {SITE_TAGLINE} — crafting fast, beautiful, and accessible digital products.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={shouldReduce ? {} : fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4 mt-2"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-200 shadow-lg shadow-indigo-500/25"
                whileHover={shouldReduce ? {} : { scale: 1.04, y: -2 }}
                whileTap={shouldReduce ? {} : { scale: 0.97 }}
              >
                View My Work
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-white/80 hover:text-white font-medium transition-all duration-200"
                whileHover={shouldReduce ? {} : { scale: 1.04, y: -2 }}
                whileTap={shouldReduce ? {} : { scale: 0.97 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              variants={shouldReduce ? {} : fadeInUp}
              className="flex items-center gap-3 mt-2"
            >
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-lg bg-white/[0.05] hover:bg-white/[0.10] border border-white/[0.07] flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
                    whileHover={shouldReduce ? {} : { scale: 1.1, y: -2 }}
                    whileTap={shouldReduce ? {} : { scale: 0.93 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
            animate={shouldReduce ? {} : { scaleY: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-16 border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={shouldReduce ? {} : scaleIn}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-white/50 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 group-hover:text-white/60 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: image + decoration */}
            <motion.div
              variants={shouldReduce ? {} : slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <img
                  src="https://media.licdn.com/dms/image/v2/C5603AQE-oMdEA4-lZg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516522176575?e=2147483647&v=beta&t=NNza9NbD-soKscrNPIBTk-qTQ2z583NAZI6yUgYwXZ0"
                  alt="Alex Morgan — Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 lg:right-8 bg-[#1a1a2e] border border-white/[0.08] rounded-2xl p-4 shadow-2xl"
                whileHover={shouldReduce ? {} : { scale: 1.04 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <CheckCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Open to Work</div>
                    <div className="text-white/40 text-xs">Remote & Contract</div>
                  </div>
                </div>
              </motion.div>
              {/* Decorative glow */}
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
            </motion.div>

            {/* Right: copy */}
            <motion.div
              variants={shouldReduce ? {} : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              <motion.div variants={shouldReduce ? {} : fadeInUp}>
                <SectionLabel>About Me</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
                  I build products people{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    love to use
                  </span>
                </h2>
              </motion.div>

              <motion.p
                variants={shouldReduce ? {} : fadeInUp}
                className="text-white/55 text-lg leading-relaxed"
              >
                I'm a full-stack developer and designer based in San Francisco with 5+ years of
                experience turning complex problems into elegant, performant web applications. I care
                deeply about the intersection of engineering and design — code that's clean, UIs that
                feel alive.
              </motion.p>

              <motion.p
                variants={shouldReduce ? {} : fadeInUp}
                className="text-white/55 leading-relaxed"
              >
                Previously at Stripe and Vercel, I've shipped products used by millions. Now I work
                independently with startups and scale-ups who want senior-level execution without the
                overhead of a full agency.
              </motion.p>

              <motion.div
                variants={shouldReduce ? {} : fadeInUp}
                className="flex flex-wrap gap-3 pt-2"
              >
                {["Next.js", "TypeScript", "Figma", "Node.js", "PostgreSQL"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white/60 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={shouldReduce ? {} : fadeInUp} className="flex gap-4 pt-2">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors shadow-lg shadow-indigo-500/20"
                  whileHover={shouldReduce ? {} : { scale: 1.04, y: -1 }}
                  whileTap={shouldReduce ? {} : { scale: 0.97 }}
                >
                  Work With Me
                  <ArrowRight size={14} />
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-white/70 hover:text-white text-sm font-medium transition-all"
                  whileHover={shouldReduce ? {} : { scale: 1.04, y: -1 }}
                  whileTap={shouldReduce ? {} : { scale: 0.97 }}
                >
                  <Download size={14} />
                  Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.div variants={shouldReduce ? {} : fadeInUp}>
              <SectionLabel>What I Do</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
                Services built for{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  real impact
                </span>
              </h2>
              <p className="text-white/45 text-lg mt-4 max-w-2xl mx-auto">
                From zero-to-one MVPs to performance overhauls, I bring senior-level craft to every
                engagement.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={shouldReduce ? {} : fadeInUp}
                  whileHover={shouldReduce ? {} : { y: -4, scale: 1.01 }}
                  className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition-colors">
                      <Icon size={22} className="text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-white/50 leading-relaxed mb-5">{service.description}</p>
                    <ul className="space-y-2">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-white/40">
                          <CheckCircle size={13} className="text-indigo-400 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.div variants={shouldReduce ? {} : fadeInUp}>
              <SectionLabel>Skills</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
                My technical{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  toolkit
                </span>
              </h2>
            </motion.div>
          </motion.div>

          {/* Category filter */}
          <motion.div
            variants={shouldReduce ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {["all", "frontend", "backend", "design", "tooling"].map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "bg-white/[0.04] border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.08]"
                }`}
                whileHover={shouldReduce ? {} : { scale: 1.04 }}
                whileTap={shouldReduce ? {} : { scale: 0.96 }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-7"
          >
            {filteredSkills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.div variants={shouldReduce ? {} : fadeInUp}>
              <SectionLabel>Projects</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
                Work I'm{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  proud of
                </span>
              </h2>
              <p className="text-white/45 text-lg mt-4 max-w-xl mx-auto">
                A selection of recent projects spanning SaaS, e-commerce, open-source, and design
                systems.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, i) => (
              <motion.article
                key={project.slug}
                variants={shouldReduce ? {} : fadeInUp}
                whileHover={shouldReduce ? {} : { y: -6 }}
                className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.07] hover:border-indigo-500/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/30 to-transparent" />
                  {project.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-medium">
                      <Star size={10} fill="currentColor" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-indigo-400/80 text-sm mb-3">{project.tagline}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.07] text-white/50 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
                        whileHover={shouldReduce ? {} : { scale: 1.04 }}
                        whileTap={shouldReduce ? {} : { scale: 0.97 }}
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-white/70 hover:text-white text-sm font-medium transition-all"
                        whileHover={shouldReduce ? {} : { scale: 1.04 }}
                        whileTap={shouldReduce ? {} : { scale: 0.97 }}
                      >
                        <Github size={13} />
                        Source
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.div variants={shouldReduce ? {} : fadeInUp}>
              <SectionLabel>Testimonials</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
                What clients{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  say
                </span>
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={shouldReduce ? {} : fadeInUp}
                whileHover={shouldReduce ? {} : { y: -4 }}
                className="relative p-7 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-indigo-500/20 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-white/60 leading-relaxed text-sm mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <div className="text-white text-sm font-medium">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div
              variants={shouldReduce ? {} : slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              <div>
                <SectionLabel>Contact</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">
                  Let's build something{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    great
                  </span>
                </h2>
              </div>
              <p className="text-white/50 text-lg leading-relaxed">
                I'm currently available for freelance projects, contract work, and advisory roles.
                Whether you have a fully scoped brief or just an idea, I'd love to hear from you.
              </p>
              <div className="flex flex-col gap-4 pt-2">
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all">
                    <Mail size={16} className="text-indigo-400" />
                  </div>
                  <span className="text-sm">{SITE_EMAIL}</span>
                </a>
                <a
                  href={SITE_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all">
                    <Github size={16} className="text-indigo-400" />
                  </div>
                  <span className="text-sm">github.com/alexmorgan</span>
                </a>
                <a
                  href={SITE_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all">
                    <Linkedin size={16} className="text-indigo-400" />
                  </div>
                  <span className="text-sm">linkedin.com/in/alexmorgan</span>
                </a>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              variants={shouldReduce ? {} : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {formSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 p-12 rounded-2xl bg-white/[0.03] border border-white/[0.07] text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Message sent!</h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <motion.button
                    onClick={() => setFormSent(false)}
                    className="mt-2 px-5 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.08] text-white/70 hover:text-white text-sm transition-all"
                    whileHover={shouldReduce ? {} : { scale: 1.04 }}
                    whileTap={shouldReduce ? {} : { scale: 0.97 }}
                  >
                    Send another
                  </motion.button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-5 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
                >
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm text-white/50 font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleFormChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm text-white/50 font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleFormChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm text-white/50 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleFormChange}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                    whileHover={shouldReduce ? {} : { scale: 1.02, y: -1 }}
                    whileTap={shouldReduce ? {} : { scale: 0.98 }}
                  >
                    Send Message
                    <ArrowRight size={15} />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}