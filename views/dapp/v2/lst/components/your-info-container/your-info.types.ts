import { Network } from '@interest-protocol/sui-amm-sdk';
import { JsonRpcProvider } from '@mysten/sui.js';
import { SuiAddress } from '@mysten/sui.js/src/types';
import { ReactNode } from 'react';
import { Control, UseFormReturn } from 'react-hook-form';

import { CoinsMap } from '@/components/web3-manager/web3-manager.types';

import { StakeForm, ValidatorStakePositionRecord } from '../../lst.types';
import { StakingFormProps } from '../../staked/staked.types';
import {
  AllValidatorsProps,
  IValidatorSearchForm,
} from '../../validators/all-validators/all-validators.types';

export type YourInfoProps = StakingFormProps;

export interface PreviewButtonProps {
  isStake: boolean;
  network: Network;
  openModal: () => void;
  lstForm: UseFormReturn<StakeForm>;
}

export interface CurrentValidatorProps {
  suiAddress: SuiAddress;
  name: string;
  imageUrl: string;
}

export interface StakePreviewModalProps {
  handleClose: () => void;
  provider: JsonRpcProvider;
  lstForm: UseFormReturn<StakeForm>;
  network: Network;
  coinsMap: CoinsMap;
  account: string | null;
  suiUsdPrice: number;
  mutate: () => Promise<void>;
}

export interface UnstakePreviewModalProps extends StakePreviewModalProps {
  validatorStakeRecord: ValidatorStakePositionRecord;
}
export interface ValidatorListBodyProps extends AllValidatorsProps {
  currentValidatorAddress: string;
  validators: ReadonlyArray<IValidatorModal>;
  handleSelected: (suiAddress: string) => void;
}

export interface ValidatorListTableDataProps extends ValidatorsTableDataProps {
  currentValidatorAddress: string;
}

export interface ValidatorListTableDataItemProps {
  index: number;
  validator: IValidatorModal;
  currentValidatorAddress: string;
  handleSelected: (suiAddress: string) => void;
}

export interface IValidatorModal {
  name: string;
  imageUrl: string;
  projectUrl: string;
  suiAddress: string;
  description: string;
  commissionRate: number;
  stakingPoolSuiBalanceString: string;
  apy: string;
  stakingPoolSuiBalance: string;
  lstStaked: string;
}

export interface ValidatorsTableDataProps {
  control: Control<IValidatorSearchForm>;
  validators: ReadonlyArray<IValidatorModal>;
  handleSelected: (suiAddress: string) => void;
}

/** Your Info Container Tips */
export interface YourInfoContainerProps extends StakingFormProps {
  openStakeModal: () => void;
  AmountField: ReactNode;
  Overview: ReactNode;
  handleChangeStake: () => void;
  isStakeTabStake: boolean;
}
