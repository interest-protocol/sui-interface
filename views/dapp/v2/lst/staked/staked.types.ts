import { LSTProps } from '@/views/dapp/v2/lst/lst.types';

export interface StakedProps {
  form: LSTProps['form'];
}

export interface StakingFormProps extends StakedProps {
  suiPrice: number;
  iSuiExchangeRate: number;
}
