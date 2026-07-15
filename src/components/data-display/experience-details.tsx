'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';
import { fadeUp, fadeUpTransition, MOTION_STAGGER } from '@/lib/motion';

interface ExperienceDetailsComponentProps extends ExperienceDetailsProps {
  index: number;
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
  index,
  darkLogo,
}: ExperienceDetailsComponentProps) => {
  const dateStr = `${new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
    startDate
  )} - ${
    currentlyWorkHere
      ? 'Present'
      : endDate
      ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(endDate)
      : 'NA'
  }`;
  const logoSrc = typeof logo === 'string' ? logo : logo?.src || '';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ ...fadeUpTransition, delay: index * MOTION_STAGGER }}
      className="group relative flex w-full items-center justify-between md:justify-normal md:odd:flex-row-reverse"
    >
      <div className="absolute left-4 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-gray ring-4 ring-primary/10 sm:left-6 md:left-1/2">
        <div className="h-1.5 w-1.5 rounded-full bg-primary transition-transform group-hover:scale-150" />
      </div>

      <div className="ml-9 flex-1 pt-6 sm:ml-14 sm:pt-8 md:ml-0 md:w-[45%] md:flex-none md:pt-0">
        <article className="rounded-2xl border border-gray-200 bg-gray p-4 shadow-card sm:p-6">
          <div className="mb-4 flex flex-col gap-4 sm:mb-5 sm:flex-row sm:items-start">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 p-2 sm:h-14 sm:w-14 ${
                darkLogo ? 'bg-gray-900' : 'bg-gray-50'
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
                <span className="text-xs font-semibold text-gray-700">{logoAlt}</span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                {logoAlt}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-gray-900 sm:text-2xl">
                {position}
              </h3>
              <div className="mt-3 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {dateStr}
              </div>
            </div>
          </div>

          {summary?.length ? (
            <ul className="space-y-3 text-sm leading-6 text-gray-600">
              {summary.map((item, itemIndex) => (
                <li key={`${position}-${itemIndex}`} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center text-sm font-medium text-primary transition hover:underline"
          >
            Visit company
          </a>
        </article>
      </div>
    </motion.div>
  );
};

export default ExperienceDetails;
