'use client';

import { motion } from 'framer-motion';
import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import SkillCard from '@/components/data-display/skill-card';
import { fadeUp, fadeUpTransition, MOTION_STAGGER } from '@/lib/motion';

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Databases',
  tools: 'Tools',
};

const SkillsSection = () => {
  const categories = {
    frontend: TECHNOLOGIES.filter((tech) => tech.category === 'frontend'),
    backend: TECHNOLOGIES.filter((tech) => tech.category === 'backend'),
    database: TECHNOLOGIES.filter((tech) => tech.category === 'database'),
    tools: TECHNOLOGIES.filter((tech) => tech.category === 'tools'),
  };

  return (
    <Container id="skills" altSurface>
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={fadeUpTransition}
        >
          <Tag label="Skills" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.08 }}
        >
          <Typography variant="h2">Skills and technologies</Typography>
          <Typography className="mt-3 max-w-2xl text-gray-600">
            Daily drivers across TypeScript, React, Next.js, Node.js, and data stores —
            trimmed to what I actually ship with.
          </Typography>
        </motion.div>
      </div>

      <div className="flex flex-col gap-12">
        {Object.entries(categories).map(([key, techs], categoryIndex) =>
          techs.length > 0 ? (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{
                ...fadeUpTransition,
                delay: categoryIndex * MOTION_STAGGER,
              }}
              className="flex flex-col gap-5"
            >
              <Typography variant="h3" className="text-lg uppercase tracking-[0.16em]">
                {categoryLabels[key as keyof typeof categoryLabels]}
              </Typography>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {techs.map((technology) => (
                  <SkillCard key={technology.label} {...technology} />
                ))}
              </div>
            </motion.div>
          ) : null
        )}
      </div>
    </Container>
  );
};

export default SkillsSection;
