import { UseFormSetValue } from 'react-hook-form';

import { ISwitchOption } from '@/components/switch/switch.types';
import { COIN_TYPE, Network } from '@/constants';
import {
  BinanceSVG,
  BitcoinSVG,
  DAISVG,
  EtherSVG,
  InterestTokenSVG,
  SuiSVG,
  UnknownCoinSVG,
  USDCoinSVG,
  USDTSVG,
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
  [COIN_TYPE[Network.DEVNET].DAI]: [
    {
      SVG: DAISVG,
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
  [COIN_TYPE[Network.DEVNET].V_LP_DAI_ETH]: [
    {
      SVG: DAISVG,
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
  [COIN_TYPE[Network.TESTNET].DAI]: [
    {
      SVG: DAISVG,
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
  [COIN_TYPE[Network.TESTNET].V_LP_DAI_ETH]: [
    {
      SVG: DAISVG,
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
