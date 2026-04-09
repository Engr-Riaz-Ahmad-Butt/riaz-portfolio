'use client';

import { useState } from 'react';
import { ArrowUpRight, Copy, Mail, Phone, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import SocialIcons from '@/components/data-display/social-icons';
import Tag from '@/components/data-display/tag';
import IconButton from '@/components/general/icon-button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import useWindowSize from '@/hooks/use-window-size';
import { copyTextToClipboard } from '@/lib/utils';

const email = 'engr.riazahmadbutt@gmail.com';
const phone = '+92 3360359897';

type CopyValue = 'email' | 'phone';

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(null);

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);

      const timeoutId = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timeoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert('Unable to copy!');
    }
  };

  return (
    <Container
      id="contact"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_28%),linear-gradient(180deg,_#f9fbff_0%,_#eef4ff_100%)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.1),_transparent_28%),linear-gradient(180deg,_rgba(2,6,23,0.96)_0%,_rgba(2,6,23,0.96)_100%)]"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle,_rgba(125,211,252,0.18),_transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(56,189,248,0.12),_transparent_60%)]" />

      <div className="flex flex-col gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="flex justify-center"
        >
          <Tag label="Get in touch" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Typography
            variant="h2"
            className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-5xl dark:text-white"
          >
            Let&apos;s turn your next product idea into something sharp, fast, and memorable
          </Typography>
          <Typography className="mt-4 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            Available for freelance work, product collaborations, and full-time opportunities.
            If you&apos;re building something ambitious, I&apos;d love to hear about it.
          </Typography>
        </motion.div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_60px_rgba(2,6,23,0.45)] md:p-8"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55),transparent_45%,rgba(14,165,233,0.08))] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%,rgba(56,189,248,0.12))]" />

          <div className="relative flex h-full flex-col">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-300">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
                  Contact channel
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-slate-900 dark:text-white">
                  Reach out directly
                </h3>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="group rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 transition hover:border-sky-200 hover:shadow-[0_16px_40px_rgba(14,165,233,0.12)] dark:border-white/10 dark:bg-slate-950/70 dark:hover:border-sky-400/20">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                      Email
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="mt-2 block break-all text-lg font-semibold tracking-[-0.02em] text-slate-900 transition hover:text-sky-700 dark:text-white dark:hover:text-sky-300 md:text-2xl"
                    >
                      {email}
                    </a>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Best for project inquiries, hiring, and collaboration discussions.
                    </p>
                  </div>
                  <IconButton
                    size={width && width < 768 ? 'md' : 'lg'}
                    onClick={() => handleCopyClick(email, 'email')}
                    showTooltip={isCopied && copiedValueType === 'email'}
                    tooltipText="Copied!"
                    className="self-start border border-slate-200 bg-white/90 hover:bg-slate-50 sm:self-center dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 [&_svg]:stroke-slate-600 dark:[&_svg]:stroke-slate-200"
                  >
                    <Copy />
                  </IconButton>
                </div>
              </div>

              <div className="group rounded-[1.5rem] border border-slate-200 bg-white/90 p-4 transition hover:border-sky-200 hover:shadow-[0_16px_40px_rgba(14,165,233,0.12)] dark:border-white/10 dark:bg-slate-950/70 dark:hover:border-sky-400/20">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                      Phone
                    </p>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="mt-2 block text-lg font-semibold tracking-[-0.02em] text-slate-900 transition hover:text-sky-700 dark:text-white dark:hover:text-sky-300 md:text-2xl"
                    >
                      {phone}
                    </a>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Ideal for quick conversations, urgent work, and direct communication.
                    </p>
                  </div>
                  <IconButton
                    size={width && width < 768 ? 'md' : 'lg'}
                    onClick={() => handleCopyClick(phone.replace(/\s+/g, ''), 'phone')}
                    showTooltip={isCopied && copiedValueType === 'phone'}
                    tooltipText="Copied!"
                    className="self-start border border-slate-200 bg-white/90 hover:bg-slate-50 sm:self-center dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 [&_svg]:stroke-slate-600 dark:[&_svg]:stroke-slate-200"
                  >
                    <Copy />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="relative overflow-hidden rounded-[2rem] border border-sky-200/70 bg-[linear-gradient(180deg,_#f8fbff_0%,_#edf6ff_100%)] p-6 text-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.12)] md:p-8 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:shadow-[0_24px_60px_rgba(2,6,23,0.35)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.12),_transparent_34%)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.28),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.22),_transparent_34%)]" />

          <div className="relative flex h-full flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
              Let&apos;s collaborate
            </p>
            <Typography
              variant="h3"
              className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-900 dark:text-white"
            >
              Open to building thoughtful digital experiences with ambitious teams
            </Typography>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                'Frontend engineering for polished product experiences',
                'Full-stack development with React, Next.js, Node.js, and MERN',
                'Collaboration with product, design, and ML teams',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-sky-100 bg-white/80 px-4 py-4 backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-sky-100 bg-white/75 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
                Find me online
              </p>
              <Typography className="mt-3 text-slate-700 dark:text-slate-200">
                You can also connect through my social profiles for updates, portfolio work, and ongoing projects.
              </Typography>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <SocialIcons />
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 transition hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
                >
                  Start a conversation
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default ContactSection;
