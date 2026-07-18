'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Code2, Mail } from 'lucide-react';

import { EXTERNAL_LINKS, SOCIAL_LINKS } from '@/lib/site-config';

const formatPakistanTime = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Karachi',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date);

const FooterColumn = () => {
  const year = new Date().getFullYear();
  const [clock, setClock] = useState('');

  useEffect(() => {
    const tick = () => setClock(formatPakistanTime(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer
      className="relative mt-8 w-full overflow-hidden bg-gray text-gray-900 dark:text-white"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Wave sits on the same canvas color as the rest of the site */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
        aria-hidden
      >
        <Image
          src="/images/footer-wave.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-[0.55] contrast-125 brightness-110 mix-blend-multiply dark:opacity-[0.72] dark:contrast-125 dark:brightness-110 dark:mix-blend-soft-light"
          priority={false}
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
        />
        {/* Soft top fade so the wave melts into the page color */}
        <div
          className="absolute inset-0"
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgb(var(--app-gray-default)) 0%, rgb(var(--app-gray-default) / 0.65) 22%, transparent 48%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/4"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '25%',
            background:
              'linear-gradient(to top, rgb(var(--app-gray-default) / 0.25) 0%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[380px] max-w-6xl flex-col px-5 py-14 sm:px-8 md:min-h-[440px] md:px-10 md:py-16">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3">
            <p className="font-script text-5xl leading-none text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
              Riaz
            </p>
            <Code2
              className="h-6 w-6 text-gray-700 dark:text-white/85 sm:h-7 sm:w-7"
              strokeWidth={1.5}
              aria-hidden
            />
          </div>
          <p className="mt-5 font-serif text-xl italic tracking-wide text-gray-700 dark:text-white/90 sm:text-2xl md:text-[1.75rem]">
            &ldquo;Never stop building&rdquo;
          </p>
        </div>

        <div className="mb-5 flex justify-end">
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-600 transition-colors hover:text-gray-900 dark:text-white/75 dark:hover:text-[#E4E3D8]"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </a>
              );
            })}
            <a
              href={`mailto:${EXTERNAL_LINKS.EMAIL}`}
              aria-label="Email"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-white/75 dark:hover:text-[#E4E3D8]"
            >
              <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-3 border-t border-gray-300/70 pt-5 text-xs text-gray-500 dark:border-white/15 dark:text-white/55 sm:grid-cols-3 sm:gap-4 sm:text-[13px]">
          <p className="text-center sm:text-left">
            Crafted with{' '}
            <span className="text-gray-800 dark:text-[#E4E3D8]" aria-hidden>
              ♥
            </span>{' '}
            by Riaz Ahmad Butt
          </p>
          <p className="text-center tabular-nums" suppressHydrationWarning>
            {clock ? `${clock} PKT` : '\u00a0'}
          </p>
          <p className="text-center sm:text-right">
            &copy; {year} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterColumn;
