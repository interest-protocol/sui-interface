import { Network } from '@interest-protocol/sui-amm-sdk';
import { JsonRpcProvider } from '@mysten/sui.js';
import { Control } from 'react-hook-form';

import { CoinsMap } from '@/components/web3-manager/web3-manager.types';

import { LSTForm, LSTProps } from '../../../lst.types';
import { StakedProps } from '../../staked.types';

export interface AmountFieldProps {
  isStake: boolean;
  exchangeRate: number;
  form: StakedProps['form'];
}

export interface AmountFieldDollarsProps {
  usdPrice: number;
  control: Control<LSTForm>;
}

export interface YourInfoProps extends Pick<AmountFieldProps, 'form'> {
  iSuiExchangeRate: AmountFieldProps['exchangeRate'];
}

export interface StakePreviewModalProps {
  handleClose: () => void;
  lstForm: LSTProps['form'];
  provider: JsonRpcProvider;
  network: Network;
  coinsMap: CoinsMap;
  account: string | null;
}

export type UnstakePreviewModalProps = StakePreviewModalProps;
