import BigNumber from 'bignumber.js';
import { NextPage } from 'next';
import MessageKeys from 'use-intl/dist/utils/MessageKeys';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IEmptyObj {}

export type TTranslatedMessage = MessageKeys<IntlMessages, keyof IntlMessages>;

export type BigNumberish = BigNumber | bigint | string | number;

export type NextPageWithObjectId = NextPage<{ objectId: string }>;
