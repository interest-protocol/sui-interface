export const convertEpochToMSFromBaseEpoch =
  (baseEpoch: number, baseEpochDurationMS: number, baseEpochStartMS: number) =>
  (epoch: number): number => {
    const epochsDistance = epoch - baseEpoch;

    return epochsDistance * baseEpochDurationMS + baseEpochStartMS;
  };
