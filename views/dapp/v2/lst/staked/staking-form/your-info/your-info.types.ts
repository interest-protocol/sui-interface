import { Network } from '@interest-protocol/sui-amm-sdk';
import { JsonRpcProvider } from '@mysten/sui.js';

import { CoinsMap } from '@/components/web3-manager/web3-manager.types';
import { LSTProps } from '@/views/dapp/v2/lst/lst.type';
import { StakedProps } from '@/views/dapp/v2/lst/staked/staked.types';

export interface AmountFieldProps {
  isStake: boolean;
  form: StakedProps['form'];
}

export type YourInfoProps = StakedProps;

export interface StakePreviewModalProps {
  handleClose: () => void;
  lstForm: LSTProps['form'];
  provider: JsonRpcProvider;
  network: Network;
  coinsMap: CoinsMap;
  account: string | null;
}

export type UnstakePreviewModalProps = StakePreviewModalProps;
