import { airbnb, blogapp, nelami, nextchatter, skillsurge } from '../assets';

export const profile = {
  name: 'Muhammad Hamza',
  role: 'Full Stack Engineer',
  tagline: 'I build accessible, performant web products with a focus on the details users feel but rarely notice.',
  email: 'contact@ihamza.dev',
  emailDisplay: 'contact@ihamza.dev',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=15bL3-pPJqk-wQgGlApxk0jxdngGEGU-o',
};

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'work', title: 'Work' },
];

export const about = [
  `I'm a full-stack engineer based in Pakistan, currently building accounting and inventory tooling at AIO. I care about software that respects the people using it — fast, accessible, free of dark patterns.`,
  `My day-to-day spans React, Next.js, Node, and TypeScript, with a long tail of MERN projects, freelance work on Upwork and Fiverr, and the occasional WordPress build for a client who just wants something that works.`,
  `Outside of work I maintain side projects, mentor juniors, and read more documentation than I probably should.`,
];

export const experiences = [
  {
    role: 'Full Stack Engineer',
    company: 'AIO',
    companyUrl: 'https://aioapp.com',
    period: 'Aug 2024 — Present',
    description:
      'Building inventory and accounting modules used in production by SMB customers. Shipped AI-assisted invoice and recipe submodules that automate manual data entry, and contributed to architectural decisions across a cross-functional team of designers, PMs, and engineers.',
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Upwork',
    companyUrl: 'https://www.upwork.com/freelancers/~01ffcf03e1f1b1848d',
    period: 'Apr 2023 — Present',
    description:
      'Independent freelance work for international clients — MERN apps, Next.js sites, performance and accessibility audits. Long-term engagements built on referrals and repeat clients.',
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB'],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Codify',
    companyUrl: '#',
    period: 'Jun 2022 — Sep 2022',
    description:
      'Shipped features for a production e-commerce platform alongside a small engineering team. Recognized as employee of the month for completing the build ahead of schedule.',
    stack: ['React', 'Express', 'MongoDB'],
  },
  {
    role: 'WordPress Developer',
    company: 'Fiverr',
    companyUrl: '#',
    period: 'Jan 2021 — Jan 2022',
    description:
      'Custom WordPress builds for international clients across e-commerce, services, and content sites. Cross-browser, responsive, and supported post-launch.',
    stack: ['WordPress', 'PHP', 'JavaScript'],
  },
];

export const projects = [
  {
    name: 'Nelami',
    blurb: 'Multi-vendor auction marketplace where buyers bid on listings from independent sellers.',
    stack: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
    image: nelami,
    href: 'https://nelami.ihamza.dev/',
    repo: 'https://github.com/Hamzi-SE/nelami',
  },
  {
    name: 'Skill Surge',
    blurb: 'Subscription learning platform with a Stripe-powered checkout, course management, and an admin dashboard.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: skillsurge,
    href: 'https://skillsurge.vercel.app/',
    repo: 'https://github.com/Hamzi-SE/Course-Platform',
  },
  {
    name: 'NextChatter',
    blurb: 'Real-time chat with friend requests, multi-room messaging, and live notifications over Pusher.',
    stack: ['Next.js', 'TypeScript', 'Redis', 'Tailwind CSS'],
    image: nextchatter,
    href: 'https://nextchatter.vercel.app/',
    repo: 'https://github.com/Hamzi-SE/NextChatter',
  },
  {
    name: 'Airbnb Clone',
    blurb: 'A study in cloning a complex booking flow — search, filtering, listings, reservations.',
    stack: ['Next.js', 'TypeScript', 'MongoDB'],
    image: airbnb,
    href: 'https://nextairbnbclone.vercel.app/',
    repo: 'https://github.com/Hamzi-SE/next13-airbnb-clone',
  },
  {
    name: 'Blog App',
    blurb: 'Cross-platform reading app with a separate web admin for publishing and managing posts.',
    stack: ['React Native', 'Node.js', 'Tailwind CSS'],
    image: blogapp,
    href: null,
    repo: 'https://github.com/Hamzi-SE/full-stack-blog-app',
  },
];

export const socials = [
  { name: 'GitHub', href: 'https://github.com/Hamzi-SE' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hamzi-se' },
  { name: 'Email', href: 'mailto:contact@ihamza.dev' },
];
