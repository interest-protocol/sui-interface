import BigNumber from 'bignumber.js';
import { TOKEN_SYMBOL } from 'lib';
import { NextPage } from 'next';

/**
 * code from package use-intl in 'use-intl/dist/utils/MessageKeys';
 */
type NestedValueOf<
  ObjectType,
  Property extends string
> = Property extends `${infer Key}.${infer Rest}`
  ? Key extends keyof ObjectType
    ? NestedValueOf<ObjectType[Key], Rest>
    : never
  : Property extends keyof ObjectType
  ? ObjectType[Property]
  : never;

/**
 * code from package use-intl in 'use-intl/dist/utils/MessageKeys';
 */
type MessageKeys<ObjectType, Keys extends string> = {
  [Property in Keys]: NestedValueOf<ObjectType, Property> extends string
    ? Property
    : never;
}[Keys];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEmptyObj {}

export type TTranslatedMessage = MessageKeys<IntlMessages, keyof IntlMessages>;

export type BigNumberish = BigNumber | bigint | string | number;

export interface CoinData {
  decimals: number;
  symbol: TOKEN_SYMBOL | string;
  type: string;
}

export interface NextPageDefaultProps {
  messages: TTranslatedMessage;
  now: number;
  pageTitle: string;
}

export type NextPageWithProps = NextPage<NextPageDefaultProps>;

export type LocalTokenMetadataRecord = Record<string, CoinData>;

export interface CompiledModules {
  dependencies: ReadonlyArray<string>;
  modules: ReadonlyArray<string>;
}

export interface Farm {
  allocationPoints: BigNumber;
  totalStakedAmount: BigNumber;
  accountBalance: BigNumber;
}

export interface Pool {
  balanceX: BigNumber;
  balanceY: BigNumber;
  lpCoinSupply: BigNumber;
}

export type DexMarket = Record<string, Record<string, string>>;
