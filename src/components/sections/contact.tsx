'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, Mail, Phone } from 'lucide-react';

import SocialIcons from '@/components/data-display/social-icons';
import Tag from '@/components/data-display/tag';
import IconButton from '@/components/general/icon-button';
import Button from '@/components/general/button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import { copyTextToClipboard } from '@/lib/utils';
import { fadeUp, fadeUpTransition } from '@/lib/motion';
import { EXTERNAL_LINKS } from '@/lib/data';

const email = EXTERNAL_LINKS.EMAIL;
const phone = '+92 336 0359897';

type CopyValue = 'email' | 'phone';

const ContactRow = ({
  icon: Icon,
  label,
  value,
  href,
  helper,
  type,
  onCopy,
  copied,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  helper: string;
  type: CopyValue;
  onCopy: (text: string, type: CopyValue) => void;
  copied: boolean;
}) => (
  <div className="surface-neu p-4 transition">
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-gray-700">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
          {label}
        </p>
        <a
          href={href}
          className="mt-2 block break-all text-lg font-semibold text-gray-900 transition hover:text-primary"
        >
          {value}
        </a>
        <p className="mt-2 text-sm text-gray-600">{helper}</p>
      </div>
      <IconButton
        aria-label={`Copy ${label.toLowerCase()}`}
        onClick={() => onCopy(value.replace(/\s+/g, ''), type)}
        className="self-start border border-gray-200 sm:self-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? 'check' : 'copy'}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="inline-flex"
          >
            {copied ? <Check className="text-primary" /> : <Copy />}
          </motion.span>
        </AnimatePresence>
      </IconButton>
    </div>
  </div>
);

const ContactSection = () => {
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [showPhone, setShowPhone] = useState(false);

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setCopiedValueType(type);
      setToast(`${type === 'email' ? 'Email' : 'Phone'} copied`);
      setTimeout(() => {
        setCopiedValueType(null);
        setToast(null);
      }, 1500);
    } catch {
      setToast('Unable to copy');
      setTimeout(() => setToast(null), 1500);
    }
  };

  return (
    <Container id="contact" altSurface>
      <div className="flex flex-col items-center gap-4 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={fadeUpTransition}
        >
          <Tag label="Contact" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.08 }}
          className="max-w-3xl"
        >
          <Typography variant="h2">
            Let&apos;s turn your next product idea into something sharp and memorable
          </Typography>
          <Typography className="mt-4 text-gray-600">
            Available for freelance work, product collaborations, and full-time roles.
          </Typography>
          <div className="mt-6 flex justify-center">
            <Button asChild>
              <a href={`mailto:${email}`}>Email me</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={fadeUpTransition}
          className="surface-neu p-6 md:p-8"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Reach out directly
          </h3>
          <div className="mt-6 flex flex-col gap-4">
            <ContactRow
              icon={Mail}
              label="Email"
              value={email}
              href={`mailto:${email}`}
              helper="Best for project inquiries, hiring, and collaboration."
              type="email"
              onCopy={handleCopyClick}
              copied={copiedValueType === 'email'}
            />
            {showPhone ? (
              <ContactRow
                icon={Phone}
                label="Phone"
                value={phone}
                href={`tel:${phone.replace(/\s+/g, '')}`}
                helper="For quick conversations and urgent work."
                type="phone"
                onCopy={handleCopyClick}
                copied={copiedValueType === 'phone'}
              />
            ) : (
              <button
                type="button"
                onClick={() => setShowPhone(true)}
                className="rounded-2xl border border-dashed border-gray-300 px-4 py-5 text-left text-sm font-medium text-gray-700 transition hover:border-primary hover:text-primary"
              >
                Reveal phone number
              </button>
            )}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ ...fadeUpTransition, delay: 0.08 }}
          className="surface-neu p-6 md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Open to
          </p>
          <Typography variant="h3" className="mt-3">
            Frontend engineering and full-stack product work
          </Typography>
          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li>Polished product experiences with React and Next.js</li>
            <li>MERN APIs, dashboards, and integration work</li>
            <li>Collaboration with product, design, and ML teams</li>
          </ul>
          <div className="mt-8 surface-neu p-5">
            <p className="text-sm font-medium text-gray-900">Find me online</p>
            <div className="mt-4">
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-gray-900 px-4 py-2 text-sm text-gray-50 shadow-card"
            role="status"
          >
            {toast}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Container>
  );
};

export default ContactSection;
