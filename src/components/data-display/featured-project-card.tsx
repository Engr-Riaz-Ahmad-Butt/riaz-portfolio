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
import { fadeUp, fadeUpTransition } from '@/lib/motion';
import { mergeClasses } from '@/lib/utils';

type FeaturedProjectCardProps = {
  project: ProjectDetails;
  index: number;
  layout?: 'wide' | 'stacked';
};

const FeaturedProjectCard = ({
  project,
  index,
  layout = 'stacked',
}: FeaturedProjectCardProps) => {
  const isWide = layout === 'wide';
  const primaryHref = project.caseStudySlug
    ? `/work/${project.caseStudySlug}`
    : project.url;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      transition={{ ...fadeUpTransition, delay: index * 0.06 }}
      className="group h-full"
    >
      <div
        className={mergeClasses(
          'flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-gray transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover',
          isWide && 'lg:grid lg:grid-cols-[1.15fr_1fr]'
        )}
      >
        <Link
          noCustomization
          href={primaryHref}
          externalLink={!project.caseStudySlug}
          aria-label={`${project.name} — open ${
            project.caseStudySlug ? 'case study' : 'live demo'
          }`}
          className={mergeClasses(
            'relative block overflow-hidden border-b border-gray-200 bg-gray-50',
            'aspect-[16/10]',
            isWide && 'lg:aspect-auto lg:border-b-0 lg:border-r'
          )}
        >
          <ProjectThumb
            project={project}
            sizes={
              isWide
                ? '(max-width: 1024px) 100vw, 640px'
                : '(max-width: 768px) 100vw, 50vw'
            }
          />
        </Link>

        <div
          className={mergeClasses(
            'flex flex-1 flex-col gap-4 p-6',
            isWide ? 'md:p-8 lg:p-10' : 'md:p-7'
          )}
        >
          <ProjectMeta project={project} />

          <div>
            <h3
              className={mergeClasses(
                'font-semibold tracking-tight text-gray-900',
                isWide ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
              )}
            >
              <Link
                noCustomization
                href={primaryHref}
                externalLink={!project.caseStudySlug}
                className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {project.name}
              </Link>
            </h3>
            <p
              className={mergeClasses(
                'mt-2.5 leading-relaxed text-gray-600',
                isWide ? 'text-base md:text-lg' : 'text-sm md:text-base'
              )}
            >
              {project.description}
            </p>
            {project.outcome ? (
              <p className="mt-2 text-sm text-gray-500">{project.outcome}</p>
            ) : null}
          </div>

          <TechPills
            technologies={project.technologies}
            max={isWide ? 5 : 4}
            projectName={project.name}
          />

          <div className="mt-auto pt-2">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProjectCard;
