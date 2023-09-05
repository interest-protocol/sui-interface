import { UseFormReturn } from 'react-hook-form';

export interface CreatePoolSearchTokenForm {
  token1: TokenForm;
  token2: TokenForm;
}

export interface TokenForm {
  search?: string;
  type: string;
  symbol: string;
}

export interface EarnCreatePoolModalProps {
  handleClose: () => void;
}

export interface ChoosePairTokenProps extends SelectPairTokenProps {
  action: () => void;
}

export interface SelectPairTokenProps {
  openModal: (isFirstToken: boolean) => void;
  form: UseFormReturn<CreatePoolSearchTokenForm, any>;
}

export interface DepositAmountProps {
  action: () => void;
  form: UseFormReturn<CreatePoolSearchTokenForm, any>;
}

export interface DetailedHeaderProps {
  description: string;
}
