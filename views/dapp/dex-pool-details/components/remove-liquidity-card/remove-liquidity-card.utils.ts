import { DevInspectResults } from '@mysten/sui.js/src/types';
import { path, pathOr, propOr } from 'ramda';

export const getAmountsFromDevInspect = (
  packageId: string,
  results: DevInspectResults | undefined,
  token0Type: string,
  token1Type: string
) => {
  if (!results) return null;
  const events = pathOr(null, ['effects', 'events'], results);

  if (!events) return null;
  const filteredEvents = (
    events as ReadonlyArray<DevInspectResults['events']>
  ).filter((event) => {
    const coinBalanceChange = propOr(null, 'coinBalanceChange', event);

    const changeType = propOr(null, 'changeType', coinBalanceChange);

    if (!changeType || changeType !== 'Receive') return false;

    const packageId = propOr(null, 'packageId', coinBalanceChange);

    if (!packageId || packageId !== packageId) return false;

    const coinType = propOr(null, 'coinType', coinBalanceChange);

    return !(!coinType && coinType !== token0Type && coinType !== token1Type);
  });

  return filteredEvents.reduce(
    (acc, event) => ({
      ...acc,
      [path(['coinBalanceChange', 'coinType'], event) as string]: pathOr(
        0,
        ['coinBalanceChange', 'amount'],
        event
      ) as number,
    }),
    {} as Record<string, number>
  );
};
