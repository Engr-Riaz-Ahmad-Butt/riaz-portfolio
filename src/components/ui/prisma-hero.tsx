'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HERO_VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4';

const CV_PATH = '/files/Riaz-Ahmad-Butt-CV.pdf';

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

        {/* No mix-blend — keeps text readable */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/80"
          aria-hidden
        />
      </div>

      <div className="relative flex h-full flex-col justify-end px-5 pb-10 pt-28 sm:px-8 md:px-12 md:pb-14 lg:px-14">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 xl:col-span-8">
            <h1
              className="font-medium leading-[0.9] tracking-[-0.06em]"
              style={{
                color: CREAM,
                fontSize: 'clamp(3.25rem, 14vw, 11rem)',
              }}
            >
              Riaz
              <span
                className="align-super text-[0.35em] leading-none"
                aria-hidden
              >
                *
              </span>
            </h1>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-5 xl:col-span-4">
            <p
              className="max-w-md text-sm leading-relaxed sm:text-base"
              style={{ color: 'rgba(225, 224, 204, 0.88)' }}
            >
              Full Stack Developer — 3+ years shipping MERN and Next.js products
              from Islamabad. Building fast, scalable web experiences with clarity
              and craft.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href="/#work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-primary-foreground transition-all hover:gap-3 sm:text-base"
              >
                View my work
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: CREAM }} />
                </span>
              </a>

              <a
                href={CV_PATH}
                download="Riaz-Ahmad-Butt-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
                style={{ color: 'rgba(225, 224, 204, 0.78)' }}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
export default PrismaHero;
