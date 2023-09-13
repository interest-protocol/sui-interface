import { LSTProps } from '@/views/dapp/v2/lst/lst.types';

export interface StakedProps {
  form: LSTProps['stakeForm'];
  isStakeTabStake: LSTProps['isStakeTabStake'];
  setStakeTabState: LSTProps['setStakeTabState'];
}

export type StakingFormProps = StakedProps;
