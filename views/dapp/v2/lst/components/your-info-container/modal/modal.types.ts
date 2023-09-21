import { SuiSystemStateSummary } from '@mysten/sui.js';

import {
  SwapFormConfirmModalProps,
  SwapFormFailModalProps,
} from '@/views/dapp/v2/swap/swap-form/swap-form-preview/swap-form-preview.types';

import { MaturityInputField } from '../../../lst.types';
import { CurrentValidatorProps, YourInfoProps } from '../your-info.types';

export interface HeaderModalProps {
  title: string;
  handleClose: () => void;
  withoutBack?: boolean;
}

export interface ValidatorListProps {
  handleClose: () => void;
  isStake: boolean;
  currentValidator: CurrentValidatorProps;
  activeValidators: SuiSystemStateSummary['activeValidators'];
  fillValidator: (fillCurrentValidator: CurrentValidatorProps) => void;
}

export interface LSTFormFailModalProps extends SwapFormFailModalProps {
  isStake: boolean;
}

export interface LSTFormConfirmModalProps extends SwapFormConfirmModalProps {
  isStake: boolean;
}

export interface MaturityModalProps {
  handleClose: () => void;
  form: YourInfoProps['form'];
}

export interface MaturityBodyProps {
  handleSelectMaturity: (maturitySelected: MaturityInputField) => void;
  currentMaturity: MaturityInputField;
}

export interface MaturityBodyRowProps extends MaturityBodyProps {
  maturityInfo: MaturityInputField;
}
