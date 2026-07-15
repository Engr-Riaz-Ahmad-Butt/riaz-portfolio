'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Code2, GraduationCap } from 'lucide-react';

import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Button from '@/components/general/button';
import StatBadge from '@/components/data-display/about-stats';
import AboutWorkflow from '@/components/visual/about-workflow';
import { fadeUp, fadeUpTransition } from '@/lib/motion';

const PROOF_CHIPS = [
  'MERN · Next.js · TypeScript',
  'AI workflows at Aawaz',
  'NetSuite & enterprise UX',
  'Freelance-ready',
] as const;

const AboutMeSection = () => {
  return (
    <Container id="about">
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={fadeUpTransition}
        >
          <Tag label="About" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.08 }}
        >
          <Typography variant="h2">About me</Typography>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.12 }}
        >
          <Typography className="max-w-2xl text-lg text-gray-600">
            Product-minded full-stack work — from interface craft to APIs that ship.
          </Typography>
        </motion.div>
      </div>

      <div className="flex w-full flex-col gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={fadeUpTransition}
          className="flex flex-col gap-6"
        >
          <blockquote className="border-l-2 border-primary/40 pl-6">
            <Typography className="text-xl font-semibold leading-snug text-gray-900 md:text-2xl">
              I build full-stack products end-to-end — especially React/Next.js fronts
              connected to Node APIs and, lately, ML-backed workflows at Aawaz AI.
            </Typography>
          </blockquote>

          <Typography className="max-w-3xl text-lg leading-relaxed text-gray-600">
            At Mexil I shipped both the NYF Holidays client and admin dashboard.
            Earlier I customized NetSuite workflows at Abacus, which still shapes how
            I think about business process UX. Outside work I keep honing TypeScript
            craft and clean component architecture.
          </Typography>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.06 }}
        >
          <AboutWorkflow />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.1 }}
          className="flex flex-wrap gap-3"
        >
          <StatBadge icon={Briefcase} label="Years exp" value={3} delay={0.1} />
          <StatBadge icon={Code2} label="Shipped projects" value={10} delay={0.2} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.12 }}
          className="flex flex-wrap gap-2"
        >
          {PROOF_CHIPS.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-mono text-xs text-gray-600"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.14 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <GraduationCap size={24} aria-hidden />
            </div>
            <div>
              <Typography variant="body1" className="font-bold text-gray-900">
                Education
              </Typography>
              <Typography variant="body3" className="mt-1 text-gray-600">
                BSc Software Engineering
              </Typography>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Briefcase size={24} aria-hidden />
            </div>
            <div>
              <Typography variant="body1" className="font-bold text-gray-900">
                Availability
              </Typography>
              <Typography variant="body3" className="mt-1 text-gray-600">
                Freelance and full-time
              </Typography>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.16 }}
          className="flex flex-wrap gap-3"
        >
          <Button asChild>
              <a href="/#work">
                View selected work
                <ArrowUpRight size={16} aria-hidden />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/#contact">Start a conversation</a>
          </Button>
        </motion.div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
