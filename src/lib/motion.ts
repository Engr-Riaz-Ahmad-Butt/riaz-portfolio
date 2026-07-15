export const MOTION_EASE = [0.21, 0.47, 0.32, 0.98] as const;

export const MOTION_DURATION = {
  micro: 0.2,
  hover: 0.3,
  reveal: 0.5,
  hero: 0.7,
} as const;

export const MOTION_STAGGER = 0.08;

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
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
