'use client';

import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

import { ProjectDetails } from '@/lib/types';
import Link from '@/components/navigation/link';
import { fadeUp, fadeUpTransition } from '@/lib/motion';
import { mergeClasses } from '@/lib/utils';

type FeaturedWorkRowProps = {
  project: ProjectDetails;
  index: number;
};

const FeaturedWorkRow = ({ project, index }: FeaturedWorkRowProps) => {
  const reverse = index % 2 === 1;
  const primaryHref = project.caseStudySlug
    ? `/work/${project.caseStudySlug}`
    : project.url;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={fadeUpTransition}
      className="group grid items-center gap-6 md:grid-cols-12 md:gap-10 lg:gap-14"
    >
      <Link
        noCustomization
        href={primaryHref}
        externalLink={!project.caseStudySlug}
        aria-label={`${project.name} — open ${
          project.caseStudySlug ? 'case study' : 'live site'
        }`}
        className={mergeClasses(
          'relative block aspect-[16/10] overflow-hidden rounded-xl border border-gray-200 bg-gray-50 md:col-span-7',
          reverse && 'md:order-2'
        )}
      >
        {project.previewImage ? (
          <Image
            src={project.previewImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-mono text-5xl text-gray-300">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        )}
      </Link>

      <div
        className={mergeClasses('md:col-span-5', reverse && 'md:order-1')}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {String(index + 1).padStart(2, '0')}
          {project.category ? ` — ${project.category}` : null}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
          <Link
            noCustomization
            href={primaryHref}
            externalLink={!project.caseStudySlug}
            className="inline-flex items-baseline gap-2 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {project.name}
            <ArrowUpRight
              size={20}
              aria-hidden
              className="shrink-0 self-center text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </h3>

        <p className="mt-4 leading-relaxed text-gray-600">
          {project.description}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {project.technologies.slice(0, 5).map((tech) => (
            <li
              key={`${project.name}-${tech}`}
              className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-4">
          {project.github ? (
            <Link
              noCustomization
              href={project.github}
              externalLink
              aria-label={`${project.name} — source code on GitHub`}
              className="text-gray-500 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Github size={20} aria-hidden />
            </Link>
          ) : null}
          <Link
            noCustomization
            href={project.url}
            externalLink
            aria-label={`${project.name} — open live site`}
            className="text-gray-500 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ExternalLink size={20} aria-hidden />
          </Link>
          {project.caseStudySlug ? (
            <Link
              noCustomization
              href={`/work/${project.caseStudySlug}`}
              className="font-mono text-xs uppercase tracking-[0.14em] text-gray-500 underline-offset-4 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Case study
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedWorkRow;
