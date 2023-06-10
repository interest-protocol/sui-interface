import { DexMarket } from '@interest-protocol/sui-sdk';
import { PaginatedCoins } from '@mysten/sui.js/src/types/coin';
import { UseFormReturn } from 'react-hook-form';
import { KeyedMutator } from 'swr';

import { ISwapSettingsForm, SwapForm } from '../../swap.types';

export interface SwapFormPreviewProps {
  formSwap: UseFormReturn<SwapForm>;
  formSettings: UseFormReturn<ISwapSettingsForm>;
  dexMarket: DexMarket;
  mutate: KeyedMutator<PaginatedCoins['data'] | undefined>;
}

export interface SwapFormPreviewModalProps extends SwapFormPreviewProps {
  closeModal: () => void;
  openConfirmModal: (link: string) => void;
  openFailModal: (message?: string) => void;
}

export interface SwapFormConfirmModalProps {
  txLink: string;
  handleClose: () => void;
}

export interface SwapFormFailModalProps {
  message?: string;
  handleClose: () => void;
}
