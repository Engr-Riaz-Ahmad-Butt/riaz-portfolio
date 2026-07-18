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
    <footer className="relative mt-16 w-full overflow-hidden bg-black text-white">
      {/* Wave artwork — faded into black like the reference */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden
      >
        <Image
          src="/images/footer-wave.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-[0.45] grayscale-[0.15] contrast-110"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/90" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-6xl flex-col px-5 py-14 sm:px-8 md:min-h-[480px] md:px-10 md:py-16">
        {/* Centered brand + quote */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3">
            <p className="font-script text-5xl leading-none text-white sm:text-6xl md:text-7xl">
              Riaz
            </p>
            <Code2
              className="h-6 w-6 text-white/85 sm:h-7 sm:w-7"
              strokeWidth={1.5}
              aria-hidden
            />
          </div>
          <p className="mt-5 font-serif text-xl italic tracking-wide text-white/90 sm:text-2xl md:text-[1.75rem]">
            &ldquo;Never stop building&rdquo;
          </p>
        </div>

        {/* Social row — right-aligned above the meta bar */}
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
                  className="text-white/75 transition-colors hover:text-teal-300"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </a>
              );
            })}
            <a
              href={`mailto:${EXTERNAL_LINKS.EMAIL}`}
              aria-label="Email"
              className="text-white/75 transition-colors hover:text-teal-300"
            >
              <Mail className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        {/* Bottom metadata bar */}
        <div className="grid grid-cols-1 items-center gap-3 border-t border-white/15 pt-5 text-xs text-white/55 sm:grid-cols-3 sm:gap-4 sm:text-[13px]">
          <p className="text-center sm:text-left">
            Crafted with{' '}
            <span className="text-teal-400" aria-hidden>
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
