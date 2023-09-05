import {
  Box,
  darkTheme,
  lightTheme,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useLocalStorage, useModal } from '@/hooks';
import { SkrullSVG } from '@/svg';

import ConfirmationModal from './modal/confirm-modal';
import SuccessModal from './modal/success-modal';

const ProMode: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const { setModal, handleClose } = useModal();
  const [proMode] = useLocalStorage<boolean>('sui-interest-pro-mode', false);

  const confirmationProMode = () =>
    setModal(
      <ConfirmationModal
        handleClose={handleClose}
        onConfirm={successProMode}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );

  const successProMode = () =>
    setModal(<SuccessModal handleClose={handleClose} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      bg={
        proMode
          ? (dark ? lightTheme : darkTheme).colors.primary
          : 'surface.container'
      }
      p="l"
      mb="s"
      borderRadius="0.5rem"
    >
      <Box display="flex" alignItems="end">
        <Box
          width="3rem"
          height="fill-available"
          bg="white"
          color="black"
          borderRadius="0.25rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr="l"
        >
          <SkrullSVG
            maxHeight="1.25rem"
            maxWidth="1.25rem"
            width="100%"
            height="100%"
            filled={proMode}
          />
        </Box>
        <Box>
          <Typography
            variant="medium"
            fontWeight="500"
            color="onSurface"
            mb="0.25rem"
          >
            PRO-MODE
          </Typography>
          <Typography
            variant="small"
            fontSize="0.688rem"
            px="m"
            py="0.125rem"
            textAlign="center"
            bg={
              dark ? 'primary.onPrimaryContainer' : 'primary.primaryContainer'
            }
            borderRadius="full"
            opacity={proMode ? 'unset' : 0.6}
            color={dark ? 'primary.onPrimary' : 'primary.onPrimaryContainer'}
            textTransform="capitalize"
          >
            {t('lsd.proMode.state', { isEnable: +proMode })}
          </Typography>
        </Box>
      </Box>
      <SwitchButton
        name="switch"
        size="medium"
        activation
        defaultValue={proMode}
        onChange={confirmationProMode}
      />
    </Box>
  );
};

export default ProMode;
