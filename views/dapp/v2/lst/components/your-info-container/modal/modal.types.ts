import {
  SwapFormConfirmModalProps,
  SwapFormFailModalProps,
} from '@/views/dapp/v2/swap/swap-form/swap-form-preview/swap-form-preview.types';

import { IValidatorModal } from '../your-info.types';

export interface HeaderModalProps {
  title: string;
  handleClose: () => void;
  withoutBack?: boolean;
}

export interface ValidatorListProps {
  validators: ReadonlyArray<IValidatorModal>;
  handleClose: () => void;
  handleSelected: (suiAddress: string) => void;
  currentValidatorAddress: string;
}

export interface LSTFormFailModalProps extends SwapFormFailModalProps {
  isStake: boolean;
}

export interface LSTFormConfirmModalProps extends SwapFormConfirmModalProps {
  isStake: boolean;
}
