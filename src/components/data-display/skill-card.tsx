'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TechDetails } from '@/lib/types';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Typography from '@/components/general/typography';

const SkillCard = ({ logo, darkModeLogo, label, url }: TechDetails) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 overflow-hidden group"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div 
        style={{ transform: 'translateZ(50px)' }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110">
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={label}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Typography 
          className="font-bold text-gray-900 dark:text-gray-100 text-center"
          variant="body1"
        >
          {label}
        </Typography>
      </div>

      {/* Glossy Reflection */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default SkillCard;
