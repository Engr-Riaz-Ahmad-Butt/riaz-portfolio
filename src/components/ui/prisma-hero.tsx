'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Dot } from 'lucide-react';

const HERO_VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

const CREAM = '#E1E0CC';

const PrismaHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    void video.play().catch(() => {
      // Autoplay can fail; poster/gradient still covers.
    });
  }, [reduceMotion]);

  return (
    <section
      id="hero"
      className="relative w-full"
      style={{ height: '100vh', minHeight: 560 }}
    >
      <div className="absolute inset-0 overflow-hidden bg-black">
        {!reduceMotion ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
            src={HERO_VIDEO_SRC}
            aria-hidden
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-teal-950"
            aria-hidden
          />
        )}

        {/* Stronger bottom/right scrim so copy stays readable on bright video */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/85"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/40"
          aria-hidden
        />
      </div>

      <div className="relative flex h-full flex-col justify-end px-5 pb-12 pt-28 sm:px-8 md:px-12 md:pb-16 lg:px-16">
        <div className="mx-auto w-full max-w-7xl">

          {/* Name */}
          <h1
            className="font-medium leading-[0.88] tracking-[-0.05em]"
            style={{
              color: CREAM,
              fontSize: 'clamp(3.5rem, 13vw, 10rem)',
              textShadow: '0 2px 24px rgba(0,0,0,0.45)',
            }}
          >
            Riaz
            <span
              className="align-super text-[0.32em] leading-none"
              aria-hidden
            >
              *
            </span>
          </h1>

          {/* Bottom row: tagline + CTAs */}
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">

            {/* Left — role label + description */}
            <div className="relative max-w-lg">
              <div
                className="pointer-events-none absolute -inset-x-3 -inset-y-2 rounded-3xl bg-black/40 blur-xl"
                aria-hidden
              />
              <div className="relative">
                {/* Role mono label */}
                <p
                  className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.22em]"
                  style={{ color: '#9BE0C8' }}
                >
                  Full-Stack Software Engineer
                </p>

                {/* Professional tagline */}
                <p
                  className="text-[0.9375rem] leading-[1.6] tracking-[0.01em] sm:text-base"
                  style={{
                    color: '#F5F4EA',
                    textShadow: '0 1px 14px rgba(0,0,0,0.55)',
                  }}
                >
                  I build high-performance web applications that people love to
                  use. Specialising in React, Next.js, and Node.js — from
                  pixel-perfect interfaces to scalable backend APIs.
                </p>
              </div>
            </div>

            {/* Right — availability + CTA buttons */}
            <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end lg:pb-1">

              {/* Availability pill */}
              <span
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  borderColor: 'rgba(155,224,200,0.35)',
                  color: '#9BE0C8',
                  background: 'rgba(155,224,200,0.08)',
                }}
              >
                <Dot className="h-4 w-4 animate-pulse" style={{ color: '#4ade80' }} />
                Available for new opportunities
              </span>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="/#work"
                  id="hero-cta-work"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary py-2 pl-5 pr-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-primary/30"
                >
                  View My Work
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/30 transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="h-4 w-4" style={{ color: CREAM }} />
                  </span>
                </a>

                <a
                  href="mailto:engr.riazahmadbutt@gmail.com"
                  id="hero-cta-contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
                  style={{ color: CREAM }}
                >
                  <Mail className="h-4 w-4" />
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
export default PrismaHero;
