// ============================================================
// SITE CONTENT. Everything the site displays lives here.
// Edit a value, push to main, and the live site updates.
//
// House style: no em-dashes, and at most one middle dot (·) per
// line. Hero intro stays at 20 words or fewer so the hero always
// fits the first viewport.
// ============================================================

export const site = {
  brand: "Harsh",
  name: "Harsh Gajbhiye",
  role: "Digital Marketing Graduate",
  availability: "Open to opportunities",
  intro:
    "BBA in Digital Marketing from MIT-WPU. I build websites for real clients, with an athlete's discipline behind the work.",
  email: "harsh.gajbhiye2005@gmail.com",
  phone: "+91 95038 72686",
  location: "Nagpur, Maharashtra",
  resume: "/Harsh-Gajbhiye-Resume.pdf",
  // One label per intent, used identically in the nav and the hero.
  contactCta: "Get in touch",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-gajbhiye" },
    { label: "GitHub", href: "https://github.com/harshgajbhiye2005-source" },
  ],
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#services" },
  { label: "About me", href: "#about" },
];

// Rendered as a bento grid. `span` drives the cell width on desktop so the
// grid has rhythm instead of four identical tiles.
export type Service = {
  title: string;
  description: string;
  tags: string[];
  span: "wide" | "narrow";
};

export const services: Service[] = [
  {
    title: "Digital Marketing",
    description:
      "BBA in Digital Marketing from MIT-WPU with an 8/10 GPA. Grounded in strategy, branding, and campaigns that actually reach people.",
    tags: ["Strategy", "Branding", "Social Media", "SEO", "Campaigns"],
    span: "wide",
  },
  {
    title: "Website Development",
    description:
      "I design and ship websites for real clients, from first brief to live launch.",
    tags: ["Client Work", "Responsive", "Design", "Launch"],
    span: "narrow",
  },
  {
    title: "Client Servicing",
    description:
      "Two internships in operations and client servicing: projects moving, clients informed, details handled.",
    tags: ["Communication", "Coordination", "Delivery"],
    span: "narrow",
  },
  {
    title: "An Athlete's Discipline",
    description:
      "Cricket at national and international level teaches what no classroom can: consistency, pressure handling, and showing up every day.",
    tags: ["Teamwork", "Consistency", "Pressure", "Leadership"],
    span: "wide",
  },
];

// Featured work. `href` links the card out to a live site; `links` renders a
// row of labeled links inside the card. `lead` marks the one project that
// gets the large feature treatment.
export type Project = {
  title: string;
  status: string;
  client: string;
  summary: string;
  lead?: boolean;
  href?: string;
  links?: { label: string; href: string }[];
  // Real screenshots of the live sites. Intrinsic dimensions are declared so
  // the browser reserves space and nothing shifts while they load.
  image?: { src: string; width: number; height: number; alt: string };
};

export const projects: Project[] = [
  {
    title: "PS Group",
    status: "Completed",
    client: "Client work",
    summary:
      "A marketing site built and shipped end to end, from the first brief through to launch.",
    lead: true,
    href: "https://psgroupnagpur.tiiny.site/",
    image: {
      src: "/work-psgroup.jpg",
      width: 1200,
      height: 750,
      alt: "The PS Group Nagpur homepage, headlined Three trusted services. One family.",
    },
  },
  {
    title: "Artistically Yours",
    status: "In progress",
    client: "Client work",
    summary:
      "A site in build for a Nagpur branding and design studio, live but still growing.",
    href: "https://harshgajbhiye2005-source.github.io/artisticallyyours/",
    image: {
      src: "/work-artisticallyyours.jpg",
      width: 1100,
      height: 688,
      alt: "The Artistically Yours homepage, headlined Build what you're proud of.",
    },
  },
  {
    title: "Social Content",
    status: "Internship",
    client: "Artistically Yours",
    summary:
      "On-camera work and content concepts, published on the client's Instagram.",
    links: [
      {
        label: "On-camera reel",
        href: "https://www.instagram.com/reel/DMAg7UsztpN/",
      },
      {
        label: "Concept 1",
        href: "https://www.instagram.com/reel/DNH8QYXTjU-/",
      },
      {
        label: "Concept 2",
        href: "https://www.instagram.com/reel/DLxQTcTT8oD/",
      },
    ],
  },
];

export const whyCards = [
  {
    tag: "Disciplined",
    text: "Trained like an athlete. Consistent effort, no shortcuts, every single day.",
  },
  {
    tag: "Client-first",
    text: "Internships in client servicing taught me to listen first and deliver on time.",
  },
  {
    tag: "Fast learner",
    text: "New tools, new briefs, new industries. Give me a week, not a semester.",
  },
  {
    tag: "Team player",
    text: "Years of team sport: communicate early, back your teammates, win together.",
  },
];

// Rendered as a stat strip: large value, small label beneath.
export const achievements = [
  {
    label: "Education",
    value: "BBA, Digital Marketing",
    detail: "MIT-WPU · 8/10 GPA",
  },
  {
    label: "Cricket",
    value: "International & National",
    detail:
      "India U-19, Karwan Global Cricket League, Dubai · Represented Maharashtra, 64th National School Games",
  },
  {
    label: "Badminton",
    value: "District Level",
    detail: "Competitive player",
  },
  {
    label: "Experience",
    value: "2 Internships",
    detail: "Operations · Client servicing",
  },
];
