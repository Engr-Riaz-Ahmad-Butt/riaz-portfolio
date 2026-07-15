'use client';

import { motion } from 'framer-motion';

import { PROJECTS } from '@/lib/data';
import FeaturedWorkRow from '@/components/data-display/featured-work-row';
import ProjectIndexList from '@/components/data-display/project-index-list';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { fadeUp, fadeUpTransition } from '@/lib/motion';

const WorkSection = () => {
  const featured = PROJECTS.filter((project) => project.featured);
  const others = PROJECTS.filter((project) => !project.featured);

  return (
    <Container id="work" altSurface>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={fadeUpTransition}
        className="flex max-w-2xl flex-col items-start gap-4"
      >
        <Tag label="Selected work" />
        <Typography variant="h2">
          Work I&apos;m proud of
        </Typography>
        <Typography className="text-gray-600">
          Three projects that best show how I design and build — followed by an
          index of everything else I&apos;ve shipped.
        </Typography>
      </motion.div>

      <div className="flex flex-col gap-16 md:gap-24">
        {featured.map((project, index) => (
          <FeaturedWorkRow
            key={project.name}
            project={project}
            index={index}
          />
        ))}
      </div>

      <div className="mt-4 md:mt-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={fadeUpTransition}
          className="mb-6 flex items-baseline justify-between gap-4"
        >
          <Typography variant="h3">More projects</Typography>
          <span className="font-mono text-xs text-gray-400">
            {String(featured.length + 1).padStart(2, '0')} —{' '}
            {String(PROJECTS.length).padStart(2, '0')}
          </span>
        </motion.div>

        <ProjectIndexList projects={others} startAt={featured.length + 1} />
      </div>
    </Container>
  );
};

export default WorkSection;
