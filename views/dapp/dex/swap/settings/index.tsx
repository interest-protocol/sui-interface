import { not } from 'ramda';
import { FC } from 'react';

import { Box } from '@/elements';
import { CogsSVG } from '@/svg';

import { SwapSettingsProps } from './settings.types';
import SettingsDropdown from './settings-dropdown';

const SettingsModal: FC<SwapSettingsProps> = ({
  setLocalSettings,
  formSettingsDropdown,
  autoButtonState,
  openModalState,
}) => {
  const closeModal = () => openModalState.setIsOpen(false);
  const toggle = () => openModalState.setIsOpen(not);

  return (
    <>
      <Box
        display="flex"
        cursor="pointer"
        alignItems="center"
        justifyContent="center"
        transform="rotate(0deg)"
        transition="all 300ms ease-in-out"
        nHover={{
          color: 'accent',
          transform: 'rotate(90deg)',
        }}
        onClick={toggle}
      >
        <CogsSVG width="1.5rem" maxHeight="1.5rem" maxWidth="1.5rem" />
      </Box>
      <SettingsDropdown
        isOpen={openModalState.isOpen}
        onClose={closeModal}
        setLocalSettings={setLocalSettings}
        formSettingsDropdown={formSettingsDropdown}
        autoButtonState={autoButtonState}
      />
    </>
  );
};

export default SettingsModal;
