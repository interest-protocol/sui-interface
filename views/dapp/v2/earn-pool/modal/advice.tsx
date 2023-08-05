import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TimesSVG } from '@/svg';
import { capitalize } from '@/utils';

import { EarnCreatePoolModalProps } from '../earn.types';

const AdviceModal: FC<EarnCreatePoolModalProps> = ({ handleClose }) => {
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
          py="0.65rem"
          px="xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box />
          <Typography variant="medium" color="text" textTransform="capitalize">
            {capitalize(t('common.v2.earnPool.modal.advice.title'))}
          </Typography>
          <Button variant="icon" onClick={handleClose}>
            <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Button>
        </Box>
        <Box px="xl" pt="s">
          <Box
            p="2.5rem"
            mb="2rem"
            display="flex"
            borderRadius="m"
            alignItems="center"
            flexDirection="column"
            bg="surface.containerLowest"
          >
            <Typography
              my="xl"
              width="16rem"
              variant="medium"
              textAlign="center"
              textTransform="capitalize"
            >
              {t('common.v2.earnPool.modal.advice.message', {
                token1: 'USDT',
                token2: 'BNB',
              })}
            </Typography>
          </Box>
          <Box display="flex" width="100%" flexDirection="column" pb="1.25rem">
            <Button
              size="small"
              width="100%"
              variant="filled"
              boxSizing="border-box"
              justifyContent="center"
              display="flex"
              onClick={handleClose}
            >
              {t('common.v2.earnPool.modal.advice.button')}
            </Button>
            <a target="_blank" rel="noreferrer" href="/" onClick={handleClose}>
              <Button
                size="small"
                mt="s"
                width="100%"
                variant="text"
                boxSizing="border-box"
                justifyContent="center"
              >
                {capitalize(t('common.v2.cancel'))}
              </Button>
            </a>
          </Box>
        </Box>
      </Motion>
    </Motion>
  );
};

export default AdviceModal;
