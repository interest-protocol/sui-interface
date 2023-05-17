import { COIN_TYPE, Network } from '@interest-protocol/sui-sdk';
import { UseFormSetValue } from 'react-hook-form';

import WormholeDOGEB from '@/components/svg/wormhole-dogeb';
import WormholeFLOKIB from '@/components/svg/wormhole-flokib';
import { ISwitchOption } from '@/components/switch/switch.types';
import {
  BinanceSVG,
  BitcoinSVG,
  EtherSVG,
  InterestTokenSVG,
  SuiSVG,
  UnknownCoinSVG,
  USDCoinSVG,
  USDTSVG,
  WormholeBTCBSVG,
  WormholeETHBSVG,
  WormholeETHSVG,
  WormholeUSDCBSVG,
  WormholeUSDCESVG,
  WormholeUSDTBSVG,
  WormholeWBNBSVG,
} from '@/svg';

import { IFarmsForm } from './farms.types';

export const FARMS_TOKENS_SVG_MAP = {
  default: [
    {
      SVG: UnknownCoinSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.DEVNET].IPX]: [
    {
      SVG: InterestTokenSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.DEVNET].BNB]: [
    {
      SVG: BinanceSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.DEVNET].BTC]: [
    {
      SVG: BitcoinSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.DEVNET].ETH]: [
    {
      SVG: EtherSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.DEVNET].SUI]: [
    {
      SVG: SuiSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.DEVNET].USDC]: [
    {
      SVG: USDCoinSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.DEVNET].USDT]: [
    {
      SVG: USDTSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.DEVNET].IPX]: [
    {
      SVG: InterestTokenSVG,
      highZIndex: true,
    },
  ],
  [COIN_TYPE[Network.DEVNET].V_LP_BNB_ETH]: [
    {
      SVG: BinanceSVG,
      highZIndex: true,
    },
    {
      SVG: EtherSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.DEVNET].V_LP_BTC_ETH]: [
    {
      SVG: BitcoinSVG,
      highZIndex: true,
    },
    {
      SVG: EtherSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDC]: [
    {
      SVG: EtherSVG,
      highZIndex: false,
    },
    {
      SVG: USDCoinSVG,
      highZIndex: true,
    },
  ],
  [COIN_TYPE[Network.DEVNET].V_LP_ETH_USDT]: [
    {
      SVG: EtherSVG,
      highZIndex: false,
    },
    {
      SVG: USDTSVG,
      highZIndex: true,
    },
  ],
  [COIN_TYPE[Network.DEVNET].V_LP_SUI_ETH]: [
    {
      SVG: SuiSVG,
      highZIndex: true,
    },
    {
      SVG: EtherSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.DEVNET].V_LP_ETH_IPX]: [
    {
      SVG: EtherSVG,
      highZIndex: true,
    },
    {
      SVG: InterestTokenSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.DEVNET].S_LP_USDC_USDT]: [
    {
      SVG: USDCoinSVG,
      highZIndex: true,
    },
    {
      SVG: USDTSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.TESTNET].IPX]: [
    {
      SVG: InterestTokenSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.TESTNET].BNB]: [
    {
      SVG: BinanceSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.TESTNET].BTC]: [
    {
      SVG: BitcoinSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.TESTNET].ETH]: [
    {
      SVG: EtherSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.TESTNET].SUI]: [
    {
      SVG: SuiSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.TESTNET].USDC]: [
    {
      SVG: USDCoinSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.TESTNET].USDT]: [
    {
      SVG: USDTSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.TESTNET].IPX]: [
    {
      SVG: InterestTokenSVG,
      highZIndex: true,
    },
  ],
  [COIN_TYPE[Network.TESTNET].V_LP_BNB_ETH]: [
    {
      SVG: BinanceSVG,
      highZIndex: true,
    },
    {
      SVG: EtherSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.TESTNET].V_LP_BTC_ETH]: [
    {
      SVG: BitcoinSVG,
      highZIndex: true,
    },
    {
      SVG: EtherSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDC]: [
    {
      SVG: EtherSVG,
      highZIndex: false,
    },
    {
      SVG: USDCoinSVG,
      highZIndex: true,
    },
  ],
  [COIN_TYPE[Network.TESTNET].V_LP_ETH_USDT]: [
    {
      SVG: EtherSVG,
      highZIndex: false,
    },
    {
      SVG: USDTSVG,
      highZIndex: true,
    },
  ],
  [COIN_TYPE[Network.TESTNET].V_LP_SUI_ETH]: [
    {
      SVG: SuiSVG,
      highZIndex: true,
    },
    {
      SVG: EtherSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.TESTNET].V_LP_ETH_IPX]: [
    {
      SVG: EtherSVG,
      highZIndex: true,
    },
    {
      SVG: InterestTokenSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.TESTNET].S_LP_USDC_USDT]: [
    {
      SVG: USDCoinSVG,
      highZIndex: true,
    },
    {
      SVG: USDTSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_BTCB]: [
    {
      SVG: SuiSVG,
      highZIndex: true,
    },
    {
      SVG: WormholeBTCBSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_ETH]: [
    {
      SVG: SuiSVG,
      highZIndex: true,
    },
    {
      SVG: WormholeETHBSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_ETH]: [
    {
      SVG: SuiSVG,
      highZIndex: true,
    },
    {
      SVG: WormholeETHSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.MAINNET].V_LP_SUI_NATIVE_WORMHOLE_WBNB]: [
    {
      SVG: SuiSVG,
      highZIndex: true,
    },
    {
      SVG: WormholeWBNBSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_USDC]: [
    {
      SVG: SuiSVG,
      highZIndex: true,
    },
    {
      SVG: WormholeUSDCBSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.MAINNET].V_LP_SUI_ETH_WORMHOLE_USDC]: [
    {
      SVG: SuiSVG,
      highZIndex: true,
    },
    {
      SVG: WormholeUSDCESVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.MAINNET].S_LP_BSC_WORMHOLE_USDT_BSC_WORMHOLE_USDC]: [
    {
      SVG: WormholeUSDTBSVG,
      highZIndex: true,
    },
    {
      SVG: WormholeUSDCBSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.MAINNET].S_LP_ETH_WORMHOLE_USDC_BSC_WORMHOLE_USDC]: [
    {
      SVG: WormholeUSDCESVG,
      highZIndex: true,
    },
    {
      SVG: WormholeUSDCBSVG,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_DOGE]: [
    {
      SVG: SuiSVG,
      highZIndex: true,
    },
    {
      SVG: WormholeDOGEB,
      highZIndex: false,
    },
  ],
  [COIN_TYPE[Network.MAINNET].V_LP_SUI_BSC_WORMHOLE_FLOKI]: [
    {
      SVG: SuiSVG,
      highZIndex: true,
    },
    {
      SVG: WormholeFLOKIB,
      highZIndex: false,
    },
  ],
};

export const getFilterSwitchDefaultData = (
  values: ReadonlyArray<string>,
  setValue: UseFormSetValue<IFarmsForm>,
  name: 'onlyStaked' | 'onlyFinished'
): [ISwitchOption, ISwitchOption] => [
  {
    value: values[0],
    onSelect: () => {
      setValue(name, false);
    },
  },
  {
    value: values[1],
    onSelect: () => {
      setValue(name, true);
    },
  },
];
