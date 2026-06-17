"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight, Rss } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft } from "@/lib/motion";

// ─── Blog post data ───────────────────────────────────────────────────────────

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
  slug: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Building a Design System from Scratch with Radix UI and Tailwind",
    date: "June 12, 2025",
    readingTime: "8 min read",
    tags: ["Design Systems", "React", "Tailwind"],
    excerpt:
      "A deep dive into how I built Aurora — a token-driven component library with 60+ accessible components, dark/light theming, and full Storybook documentation.",
    slug: "design-system-radix-tailwind",
  },
  {
    id: 2,
    title: "The Art of Micro-Animations: Framer Motion Patterns I Use Every Day",
    date: "May 28, 2025",
    readingTime: "6 min read",
    tags: ["Animation", "Framer Motion", "UX"],
    excerpt:
      "Subtle motion design can transform a good UI into a great one. Here are the animation patterns I reach for most often and why they work.",
    slug: "framer-motion-patterns",
  },
  {
    id: 3,
    title: "tRPC vs REST vs GraphQL: Choosing the Right API Layer in 2025",
    date: "May 10, 2025",
    readingTime: "10 min read",
    tags: ["API", "tRPC", "Architecture"],
    excerpt:
      "After building production apps with all three approaches, here is my honest take on when to use each — and the hidden trade-offs nobody talks about.",
    slug: "trpc-rest-graphql-2025",
  },
  {
    id: 4,
    title: "Edge Functions and the Future of Server-Side Rendering",
    date: "April 22, 2025",
    readingTime: "7 min read",
    tags: ["Next.js", "Edge", "Performance"],
    excerpt:
      "Vercel Edge Functions changed how I think about rendering. This post explores the mental model shift and practical patterns for edge-first Next.js apps.",
    slug: "edge-functions-ssr",
  },
  {
    id: 5,
    title: "PostgreSQL Row-Level Security: The Missing Guide for Developers",
    date: "April 5, 2025",
    readingTime: "12 min read",
    tags: ["PostgreSQL", "Security", "Backend"],
    excerpt:
      "RLS is one of the most powerful and underused features in PostgreSQL. I will walk you through real-world patterns for multi-tenant SaaS applications.",
    slug: "postgres-rls-guide",
  },
  {
    id: 6,
    title: "My 2025 Developer Toolkit: Tools, Extensions, and Workflows",
    date: "March 18, 2025",
    readingTime: "5 min read",
    tags: ["Productivity", "Tools", "Workflow"],
    excerpt:
      "A curated list of the tools, VS Code extensions, terminal setup, and daily workflows that keep me productive as a full-stack developer.",
    slug: "developer-toolkit-2025",
  },
];

const featuredPost = posts[0];
const remainingPosts = posts.slice(1);

// ─── Component ───────────────────────────────────────────────────────────────

export default function BlogPage() {
  const shouldReduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              variants={shouldReduce ? {} : fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6"
            >
              <Rss size={14} />
              Writing &amp; Thoughts
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={shouldReduce ? {} : fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-br from-white to-indigo-400 bg-clip-text text-transparent">
                The Blog
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={shouldReduce ? {} : fadeInUp}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
            >
              Deep dives into full-stack development, design systems, and the
              craft of building great software.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED POST ────────────────────────────────────────────────── */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? {} : slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 md:p-10 overflow-hidden hover:border-indigo-500/30 transition-all duration-300">
              {/* Subtle inner glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left — gradient image placeholder */}
                <div className="relative h-56 md:h-72 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-indigo-900/20 border border-white/[0.06] flex items-center justify-center order-2 md:order-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10" />
                  <div className="relative z-10 text-center px-6">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-3">
                      <Rss size={28} className="text-indigo-400" />
                    </div>
                    <p className="text-white/30 text-sm">Featured Article</p>
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-1">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="w-1 h-1 rounded-full bg-indigo-400/20" />
                    ))}
                  </div>
                </div>

                {/* Right — content */}
                <div className="order-1 md:order-2">
                  {/* Featured badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
                    ✦ Featured
                  </span>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                    {featuredPost.title}
                  </h2>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {featuredPost.readingTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Tag size={13} />
                      {featuredPost.tags[0]}
                    </span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-white/60 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>

                  {/* CTA */}
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors duration-200 group"
                  >
                    Read Article
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ALL ARTICLES GRID ────────────────────────────────────────────── */}
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
            <h2 className="text-2xl md:text-3xl font-bold text-white">All Articles</h2>
            <div className="mt-2 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {remainingPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={shouldReduce ? {} : scaleIn}
                className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-indigo-300 transition-colors duration-200">
                  {post.title}
                </h3>

                {/* Meta row */}
                <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {post.date}
                  </span>
                  <span className="w-px h-3 bg-white/10" />
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readingTime}
                  </span>
                </div>

                {/* Excerpt */}
                <p className="text-white/50 text-sm leading-relaxed line-clamp-3 flex-1 mb-5">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200 group/link mt-auto"
                >
                  Read more
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform duration-200"
                  />
                </a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ───────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? {} : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-2xl p-10 md:p-14 text-center overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-indigo-600/10 rounded-full blur-3xl" />
              </div>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center mx-auto mb-6">
                  <Rss size={24} className="text-indigo-400" />
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Stay in the Loop
                </h2>

                {/* Subtext */}
                <p className="text-white/50 mb-8 max-w-md mx-auto">
                  Get notified when I publish new articles — no spam, unsubscribe
                  anytime.
                </p>

                {/* Email form */}
                {subscribed ? (
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 font-medium">
                    ✓ You&apos;re subscribed! Thanks for joining.
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white w-full placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-200 text-sm"
                    />
                    <button
                      type="submit"
                      className="flex-shrink-0 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors duration-200 shadow-lg shadow-indigo-500/20 whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
