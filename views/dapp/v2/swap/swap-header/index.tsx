import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { animate, transform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CogsSVG, LeftArrowSVG } from '@/components/svg/v2';
import { useModal } from '@/hooks';

import { SwapHeaderProps } from '../swap.types';
import SettingsModal from './settings-modal';

const SwapHeader: FC<SwapHeaderProps> = ({
  setLocalSettings,
  formSettings,
}) => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();

  const closeModal = () => {
    handleClose();
    setLocalSettings(formSettings.getValues());
  };

  const openSettingsModal = () =>
    setModal(
      <SettingsModal closeModal={closeModal} formSettings={formSettings} />,
      {
        isOpen: true,
        custom: true,
        onClose: closeModal,
      }
    );

  return (
    <Box
      display="grid"
      gridColumn="1/-1"
      alignItems="center"
      gridTemplateColumns="1.2rem 1fr 1.2rem"
    >
      <Box display={['block', 'block', 'none']} color="textSoft">
        <LeftArrowSVG maxWidth="1.2rem" maxHeight="1.2rem" width="100%" />
      </Box>
      <Typography
        width="100%"
        color="text"
        gridColumn="2"
        textAlign="center"
        variant="displayLarge"
      >
        {t('swap.metadata.title')}
      </Typography>

      <Button
        width="100%"
        variant="icon"
        display="flex"
        color="textSoft"
        alignItems="center"
        justifyContent="center"
        onClick={openSettingsModal}
      >
        <Motion
          display="flex"
          justifyContent="center"
          transformOrigin="center center"
          whileHover={{
            rotate: 180,
            transition: { duration: 0.7, ease: 'easeInOut' },
          }}
        >
          <CogsSVG maxWidth="1.5rem" maxHeight="1.5rem" width="1.5rem" />
        </Motion>
      </Button>
    </Box>
  );
};

export default SwapHeader;
