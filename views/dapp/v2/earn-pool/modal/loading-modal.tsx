import {
  Box,
  Motion,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const LoadingModal: FC = () => {
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
          justifyContent="center"
        >
          <Typography variant="medium" color="text" textTransform="capitalize">
            {t('common.v2.earnPool.modal.loading.title')}
          </Typography>
        </Box>
        <Box px="xl" py="s">
          <Box bg="surface.containerLowest" borderRadius="m" mb="2xl" p="4xl">
            <Box
              pt="2xl"
              display="flex"
              borderRadius="m"
              alignItems="center"
              flexDirection="column"
            >
              <ProgressIndicator variant="loading" />
              <Typography mt="4xl" variant="medium" textAlign="center">
                {t('common.v2.earnPool.modal.loading.message')}
              </Typography>
              <Typography
                variant="extraSmall"
                textAlign="center"
                color="#77767A"
              >
                {t('common.v2.earnPool.modal.loading.description')}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Motion>
    </Motion>
  );
};

export default LoadingModal;
