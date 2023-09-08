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

export const stagger = (delay) => ({
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay,
    },
  },
});

export const heroImage = (xaxix) => ({
  initial: {
    x: xaxix,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
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
      delay: 0.1 * index,
    },
  },
});

export const certificationVariant = (index) => ({
  initial: {
    opacity: 0,
    x: "-100px",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.15 * index,
      ease: "anticipate",
    },
  },
});

export const resumeVariant = (index) => ({
  initial: {
    opacity: 0,
    y: "70px",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
      duration: 0.5,
      type: "tween",
    },
  },
});

export const portfolioImage = (xaxis) => ({
  initial: {
    opacity: 0,
    x: xaxis,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
});
