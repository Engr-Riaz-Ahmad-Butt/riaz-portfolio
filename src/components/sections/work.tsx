'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, PROJECTS.length - itemsPerView);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <Container
      id="work"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_28%),linear-gradient(180deg,_#f8fbff_0%,_#eef4ff_100%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_24%),linear-gradient(180deg,_#020617_0%,_#0f172a_100%)]"
    >
      <div className="absolute inset-x-0 top-10 -z-10 h-72 bg-[radial-gradient(circle,_rgba(56,189,248,0.18),_transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(96,165,250,0.12),_transparent_60%)]" />

      <div className="flex flex-col gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="flex justify-center"
        >
          <Tag
            label="Projects"
            className="border border-sky-200/80 bg-white/80 backdrop-blur dark:border-sky-500/20 dark:bg-white/5"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Typography
            variant="h2"
            className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-5xl dark:text-white"
          >
            Crafted products with a sharper visual system and polished interactions
          </Typography>
          <Typography className="mt-4 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            A curated selection of client work and personal builds across AI, full-stack platforms,
            travel systems, dashboards, and interactive product experiences.
          </Typography>
        </motion.div>
      </div>

      <div className="relative mt-14">
        {currentIndex > 0 ? (
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-5 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 text-slate-700 shadow-lg backdrop-blur transition hover:border-sky-200 hover:text-sky-700 dark:border-white/10 dark:bg-slate-900/80 dark:text-white dark:hover:border-sky-400/30 dark:hover:text-sky-300 xl:flex"
            aria-label="Previous projects"
          >
            <ChevronLeft size={20} />
          </button>
        ) : null}

        {currentIndex < maxIndex ? (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 z-10 hidden translate-x-5 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 text-slate-700 shadow-lg backdrop-blur transition hover:border-sky-200 hover:text-sky-700 dark:border-white/10 dark:bg-slate-900/80 dark:text-white dark:hover:border-sky-400/30 dark:hover:text-sky-300 xl:flex"
            aria-label="Next projects"
          >
            <ChevronRight size={20} />
          </button>
        ) : null}

        <div className="mx-auto max-w-6xl overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {PROJECTS.map((project, index) => (
              <div
                key={project.name}
                className="w-full shrink-0 xl:w-[calc(50%-12px)]"
              >
                <ProjectDetails project={project} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-10 bg-sky-600 dark:bg-sky-300'
                  : 'w-2.5 bg-slate-300 dark:bg-slate-600'
              }`}
              aria-label={`Go to project slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WorkSection;
