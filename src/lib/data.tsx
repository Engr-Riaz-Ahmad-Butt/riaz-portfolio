import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoPostgresql from '/public/images/logos/icon-postgresql.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoDocker from '/public/images/logos/docker.png';

import LogoMexil from '/public/images/logos/mexil.png';
import LogoAbacus from '/public/images/logos/abacus.webp';
import LogoBytewise from '/public/images/logos/bytewise.png';
import LogoAawaz from '/public/images/logos/aawazWhiteLogo.png';

import ProjectDevsiom from '/public/images/devsiom.png';
import ProjectLogoMaker from '/public/images/logoMaker.png';
import ProjectAirCasita from '/public/images/airCasita.png';
import ProjectTalkingMe from '/public/images/talkingme.jpg';
import ProjectNyfClient from '/public/images/nyf.jpg';
import ProjectNyfAdmin from '/public/images/dashboard.png';
import ProjectAthadak from '/public/images/athadak.jpg';

import NcriCertificate from '/public/images/NCRI.jpg';
import BytwiseCertificate from '/public/images/bytwiseExpletter.jpg';
import FreeCodeCampCertificate from '/public/images/freeCodeCamp.png';

import {
  CertificatesDetails,
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

import {
  EXTERNAL_LINKS,
  NAV_LINKS,
  SOCIAL_LINKS,
} from '@/lib/site-config';

export { EXTERNAL_LINKS, NAV_LINKS, SOCIAL_LINKS };

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'TypeScript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
    category: 'frontend',
  },
  {
    label: 'JavaScript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'frontend',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
    category: 'frontend',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
    category: 'frontend',
  },
  {
    label: 'Tailwind CSS',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
    category: 'frontend',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
    category: 'backend',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
    category: 'backend',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
    category: 'backend',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
    category: 'database',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgresql,
    url: 'https://www.postgresql.org/',
    category: 'database',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
    category: 'tools',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
    category: 'tools',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoAawaz,
    url: 'https://www.aawaz.com.pk/',
    logoAlt: 'Aawaz AI',
    darkLogo: true,
    position: 'Full Stack Developer',
    startDate: new Date(2025, 11),
    currentlyWorkHere: true,
    summary: [
      'Shipping frontend systems for ML-connected products with React Flow, React, and Next.js.',
      'Partner with ML engineers to integrate model outputs and data pipelines into usable product workflows.',
      'Own UI implementation, API integration points, and cross-team delivery coordination.',
    ],
  },
  {
    logo: LogoMexil,
    url: 'https://mexil.it/',
    logoAlt: 'Mexil Software Solutions',
    position: 'Full Stack Developer',
    startDate: new Date(2024, 3),
    endDate: new Date(2025, 10),
    summary: [
      'Built production MERN and Next.js applications including travel booking client and admin tooling.',
      'Delivered responsive UI, authenticated workflows, and API integrations used by real customers.',
      'Improved delivery quality through component-driven development with Tailwind CSS.',
    ],
  },
  {
    logo: LogoAbacus,
    url: 'https://abacus-global.com/',
    logoAlt: 'Abacus',
    position: 'NetSuite Developer',
    startDate: new Date(2024, 1),
    endDate: new Date(2024, 3),
    summary: [
      'Translated client requirements into NetSuite customizations and approval workflows.',
      'Built HTML/PDF templates for personalized business reports.',
      'Customized modules to streamline internal business processes.',
    ],
  },
  {
    logo: LogoBytewise,
    url: 'https://www.bytewiseltd.com/',
    logoAlt: 'Bytewise',
    position: 'MERN Stack Fellow',
    startDate: new Date(2023, 3),
    endDate: new Date(2023, 6),
    summary: [
      'Completed a hands-on fellowship building full-stack apps with MongoDB, Express, React, and Node.js.',
      'Practiced industry workflows with mentors: design, develop, review, and deploy.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Talking Me',
    description:
      'AI-powered platform that analyzes resumes and video introductions to help users strengthen professional presentation.',
    url: 'https://talkingme.wtbyte.com/',
    previewImage: ProjectTalkingMe,
    technologies: ['React', 'Node.js', 'MongoDB', 'AI Integration', 'Tailwind CSS'],
    featured: true,
    role: 'Full Stack Developer',
    category: 'Full-stack',
    status: 'completed',
    outcome: 'Personalized feedback on resumes and video intros in a production web product.',
    caseStudySlug: 'talking-me',
  },
  {
    name: 'AirCasita',
    description:
      'Next.js accommodation marketplace for listing, discovering, and booking stays with a responsive product experience.',
    url: 'https://aircasita-main.vercel.app/',
    previewImage: ProjectAirCasita,
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Redux Toolkit'],
    featured: true,
    role: 'Full Stack Developer',
    category: 'Full-stack',
    status: 'completed',
    outcome: 'End-to-end listing and booking flows with form validation and motion polish.',
    caseStudySlug: 'aircasita',
  },
  {
    name: 'NYF Holidays Admin',
    description:
      'Admin dashboard for managing holidays packages, bookings, customers, and operational reports.',
    url: 'https://nyf-admin-staging-4.vercel.app/dashboard',
    previewImage: ProjectNyfAdmin,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    featured: true,
    role: 'Full Stack Developer',
    category: 'Full-stack',
    status: 'completed',
    outcome: 'Operations team can manage packages and bookings from one dashboard (staging demo).',
    caseStudySlug: 'nyf-admin',
  },
  {
    name: 'NYF Holidays Client',
    description:
      'Travel booking client for instant bookings, holiday packages, and corporate event planning.',
    url: 'https://nyf-client-60ad3ed6f108.herokuapp.com/',
    previewImage: ProjectNyfClient,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    role: 'Full Stack Developer',
    category: 'Full-stack',
    status: 'completed',
    outcome: 'Public-facing booking experience paired with the NYF admin system.',
  },
  {
    name: 'Athadak',
    description:
      'Product web platform focused on engagement and smooth multi-page navigation.',
    url: 'https://athadak.com/home/',
    previewImage: ProjectAthadak,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    role: 'Full Stack Developer',
    category: 'Full-stack',
    status: 'completed',
    outcome: 'Multi-page product experience with responsive UI and API-backed flows.',
  },
  {
    name: 'SWOD Organization',
    description:
      'Organization website presenting programs, initiatives, and public-facing information.',
    url: 'https://swod.netlify.app/',
    technologies: ['React', 'JavaScript', 'Netlify'],
    role: 'Frontend Developer',
    category: 'Frontend',
    status: 'completed',
    outcome: 'Clean marketing site deployed on Netlify with fast static delivery.',
  },
  {
    name: 'The Rodriguez Co.',
    description:
      'Business website for a construction company with service pages and contact flows.',
    url: 'https://therodriguezco.netlify.app/',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    role: 'Frontend Developer',
    category: 'Frontend',
    status: 'completed',
    outcome: 'Professional service showcase with responsive layout and lead capture.',
  },
  {
    name: 'NFTS',
    description:
      'NFT marketplace-style web experience for browsing and exploring digital assets.',
    url: 'https://nftsweb.netlify.app/',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    role: 'Frontend Developer',
    category: 'Frontend',
    status: 'completed',
    outcome: 'Interactive gallery UI with card-based browsing patterns.',
  },
  {
    name: 'Devsiom Technology',
    description:
      'Marketing site for a software house showcasing services and consulting offerings.',
    url: 'https://devsiomtechnologies.com/',
    previewImage: ProjectDevsiom,
    technologies: ['React', 'Redux Toolkit', 'Material UI'],
    role: 'Frontend Developer',
    category: 'Frontend',
    status: 'completed',
    outcome: 'Service-led marketing site for a software consultancy.',
  },
  {
    name: 'Logo Maker',
    description:
      'App for browsing logo styles and generating custom logo concepts from brand inputs.',
    url: 'https://logomakerss.netlify.app/',
    previewImage: ProjectLogoMaker,
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    role: 'Frontend Developer',
    category: 'Frontend',
    status: 'completed',
    outcome: 'Logo exploration tool with style presets and brand input workflow.',
  },
];

export const CERTIFICATES: CertificatesDetails[] = [
  {
    image: NcriCertificate,
    title: 'Internship completion covering ASP.NET Core and C# fundamentals.',
    CertificateName: 'NCRI Internship',
    issuer: 'NCRI',
    year: '2023',
    url: '/images/NCRI.jpg',
  },
  {
    image: BytwiseCertificate,
    title: '3-month MERN Stack Fellowship completion letter.',
    CertificateName: 'MERN Stack Fellowship',
    issuer: 'Bytewise',
    year: '2023',
    url: '/images/bytwiseExpletter.jpg',
  },
  {
    image: FreeCodeCampCertificate,
    title: 'Responsive Web Design certification covering HTML and CSS layouts.',
    CertificateName: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2022',
    url: '/images/freeCodeCamp.png',
  },
];

export const EMPLOYER_LOGOS = [
  { src: LogoAawaz, alt: 'Aawaz AI', darkBg: true },
  { src: LogoMexil, alt: 'Mexil' },
  { src: LogoBytewise, alt: 'Bytewise' },
];
