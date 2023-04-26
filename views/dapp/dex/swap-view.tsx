import { FC } from 'react';

import DEXViewWrapper from './dex-wrapper';
import Swap from './swap';
import { SwapProps } from './swap/swap.types';

const DEXSwapView: FC<SwapProps> = ({
  formSwap,
  setLocalSettings,
  localSettings,
  formSettingsDropdown,
  autoButtonState,
  openModalState,
  searchTokenModalState,
}) => <DEXViewWrapper />;

export default DEXSwapView;
