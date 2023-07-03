import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';

import { ResultModalProps } from '../modal.types';

const ResultCollateralModal: FC<ResultModalProps> = ({
  tokenName,
  closeModal,
  isEnabled,
  txLink,
}) => {
  const t = useTranslations();
  return (
    <Motion
      layout
      width={['90vw', '90vw', '90vw', '24.375rem']}
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
          {t('lend.modal.collateral.confirm.title', { isEnable: +isEnabled })}
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
        <Box my="xl" color="success">
          <CheckmarkSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
        </Box>
        <Typography my="xl" width="16rem" variant="medium" textAlign="center">
          {t('lend.modal.collateral.confirm.content', {
            isEnable: +isEnabled,
            tokenName: tokenName,
          })}
        </Typography>
      </Box>
      <Box mx="xl">
        <a href={txLink} target="_blank" rel="noreferrer" onClick={closeModal}>
          <Button
            mb="2xl"
            size="small"
            width="100%"
            variant="filled"
            boxSizing="border-box"
            justifyContent="center"
            textTransform="capitalize"
            textAlign="center"
          >
            {t('common.explorer')}
          </Button>
        </a>
      </Box>
    </Motion>
  );
};

export default ResultCollateralModal;
