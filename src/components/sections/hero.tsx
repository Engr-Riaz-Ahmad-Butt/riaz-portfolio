'use client';

import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

import HeadShortPic from '/public/images/headshort.jpg';
import SocialIcons from '@/components/data-display/social-icons';
import Container from '@/components/layout/container';
import Button from '@/components/general/button';
import { EMPLOYER_LOGOS } from '@/lib/data';
import { fadeUp, heroTransition, MOTION_STAGGER } from '@/lib/motion';

const HeroSection = () => {
  return (
    <Container id="hero" className="!pt-8 !pb-16 md:!pt-12 md:!pb-20">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: MOTION_STAGGER } },
          }}
          className="flex flex-col gap-8"
        >
          <motion.div
            variants={fadeUp}
            transition={heroTransition}
            className="flex items-center gap-4 lg:hidden"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-1 ring-gray-200">
              <Image
                src={HeadShortPic}
                alt="Riaz Ahmad Butt"
                fill
                priority
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Riaz Ahmad Butt</p>
              <p className="text-sm text-gray-500">Full Stack Developer</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} transition={heroTransition}>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for freelance & full-time
            </span>
          </motion.div>

          <motion.div variants={fadeUp} transition={heroTransition} className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-gray-500">
              Riaz Ahmad Butt
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl md:leading-[1.08] lg:text-6xl">
              Building fast, scalable{' '}
              <span className="text-gradient">web products</span> with React &
              Next.js.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              3+ years shipping full-stack applications — from AI workflows at
              Aawaz AI to travel platforms used by real customers.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={heroTransition}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild>
              <a href="/#work">
                View work
                <ArrowUpRight size={16} aria-hidden />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/#contact">Contact</a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={heroTransition}
            className="flex flex-wrap items-center gap-5 text-sm text-gray-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden />
              Islamabad, Pakistan
            </span>
            <span className="hidden h-4 w-px bg-gray-200 sm:block" aria-hidden />
            <SocialIcons className="gap-1" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={heroTransition}
            className="flex flex-wrap items-center gap-6 border-t border-gray-200 pt-8"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Trusted by
            </span>
            <div className="flex flex-wrap items-center gap-5 opacity-70 grayscale transition-opacity hover:opacity-100">
              {EMPLOYER_LOGOS.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 w-auto object-contain dark:brightness-200"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={heroTransition}
          className="hidden justify-center lg:flex lg:justify-end"
        >
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full ring-1 ring-gray-200">
            <Image
              src={HeadShortPic}
              alt="Headshot of Riaz Ahmad Butt, Full Stack Developer"
              fill
              priority
              className="object-cover"
              sizes="300px"
            />
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default HeroSection;
