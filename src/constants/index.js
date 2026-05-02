import { airbnb, blogapp, discord, nelami, nextchatter, skillsurge } from '../assets';

export const profile = {
  name: 'Muhammad Hamza',
  role: 'Software Engineer',
  tagline:
    'Three plus years building scalable, real-time, AI-powered web apps with payment integrations. Based in Pakistan.',
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
  `I'm Hamza, a full-stack engineer based in Pakistan with over three years of experience shipping scalable web apps. I lean toward real-time, AI-powered platforms with payment integrations, and care a lot about clean architecture, performance, and the day-to-day feel of using software.`,
  `Right now I'm at AIO, leading frontend for the new Menu Manager module. I previously led the frontend for Inventory and Accounting, including the AI-assisted invoice and recipe submodules. Before AIO, I freelanced on Upwork as a Top-Rated developer with a 100% client satisfaction rate.`,
  `I graduated from Air University with a Bachelors in Software Engineering. When I'm not coding, I like to play video games, spend time with my family, and hang out with my friends. I'm always open to connecting with others, so feel free to reach out!`,
];

export const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'AIO',
    companyUrl: 'https://aioapp.com',
    period: 'Aug 2024 to Present',
    description:
      'Leading frontend development for the new Menu Manager module. Previously led frontend on the Inventory and Accounting modules in production for SMB customers, including the AI-assisted invoice and recipe submodules that automate manual data entry. Work in cross-functional Scrum teams alongside designers, PMs, and backend engineers to ship features end-to-end.',
    stack: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'AWS'],
  },
  {
    role: 'Top-Rated Full-Stack Developer',
    company: 'Upwork',
    companyUrl: 'https://www.upwork.com/freelancers/~01ffcf03e1f1b1848d',
    period: 'Apr 2023 to Aug 2024',
    description:
      'Independent freelance work for international clients with a 100% satisfaction rate across multiple long-running engagements. Designed and shipped a MERN app for an AI essay evaluator with Stripe payments, and contributed an example to an open-source framework.',
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Codify',
    companyUrl: 'https://codify.pk/',
    period: 'Jun 2022 to Sep 2022',
    description:
      'Built and shipped E-commerce and Auction websites on the MERN stack with Socket.IO for live updates. Owned the architecture for the Auction site and worked with the team to ship features end-to-end.',
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
  },
  {
    role: 'WordPress Developer',
    company: 'Fiverr',
    companyUrl: 'https://www.fiverr.com/',
    period: '2021 to 2023',
    description:
      'Partnered with another freelancer to ship multiple WordPress sites for clients around the world. Held a 99.9% positive feedback rate by sticking to clean structure and basic coding hygiene.',
    stack: ['WordPress', 'CSS', 'PHP', 'JavaScript'],
  },
];

export const projects = [
  {
    name: 'Nelami',
    blurb:
      'Multi-vendor MERN auction marketplace with bidding, seller listings, admin moderation, Stripe checkout, Cloudinary uploads, Nodemailer email, and Socket.IO chat.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.IO'],
    image: nelami,
    href: 'https://nelami.ihamza.dev/',
    repo: 'https://github.com/Hamzi-SE/nelami',
  },
  {
    name: 'Skill Surge',
    blurb:
      'Subscription MERN LMS with Stripe checkout, course-management admin dashboard, Cloudinary media, Nodemailer transactional email, and Redux.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    image: skillsurge,
    href: 'https://skillsurge.ihamza.dev/',
    repo: 'https://github.com/Hamzi-SE/Course-Platform',
  },
  {
    name: 'NextChatter',
    blurb:
      'Next.js/TypeScript real-time chat with friend requests, multi-room messaging, Pusher notifications, NextAuth authentication, and Zod validation.',
    stack: ['Next.js', 'TypeScript', 'Pusher', 'Redis', 'Tailwind CSS'],
    image: nextchatter,
    href: 'https://nextchatter.ihamza.dev/',
    repo: 'https://github.com/Hamzi-SE/NextChatter',
  },
  {
    name: 'Discord Clone',
    blurb:
      'Next.js 14 Discord clone with video/audio calls, server creation, dynamic invite links, role moderation, Uploadthing media, Clerk auth, and Socket.IO group/private chats.',
    stack: ['Next.js', 'TypeScript', 'Socket.IO', 'Clerk'],
    image: discord,
    href: 'https://discord-clone.ihamza.dev/',
    repo: 'https://github.com/Hamzi-SE/discord-clone',
  },
  {
    name: 'Airbnb Clone',
    blurb:
      'Next.js 13 Airbnb clone with reservations, property CRUD, favorites, Cloudinary uploads, NextAuth, Prisma/MongoDB, and advanced shareable search filters.',
    stack: ['Next.js', 'TypeScript', 'MongoDB'],
    image: airbnb,
    href: 'https://nextairbnbclone.vercel.app/',
    repo: 'https://github.com/Hamzi-SE/next13-airbnb-clone',
  },
  {
    name: 'Musings',
    blurb:
      'Full-stack blog app with React Native mobile reader, web admin, Markdown-to-JSX publishing, dynamic slugs, and tag-based recommendations.',
    stack: ['React Native', 'Node.js', 'MongoDB'],
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
