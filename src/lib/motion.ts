export const MOTION_EASE = [0.21, 0.47, 0.32, 0.98] as const;

export const MOTION_DURATION = {
  micro: 0.2,
  hover: 0.3,
  reveal: 0.5,
  hero: 0.7,
} as const;

export const MOTION_STAGGER = 0.08;

/** Keep opacity at 1 so Lenis/IO misses never leave sections blank */
export const fadeUp = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpTransition = {
  duration: MOTION_DURATION.reveal,
  ease: MOTION_EASE,
};

export const heroTransition = {
  duration: MOTION_DURATION.hero,
  ease: MOTION_EASE,
};

/** Shared viewport — generous margin so reveals fire under Lenis */
export const inViewViewport = {
  once: true,
  amount: 0.15,
  margin: '0px 0px -5% 0px',
} as const;
