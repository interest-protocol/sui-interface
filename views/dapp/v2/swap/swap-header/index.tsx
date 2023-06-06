import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CogsSVG, LeftArrowSVG } from '@/components/svg/v2';
import { useModal } from '@/hooks';

import { SwapHeaderProps } from '../swap.types';
import SettingsModal from './settings-modal';

const SwapHeader: FC<SwapHeaderProps> = ({
  formSettings,
  setLocalSettings,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
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
      gridColumn="2/-2"
      alignItems="center"
      color={dark ? 'white' : 'black'}
      gridTemplateColumns="1.2rem 1fr 1.2rem"
    >
      <Box display={['block', 'block', 'none']}>
        <LeftArrowSVG maxWidth="1.2rem" maxHeight="1.2rem" width="100%" />
      </Box>
      <Typography
        width="100%"
        gridColumn="2"
        textAlign="center"
        variant="displayLarge"
      >
        {t('swap.metadata.title')}
      </Typography>
      <Button width="100%" variant="icon" onClick={openSettingsModal}>
        <CogsSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
      </Button>
    </Box>
  );
};

export default SwapHeader;
