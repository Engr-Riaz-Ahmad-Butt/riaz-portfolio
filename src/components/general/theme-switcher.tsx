'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import IconButton from '@/components/general/icon-button';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton aria-label="Toggle theme">
        <Sun />
      </IconButton>
    );
  }

  const isDark = (resolvedTheme ?? theme) === 'dark';
  const isSystem = theme === 'system';

  const handleToggle = () => {
    if (isSystem) {
      setTheme(isDark ? 'light' : 'dark');
      return;
    }

    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <IconButton
      aria-label={
        isSystem
          ? `Using system theme (${isDark ? 'dark' : 'light'}). Switch to ${isDark ? 'light' : 'dark'} mode`
          : isDark
            ? 'Switch to light theme'
            : 'Switch to dark theme'
      }
      onClick={handleToggle}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -40 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 40 }}
          transition={{ duration: 0.2 }}
          className="inline-flex"
        >
          {isDark ? <Sun /> : <MoonStar />}
        </motion.span>
      </AnimatePresence>
    </IconButton>
  );
};

export default ThemeSwitcher;
