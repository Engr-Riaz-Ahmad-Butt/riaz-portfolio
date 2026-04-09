'use client';

import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ExperienceSection = () => {
  return (
    <Container id="experience" className="relative overflow-hidden bg-gray-50 dark:bg-slate-950">
      {/* Ambient glowing background for glassmorphism */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-[150px] dark:bg-blue-600/10" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[150px] dark:bg-purple-600/10" />

      <div className="flex flex-col items-center gap-4 mb-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="self-center"
        >
          <Tag label="Experience" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Typography variant="subtitle" className="max-w-xl text-center">
            A journey through my professional growth and key milestones:
          </Typography>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-5xl px-1 sm:px-4 md:px-0">
        {/* Timeline Stem */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent sm:left-6 md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {EXPERIENCES?.map((experience, index) => (
            <ExperienceDetails 
              {...experience} 
              key={index} 
              index={index}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ExperienceSection;
