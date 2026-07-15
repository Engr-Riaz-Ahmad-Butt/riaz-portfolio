'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { PROJECTS } from '@/lib/data';
import FeaturedProjectCard from '@/components/data-display/featured-project-card';
import AllProjectsDialog from '@/components/data-display/all-projects-dialog';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Button from '@/components/general/button';
import Container from '@/components/layout/container';
import { fadeUp, fadeUpTransition } from '@/lib/motion';

const WorkSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featured = PROJECTS.filter((project) => project.featured);
  const [leadProject, ...otherFeatured] = featured;

  return (
    <Container id="work" altSurface>
      <div className="flex flex-col items-center gap-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={fadeUpTransition}
        >
          <Tag label="Projects" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.08 }}
          className="max-w-3xl"
        >
          <Typography variant="h2">
            Products I designed, built, and shipped
          </Typography>
          <Typography className="mt-4 text-gray-600">
            A hand-picked selection of my strongest work — live demos and case
            studies across travel, AI, and client platforms.
          </Typography>
        </motion.div>
      </div>

      <div className="flex flex-col gap-5 md:gap-6">
        {leadProject ? (
          <FeaturedProjectCard project={leadProject} index={0} layout="wide" />
        ) : null}

        {otherFeatured.length ? (
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {otherFeatured.map((project, index) => (
              <FeaturedProjectCard
                key={project.name}
                project={project}
                index={index + 1}
                layout="stacked"
              />
            ))}
          </div>
        ) : null}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={fadeUpTransition}
        className="flex flex-col items-center gap-3"
      >
        <Button
          variant="outline"
          onClick={() => setShowAllProjects(true)}
          className="group"
        >
          View all projects
          <span className="rounded-full bg-gray-100 px-2 py-0.5 font-mono text-xs text-gray-600">
            {PROJECTS.length}
          </span>
          <ArrowRight
            size={16}
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Button>
        <Typography variant="body3" className="text-gray-500">
          Client platforms, marketing sites, and product experiments
        </Typography>
      </motion.div>

      <AllProjectsDialog
        open={showAllProjects}
        onOpenChange={setShowAllProjects}
        projects={PROJECTS}
      />
    </Container>
  );
};

export default WorkSection;
