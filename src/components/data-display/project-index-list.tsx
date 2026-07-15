'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { ProjectDetails } from '@/lib/types';
import Link from '@/components/navigation/link';
import { fadeUp, fadeUpTransition } from '@/lib/motion';

type ProjectIndexListProps = {
  projects: ProjectDetails[];
  /** Number the list continues from (e.g. 3 featured rows above → start at 4). */
  startAt?: number;
};

const ProjectIndexList = ({ projects, startAt = 1 }: ProjectIndexListProps) => {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      transition={fadeUpTransition}
      className="group/list border-t border-gray-200"
    >
      {projects.map((project, index) => (
        <li key={project.name} className="border-b border-gray-200">
          <Link
            noCustomization
            href={project.url}
            externalLink
            className="group/row flex items-center gap-4 py-5 transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary group-hover/list:opacity-40 hover:!opacity-100 focus-visible:!opacity-100 md:gap-6"
          >
            <span
              className="w-7 shrink-0 font-mono text-xs text-gray-400"
              aria-hidden
            >
              {String(startAt + index).padStart(2, '0')}
            </span>

            <span className="min-w-0 flex-1">
              <span className="block truncate text-base font-medium text-gray-900 transition-colors duration-200 group-hover/row:text-primary md:text-lg">
                {project.name}
              </span>
            </span>

            <span
              className="hidden shrink-0 gap-3 font-mono text-xs text-gray-400 sm:flex"
              aria-hidden
            >
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={`${project.name}-${tech}`}>{tech}</span>
              ))}
            </span>

            <ArrowUpRight
              size={16}
              aria-hidden
              className="shrink-0 text-gray-400 transition-all duration-200 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:text-primary"
            />
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default ProjectIndexList;
