import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

import LogoHtml from '/public/images/logos/html.svg';
import LogoCss from '/public/images/logos/css.png';
import LogoBootstrap from '/public/images/logos/bootstrap.png';
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
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoGithub from '/public/images/logos/GitHub-Logo.png';
import LogoDocker from '/public/images/logos/docker.png';

import LogoDevsiom from '/public/images/logos/devsiomlogo.png';
import LogoMexil from '/public/images/logos/mexil.png';
import LogoAbacus from '/public/images/logos/abacus.webp';
import LogoBytewise from '/public/images/logos/bytewise.png';
import LogoAawaz from '/public/images/logos/aawazWhiteLogo.png';


import ProjectDevsiom from '/public/images/devsiom.png';
import ProjectNft from '/public/images/nfts.png';
import ProjectLogoMaker from '/public/images/logoMaker.png';
import ProjectAirCasita from '/public/images/airCasita.png';
import ProjectTalkingMe from '/public/images/talkingme.png';
import ProjectNyfClient from '/public/images/nyf.png';
import ProjectNyfAdmin from '/public/images/dashboard.png';
import ProjectAthadak from '/public/images/athadak.png';
import ProjectSwod from '/public/images/swod.png';
import ProjectRodriguez from '/public/images/Rodriguez.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import NcriCertificate from '/public/images/NCRI.jpg';
import BytwiseCertificate from '/public/images/bytwiseExpletter.jpg';
import FreeCodeCampCertificate from '/public/images/freeCodeCamp.png';


