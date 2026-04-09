import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import Link from '@/components/navigation/link';

type ProjectDetailsProps = {
  project: ProjectDetailsType;
  index: number;
};

const ProjectDetails = ({ project, index }: ProjectDetailsProps) => {
  const featured = index < 2;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="group relative h-full overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-sky-200 hover:shadow-[0_28px_80px_rgba(14,165,233,0.18)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_60px_rgba(2,6,23,0.45)] dark:hover:border-sky-400/30 dark:hover:shadow-[0_28px_80px_rgba(14,165,233,0.16)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.5),transparent_45%,rgba(14,165,233,0.08))] opacity-80 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%,rgba(56,189,248,0.12))]" />

      <div className="relative flex h-full flex-col">
        <Link noCustomization href={project.url} externalLink className="block">
          <div className={`relative overflow-hidden p-4 ${featured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),transparent_45%),linear-gradient(180deg,_rgba(226,232,240,0.95),_rgba(241,245,249,0.7))] dark:bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),transparent_40%),linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.88))]" />

            <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/45 px-3 py-1.5 text-[11px] font-medium tracking-[0.18em] text-white/90 backdrop-blur-md">
              <Sparkles size={14} />
              Featured Build
            </div>

            <div className="relative z-[1] flex h-full items-center justify-center">
              <div className="w-full max-w-[92%] overflow-hidden rounded-[1.35rem] border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-slate-950 dark:shadow-[0_18px_45px_rgba(2,6,23,0.45)]">
                <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-4 py-2.5 dark:border-white/10 dark:bg-slate-900">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-3 truncate text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {project.name}
                  </span>
                </div>

                <div className="relative aspect-[16/9] bg-[linear-gradient(180deg,_rgba(248,250,252,0.95),_rgba(226,232,240,0.7))] p-3 dark:bg-[linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(30,41,59,0.75))]">
                  <Image
                    src={project.previewImage}
                    alt={`${project.name} preview`}
                    fill
                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>

        <div className="relative flex flex-1 flex-col p-4 md:p-5">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-900 dark:text-white md:text-2xl">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
            </div>

            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 backdrop-blur-md transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:border-white/10 dark:bg-white/10 dark:text-white md:flex">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
              {featured ? 'Premium showcase' : 'Project case study'}
            </div>
            <Link
              noCustomization
              href={project.url}
              externalLink
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-sky-400/30 dark:hover:text-sky-300"
            >
              Live Preview
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies?.slice(0, featured ? 7 : 5).map((tech) => (
              <span
                key={`${project.name}-${tech}`}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 transition group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:group-hover:border-sky-400/30 dark:group-hover:bg-sky-500/10 dark:group-hover:text-sky-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectDetails;
