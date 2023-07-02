import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

import { ResultModalProps } from '../modal.types';

const FailCollateralModal: FC<ResultModalProps> = ({
  tokenName,
  isEnabled,
  closeModal,
}) => {
  const t = useTranslations();
  return (
    <Box
      px="xl"
      width="100%"
      display="flex"
      maxHeight="90vh"
      color="onSurface"
      overflow="hidden"
      borderRadius="1rem"
      alignItems="stretch"
      maxWidth="24.375rem"
      flexDirection="column"
      bg="surface.container"
      boxShadow="0 0 5px #3334"
    >
      <Box py="m" display="flex" alignItems="center" justifyContent="center">
        <Typography variant="medium">
          {t('lend.modal.collateral.error.title', { isEnable: +isEnabled })}
        </Typography>
      </Box>
      <Box
        pt="4xl"
        pb="xl"
        mb="xl"
        display="flex"
        borderRadius="m"
        alignItems="center"
        flexDirection="column"
        bg="surface.containerLowest"
      >
        <Box my="xl" color="error">
          <TimesSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
        </Box>
        <Typography my="xl" width="16rem" variant="medium" textAlign="center">
          {t('lend.modal.collateral.error.content', {
            isEnable: +isEnabled,
            tokenName: tokenName,
          })}
        </Typography>
      </Box>
      <Button
        mt="xl"
        mb="2xl"
        size="small"
        width="100%"
        variant="filled"
        onClick={closeModal}
        boxSizing="border-box"
        justifyContent="center"
      >
        {capitalize(t('lend.close'))}
      </Button>
    </Box>
  );
};

export default FailCollateralModal;
