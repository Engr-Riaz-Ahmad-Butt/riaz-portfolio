'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { CERTIFICATES, EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { fadeUp, fadeUpTransition } from '@/lib/motion';

const ExperienceSection = () => {
  return (
    <Container id="experience">
      <div className="mb-12 flex flex-col items-center gap-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={fadeUpTransition}
        >
          <Tag label="Experience" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.08 }}
        >
          <Typography variant="h2">Work experience</Typography>
          <Typography className="mt-3 max-w-xl text-gray-600">
            Roles across product engineering, ERP customization, and full-stack delivery.
          </Typography>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-5xl px-1 sm:px-4 md:px-0">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-primary/40 to-transparent sm:left-6 md:left-1/2 md:-translate-x-1/2" />
        <div className="flex flex-col gap-12">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceDetails {...experience} key={experience.logoAlt} index={index} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl">
        <Typography variant="h3" className="text-lg">
          Certifications
        </Typography>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {CERTIFICATES.map((certificate) => (
            <a
              key={certificate.CertificateName}
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:border-primary"
            >
              <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl bg-gray">
                <Image
                  src={certificate.image}
                  alt={`${certificate.CertificateName} certificate`}
                  fill
                  className="object-contain p-2"
                  sizes="200px"
                />
              </div>
              <p className="font-medium text-gray-900">{certificate.CertificateName}</p>
              <p className="mt-1 text-xs text-gray-500">
                {certificate.issuer}
                {certificate.year ? ` · ${certificate.year}` : ''}
              </p>
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ExperienceSection;
