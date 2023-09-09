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

export const slideBottomVariant = (delay, start, duration) => ({
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
      type: "tween",
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

export const skillsVariant = (index) => ({
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  },
});

export const navVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 12,
      delay: 0.5,
    },
  },
};
