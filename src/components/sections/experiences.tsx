'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

import { CERTIFICATES, EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { fadeUp, fadeUpTransition } from '@/lib/motion';

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = EXPERIENCES[activeIndex];

  const formatShortDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' }).format(date);
  };

  return (
    <Container id="experience">
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={fadeUpTransition}
        >
          <Tag label="Experience" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.08 }}
        >
          <Typography variant="h2">Work experience</Typography>
          <Typography className="mt-3 max-w-xl">
            Roles across product engineering, ERP customization, and full-stack delivery.
          </Typography>
        </motion.div>
      </div>

      {/* Interactive Master-Detail Panel */}
      <div className="mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-12 md:items-start">
        {/* Left Side: Master Tab Navigation */}
        <div className="flex w-full gap-2 overflow-x-auto pb-4 scrollbar-none md:col-span-5 md:flex-col md:gap-3 md:overflow-x-visible md:pb-0">
          {EXPERIENCES.map((exp, index) => {
            const isActive = index === activeIndex;
            const logoSrc = typeof exp.logo === 'string' ? exp.logo : exp.logo?.src || '';
            const durationStr = `${formatShortDate(exp.startDate)} — ${
              exp.currentlyWorkHere ? 'Present' : exp.endDate ? formatShortDate(exp.endDate) : ''
            }`;

            return (
              <button
                key={exp.logoAlt}
                onClick={() => setActiveIndex(index)}
                className="relative flex shrink-0 items-center gap-4 rounded-2xl p-4 md:py-5 md:px-5 text-left transition-all duration-300 hover:bg-black/[0.03] dark:hover:bg-white/[0.03] hover:translate-x-0.5 md:hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:w-full"
              >
                {/* Dynamic Sliding Background Tab Pill */}
                {isActive && (
                  <motion.div
                    layoutId="active-exp-pill"
                    className="absolute inset-0 surface-neu"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Tab content inside button */}
                <div className="relative z-10 flex w-full items-center gap-4">
                  {/* Small Logo Container */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 p-1.5 shadow-sm dark:border-white/10 ${
                      exp.darkLogo ? 'bg-zinc-950' : 'bg-gray-50'
                    }`}
                  >
                    {logoSrc ? (
                      <Image
                        src={logoSrc}
                        alt={exp.logoAlt}
                        width={28}
                        height={28}
                        className="h-auto max-h-7 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-[10px] font-bold text-gray-700 dark:text-gray-700">
                        {exp.logoAlt.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="hidden min-w-0 flex-1 md:block">
                    <h4
                      className={`text-base font-bold transition-colors duration-300 ${
                        isActive ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-700'
                      }`}
                    >
                      {exp.logoAlt}
                    </h4>
                    <p
                      className={`mt-1 truncate text-sm transition-colors duration-300 ${
                        isActive ? 'text-primary' : 'text-gray-500'
                      }`}
                    >
                      {exp.position}
                    </p>
                    <p className="mt-1 font-mono text-xs text-gray-400">
                      {durationStr}
                    </p>
                  </div>

                  {/* Mobile Label */}
                  <span
                    className={`block text-sm font-bold md:hidden ${
                      isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-700'
                    }`}
                  >
                    {exp.logoAlt}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Detail Panel */}
        <div className="relative md:col-span-7">
          <AnimatePresence mode="wait">
            <ExperienceDetails
              key={activeExperience.logoAlt}
              {...activeExperience}
              active={true}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Certifications list */}
      <div className="mx-auto mt-24 max-w-5xl">
        <div className="mb-8 border-b border-gray-100 pb-4 dark:border-white/5">
          <Typography variant="h3" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Professional Certifications
          </Typography>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATES.map((certificate) => (
            <a
              key={certificate.CertificateName}
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group surface-neu p-4 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl bg-gray-50 dark:bg-zinc-950">
                {certificate.image ? (
                  <Image
                    src={certificate.image}
                    alt={`${certificate.CertificateName} certificate`}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    sizes="200px"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 via-gray-50 to-primary/5 p-4 text-center dark:from-primary/10 dark:via-zinc-900 dark:to-primary/5">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-primary">
                      Certificate
                    </span>
                    <p className="text-xs font-semibold text-gray-900 dark:text-white">
                      {certificate.CertificateName}
                    </p>
                    <p className="text-[10px] text-gray-500">{certificate.issuer}</p>
                  </div>
                )}
              </div>
              <p className="font-semibold text-gray-900 transition-colors group-hover:text-primary dark:text-white text-sm">
                {certificate.CertificateName}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {certificate.issuer}
                {certificate.year ? ` · ${certificate.year}` : ''}
              </p>
              {certificate.credentialId ? (
                <p className="mt-1 font-mono text-[9px] text-gray-400">
                  ID {certificate.credentialId}
                </p>
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ExperienceSection;
