'use client';

import { motion } from 'framer-motion';

import { ProjectDetails } from '@/lib/types';
import Link from '@/components/navigation/link';
import {
  ProjectLinks,
  ProjectMeta,
  ProjectThumb,
  TechPills,
} from '@/components/data-display/project-parts';
import { MOTION_EASE } from '@/lib/motion';

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: MOTION_EASE },
  },
};

const ProjectGridCard = ({ project }: { project: ProjectDetails }) => {
  return (
    <motion.li variants={itemVariants} className="group h-full list-none">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
        <Link
          noCustomization
          href={project.url}
          externalLink
          aria-label={`${project.name} — open live demo`}
          className="relative block aspect-[16/10] overflow-hidden border-b border-gray-200 bg-gray-50"
        >
          <ProjectThumb
            project={project}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          />
        </Link>

        <div className="flex flex-1 flex-col gap-3 p-4 md:p-5">
          <ProjectMeta project={project} />

          <div>
            <h3 className="text-base font-semibold tracking-tight text-gray-900 md:text-lg">
              <Link
                noCustomization
                href={project.url}
                externalLink
                className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {project.name}
              </Link>
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-600">
              {project.description}
            </p>
          </div>

          <TechPills
            technologies={project.technologies}
            max={3}
            projectName={project.name}
          />

          <div className="mt-auto pt-1">
            <ProjectLinks project={project} compact />
          </div>
        </div>
      </article>
    </motion.li>
  );
};

export default ProjectGridCard;
