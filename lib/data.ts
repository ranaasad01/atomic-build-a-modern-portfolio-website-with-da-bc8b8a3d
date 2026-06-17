// ─── Brand constants ────────────────────────────────────────────────────────
export const SITE_NAME = "Alex Morgan";
export const SITE_TAGLINE = "Full-Stack Developer & Designer";
export const SITE_EMAIL = "hello@alexmorgan.dev";
export const SITE_GITHUB = "https://github.com/alexmorgan";
export const SITE_LINKEDIN = "https://linkedin.com/in/alexmorgan";
export const SITE_TWITTER = "https://twitter.com/alexmorgan";

// ─── Navigation ─────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Project Detail", href: "/projects/detail" },
];

export const navCTA: NavLink = {
  label: "Hire Me",
  href: "#contact",
};

// ─── Shared TypeScript types ─────────────────────────────────────────────────
export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0–100
  category: "frontend" | "backend" | "tooling" | "design";
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail";
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: SITE_GITHUB, icon: "github" },
  { label: "LinkedIn", href: SITE_LINKEDIN, icon: "linkedin" },
  { label: "Twitter", href: SITE_TWITTER, icon: "twitter" },
  { label: "Email", href: `mailto:${SITE_EMAIL}`, icon: "mail" },
];
