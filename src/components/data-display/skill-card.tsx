'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TechDetails } from '@/lib/types';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Typography from '@/components/general/typography';

const SkillCard = ({ logo, darkModeLogo, label, category }: TechDetails) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for 3D Tilt and Spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Transitions for 3D Tilt
  const rotateX = useTransform(springY, [0, 1], [15, -15]);
  const rotateY = useTransform(springX, [0, 1], [-15, 15]);

  // Transitions for Spotlight
  const spotlightX = useTransform(springX, [0, 1], ['0%', '100%']);
  const spotlightY = useTransform(springY, [0, 1], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalize mouse position between 0 and 1
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Map categories to neon colors
  const colorMap = {
    frontend: 'from-cyan-400 to-blue-600',
    backend: 'from-emerald-400 to-teal-600',
    database: 'from-orange-400 to-red-600',
    tools: 'from-purple-400 to-pink-600',
    other: 'from-indigo-400 to-violet-600'
  };

  const activeColor = colorMap[category as keyof typeof colorMap] || colorMap.other;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className="group relative flex flex-col items-center justify-center p-8 h-40 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* 1. Animated Border Beam (Shown on Hover) */}
      <motion.div
        animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className={`absolute -inset-[150%] z-0 bg-gradient-to-r ${activeColor} opacity-0 transition-opacity duration-300 group-hover:opacity-40 blur-2xl`}
      />

      {/* 2. Cursor Spotlight Effect */}
      <motion.div
        style={{
          left: spotlightX,
          top: spotlightY,
          background: `radial-gradient(circle, white 0%, transparent 70%)`
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-0 group-hover:opacity-10 blur-3xl rounded-full z-10 pointer-events-none"
      />

      {/* 3. Card Inner Background (Keeps content readable) */}
      <div className="absolute inset-[2px] z-10 rounded-2xl bg-white/90 dark:bg-[#0a0a0c]/90 backdrop-blur-xl" />

      {/* 4. Content Container */}
      <div 
        style={{ transform: 'translateZ(60px)' }}
        className="relative z-20 flex flex-col items-center gap-4 transition-transform duration-500 group-hover:scale-105"
      >
        <div className="relative h-16 w-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={label}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Typography 
          className="font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 text-center tracking-tight"
          variant="body1"
        >
          {label}
        </Typography>
      </div>

      {/* 5. Bottom Accent Glow */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${activeColor} opacity-30 group-hover:opacity-100 transition-opacity duration-500 z-30`} />
    </motion.div>
  );
};

export default SkillCard;
