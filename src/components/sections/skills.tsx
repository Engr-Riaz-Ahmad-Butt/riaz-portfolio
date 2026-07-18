'use client';

import { Cloud, Code2, Server } from 'lucide-react';
import { motion } from 'framer-motion';

import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { fadeUp, fadeUpTransition, MOTION_STAGGER } from '@/lib/motion';
import { mergeClasses } from '@/lib/utils';

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    description:
      'Building responsive, accessible interfaces with modern frameworks and design systems.',
    icon: Code2,
    iconClassName: 'text-teal-500 dark:text-teal-300',
    iconBg: 'bg-teal-500/10',
    tags: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    description:
      'Architecting robust APIs and services that stay reliable as products grow.',
    icon: Server,
    iconClassName: 'text-emerald-500 dark:text-emerald-300',
    iconBg: 'bg-emerald-500/10',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'SQL', 'Socket.io'],
  },
  {
    title: 'DevOps & Tools',
    description:
      'Streamlining delivery workflows and shipping with solid engineering tooling.',
    icon: Cloud,
    iconClassName: 'text-sky-500 dark:text-sky-300',
    iconBg: 'bg-sky-500/10',
    tags: ['Docker', 'Kubernetes', 'AWS', 'Git', 'CI/CD', 'Netlify', 'Vercel'],
  },
] as const;

const SkillsSection = () => {
  return (
    <Container id="skills" altSurface>
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={fadeUpTransition}
        >
          <Tag label="Skills" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.08 }}
        >
          <Typography variant="h2">Skills and technologies</Typography>
          <Typography className="mt-3 max-w-2xl text-gray-600">
            Capabilities I use day to day — focused on what I actually ship with.
          </Typography>
        </motion.div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{
                ...fadeUpTransition,
                delay: index * MOTION_STAGGER,
              }}
              className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray p-6 shadow-card transition-colors hover:border-primary/30 md:p-7"
            >
              <div
                className={mergeClasses(
                  'mb-5 flex h-11 w-11 items-center justify-center rounded-xl',
                  group.iconBg,
                  group.iconClassName
                )}
              >
                <Icon size={22} aria-hidden />
              </div>

              <h3 className="text-xl font-semibold text-gray-900">{group.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 font-mono text-xs text-gray-700 dark:bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Container>
  );
};

export default SkillsSection;
