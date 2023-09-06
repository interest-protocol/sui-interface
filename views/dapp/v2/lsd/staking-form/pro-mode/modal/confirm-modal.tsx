import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';
import { useLocalStorage } from '@/hooks';
import { InfoSVG } from '@/svg';

import { ConfirmationModalProps } from '../pro-mode.types';

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  handleClose,
  onConfirm,
}) => {
  const t = useTranslations();
  const [proMode, setProMode] = useLocalStorage<boolean>(
    'sui-interest-pro-mode',
    false
  );

  return (
    <Box
      width={['90vw', '90vw', '90vw', '24rem']}
      borderRadius="1rem"
      bg="surface"
      display="flex"
      flexDirection="column"
    >
      <Box px="l" py="0.625rem" display="flex" justifyContent="flex-end">
        <Button variant="icon" onClick={handleClose}>
          <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
      </Box>
      <Box px="1.25rem" py="1.5rem" display="flex" justifyContent="center">
        <Box
          bg="surface.container"
          width="6rem"
          height="6rem"
          borderRadius="full"
          color="error"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <InfoSVG
            maxWidth="3rem"
            maxHeight="3rem"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
      <Box px="xl" color="onSurface" pb="2xl">
        <Typography
          variant="medium"
          fontWeight="700"
          textAlign="center"
          mb="0.5rem"
          textTransform="capitalize"
        >
          {t('lsd.proMode.modal.confirmation.title', { isEnable: +proMode })}?
        </Typography>
        <Typography variant="extraSmall" textAlign="center">
          {t('lsd.proMode.modal.confirmation.description')}
        </Typography>
      </Box>
      <Box
        px="xl"
        color="onSurface"
        pb="1.5rem"
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
        gap="0.5rem"
      >
        <Button
          variant="outline"
          width={['auto', 'auto', 'auto', '50%']}
          height="2.5rem"
          py="0"
          onClick={handleClose}
        >
          <Typography
            variant="small"
            textAlign="center"
            mx="auto"
            textTransform="capitalize"
          >
            {t('common.cancel')}
          </Typography>
        </Button>
        <Button
          variant="filled"
          width={['auto', 'auto', 'auto', '50%']}
          height="2.5rem"
          py="0"
          onClick={() => {
            setProMode(!proMode);
            onConfirm();
          }}
        >
          <Typography
            variant="small"
            textAlign="center"
            mx="auto"
            fontWeight="500"
            color="primary.OnPrimary"
            textTransform="capitalize"
          >
            {t('common.v2.confirm')}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
export default ConfirmationModal;
