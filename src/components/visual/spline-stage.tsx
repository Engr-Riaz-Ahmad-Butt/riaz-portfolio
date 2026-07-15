'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { SPLINE_ABOUT_SCENE } from '@/lib/spline';
import { mergeClasses } from '@/lib/utils';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => null,
});

type SplineStageProps = {
  className?: string;
  label?: string;
};

const SplineStage = ({
  className,
  label = 'Interactive 3D craft preview',
}: SplineStageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReduceMotion(media.matches);
    updateMotion();
    media.addEventListener('change', updateMotion);
    return () => media.removeEventListener('change', updateMotion);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px', threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <div
      ref={containerRef}
      className={mergeClasses(
        'relative aspect-square w-full max-w-[420px] overflow-hidden rounded-[22px] border border-gray-200 bg-gray-50 shadow-soft',
        className
      )}
      aria-label={label}
      role="img"
    >
      {/* Static poster — always visible; LCP-safe */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgb(var(--primary-muted)/0.35),transparent_55%),radial-gradient(circle_at_70%_70%,rgb(var(--primary)/0.15),transparent_50%),linear-gradient(145deg,rgb(var(--app-gray-50)),rgb(var(--app-gray-100)))]"
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 bg-primary/10 blur-2xl"
        aria-hidden
      />

      {!reduceMotion && shouldLoad ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute inset-0"
        >
          <Spline
            scene={SPLINE_ABOUT_SCENE}
            renderOnDemand
            className="h-full w-full"
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
      ) : null}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray/80 to-transparent p-4 pt-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
          {reduceMotion ? 'Static preview' : isLoaded ? 'Interactive' : 'Loading craft…'}
        </p>
      </div>
    </div>
  );
};

export default SplineStage;
