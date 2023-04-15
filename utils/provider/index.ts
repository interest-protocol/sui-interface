import { SDK } from '@interest-protocol/sui-sdk';
import { Connection, devnetConnection, JsonRpcProvider } from '@mysten/sui.js';
import { DevInspectResults } from '@mysten/sui.js';
import { SuinsClient } from '@suins/toolkit';
import { head, propOr } from 'ramda';

import { Network } from '@/constants';

export const devNetProvider = new JsonRpcProvider(
  process.env.NEXT_PUBLIC_SUI_DEVNET_RPC_URL
    ? new Connection({
        fullnode: process.env.NEXT_PUBLIC_SUI_DEVNET_RPC_URL,
        faucet: devnetConnection.faucet,
        websocket:
          process.env.NEXT_PUBLIC_SUI_DEVNET_WS_URL ||
          devnetConnection.websocket,
      })
    : devnetConnection
);

// TODO type version issue
export const suiNSDevProvider = new SuinsClient(devNetProvider as any);

export const testNetProvider = new JsonRpcProvider(
  new Connection({
    fullnode: process.env.NEXT_PUBLIC_SUI_TESTNET_RPC_URL
      ? process.env.NEXT_PUBLIC_SUI_TESTNET_RPC_URL
      : 'https://fullnode.testnet.sui.io:443',
    websocket:
      process.env.NEXT_PUBLIC_SUI_TESTNET_WS_URL ||
      'wss://fullnode.testnet.sui.io:443',
    faucet: 'https://faucet.testnet.sui.io/gas',
  })
);

export const devNetIPXSdk = new SDK(devNetProvider, Network.DEVNET);

export const testNetIPXSdk = new SDK(testNetProvider, Network.TESTNET);

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getReturnValuesFromInspectResults = (
  x: DevInspectResults
): [number[], string] | null => {
  const results = propOr([], 'results', x) as DevInspectResults['results'];
  const firstElem = head(results!);

  if (!firstElem) return null;

  const returnValues = firstElem.returnValues;

  if (!returnValues) return null;
  const result = head(returnValues);
  return result ? result : null;
};
