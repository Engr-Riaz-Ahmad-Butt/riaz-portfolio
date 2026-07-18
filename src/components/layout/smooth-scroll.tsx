'use client';

import { ReactNode } from 'react';

/**
 * Smooth scroll disabled for reliability.
 * Lenis was preventing section visibility / scroll with overflow locks.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
