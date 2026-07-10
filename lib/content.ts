// ============================================================
// SITE CONTENT — everything the site displays lives here.
// Lines marked TODO still need your real details: edit the
// value, push to main, and the live site updates automatically.
// ============================================================

export const site = {
  brand: "Harsh",
  name: "Harsh Gajbhiye",
  role: "Aspiring Web Developer",
  availability: "Open to internships",
  intro:
    "I'm a student and self-taught web developer who loves turning ideas into clean, fast websites. Currently learning by building — one project at a time.",
  email: "gajju2501@gmail.com",
  phone: "+91 00000 00000", // TODO: your phone number (or delete where unused)
  location: "India", // TODO: your city
  socials: [
    { label: "GitHub", href: "https://github.com/harshgajbhiye2005-source" },
    { label: "LinkedIn", href: "#" }, // TODO: your LinkedIn URL
    { label: "X / Twitter", href: "#" }, // TODO: or remove
    { label: "Instagram", href: "#" }, // TODO: or remove
  ],
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#services" },
  { label: "About me", href: "#about" },
];

// Shown as the stack of cards in the dark "skills" section.
export const services = [
  {
    title: "Web Development",
    description:
      "Building responsive, modern websites with React and Next.js — from a blank folder to a deployed site people can actually use.",
    tags: ["React", "Next.js", "Tailwind", "Responsive", "Deployment"],
  },
  {
    title: "Frontend Fundamentals",
    description:
      "Strong foundations in HTML, CSS, and JavaScript — semantic markup, layouts that don't break, and interfaces that feel smooth.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "Accessibility"],
  },
  {
    title: "Problem Solving",
    description:
      "Practicing data structures and algorithms, debugging patiently, and reading docs before asking — the unglamorous skills that ship projects.",
    tags: ["DSA", "Debugging", "Git", "Logic", "Persistence"],
  },
  {
    title: "Always Learning",
    description:
      "New tools don't scare me. I pick up frameworks and concepts fast, learn in public, and improve every project over the last one.",
    tags: ["Curiosity", "Self-taught", "Consistency", "Growth", "Open Source"],
  },
];

// Featured projects list — title / year / tech or context.
export const projects = [
  { title: "Portfolio Website", year: "2026", client: "Next.js · Tailwind" },
  // TODO: replace these with your real projects
  { title: "Project Two", year: "2026", client: "Coming soon" },
  { title: "Project Three", year: "2025", client: "Coming soon" },
  { title: "Project Four", year: "2025", client: "Coming soon" },
];

// Rendered as the wordmark grid — used here as a tech-stack wall.
export const clientLogos = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Git & GitHub",
  "Node.js",
];

export const whyCards = [
  {
    tag: "Curious",
    text: "I ask why until I understand — then build it to prove it.",
    tone: "from-neutral-400 to-neutral-700",
  },
  {
    tag: "Fast learner",
    text: "New stack, new tool, new concept — give me a week, not a semester.",
    tone: "from-neutral-500 to-neutral-800",
  },
  {
    tag: "Reliable",
    text: "I show up, hit deadlines, and communicate before problems grow.",
    tone: "from-neutral-300 to-neutral-600",
  },
  {
    tag: "Team player",
    text: "Happy to review, be reviewed, and learn from people ahead of me.",
    tone: "from-neutral-600 to-neutral-900",
  },
];

// TODO: swap in real quotes from mentors, teachers, or teammates.
export const testimonials = [
  {
    quote:
      "Harsh picks things up remarkably fast and isn't afraid to dig into problems until they're actually solved.",
    name: "Mentor Name",
    role: "Mentor",
  },
  {
    quote:
      "Dependable and genuinely curious — the kind of teammate who makes group projects easier, not harder.",
    name: "Teammate Name",
    role: "Project teammate",
  },
  {
    quote:
      "Consistent effort and steady improvement across the whole course. A pleasure to teach.",
    name: "Teacher Name",
    role: "Instructor",
  },
];

// Rendered under "My Achievements" — education and milestones work well here.
export const achievements = [
  // TODO: replace with your real education / milestones
  { year: "2023", title: "Higher Secondary", award: "Completed HSC" },
  { year: "2025", title: "B.Tech / Degree", award: "Currently pursuing" },
  { year: "2026", title: "First deployment", award: "Portfolio live on GitHub Pages" },
];

export const footerColumns = [
  {
    heading: "Quick links",
    links: ["Home", "Projects", "Skills", "About me"],
  },
  {
    heading: "Find me",
    links: ["GitHub", "LinkedIn", "Email", "Resume"],
  },
  {
    heading: "Skills",
    links: [
      "Web Development",
      "Frontend Fundamentals",
      "Problem Solving",
      "Always Learning",
    ],
  },
];
