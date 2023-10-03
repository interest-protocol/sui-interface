export const dropdownVariants = {
  open: {
    scaleY: 1,
    height: 'auto',
    transition: {
      duration: 0.4,
      opacity: { delay: 0.7 },
    },
  },
  closed: {
    scaleY: 0,
    height: '0',
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
