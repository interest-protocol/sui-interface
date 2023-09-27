import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import HeaderModal from './header-modal';
import { BondsFormModalProps } from './modal.types';

const BondsFormLoadingModal: FC<Omit<BondsFormModalProps, 'onClick'>> = ({
  handleClose,
}) => {
  const t = useTranslations();

  return (
    <Box
      width={['90vw', '90vw', '90vw', '24rem']}
      borderRadius="1rem"
      bg="surface"
      display="flex"
      flexDirection="column"
      pb="l"
    >
      <HeaderModal handleClose={handleClose} />
      <Box
        px="l"
        gap="l"
        display="flex"
        minHeight="12rem"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <ProgressIndicator variant="loading" />
        <Typography
          variant="medium"
          color="onSurface"
          textTransform="capitalize"
        >
          {t('common.loading')}
        </Typography>
      </Box>
    </Box>
  );
};

export default BondsFormLoadingModal;
