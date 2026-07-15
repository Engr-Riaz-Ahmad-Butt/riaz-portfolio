import { Github, Linkedin } from 'lucide-react';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/Engr-Riaz-Ahmad-Butt',
  GITHUB_REPO: 'https://github.com/Engr-Riaz-Ahmad-Butt',
  LINKEDIN: 'https://www.linkedin.com/in/riaz-ahmad-butt/',
  EMAIL: 'engr.riazahmadbutt@gmail.com',
};

export const NAV_LINKS = [
  { label: 'Projects', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: EXTERNAL_LINKS.GITHUB,
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    url: EXTERNAL_LINKS.LINKEDIN,
    label: 'LinkedIn',
  },
];

export const getSectionId = (href: string) =>
  href.replace(/^\/?#/, '').replace(/^\//, '');
