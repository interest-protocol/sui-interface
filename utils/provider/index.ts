import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { DevInspectResults } from '@mysten/sui.js/src/types';
import { head, nth, pathOr, propOr } from 'ramda';

export const provider = new JsonRpcProvider(
  process.env.NEXT_PUBLIC_SUI_RPC_URL || Network.DEVNET
);

export const mystenLabsProvider = new JsonRpcProvider(Network.DEVNET);

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getDevInspectType = (x: DevInspectResults): string =>
  nth(
    1,
    head(
      propOr(
        [],
        'returnValues',
        nth(1, head(pathOr([], ['results', 'Ok'], x)) || [])
      ) as any
    )
  )!;

export const getDevInspectData = (x: DevInspectResults): any =>
  head(
    head(
      propOr(
        [],
        'returnValues',
        nth(1, head(pathOr([], ['results', 'Ok'], x)) || [])
      ) as any
    )!
  );
