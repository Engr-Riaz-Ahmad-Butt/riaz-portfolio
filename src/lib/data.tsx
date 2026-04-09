import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

import LogoHtml from '/public/images/logos/html.svg';
import LogoCss from '/public/images/logos/css.png';
import LogoBootstrap from '/public/images/logos/bootstrap.png';
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
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

import LogoDevsiom from '/public/images/logos/devsiomlogo.png';
import LogoMexil from '/public/images/logos/mexil.png';
import LogoAbacus from '/public/images/logos/abacus.webp';
import LogoBytewise from '/public/images/logos/bytewise.png';


import ProjectDevsiom from '/public/images/devsiom.png';
import ProjectNft from '/public/images/nfts.png';
import ProjectLogoMaker from '/public/images/logoMaker.png';
import ProjectAirCasita from '/public/images/airCasita.png';

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
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/RiazAhmadButt',
  GITHUB_REPO: 'https://github.com/RiazAhmadButt',
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
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/RiazAhmadButt',
  },
  {
    icon: Linkedin,
    url: 'https://twitter.com/',
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
  },
  {
    label: 'CSS',
    logo: LogoCss,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Bootstrap',
    logo: LogoBootstrap,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  // {
  //   label: 'Nest.js',
  //   logo: LogoNest,
  //   url: 'https://nestjs.com/',
  // },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  // {
  //   label: 'Cypress',
  //   logo: LogoCypress,
  //   darkModeLogo: LogoCypressLight,
  //   url: 'https://www.cypress.io/',
  // },
  // {
  //   label: 'Storybook',
  //   logo: LogoStorybook,
  //   url: 'https://storybook.js.org/',
  // },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'GitHub',
    logo: LogoGithub,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoMexil,
    url: 'https://mexil.it/',
    logoAlt: 'Mexil Software Solutions',
    position: 'MERN Stack Developer',
    startDate: new Date(2024, 12),
    currentlyWorkHere: true,
    summary: [
      'Develop web apps with the MERN stack.',
      'Create responsive UIs using React.js and Next.js for SSR/SSG',
      'Optimize relational databases with Sequelize ORM.',
      'Design UIs with TailwindCSS and Shadcn for smooth experiences'
    ],
  },
  {
    logo: LogoDevsiom,
    url: 'https://devsiomtechnologies.com/',
    logoAlt: 'Devsiom technologies',
    position: 'MERN Stack Developer',
    startDate: new Date(2024, 11),
    currentlyWorkHere: true,
    summary: [
      'Developed reusable code to optimize development time and reduce redundancy.',
      'Worked with a variety of technologies, including React js, Next.js, Typescript, Express.js, Node js, Tailwindcss, and others.',
      'Collaborated with cross-functional teams to design innovative solutions for complex business requirements.',
      'Designed responsive web components using React JS directives for a seamless user experience across devices.',
      'Reviewed code, debugged problems, and corrected issues.'
    ],
  },
  {
    logo: LogoAbacus,
    url: 'https://abacus-global.com/',
    logoAlt: 'Abacus logo',
    position: 'NetSuite Developer',
    startDate: new Date(2024, 1),
    endDate: new Date(2024, 3),
    summary: [
      'Worked closely with clients to gather requirements and translate them into technical specifications for implementation.',
      'Streamlined business processes by creating custom approval workflows.',
      'Enhanced user experience through tailored module customizations.',
      'Developed advanced HTML/PDF templates to generate insightful and personalized reports.',
    ],
  },
  {
    logo: LogoBytewise,
    url: 'https://www.bytewiseltd.com/',
    logoAlt: 'bytewise logo',
    position: 'MERN Stack',
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

