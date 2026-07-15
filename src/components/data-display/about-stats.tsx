'use client';

import { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import { LucideIcon } from 'lucide-react';

import Typography from '@/components/general/typography';
import { mergeClasses } from '@/lib/utils';

interface StatProps {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix?: string;
  className?: string;
  delay?: number;
}

const StatBadge = ({
  icon: Icon,
  label,
  value,
  suffix = '+',
  className,
  delay = 0,
}: StatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(count, 'change', (latest) => {
    setDisplay(Math.round(latest));
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.2,
      delay,
      ease: 'easeOut',
    });
    return () => controls.stop();
  }, [inView, count, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={mergeClasses(
        'flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray p-4 shadow-card',
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={22} aria-hidden />
      </div>
      <div>
        <Typography variant="body1" className="font-bold leading-none text-gray-900">
          {display}
          {suffix}
        </Typography>
        <Typography variant="body3" className="mt-1 text-gray-500">
          {label}
        </Typography>
      </div>
    </motion.div>
  );
};

export default StatBadge;
