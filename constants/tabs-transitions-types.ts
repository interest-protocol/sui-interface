export const fadeTabTransitions = {
  in: {
    opacity: 1,
    transition: { duration: 0.55 },
  },
  out: {
    opacity: 0,
  },
};

export const slideTabTransitions = {
  in: {
    x: 0,
    transition: { duration: 0.55 },
  },
  out: {
    x: '-100%',
  },
};

export const scaleTabTransitions = {
  in: {
    scale: 1,
    transition: { duration: 0.55 },
  },
  out: {
    scale: 0,
  },
};
