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
}) => (
  <DEXViewWrapper>
    <Swap
      formSwap={formSwap}
      setLocalSettings={setLocalSettings}
      localSettings={localSettings}
      formSettingsDropdown={formSettingsDropdown}
      autoButtonState={autoButtonState}
      openModalState={openModalState}
      searchTokenModalState={searchTokenModalState}
    />
  </DEXViewWrapper>
);

export default DEXSwapView;
