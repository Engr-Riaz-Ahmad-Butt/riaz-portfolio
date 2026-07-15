import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

import { ProjectDetails } from '@/lib/types';
import Link from '@/components/navigation/link';
import { mergeClasses } from '@/lib/utils';

export const ProjectThumb = ({
  project,
  sizes,
}: {
  project: ProjectDetails;
  sizes: string;
}) => {
  if (project.previewImage) {
    return (
      <Image
        src={project.previewImage}
        alt=""
        fill
        sizes={sizes}
        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 via-gray-50 to-primary/5">
      <span className="text-4xl font-bold text-primary/30">
        {project.name.charAt(0)}
      </span>
    </div>
  );
};

export const ProjectMeta = ({ project }: { project: ProjectDetails }) => {
  const inProgress = project.status === 'in-progress';

  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.category ? (
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-500">
          {project.category}
        </span>
      ) : null}
      {project.status ? (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[11px] font-medium text-gray-600">
          <span
            className={mergeClasses(
              'h-1.5 w-1.5 rounded-full',
              inProgress ? 'bg-amber-500' : 'bg-emerald-500'
            )}
            aria-hidden
          />
          {inProgress ? 'In progress' : 'Completed'}
        </span>
      ) : null}
    </div>
  );
};

export const TechPills = ({
  technologies,
  max = 4,
  projectName,
}: {
  technologies: string[];
  max?: number;
  projectName: string;
}) => {
  const visible = technologies.slice(0, max);
  const hidden = technologies.length - visible.length;

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
      {visible.map((tech) => (
        <li
          key={`${projectName}-${tech}`}
          className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 font-mono text-[11px] text-gray-600"
        >
          {tech}
        </li>
      ))}
      {hidden > 0 ? (
        <li className="rounded-md border border-dashed border-gray-200 px-2.5 py-1 font-mono text-[11px] text-gray-500">
          +{hidden}
        </li>
      ) : null}
    </ul>
  );
};

export const ProjectLinks = ({
  project,
  compact = false,
}: {
  project: ProjectDetails;
  compact?: boolean;
}) => {
  const base = compact
    ? 'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors'
    : 'inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors';
  const primary = mergeClasses(
    base,
    'bg-primary text-primary-foreground hover:bg-teal-700 dark:hover:bg-teal-300'
  );
  const secondary = mergeClasses(
    base,
    'border border-gray-200 text-gray-700 hover:border-primary/40 hover:text-primary'
  );

  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.caseStudySlug ? (
        <Link
          noCustomization
          href={`/work/${project.caseStudySlug}`}
          className={primary}
        >
          Case study
          <ArrowUpRight size={compact ? 13 : 14} aria-hidden />
        </Link>
      ) : null}

      <Link
        noCustomization
        href={project.url}
        externalLink
        className={project.caseStudySlug ? secondary : primary}
        aria-label={`${project.name} — live demo`}
      >
        <ExternalLink size={compact ? 13 : 14} aria-hidden />
        Live demo
      </Link>

      {project.github ? (
        <Link
          noCustomization
          href={project.github}
          externalLink
          className={secondary}
          aria-label={`${project.name} — source code on GitHub`}
        >
          <Github size={compact ? 13 : 14} aria-hidden />
          Code
        </Link>
      ) : null}
    </div>
  );
};
