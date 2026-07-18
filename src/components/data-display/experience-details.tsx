'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

interface ExperienceDetailsComponentProps extends ExperienceDetailsProps {
  active: boolean;
}

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  logoAlt,
  url,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
  darkLogo,
}: ExperienceDetailsComponentProps) => {
  const dateStr = `${new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
    startDate
  )} — ${
    currentlyWorkHere
      ? 'Present'
      : endDate
      ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(endDate)
      : 'NA'
  }`;
  const logoSrc = typeof logo === 'string' ? logo : logo?.src || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <article className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-soft dark:border-white/5 dark:bg-zinc-900/60 md:p-6">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5" />

        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            {/* Premium Logo Container */}
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gray-200 p-2 shadow-sm dark:border-white/10 ${
                darkLogo ? 'bg-zinc-950' : 'bg-gray-50'
              }`}
            >
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={40}
                  height={40}
                  className="h-auto max-h-9 w-auto object-contain"
                />
              ) : (
                <span className="text-sm font-bold text-gray-700 dark:text-gray-700">
                  {logoAlt.charAt(0)}
                </span>
              )}
            </div>

            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">
                {logoAlt}
              </span>
              <h3 className="mt-0.5 text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
                {position}
              </h3>
              
              <div className="mt-2 flex flex-wrap items-center gap-2 text-base text-gray-500 dark:text-gray-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <Calendar size={14} className="text-primary" />
                  {dateStr}
                </span>
              </div>
            </div>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex self-start items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-700 transition-all hover:bg-primary hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-gray-700 dark:hover:bg-primary dark:hover:text-white"
          >
            Visit Website
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Deliverables section */}
        <div className="mt-5 border-t border-gray-100 pt-4 dark:border-white/5">
          <div className="mb-2.5 flex items-center gap-2">
            <Sparkles size={16} className="text-primary" />
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400 dark:text-gray-500">
              Key Contributions & Impact
            </h4>
          </div>
          {summary?.length ? (
            <ul className="space-y-2 text-base leading-relaxed text-gray-600 dark:text-gray-700">
              {summary.map((item, itemIndex) => (
                <li key={`${position}-${itemIndex}`} className="flex gap-4">
                  {/* Clean custom checklist item bullet */}
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </article>
    </motion.div>
  );
};

export default ExperienceDetails;
