import { DataPoint } from './metrics.data';

export const findMaxObject = <T extends keyof DataPoint>(
  data: DataPoint[],
  key: T
): DataPoint | null => {
  if (data.length === 0) return null;

  let maxObject: DataPoint | null = null;
  let maxValue: DataPoint[T] = data[0][key];

  for (const item of data) {
    if (item[key] > maxValue) {
      maxValue = item[key];
      maxObject = item;
    }
  }

  return maxObject;
};
