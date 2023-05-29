import { Box, Button, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DotsSVG } from '@/components/svg/v2';
import { useModal } from '@/hooks';

import SelectTokenModal from './select-token-modal';

const SelectToken: FC = () => {
  const { dark } = useTheme() as Theme;
  const { setModal, handleClose } = useModal();

  const openModal = () =>
    setModal(<SelectTokenModal closeModal={handleClose} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
      onClose: handleClose,
      hasCloseButton: true,
    });

  return (
    <Button
      size="small"
      bg={dark ? '#1F1F23' : '#EFEDF1'}
      color="text"
      variant="filled"
      whiteSpace="nowrap"
      onClick={openModal}
      SuffixIcon={
        <Box as="span" display="inline-block" ml="m">
          <DotsSVG
            maxWidth="1rem"
            maxHeight="1rem"
            height="100%"
            width="100%"
            filled
          />
        </Box>
      }
    >
      Select Token
    </Button>
  );
};

export default SelectToken;
