import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CheckmarkSVG, TimesSVG } from '@/components/svg/v2';

import { ResultModalProps } from './modal.types';

const ResultCollateralModal: FC<ResultModalProps> = ({
  tokenName,
  closeModal,
  isSuccess,
}) => {
  const t = useTranslations();
  return (
    <Motion
      layout
      width="24.375rem"
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
        p="1.65rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="medium">
          {t('Lend.modal.collateral.confirm.title', { isEnable: +isSuccess })}
        </Typography>
      </Box>
      <Box
        pt="4xl"
        pb="xl"
        mb="xl"
        mx="xl"
        display="flex"
        borderRadius="m"
        alignItems="center"
        flexDirection="column"
        bg="surface.containerLowest"
      >
        <Box my="xl" color={isSuccess ? 'success' : 'error'}>
          {isSuccess ? (
            <CheckmarkSVG
              filled
              width="100%"
              maxWidth="3rem"
              maxHeight="3rem"
            />
          ) : (
            <TimesSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
          )}
        </Box>
        <Typography my="xl" width="16rem" variant="medium" textAlign="center">
          {t('Lend.modal.collateral.confirm.content', {
            isEnable: +isSuccess,
            tokenName: tokenName,
          })}
        </Typography>
      </Box>
      <Box mx="xl">
        <Button
          onClick={closeModal}
          mb="2xl"
          size="small"
          width="100%"
          variant="filled"
          boxSizing="border-box"
          justifyContent="center"
        >
          {t('Lend.modal.collateral.confirm.title', { isEnable: +isSuccess })}
        </Button>
      </Box>
    </Motion>
  );
};

export default ResultCollateralModal;
