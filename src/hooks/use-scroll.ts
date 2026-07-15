import { useCallback, useEffect, useRef, useState } from 'react';
import { useLenis } from 'lenis/react';

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);

  const update = useCallback(
    (scrollY: number) => {
      const next = scrollY > threshold;
      if (scrolledRef.current === next) return;
      scrolledRef.current = next;
      setScrolled(next);
    },
    [threshold]
  );

  useLenis((lenis) => {
    update(lenis.scroll);
  });

  useEffect(() => {
    update(window.scrollY || 0);

    const onScroll = () => update(window.scrollY || 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [update]);

  return scrolled;
}
