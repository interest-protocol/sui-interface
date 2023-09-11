export const dropdownVariants = {
  open: {
    height: 'auto',
    scaleY: 1,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.4,
      delayChildren: 0.3,
      staggerChildren: 0.1,
      opacity: { delay: 0.7 },
    },
  },
  closed: {
    height: '0',
    scaleY: 0,
  },
};

export const dropdownItemVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.25,
    },
  },
  closed: {
    opacity: 0,
  },
};
