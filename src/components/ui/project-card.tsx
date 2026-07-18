'use client';

import * as React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { ArrowRight } from 'lucide-react';

import { mergeClasses } from '@/lib/utils';

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc?: string | StaticImageData;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  external?: boolean;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      className,
      imgSrc,
      title,
      description,
      link,
      linkText = 'View project',
      external = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={mergeClasses(
          'group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gray shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-card-hover',
          className
        )}
        {...props}
      >
        <a
          href={link}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="relative block aspect-video overflow-hidden bg-gray-50"
          aria-label={`${title} — ${linkText}`}
        >
          {imgSrc ? (
            typeof imgSrc === 'string' ? (
              // Remote or public path string
              <img
                src={imgSrc}
                alt=""
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
                loading="lazy"
              />
            ) : (
              <Image
                src={imgSrc}
                alt=""
                fill
                className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            )
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 via-gray-50 to-primary/5">
              <span className="text-4xl font-bold text-primary/25">
                {title.charAt(0)}
              </span>
            </div>
          )}
        </a>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
            {description}
          </p>

          <a
            href={link}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="group/button mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 hover:underline"
          >
            {linkText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </a>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

export { ProjectCard };
