import { find, propEq } from 'ramda';

import { DEX_TOKENS_DATA } from '@/constants';
import { TOKEN_SYMBOL } from '@/sdk';
import { InfoLightSVG, LoadingSVG, WarningSVG } from '@/svg';

export const SWAP_MESSAGES = {
  'loading-amount': {
    message: 'dexSwap.swapMessage.fetchingAmounts',
    Icon: LoadingSVG,
  },
  'error-amount-out': {
    message: 'dexSwap.swapMessage.amountOut',
    Icon: WarningSVG,
    color: 'error',
  },
  'error-same-token': {
    message: 'dexSwap.swapMessage.sameOut',
    Icon: WarningSVG,
    color: 'error',
  },
  'error-balances': {
    message: 'dexSwap.swapMessage.balances',
    Icon: WarningSVG,
    color: 'error',
  },
  'info-no-pool': {
    message: 'dexSwap.swapMessage.infoNoPool',
    Icon: InfoLightSVG,
    color: 'accentAlternative',
  },
};

export const DEFAULT_UNKNOWN_DATA = {
  symbol: '???',
  name: 'Unknown',
  decimals: 0,
  type: '',
};

export const SUI =
  find(propEq('symbol', TOKEN_SYMBOL.SUI), DEX_TOKENS_DATA) ??
  DEFAULT_UNKNOWN_DATA;

export const ETH =
  find(propEq('symbol', TOKEN_SYMBOL.ETH), DEX_TOKENS_DATA) ??
  DEFAULT_UNKNOWN_DATA;
