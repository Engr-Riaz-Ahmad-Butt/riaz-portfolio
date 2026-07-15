'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { GitBranch, Rocket, Search } from 'lucide-react';

import { mergeClasses } from '@/lib/utils';

const WORKFLOW_STEPS = [
  {
    icon: Search,
    step: '01',
    title: 'Understand',
    detail: 'Map users, flows, and business constraints before writing code.',
  },
  {
    icon: GitBranch,
    step: '02',
    title: 'Build',
    detail: 'Ship typed React/Next.js UIs backed by reliable Node APIs.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Deliver',
    detail: 'Iterate with performance, accessibility, and maintainability in mind.',
  },
] as const;

type AboutWorkflowProps = {
  className?: string;
};

const AboutWorkflow = ({ className }: AboutWorkflowProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={mergeClasses(
        'relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-soft md:p-8',
        className
      )}
      aria-label="How I approach product development"
      role="group"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgb(var(--primary-muted)/0.18),transparent_45%),radial-gradient(circle_at_100%_100%,rgb(var(--primary)/0.1),transparent_40%)]" />

      <div className="relative">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          How I work
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {WORKFLOW_STEPS.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="rounded-xl border border-gray-200 bg-gray/90 p-5 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} aria-hidden />
                  </div>
                  <span className="font-mono text-xs text-gray-400">{item.step}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.detail}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-6 rounded-xl border border-dashed border-primary/25 bg-primary/5 px-4 py-3 font-mono text-xs leading-relaxed text-gray-600">
          <span className="text-primary">const</span> approach ={' '}
          <span className="text-gray-900">{'{ clarity, craft, delivery }'}</span>;
        </div>
      </div>
    </div>
  );
};

export default AboutWorkflow;
