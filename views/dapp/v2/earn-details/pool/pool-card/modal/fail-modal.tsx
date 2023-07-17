import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

import { AddPreviewModalProps } from '../../../earn.types';

const FailModal: FC<AddPreviewModalProps> = ({ handleClose }) => {
  const t = useTranslations();
  return (
    <Motion
      initial={{ scale: 0.85 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.3,
      }}
    >
      <Motion
        layout
        width="24rem"
        display="flex"
        maxHeight="90vh"
        maxWidth="26rem"
        overflow="hidden"
        color="onSurface"
        borderRadius="1rem"
        bg="surface.container"
        flexDirection="column"
        boxShadow="0 0 5px #3334"
        transition={{ duration: 0.3 }}
      >
        <Box
          py="2xl"
          px="xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box />
          <Typography variant="medium" color="text" textTransform="capitalize">
            {t('earnDetails.cards.addLiquidity')}
          </Typography>
          <Button variant="icon" onClick={handleClose}>
            <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Button>
        </Box>
        <Box px="xl" py="s">
          <Box
            pb="xl"
            pt="4xl"
            mb="3xl"
            display="flex"
            borderRadius="m"
            alignItems="center"
            flexDirection="column"
            bg="surface.containerLowest"
          >
            <Box my="xl" color="error">
              <TimesSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
            </Box>
            <Typography
              my="xl"
              width="16rem"
              variant="medium"
              textAlign="center"
              textTransform="capitalize"
            >
              {t('earnDetails.modal.failedMessage')}
            </Typography>
          </Box>
          <Box display="flex" width="100%" flexDirection="column" mb="xl">
            <Button
              size="small"
              width="100%"
              variant="filled"
              boxSizing="border-box"
              justifyContent="center"
              display="flex"
              onClick={handleClose}
            >
              {capitalize('close')}
            </Button>
          </Box>
        </Box>
      </Motion>
    </Motion>
  );
};

export default FailModal;
