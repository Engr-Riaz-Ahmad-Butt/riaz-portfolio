'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

interface ExperienceDetailsComponentProps extends ExperienceDetailsProps {
  index: number;
}

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

// Abstract dark images for experience backgrounds from Unsplash
const bgImages = [
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop", 
];

const ExperienceDetails = ({
  logo,
  logoAlt,
  url,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
  index,
}: ExperienceDetailsComponentProps) => {
  const isEven = index % 2 === 0;
  const needsDarkLogoBackground = logoAlt === 'Aawaz AI';

  const dateStr = `${new Intl.DateTimeFormat('en-US', dateFormatOptions).format(startDate)} - ${currentlyWorkHere ? 'Present' : endDate ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(endDate) : 'NA'}`;
  const bgImage = bgImages[index % bgImages.length];
  const logoSrc = typeof logo === 'string' ? logo : logo?.src || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative flex w-full items-center justify-between md:justify-normal md:odd:flex-row-reverse"
    >
      {/* node */}
      <div className="absolute left-4 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-500 bg-white ring-4 ring-blue-500/10 dark:bg-gray-900 sm:left-6 md:left-1/2">
         <div className="h-1.5 w-1.5 rounded-full bg-blue-500 transition-transform group-hover:scale-150" />
      </div>

      {/* card container */}
      <div className="ml-9 flex-1 pt-6 sm:ml-14 sm:pt-8 md:ml-0 md:w-[45%] md:flex-none md:pt-0">
        <article
          className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[#09090b] dark:text-white dark:shadow-[0_0_40px_rgba(0,0,0,0.35)] ${
            isEven ? 'md:ml-auto' : 'md:mr-auto'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-30"
            style={{ backgroundImage: `url("${bgImage}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/95 to-blue-50/90 dark:from-black/90 dark:via-black/80 dark:to-blue-950/70" />

          <div className="relative p-4 sm:p-6">
            <div className="mb-4 flex flex-col gap-4 sm:mb-5 sm:flex-row sm:items-start">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border p-2 backdrop-blur sm:h-14 sm:w-14 ${
                  needsDarkLogoBackground
                    ? 'border-slate-800 bg-slate-950 dark:border-slate-700 dark:bg-slate-950'
                    : 'border-slate-200 bg-white/90 dark:border-white/10 dark:bg-white/10'
                }`}
              >
                {logoSrc ? (
                  <Image
                    src={logoSrc}
                    alt={logoAlt}
                    width={40}
                    height={40}
                    className="h-auto max-h-10 w-auto object-contain"
                  />
                ) : (
                  <span className="text-center text-xs font-semibold text-slate-700 dark:text-white/70">
                    {logoAlt}
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300 sm:text-sm sm:tracking-[0.2em]">
                  {logoAlt}
                </p>
                <h3 className="mt-1 text-xl font-semibold leading-tight sm:text-2xl">{position}</h3>
                <div className="mt-3 inline-flex max-w-full rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 shadow-sm dark:border-blue-300/60 dark:bg-blue-950/90 dark:text-white sm:text-xs">
                  {dateStr}
                </div>
              </div>
            </div>

            {summary?.length ? (
              <ul className="space-y-3 text-sm leading-6 text-slate-700 dark:text-white/80">
                {summary.map((item, itemIndex) => (
                  <li key={`${position}-${itemIndex}`} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center text-sm font-medium text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200 sm:mt-6"
            >
              Visit company
            </a>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default ExperienceDetails;
