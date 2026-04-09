'use client';

import Image from 'next/image';
import { ArrowUpRight, Award } from 'lucide-react';
import { motion } from 'framer-motion';

import { CertificatesDetails as CertificateDetailsJProps } from '@/lib/types';
import Typography from '@/components/general/typography';

interface CertificateDetailsProps extends CertificateDetailsJProps {
  index: number;
}

const CertificateDetails = ({
  image,
  title,
  CertificateName,
  url,
  index,
}: CertificateDetailsProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative h-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-sky-200 hover:shadow-[0_28px_80px_rgba(14,165,233,0.14)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_60px_rgba(2,6,23,0.45)] dark:hover:border-sky-400/30 dark:hover:shadow-[0_28px_80px_rgba(14,165,233,0.16)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_45%,rgba(14,165,233,0.08))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%,rgba(56,189,248,0.12))]" />

      <div className="relative flex h-full flex-col p-4 md:p-5">
        <a href={url} target="_blank" rel="noopener noreferrer" className="block">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-transform duration-500 group-hover:scale-[1.02] dark:border-white/10 dark:bg-slate-950 dark:shadow-[0_18px_45px_rgba(2,6,23,0.4)]">
            <div className="mb-3 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 dark:border-white/10 dark:bg-slate-900">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-sky-600 dark:text-sky-300" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  Verified
                </span>
              </div>
              <ArrowUpRight size={16} className="text-slate-500 dark:text-slate-400" />
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[linear-gradient(180deg,_rgba(248,250,252,0.95),_rgba(226,232,240,0.75))] dark:bg-[linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(30,41,59,0.75))]">
              <Image
                src={image}
                alt={`${CertificateName} certificate`}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        </a>

        <div className="mt-5 flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Typography
                variant="subtitle"
                className="text-xl font-semibold text-slate-900 dark:text-white"
              >
                {CertificateName}
              </Typography>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
                Credential highlight
              </p>
            </div>
          </div>

          <Typography className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {title}
          </Typography>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-700 transition hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
          >
            View certificate
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default CertificateDetails;
