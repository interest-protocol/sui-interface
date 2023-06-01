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
  openConfirmModal: () => void;
}

export interface SwapFormConfirmModalProps {
  txLink?: string;
  loading: boolean;
  handleClose: () => void;
}
