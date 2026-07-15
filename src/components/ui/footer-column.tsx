'use client';

import { Github, Linkedin, Mail, MapPin, Zap } from 'lucide-react';

import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS, NAV_LINKS, SOCIAL_LINKS } from '@/lib/site-config';

const WORK_LINKS = [
  { text: 'Talking Me', href: '/work/talking-me' },
  { text: 'AirCasita', href: '/work/aircasita' },
  { text: 'NYF Admin', href: '/work/nyf-admin' },
];

const RESOURCE_LINKS = [
  { text: 'Download CV', href: '/files/Riaz-Ahmad-Butt-CV.pdf', external: true },
  { text: 'GitHub profile', href: EXTERNAL_LINKS.GITHUB, external: true },
  { text: 'LinkedIn', href: EXTERNAL_LINKS.LINKEDIN, external: true },
];

const FooterColumn = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-surface relative z-10 mt-8 w-full overflow-hidden pt-16 pb-8">
      <div
        className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none"
        aria-hidden
      >
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl dark:bg-white/5" />
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl dark:bg-white/5" />
      </div>

      <div className="footer-glass relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-2xl px-6 py-10 shadow-soft md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" noCustomization className="mb-4 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-700 text-white shadow-md">
              <Zap className="h-5 w-5" aria-hidden />
            </span>
            <span className="bg-gradient-to-br from-teal-600 to-teal-400 bg-clip-text text-xl font-semibold tracking-tight text-transparent dark:from-teal-200 dark:to-teal-400">
              Riaz Ahmad Butt
            </span>
          </Link>

          <p className="mb-6 max-w-xs text-center text-sm leading-relaxed text-gray-600 md:text-left">
            Full Stack Developer building reliable React, Next.js, and Node.js
            products from Islamabad, Pakistan.
          </p>

          <div className="flex gap-3 text-primary">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray/60 text-gray-600 transition-colors hover:border-primary/30 hover:text-primary dark:bg-white/5"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
            <a
              href={`mailto:${EXTERNAL_LINKS.EMAIL}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray/60 text-gray-600 transition-colors hover:border-primary/30 hover:text-primary dark:bg-white/5"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-5 flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            <span>Islamabad, Pakistan</span>
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="flex w-full flex-col gap-9 text-center md:w-auto md:flex-row md:justify-end md:text-left"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Navigate
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    noCustomization
                    className="text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Case studies
            </p>
            <ul className="space-y-2">
              {WORK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    noCustomization
                    className="text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Resources
            </p>
            <ul className="space-y-2">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    externalLink={link.external}
                    noCustomization
                    className="text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href={`mailto:${EXTERNAL_LINKS.EMAIL}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {EXTERNAL_LINKS.EMAIL}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Github className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <Link
                  href={EXTERNAL_LINKS.GITHUB}
                  externalLink
                  noCustomization
                  className="transition-colors hover:text-primary"
                >
                  @Engr-Riaz-Ahmad-Butt
                </Link>
              </li>
              <li className="inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                <Link
                  href={EXTERNAL_LINKS.LINKEDIN}
                  externalLink
                  noCustomization
                  className="transition-colors hover:text-primary"
                >
                  LinkedIn profile
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <p className="relative z-10 mt-10 text-center text-xs text-gray-500">
        &copy; {year} Riaz Ahmad Butt. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterColumn;
