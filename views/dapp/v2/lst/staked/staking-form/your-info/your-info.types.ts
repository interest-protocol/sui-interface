import { Network } from '@interest-protocol/sui-amm-sdk';
import { JsonRpcProvider } from '@mysten/sui.js';
import { Control } from 'react-hook-form';

import { CoinsMap } from '@/components/web3-manager/web3-manager.types';

import {
  LSTProps,
  StakeForm,
  ValidatorStakePositionRecord,
} from '../../../lst.types';
import { StakedProps, StakingFormProps } from '../../staked.types';

export interface AmountFieldProps {
  isStake: boolean;
  exchangeRate: number;
  form: StakedProps['form'];
}

export interface AmountFieldDollarsProps {
  control: Control<StakeForm>;
}

export interface YourInfoProps extends StakingFormProps {
  isStake: boolean;
  handleChangeStake: () => void;
}

export interface StakePreviewModalProps {
  handleClose: () => void;
  lstForm: LSTProps['stakeForm'];
  provider: JsonRpcProvider;
  network: Network;
  coinsMap: CoinsMap;
  account: string | null;
  suiUsdPrice: number;
  mutate: () => Promise<void>;
}

export interface UnstakePreviewModalProps extends StakePreviewModalProps {
  validatorStakeRecord: ValidatorStakePositionRecord;
}

export interface PreviewButtonProps {
  isStake: boolean;
  openModal: () => void;
  lstForm: LSTProps['stakeForm'];
  network: Network;
}
