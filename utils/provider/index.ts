import { Network, SDK } from '@interest-protocol/sui-amm-sdk';
import { SDK as MoneyMarketSDK } from '@interest-protocol/sui-money-market-sdk';
import { Connection, devnetConnection, JsonRpcProvider } from '@mysten/sui.js';
import { SuinsClient } from '@mysten/suins-toolkit';

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

export const suiNSDevNetProvider = new SuinsClient(new JsonRpcProvider(), {
  networkType: 'devnet',
});

export const suiNSTestNetProvider = new SuinsClient(new JsonRpcProvider(), {
  networkType: 'testnet',
});

export const suiNSMainNetProvider = new SuinsClient(
  new JsonRpcProvider(
    new Connection({
      fullnode: process.env.NEXT_PUBLIC_SUI_MAINNET_RPC_URL
        ? process.env.NEXT_PUBLIC_SUI_MAINNET_RPC_URL
        : 'https://fullnode.mainnet.sui.io:443',
      websocket:
        process.env.NEXT_PUBLIC_SUI_MAINNET_WS_URL ||
        'wss://fullnode.mainnet.sui.io:443',
    })
  ),
  {
    contractObjects: {
      packageId:
        '0xd22b24490e0bae52676651b4f56660a5ff8022a2576e0089f79b3c88d44e08f0',
      suins:
        '0x6e0ddefc0ad98889c04bab9639e512c21766c5e6366f89e696956d9be6952871',
      registry:
        '0xe64cd9db9f829c6cc405d9790bd71567ae07259855f4fba6f02c84f52298c106',
      reverseRegistry:
        '0x2fd099e17a292d2bc541df474f9fafa595653848cbabb2d7a4656ec786a1969f',
    },
  }
);

export const devNetAmmSdk = new SDK(devNetProvider, Network.DEVNET);

export const testNetAmmSdk = new SDK(testNetProvider, Network.TESTNET);

export const mainNetAmmSdk = new SDK(mainNetProvider, Network.MAINNET);

export const devNetMoneyMarketSdk = MoneyMarketSDK.getDevNetSDK(devNetProvider);

export const testNetMoneyMarketSdk =
  MoneyMarketSDK.getTestNetSDK(testNetProvider);

export const mainNetMoneyMarketSdk =
  MoneyMarketSDK.getMainNetSDK(mainNetProvider);

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
