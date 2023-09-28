export const convertDayToMS = (x: number) =>
  x * 24 * 60 * 60 * 1000 + Date.now();
