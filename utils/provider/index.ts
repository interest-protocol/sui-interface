import { Connection, devnetConnection, JsonRpcProvider } from '@mysten/sui.js';
import { DevInspectResults } from '@mysten/sui.js';
import { SuinsClient } from '@suins/toolkit';
import { head, propOr } from 'ramda';

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

export const suiNSDevNetProvider = new SuinsClient(new JsonRpcProvider(), {
  networkType: 'devnet',
});

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

export const mainNetProvider = new JsonRpcProvider(
  new Connection({
    fullnode: process.env.NEXT_PUBLIC_SUI_MAINNET_RPC_URL
      ? process.env.NEXT_PUBLIC_SUI_MAINNET_RPC_URL
      : 'https://fullnode.mainnet.sui.io:443',
    websocket:
      process.env.NEXT_PUBLIC_SUI_MAINNET_WS_URL ||
      'wss://fullnode.mainnet.sui.io:443',
  })
);

export const suiNSTestNetProvider = new SuinsClient(new JsonRpcProvider(), {
  networkType: 'testnet',
});

export const suiNSMainNetProvider = new SuinsClient(new JsonRpcProvider(), {
  networkType: 'testnet', // fix once mainnet is deployed
});

export const devNetIPXSdk = {};

export const testNetIPXSdk = {};
export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getReturnValuesFromInspectResults = (
  x: DevInspectResults
): [number[], string] | null => {
  const results = propOr(
    [] as unknown,
    'results',
    x
  ) as unknown as DevInspectResults['results'];

  const firstElem = head(results!);

  if (!firstElem) return null;

  const returnValues = firstElem.returnValues;

  if (!returnValues) return null;
  const result = head(returnValues);
  return result ?? null;
};
