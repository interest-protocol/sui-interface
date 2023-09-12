import { Network } from '@interest-protocol/sui-amm-sdk';
import { JsonRpcProvider } from '@mysten/sui.js';
import { Control } from 'react-hook-form';

import { CoinsMap } from '@/components/web3-manager/web3-manager.types';

import { LSTProps } from '../../../lst.types';
import { StakedProps } from '../../staked.types';

export interface AmountFieldProps {
  isStake: boolean;
  exchangeRate: number;
  form: StakedProps['form'];
}

export interface AmountFieldDollarsProps {
  usdPrice: number;
  control: Control<LSTProps['stakeForm']>;
}

export type YourInfoProps = Pick<AmountFieldProps, 'form'>;

export interface StakePreviewModalProps {
  handleClose: () => void;
  lstForm: LSTProps['stakeForm'];
  provider: JsonRpcProvider;
  network: Network;
  coinsMap: CoinsMap;
  account: string | null;
  suiUsdPrice: number;
}

export type UnstakePreviewModalProps = StakePreviewModalProps;

export interface PreviewButtonProps {
  isStake: boolean;
  openStakeModal: () => void;
  openUnstakeModal: () => void;
  lstForm: LSTProps['stakeForm'];
}
