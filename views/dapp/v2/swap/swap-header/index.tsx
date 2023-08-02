import {
  Box,
  Button,
  Motion,
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
        allowClose: true,
        onClose: closeModal,
      }
    );

  return (
    <Box
      display="flex"
      gridColumn="1/-1"
      alignItems="center"
      width="100%"
      color={dark ? 'white' : 'black'}
    >
      <Button
        opacity="0"
        variant="icon"
        display="flex"
        color="textSoft"
        visibility="hidden"
        alignItems="center"
        justifyContent="center"
        mr={['unset', 'unset', 'unset', 'xl']}
      >
        <LeftArrowSVG maxWidth="1.2rem" maxHeight="1.2rem" width="100%" />
      </Button>
      <Typography
        width="100%"
        gridColumn="2"
        textAlign="center"
        variant="displayLarge"
      >
        {t('swap.metadata.title')}
      </Typography>
      <Button
        variant="icon"
        display="flex"
        color="textSoft"
        alignItems="center"
        justifyContent="center"
        onClick={openSettingsModal}
        mr={['unset', 'unset', 'unset', 'xl']}
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
