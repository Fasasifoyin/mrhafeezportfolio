export const navVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 12,
      duration: 0.5,
    },
  },
};

export const sideNavSmVariants = {
  key: "sideNavSm",
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: "anticipate" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const sideNavVariants = {
  key: "sideNav",
  initial: { y: "-50%", x: "50%", opacity: 0, scale: 0.3 },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "anticipate" },
  },
  exit: {
    y: "50%",
    x: "50%",
    opacity: 0,
    scale: 0.1,
    transition: { duration: 0.3 },
  },
};

export const slideBottomVariant = (delay, start, duration, type) => ({
  initial: {
    opacity: 0,
    y: start,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * delay,
      duration: duration,
      type: type ? type : "tween",
    },
  },
});

export const slideSides = (delay, start, duration) => ({
  initial: {
    x: start,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * delay,
      duration: duration,
    },
  },
});

export const textContainer = {
  initial: {
    opacity: 0,
  },
  animate: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant = (index) => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeIn",
      delay: 0.1 * index,
    },
  },
});
