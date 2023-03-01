import BigNumber from 'bignumber.js';
import { NextPage } from 'next';
import MessageKeys from 'use-intl/dist/utils/MessageKeys';

import { TOKEN_SYMBOL } from '@/sdk';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEmptyObj {}

export type TTranslatedMessage = MessageKeys<IntlMessages, keyof IntlMessages>;

export type BigNumberish = BigNumber | bigint | string | number;

export interface CoinData {
  decimals: number;
  symbol: TOKEN_SYMBOL;
  type: string;
}

export interface NextPageDefaultProps {
  messages: IntlMessages;
  now: number;
  pageTitle: string;
}

export type NextPageWithProps = NextPage<NextPageDefaultProps>;
