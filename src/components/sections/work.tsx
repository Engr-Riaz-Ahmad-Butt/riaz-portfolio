'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

import { PROJECTS } from '@/lib/data';
import { ProjectCard } from '@/components/ui/project-card';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Button from '@/components/general/button';
import { fadeUp, fadeUpTransition, MOTION_STAGGER } from '@/lib/motion';

const INITIAL_COUNT = 3;

const WorkSection = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = PROJECTS.filter((project) => !project.archive);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hiddenCount = Math.max(projects.length - INITIAL_COUNT, 0);

  return (
    <Container id="work" altSurface>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={fadeUpTransition}
        className="mb-10 flex max-w-2xl flex-col items-center gap-4 text-center md:mx-auto"
      >
        <Tag label="Projects" />
        <Typography variant="h2">Selected work</Typography>
        <Typography className="text-gray-600">
          Products I designed, built, and shipped — live demos and case studies.
        </Typography>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => {
          const hasCaseStudy = Boolean(project.caseStudySlug);
          const link = hasCaseStudy
            ? `/work/${project.caseStudySlug}`
            : project.url;

          return (
            <motion.div
              key={project.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{
                ...fadeUpTransition,
                delay: (index % 3) * MOTION_STAGGER,
              }}
            >
              <ProjectCard
                title={project.name}
                description={project.outcome || project.description}
                imgSrc={project.previewImage}
                link={link}
                linkText={hasCaseStudy ? 'Case study' : 'View project'}
                external={!hasCaseStudy}
              />
            </motion.div>
          );
        })}
      </div>

      {hiddenCount > 0 ? (
        <div className="mt-10 flex justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
          >
            {showAll ? (
              <>
                Show less
                <ChevronUp size={16} aria-hidden />
              </>
            ) : (
              <>
                Show more ({hiddenCount})
                <ChevronDown size={16} aria-hidden />
              </>
            )}
          </Button>
        </div>
      ) : null}
    </Container>
  );
};

export default WorkSection;
