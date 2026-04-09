'use client';

import { motion } from 'framer-motion';

import { CERTIFICATES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import CertificateDetails from '@/components/data-display/certificate-details';
import Container from '@/components/layout/container';
import Typography from '../general/typography';

const TestimonialsSection = () => {
  return (
    <Container
      id="certificates"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_25%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.12),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#f8fbff_100%)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_22%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.1),_transparent_26%),linear-gradient(180deg,_#020617_0%,_#0f172a_100%)]"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-60 bg-[radial-gradient(circle,_rgba(125,211,252,0.18),_transparent_58%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(56,189,248,0.12),_transparent_58%)]" />

      <div className="flex flex-col gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="flex justify-center"
        >
          <Tag
            label="Certificates"
            className="border border-sky-200/80 bg-white/80 backdrop-blur dark:border-sky-500/20 dark:bg-white/5"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Typography
            variant="h2"
            className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-5xl dark:text-white"
          >
            Certifications that validate hands-on delivery and continuous growth
          </Typography>
          <Typography className="mt-4 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            A compact showcase of certifications and internship achievements across web design,
            full-stack development, and software engineering fundamentals.
          </Typography>
        </motion.div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {CERTIFICATES?.map((certificates, index) => (
          <CertificateDetails key={index} index={index} {...certificates} />
        ))}
      </div>
    </Container>
  );
};

export default TestimonialsSection;
