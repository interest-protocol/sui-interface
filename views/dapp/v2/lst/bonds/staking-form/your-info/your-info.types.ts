import { Network } from '@interest-protocol/sui-amm-sdk';
import { JsonRpcProvider } from '@mysten/sui.js';
import { SuiAddress } from '@mysten/sui.js/src/types';
import { Dispatch, SetStateAction } from 'react';
import { Control } from 'react-hook-form';

import { CoinsMap } from '@/components/web3-manager/web3-manager.types';

import {
  DERIVATED_SUI_SYMBOL,
  LSTProps,
  StakeForm,
  ValidatorStakePositionRecord,
} from '../../../lst.types';
import { StakedProps, StakingFormProps } from '../../../staked/staked.types';
import {
  AllValidatorsProps,
  IValidatorSearchForm,
} from '../../../validators/all-validators/all-validators.types';

export interface TokenIconProps {
  symbol: DERIVATED_SUI_SYMBOL;
  lessRadius?: boolean;
  size: number;
}

export interface AmountFieldInputStakeProps {
  isStake: boolean;
  exchangeRate: number;
  form: StakedProps['form'];
}

export interface AmountFieldInputUnstakeProps {
  isStake: boolean;
  symbol: DERIVATED_SUI_SYMBOL;
  form: StakedProps['form'];
}

export interface AmountFieldProps {
  isStake: boolean;
  tabIndex: number;
  tabHandle: (tabIndex: number) => void;
  exchangeRate: number;
  unstakeAmountType: ReadonlyArray<DERIVATED_SUI_SYMBOL>;
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
  stakeTokenList: ReadonlyArray<DERIVATED_SUI_SYMBOL>;
  receiveTokenList: ReadonlyArray<DERIVATED_SUI_SYMBOL>;
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

export interface CurrentValidatorProps {
  suiAddress: SuiAddress;
  name: string;
  imageUrl: string;
}

export interface ValidatorListBodyProps extends AllValidatorsProps {
  setNewValidator: Dispatch<SetStateAction<CurrentValidatorProps>>;
  newValidator: CurrentValidatorProps;
  isStake: boolean;
}

export interface ValidatorListTableDataProps extends ValidatorsTableDataProps {
  setNewValidator: Dispatch<SetStateAction<CurrentValidatorProps>>;
  newValidator: CurrentValidatorProps;
  isStake: boolean;
}

export interface ValidatorListTableDataItemProps {
  index: number;
  isStake: boolean;
  validator: IValidatorModal;
  newValidator: CurrentValidatorProps;
  setNewValidator: Dispatch<SetStateAction<CurrentValidatorProps>>;
}

export interface IValidatorModal {
  apy: string;
  name: string;
  imageUrl: string;
  lstStaked: string;
  description: string;
  suiAddress: SuiAddress;
  stakingPoolSuiBalance: string;
}

export interface ValidatorsTableDataProps {
  control: Control<IValidatorSearchForm>;
  validators: ReadonlyArray<IValidatorModal>;
}
