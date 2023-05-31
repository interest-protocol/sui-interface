import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CogsSVG, LeftArrowSVG } from '@/components/svg/v2';
import { useModal } from '@/hooks';

import SettingsModal from './settings-modal';

const SwapHeader: FC = () => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();

  const openSettingsModal = () =>
    setModal(<SettingsModal closeModal={handleClose} />, {
      isOpen: true,
      custom: true,
    });

  return (
    <Box
      width="100%"
      display="grid"
      alignItems="center"
      gridTemplateColumns="1.2rem auto 1.2rem"
    >
      <Box display={['block', 'block', 'none']} color="textSoft">
        <LeftArrowSVG maxWidth="1.2rem" maxHeight="1.2rem" width="100%" />
      </Box>
      <Typography
        color="text"
        gridColumn="2"
        textAlign="center"
        variant="displayLarge"
      >
        {t('swap.metadata.title')}
      </Typography>
      <Box color="textSoft" onClick={openSettingsModal}>
        <CogsSVG maxWidth="1.2rem" maxHeight="1.2rem" width="100%" />
      </Box>
    </Box>
  );
};

export default SwapHeader;
