'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from '@/components/navigation/drawer';
import { NAV_LINKS } from '@/lib/data';
import { mergeClasses } from '@/lib/utils';
import useWindowSize from '@/hooks/use-window-size';
import useScroll from '@/hooks/use-scroll';
import Link from '@/components/navigation/link';
import ThemeSwitcher from '@/components/general/theme-switcher';
import IconButton from '@/components/general/icon-button';
import DownloadCV from '@/components/general/download-cv';
import Typography from '@/components/general/typography';

const Logo = () => (
  <Typography variant="h2" className="group font-bold">
    <span className="text-gradient transition-all duration-300 group-hover:tracking-wider">
      {'<RB />'}
    </span>
  </Typography>
);

const Header = () => {
  const scrolled = useScroll(20);
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={mergeClasses(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled 
          ? 'border-b border-white/10 bg-white/70 py-2 backdrop-blur-lg dark:bg-black/70' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" noCustomization>
          <Logo />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex list-none items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="relative group">
                <Link href={link.href} className="text-sm font-medium transition-colors hover:text-indigo-500">
                  {link.label}
                </Link>
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"
                  layoutId="underline"
                />
              </li>
            ))}
          </ul>
          <div className="h-5 w-px bg-gray-200 dark:bg-gray-800"></div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <DownloadCV />
          </div>
        </div>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent className="glass">
            <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="p-4">
              <ul className="flex list-none flex-col gap-6">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium"
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex flex-col gap-6 p-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <Typography>Switch Theme</Typography>
                <ThemeSwitcher />
              </div>
              <DownloadCV />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
