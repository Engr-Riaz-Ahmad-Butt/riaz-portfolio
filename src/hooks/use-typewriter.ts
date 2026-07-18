'use client';

import { useEffect, useState } from 'react';

type UseTypewriterOptions = {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  enabled?: boolean;
};

export function useTypewriter({
  text,
  speedMs = 32,
  startDelayMs = 400,
  enabled = true,
}: UseTypewriterOptions) {
  const [displayed, setDisplayed] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setDisplayed(text);
      setIsComplete(true);
      setIsTyping(false);
      return;
    }

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      setDisplayed(text);
      setIsComplete(true);
      setIsTyping(false);
      return;
    }

    let index = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    setDisplayed('');
    setIsComplete(false);
    setIsTyping(false);

    const timeoutId = setTimeout(() => {
      setIsTyping(true);
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setIsTyping(false);
          setIsComplete(true);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speedMs, startDelayMs, enabled]);

  return { displayed, isComplete, isTyping };
}
