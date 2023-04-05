import { DevInspectResults } from '@mysten/sui.js/src/types';
import { pathOr } from 'ramda';

export const getAmountsFromDevInspect = (
  packageId: string,
  results: DevInspectResults | undefined,
  token0Type: string,
  token1Type: string
) => {
  if (!results) return null;
  const events = results.events;

  if (!events || !events.length) return null;

  const firstEvent = events[0];

  if (firstEvent.packageId !== packageId) return null;

  return {
    [token0Type]: pathOr('0', ['parsedJson', 'coin_x_out'], firstEvent),
    [token1Type]: pathOr('0', ['parsedJson', 'coin_y_out'], firstEvent),
  };
};
