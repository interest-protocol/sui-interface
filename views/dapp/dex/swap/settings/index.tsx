import { not } from 'ramda';
import { FC, useState } from 'react';

import { Box } from '@/elements';
import { CogsSVG } from '@/svg';

import { SwapSettingsProps } from './settings.types';
import SettingsDropdown from './settings-dropdown';

const SettingsModal: FC<SwapSettingsProps> = ({
  localSettings,
  setLocalSettings,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const toggle = () => setIsOpen(not);

  return (
    <>
      <Box
        display="flex"
        cursor="pointer"
        alignItems="center"
        justifyContent="center"
        transform="rotate(0deg)"
        transition="all 300ms ease-in-out"
        hover={{
          color: 'accent',
          transform: 'rotate(90deg)',
        }}
        onClick={toggle}
      >
        <CogsSVG width="1.5rem" maxHeight="1.5rem" maxWidth="1.5rem" />
      </Box>
      <SettingsDropdown
        isOpen={isOpen}
        onClose={closeModal}
        localSettings={localSettings}
        setLocalSettings={setLocalSettings}
      />
    </>
  );
};

export default SettingsModal;
