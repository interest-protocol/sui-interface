import { Connection, devnetConnection, JsonRpcProvider } from '@mysten/sui.js';
import { DevInspectResults } from '@mysten/sui.js/src/types';
import { head, nth, pathOr, propOr } from 'ramda';

export const devNetProvider = new JsonRpcProvider(
  process.env.NEXT_PUBLIC_SUI_DEVNET_RPC_URL
    ? new Connection({ fullnode: process.env.NEXT_PUBLIC_SUI_DEVNET_RPC_URL })
    : devnetConnection
);

export const testNetProvider = new JsonRpcProvider(
  process.env.NEXT_PUBLIC_SUI_TESTNET_RPC_URL
    ? new Connection({ fullnode: process.env.NEXT_PUBLIC_SUI_TESTNET_RPC_URL })
    : devnetConnection
);

export const devNetWSProvider = new JsonRpcProvider(
  new Connection({
    fullnode:
      process.env.NEXT_PUBLIC_SUI_DEVNET_WS_URL ||
      'wss://fullnode.devnet.sui.io:443',
  })
);

export const testNetWSProvider = new JsonRpcProvider(
  new Connection({
    fullnode:
      process.env.NEXT_PUBLIC_SUI_TESTNET_WS_URL ||
      'wss://fullnode.devnet.sui.io:443',
  })
);

export const devNetMystenLabsProvider = new JsonRpcProvider(devnetConnection);

export const testNetMystenLabsProvider = new JsonRpcProvider(devnetConnection);

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
