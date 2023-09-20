import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useModal } from '@/hooks';
import { ArrowTrendSVG } from '@/svg';
import { noop } from '@/utils';

import MaturityModal from '../modal/maturity';

const SelectMaturityDate: FC = () => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();

  const openValidatorModals = () => {
    setModal(<MaturityModal handleClose={handleClose} handleConfirm={noop} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });
  };

  return (
    <Box mt="1rem" mb="2xl">
      <Typography
        variant="extraSmall"
        textTransform="uppercase"
        color="onSurface"
        opacity={0.6}
      >
        SELECT MATURITY DATE
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="m"
        mt="0.5rem"
        position="relative"
        borderRadius="0.25rem"
        bg="surface.containerHigh"
        color="onSurface"
        cursor="pointer"
        onClick={openValidatorModals}
        height="4rem"
      >
        <Box display="flex" alignItems="center" gap="0.75rem">
          <Typography variant="medium">MM/DD/YY</Typography>
        </Box>
        <Box
          width="1.5rem"
          height="1.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr="0.25rem"
          cursor="pointer"
        >
          <ArrowTrendSVG
            maxWidth="1.5rem"
            maxHeight="1.5rem"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SelectMaturityDate;
