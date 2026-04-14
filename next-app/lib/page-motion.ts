/** Shared easing: smooth deceleration, not snappy */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const mainContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: easeOut },
  },
};

/** Section with title + staggered inner rows (e.g. Recent cases) */
export const sectionBlock = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut,
      staggerChildren: 0.07,
      delayChildren: 0.02,
    },
  },
};

/** Row of cards: quick cascade */
export const rowCascade = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.02,
    },
  },
};

export const cascadeItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};
