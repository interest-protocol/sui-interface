import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import HeaderModal from '../../../../components/your-info-container/modal/header-modal';
import LineWrapper from './line-wrapper';
import { PreviewTransactionProps } from './modal.types';

const PreviewTransaction: FC<PreviewTransactionProps> = ({
  handleClose,
  depositFee,
  rewards,
  lines,
  onClick,
  isStake,
}) => {
  const t = useTranslations();

  return (
    <Box
      width={['90vw', '90vw', '90vw', '27rem']}
      borderRadius="1rem"
      bg="surface.container"
      display="flex"
      flexDirection="column"
      pb="l"
    >
      <HeaderModal
        title={t('lst.modal.preview.title')}
        handleClose={handleClose}
      />
      <Box px="l" pt="l" display="flex" flexDirection="column">
        {lines.map((line) => (
          <LineWrapper {...line} key={v4()} />
        ))}
        <Button
          variant="filled"
          my="1rem"
          py="0.625rem"
          px="1.5rem"
          width="fill-available"
          textAlign="center"
          onClick={onClick}
        >
          <Typography
            variant="small"
            fontWeight="500"
            textAlign="center"
            fontSize="0.875rem"
            width="100%"
            color="primary.onPrimary"
            textTransform="capitalize"
          >
            {t('lst.modal.preview.button', { isStake: +isStake })}
          </Typography>
        </Button>
        <Typography
          variant="extraSmall"
          fontWeight="400"
          fontSize="0.6875rem"
          color="onSurface"
          opacity={0.6}
          mb="0.5rem"
          textTransform="capitalize"
        >
          {t('lst.modal.preview.other')}
        </Typography>
        <Box
          mb="l"
          p="0.75rem"
          gap="0.5rem"
          display="flex"
          alignItems="center"
          borderRadius="0.25rem"
          flexDirection="column"
          bg="surface.containerHighest"
          justifyContent="space-between"
        >
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography
              variant="extraSmall"
              fontWeight="400"
              fontSize="0.75rem"
              color="onSurface"
              textTransform="capitalize"
            >
              {t('lst.modal.preview.depositFee')}
            </Typography>
            <Typography
              variant="extraSmall"
              fontWeight="400"
              fontSize="0.75rem"
              color="onSurface"
              mb="0.5rem"
            >
              {depositFee}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography
              variant="extraSmall"
              fontWeight="400"
              fontSize="0.75rem"
              color="onSurface"
              textTransform="capitalize"
            >
              {t('lst.modal.preview.rewards')}
            </Typography>
            <Typography
              variant="extraSmall"
              fontWeight="400"
              fontSize="0.75rem"
              color="onSurface"
              mb="0.5rem"
            >
              {rewards}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewTransaction;
