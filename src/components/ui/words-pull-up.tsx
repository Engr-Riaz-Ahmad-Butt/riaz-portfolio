'use client';

import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

import { mergeClasses } from '@/lib/utils';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
  /** Skip in-view gate — always animate in on mount (hero) */
  immediate?: boolean;
}

export const WordsPullUp = ({
  text,
  className = '',
  showAsterisk = false,
  style,
  immediate = false,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.01 });
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const words = text.split(' ');

  useEffect(() => {
    setMounted(true);
  }, []);

  const show = immediate || mounted || inView || !!reduceMotion;

  return (
    <div
      ref={ref}
      className={mergeClasses('inline-flex flex-wrap', className)}
      style={style}
    >
      {words.map((word, i) => {
        const isLast = i === words.length - 1;

        return (
          <motion.span
            key={`${word}-${i}`}
            initial={reduceMotion ? false : { y: 16, opacity: 1 }}
            animate={show ? { y: 0, opacity: 1 } : { y: 16, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: reduceMotion || !show ? 0 : i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative inline-block"
            style={{ marginRight: isLast ? 0 : '0.25em' }}
          >
            {word}
            {showAsterisk && isLast ? (
              <span className="absolute -right-[0.35em] top-[0.65em] text-[0.31em]">
                *
              </span>
            ) : null}
          </motion.span>
        );
      })}
    </div>
  );
};

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = '',
  style,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.01 });
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const show = mounted || isInView || !!reduceMotion;

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(' ').forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div
      ref={ref}
      className={mergeClasses('inline-flex flex-wrap justify-center', className)}
      style={style}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w.word}-${i}`}
          initial={reduceMotion ? false : { y: 16, opacity: 1 }}
          animate={show ? { y: 0, opacity: 1 } : { y: 16, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: reduceMotion || !show ? 0 : i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={mergeClasses('inline-block', w.className)}
          style={{ marginRight: '0.25em' }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};
