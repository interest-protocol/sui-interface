import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CheckmarkSVG, TimesSVG } from '@/components/svg/v2';
import { useLocalStorage } from '@/hooks';

import { SuccessModalProps } from '../pro-mode.types';

const SuccessModal: FC<SuccessModalProps> = ({ handleClose }) => {
  const t = useTranslations();
  const [proMode] = useLocalStorage<boolean>('sui-interest-pro-mode', false);

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
      <Box px="xl" py="2xl" display="flex" justifyContent="center">
        <Box
          bg="surface.container"
          width="6rem"
          height="6rem"
          borderRadius="full"
          color="success"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CheckmarkSVG
            maxWidth="3rem"
            maxHeight="3rem"
            width="100%"
            height="100%"
            filled
          />
        </Box>
      </Box>
      <Box px="xl" py="2xl" color="onSurface">
        <Typography
          variant="medium"
          fontWeight="700"
          textAlign="center"
          mb="m"
          textTransform="capitalize"
        >
          {t('lsd.proMode.modal.success.title', { isEnable: +proMode })}
        </Typography>
      </Box>
    </Box>
  );
};
export default SuccessModal;
