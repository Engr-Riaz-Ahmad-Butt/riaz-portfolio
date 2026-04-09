'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Typography from '../general/typography';

interface StatProps {
  icon: LucideIcon;
  label: string;
  value: string;
  className?: string;
  delay?: number;
}

const StatBadge = ({ icon: Icon, label, value, className, delay = 0 }: StatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ y: -5, scale: 1.05 }}
      className={`flex items-center gap-4 p-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-500">
        <Icon size={24} />
      </div>
      <div>
        <Typography variant="body1" className="font-bold text-gray-900 dark:text-zinc-50 leading-none">
          {value}
        </Typography>
        <Typography variant="body3" className="text-gray-600 dark:text-zinc-400 mt-1">
          {label}
        </Typography>
      </div>
    </motion.div>
  );
};

export default StatBadge;
