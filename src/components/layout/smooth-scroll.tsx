'use client';

import { ReactNode, useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: reduceMotion ? 1 : 0.085,
        duration: reduceMotion ? 0 : 1.2,
        smoothWheel: !reduceMotion,
        syncTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 1.2,
        infinite: false,
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
