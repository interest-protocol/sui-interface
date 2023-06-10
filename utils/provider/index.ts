import { Network, SDK } from '@interest-protocol/sui-sdk';
import { Connection, devnetConnection, JsonRpcProvider } from '@mysten/sui.js';
import { SuinsClient } from '@suins/toolkit';

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

export const suiNSDevNetProvider = new SuinsClient(
  new JsonRpcProvider() as any,
  {
    networkType: 'devnet',
  }
);

export const suiNSTestNetProvider = new SuinsClient(
  new JsonRpcProvider() as any,
  {
    networkType: 'testnet',
  }
);

export const suiNSMainNetProvider = new SuinsClient(
  new JsonRpcProvider() as any,
  {
    networkType: 'testnet', // fix once mainnet is deployed
  }
);

export const devNetIPXSdk = new SDK(devNetProvider, Network.DEVNET);

export const testNetIPXSdk = new SDK(testNetProvider, Network.TESTNET);

export const mainNetIPXSdk = new SDK(mainNetProvider, Network.MAINNET);

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
