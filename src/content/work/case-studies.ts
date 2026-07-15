import type { StaticImageData } from 'next/image';

import ProjectTalkingMe from '/public/images/talkingme.jpg';
import ProjectAirCasita from '/public/images/airCasita.png';
import ProjectNyfAdmin from '/public/images/dashboard.png';

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  timeline: string;
  stack: string[];
  liveUrl: string;
  github?: string;
  problem: string;
  approach: string[];
  architecture: string;
  outcomes: string[];
  image: StaticImageData;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'talking-me',
    title: 'Talking Me',
    summary:
      'An AI-assisted platform that reviews resumes and video introductions so candidates can improve professional presentation.',
    role: 'Full Stack Developer',
    timeline: 'Client product build',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'AI APIs'],
    liveUrl: 'https://talkingme.wtbyte.com/',
    image: ProjectTalkingMe,
    problem:
      'Job seekers struggled to understand how their resume and spoken intro landed with recruiters. Feedback was slow, generic, and hard to act on.',
    approach: [
      'Designed a flow that pairs structured resume parsing with a short video introduction capture.',
      'Integrated AI analysis endpoints to return targeted feedback on clarity, structure, and delivery.',
      'Built responsive UI states for upload progress, analysis, and actionable recommendations.',
    ],
    architecture:
      'React client talks to a Node/Express API backed by MongoDB. Media and text payloads are sent to AI analysis services; results are normalized and rendered as sectioned feedback cards.',
    outcomes: [
      'Shipped a production web product with live AI-assisted coaching loops.',
      'Created a reusable feedback presentation pattern for both resume and video channels.',
      'Delivered a polished candidate-facing UX that keeps technical complexity behind clear steps.',
    ],
  },
  {
    slug: 'aircasita',
    title: 'AirCasita',
    summary:
      'A Next.js accommodation marketplace for listing, discovering, and booking stays.',
    role: 'Full Stack Developer',
    timeline: 'Personal / product build',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Redux Toolkit', 'React Hook Form'],
    liveUrl: 'https://aircasita-main.vercel.app/',
    image: ProjectAirCasita,
    problem:
      'Hosts and travelers needed a familiar marketplace loop — browse, filter, list, and book — without wrestling with a heavy legacy stack.',
    approach: [
      'Implemented App-style listing discovery with responsive cards and detail routes.',
      'Modeled booking and listing forms with validated client workflows.',
      'Used Redux Toolkit for shared product state across browse and host flows.',
    ],
    architecture:
      'Next.js front end with Tailwind UI primitives, form libraries for listing/booking inputs, and client state for cart-like booking interactions. Deployed as a Vercel web app.',
    outcomes: [
      'End-to-end listing and booking journeys usable on mobile and desktop.',
      'Reusable form and listing components that keep the product coherent.',
      'Demonstrates comfort owning a Next.js product from layout through interaction design.',
    ],
  },
  {
    slug: 'nyf-admin',
    title: 'NYF Holidays Admin',
    summary:
      'Operations dashboard for packages, bookings, customers, and reporting alongside the NYF client site.',
    role: 'Full Stack Developer',
    timeline: 'Mexil Software Solutions',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://nyf-admin-staging-4.vercel.app/dashboard',
    image: ProjectNyfAdmin,
    problem:
      'Travel operators needed one place to manage packages and bookings instead of fractured spreadsheets and ad-hoc admin pages.',
    approach: [
      'Built dashboard modules for packages, customers, bookings, and reports.',
      'Aligned admin data models with the customer-facing NYF Holidays client.',
      'Focused on table-heavy UX, filters, and clear operational states.',
    ],
    architecture:
      'React admin SPA consuming a MERN API shared conceptually with the public client. Staging deployment on Vercel for demo access (auth-gated in real ops environments).',
    outcomes: [
      'Operators can inspect and update inventory and bookings from a single UI.',
      'Paired client + admin delivery shows full product ownership, not just landing pages.',
      'Staging demo reserved for reviewers — labeled honestly as non-production.',
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs() {
  return CASE_STUDIES.map((study) => study.slug);
}
