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
import { getSectionId, NAV_LINKS } from '@/lib/site-config';
import { mergeClasses } from '@/lib/utils';
import useWindowSize from '@/hooks/use-window-size';
import useScroll from '@/hooks/use-scroll';
import Link from '@/components/navigation/link';
import ThemeSwitcher from '@/components/general/theme-switcher';
import IconButton from '@/components/general/icon-button';
import DownloadCV from '@/components/general/download-cv';

const Logo = () => (
  <span className="font-mono text-xl font-bold text-gradient transition-colors">
    {'<RB />'}
  </span>
);

const Header = () => {
  const scrolled = useScroll(20);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0].href);
  const size = useWindowSize();

  useEffect(() => {
    if (size?.width && size.width >= 1024 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => getSectionId(link.href));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveHref(NAV_LINKS[index].href);
          }
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <header
      className={mergeClasses(
        'sticky top-0 z-40 w-full border-b border-transparent py-3 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled
          ? 'border-white/10 bg-gray/80 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" noCustomization aria-label="Home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex xl:gap-8">
          <ul className="flex list-none items-center gap-5 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={mergeClasses(
                    'text-sm font-medium transition-colors hover:text-primary',
                    activeHref === link.href ? 'text-primary' : 'text-gray-600'
                  )}
                >
                  {link.label}
                </Link>
                {activeHref === link.href ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </li>
            ))}
          </ul>
          <div className="h-5 w-px bg-gray-200" />
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <DownloadCV />
          </div>
        </nav>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex lg:hidden">
            <IconButton aria-label="Open menu">
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent className="bg-gray/95 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton aria-label="Close menu">
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <nav aria-label="Mobile" className="p-4">
              <ul className="flex list-none flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto flex flex-col gap-6 border-t border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Switch theme</span>
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
