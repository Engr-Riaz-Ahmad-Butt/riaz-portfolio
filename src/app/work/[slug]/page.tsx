import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';

import {
  CASE_STUDIES,
  getAllCaseStudySlugs,
  getCaseStudy,
} from '@/content/work/case-studies';

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: 'Case study' };

  return {
    title: `${study.title} | Case Study · Riaz Ahmad Butt`,
    description: study.summary,
    openGraph: {
      title: `${study.title} | Case Study`,
      description: study.summary,
      images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-16 md:px-8 md:py-24">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        Case study · {study.role}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
        {study.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-600">{study.summary}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={study.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          Live demo
          <ArrowUpRight size={16} />
        </a>
        {study.github ? (
          <a
            href={study.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900"
          >
            GitHub
          </a>
        ) : null}
      </div>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-card">
        <Image
          src={study.image}
          alt={`${study.title} preview`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 896px) 100vw, 896px"
          priority
        />
      </div>

      <dl className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <dt className="text-xs uppercase tracking-[0.16em] text-gray-500">Role</dt>
          <dd className="mt-2 font-medium text-gray-900">{study.role}</dd>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <dt className="text-xs uppercase tracking-[0.16em] text-gray-500">Timeline</dt>
          <dd className="mt-2 font-medium text-gray-900">{study.timeline}</dd>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
          <dt className="text-xs uppercase tracking-[0.16em] text-gray-500">Stack</dt>
          <dd className="mt-2 font-medium text-gray-900">{study.stack.join(', ')}</dd>
        </div>
      </dl>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Problem</h2>
        <p className="leading-7 text-gray-600">{study.problem}</p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Approach</h2>
        <ul className="space-y-3 text-gray-600">
          {study.approach.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="leading-7">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Architecture</h2>
        <p className="leading-7 text-gray-600">{study.architecture}</p>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Outcomes</h2>
        <ul className="space-y-3 text-gray-600">
          {study.outcomes.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="leading-7">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 border-t border-gray-200 pt-8">
        <p className="text-sm text-gray-500">More case studies</p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {CASE_STUDIES.filter((item) => item.slug !== study.slug).map((item) => (
            <li key={item.slug}>
              <Link
                href={`/work/${item.slug}`}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:border-primary hover:text-primary"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