import {
  CertificatesDetails,
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  // TestimonialDetails,


} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/Engr-Riaz-Ahmad-Butt',
  GITHUB_REPO: 'https://github.com/Engr-Riaz-Ahmad-Butt',
  // TWITTER: 'https://twitter.com',
  // FIGMA: 'https://www.figma.com',
  FIGMA_FILE:
    'https://www.figma.com',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Certificates',
    href: '#certificates',
  },
  {
    label: 'Projects',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/Engr-Riaz-Ahmad-Butt',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/riaz-ahmad-butt/',
  },
  // {
  //   icon: Figma,
  //   url: 'https://www.figma.com/',
  // },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'HTML',
    logo: LogoHtml,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'frontend',
  },
  {
    label: 'CSS',
    logo: LogoCss,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'frontend',
  },
  {
    label: 'Bootstrap',
    logo: LogoBootstrap,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'frontend',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'frontend',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
    category: 'frontend',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
    category: 'frontend',
  },
  {
    label: 'React Flow',
    logo: LogoReact,
    url: 'https://reactflow.dev/',
    category: 'frontend',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
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
    label: 'SQL',
    logo: LogoPostgresql,
    url: 'https://en.wikipedia.org/wiki/SQL',
    category: 'database',
  },
  {
    label: 'Sequelize',
    logo: LogoPostgresql,
    url: 'https://sequelize.org/',
    category: 'backend',
  },
  {
    label: 'Prisma',
    logo: LogoTypescript,
    url: 'https://www.prisma.io/',
    category: 'database',
  },
  {
    label: 'Supabase',
    logo: LogoMongoDB,
    url: 'https://supabase.com/',
    category: 'database',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
    category: 'frontend',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
    category: 'frontend',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
    category: 'frontend',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
    category: 'tools',
  },
  {
    label: 'AWS',
    logo: LogoNodejs,
    url: 'https://aws.amazon.com/',
    category: 'tools',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
    category: 'tools',
  },
  {
    label: 'Heroku',
    logo: LogoNodejs,
    url: 'https://www.heroku.com/',
    category: 'tools',
  },
  {
    label: 'GitHub',
    logo: LogoGithub,
    url: 'https://git-scm.com/',
    category: 'tools',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoAawaz,
    url: 'https://aawaz.ai/',
    logoAlt: 'Aawaz AI',
    position: 'Full Stack Developer',
    startDate: new Date(2025, 11),
    currentlyWorkHere: true,
    summary: [
      'Currently working as a Full Stack Developer on frontend systems connected with ML-driven products and workflows.',
      'Collaborate closely with ML teams to integrate models and data pipelines into user-facing applications.',
      'Build interactive frontend experiences using React Flow, React.js, and Next.js.',
      'Support product delivery across UI implementation, integrations, and cross-team technical coordination.'
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
      'Built and maintained full-stack web applications using React.js, Next.js, Node.js, and the broader MERN ecosystem.',
      'Created responsive frontend experiences and integrated APIs for production-ready user workflows.',
      'Worked across frontend and backend tasks, improving application performance and delivery quality.',
      'Contributed UI implementation with Tailwind CSS and component-based development practices.'
    ],
  },
  // {
  //   logo: LogoDevsiom,
  //   url: 'https://devsiomtechnologies.com/',
  //   logoAlt: 'Devsiom technologies',
  //   position: 'MERN Stack Developer',
  //   startDate: new Date(2024, 11),
  //   currentlyWorkHere: true,
  //   summary: [
  //     'Developed reusable code to optimize development time and reduce redundancy.',
  //     'Worked with a variety of technologies, including React js, Next.js, Typescript, Express.js, Node js, Tailwindcss, and others.',
  //     'Collaborated with cross-functional teams to design innovative solutions for complex business requirements.',
  //     'Designed responsive web components using React JS directives for a seamless user experience across devices.',
  //     'Reviewed code, debugged problems, and corrected issues.'
  //   ],
  // },
  // {
  //   logo: LogoAbacus,
  //   url: 'https://abacus-global.com/',
  //   logoAlt: 'Abacus logo',
  //   position: 'NetSuite Developer',
  //   startDate: new Date(2024, 1),
  //   endDate: new Date(2024, 3),
  //   summary: [
  //     'Worked closely with clients to gather requirements and translate them into technical specifications for implementation.',
  //     'Streamlined business processes by creating custom approval workflows.',
  //     'Enhanced user experience through tailored module customizations.',
  //     'Developed advanced HTML/PDF templates to generate insightful and personalized reports.',
  //   ],
  // },
  {
    logo: LogoBytewise,
    url: 'https://www.bytewiseltd.com/',
    logoAlt: 'bytewise logo',
    position: 'MERN Stack Fellow',
    startDate: new Date(2023, 3),
    endDate: new Date(2023, 6),
    summary: [
      'Gained practical experience in building scalable full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js).',
      'Participated in a hands-on training program to design, develop, and deploy responsive, user-focused applications.',
      'Collaborated with mentors and peers to enhance problem-solving skills and adopt industry best practices for modern web development.'
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Talking Me',
    description:
      'An AI-powered platform that analyzes resumes and video introductions to help users improve their professional profiles. It provides personalized feedback and insights to enhance both communication and technical presentation skills.',
    url: 'https://talkingme.wtbyte.com/',
    previewImage: ProjectTalkingMe,
    technologies: [
      'MERN Stack',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'AI Integration',
      'Tailwind CSS',
    ],
  },
  {
    name: 'NYF Holidays (Client)',
    description:
      'A travel booking platform that offers instant bookings, customized holiday packages, and corporate event planning. It provides seamless travel experiences through an easy-to-use interface with secure and fast bookings.',
    url: 'https://nyf-client-60ad3ed6f108.herokuapp.com/',
    previewImage: ProjectNyfClient,
    technologies: [
      'MERN Stack',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Bootstrap',
    ],
  },
  {
    name: 'NYF Holidays (Admin Dashboard)',
    description:
      'An advanced admin dashboard for NYF Holidays where administrators can manage bookings, packages, customers, and reports efficiently with a clean and responsive UI.',
    url: 'https://nyf-admin-staging-4.vercel.app/dashboard',
    previewImage: ProjectNyfAdmin,
    technologies: [
      'MERN Stack',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Bootstrap',
    ],
  },
  {
    name: 'Athadak',
    description:
      'A modern web platform built using the MERN stack, designed for enhanced user engagement and smooth navigation experience.',
    url: 'https://athadak.com/home/',
    previewImage: ProjectAthadak,
    technologies: [
      'MERN Stack',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Bootstrap',
    ],
  },
  {
    name: 'SWOD Organization',
    description:
      'A simple yet elegant website built for a welfare organization to highlight their community services and social initiatives.',
    url: 'https://swod.netlify.app/',
    previewImage: ProjectSwod,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    name: 'The Rodriguez Co.',
    description:
      'A professional real estate website showcasing properties and services with an elegant and responsive layout.',
    url: 'https://therodriguezco.netlify.app/',
    previewImage: ProjectRodriguez,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    name: 'NFTS',
    description:
      'A platform to display NFT collections and provide services for creating, managing, and launching NFTs.',
    url: 'https://nftsweb.netlify.app/',
    previewImage: ProjectNft,
    technologies: [
      'React',
      'CSS',
      'Bootstrap4',
      'React Bootstrap',
      'Styled Components',
    ],
  },
  {
    name: 'Devsiom Technology',
    description:
      'Designed and developed a responsive website for a software house, showcasing their services in custom software development and IT consulting.',
    url: 'https://devsiomtechnologies.com/',
    previewImage: ProjectDevsiom,
    technologies: [
      'React',
      'Bootstrap',
      'Material UI',
      'Redux Toolkit',
      'React Query',
      'CSS'
    ],
  },
  {
    name: 'Logo Maker',
    description:
      'Developed a responsive application where users can view logo designs and create custom logos by entering details about their desired style and type.',
    url: 'https://logomakerss.netlify.app/',
    previewImage: ProjectLogoMaker,
    technologies: [
      'React',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Axios',
      'ESLint',
      'Prettier',
    ],
  },
  {
    name: 'AirCasita',
    description:
      'Developed a Next.js-based platform similar to Airbnb, enabling users to list, discover, and book accommodations with a seamless and responsive user experience.',
    url: 'https://aircasita-main.vercel.app/',
    previewImage: ProjectAirCasita,
    technologies: [
      'React',
      'Next.js',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'CSS',
      'Formik',
      'Yup',
      'React Hook Form',
      'Material-UI',
      'Framer Motion',
      'Axios',
    ],
  },
];


export const CERTIFICATES: CertificatesDetails[] = [
  {
    image: NcriCertificate,
    title: 'Awarded for successfully completing an internship in MVC .NET and C#, showcasing expertise in web development with ASP.NET Core and C#.',
    CertificateName: "NCRI",
    url: '/images/NCRI.jpg',
  },
  {
    image: BytwiseCertificate,
    title: 'Awarded for completing a 3-month MERN Stack Fellowship with Bytewise Limited, showcasing expertise in building full-stack applications using MongoDB, Express, React, and Node.js.',
    CertificateName: "MERN Stack",
    url: '/images/bytwiseExpletter.jpg',
  },
  {
    image: FreeCodeCampCertificate,
    title: 'Awarded for successfully completing the Responsive Web Design certification from freeCodeCamp, demonstrating skills in HTML, CSS, and creating responsive, user-friendly web layouts.',
    CertificateName: "Responsive Web Design",
    url: '/images/freeCodeCamp.png',
  },
];

