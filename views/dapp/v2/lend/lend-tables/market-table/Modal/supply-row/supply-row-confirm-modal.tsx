import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

import { RowResultModalProps } from '../modal.types';

const SupplyMarketConfirmModal: FC<RowResultModalProps> = ({
  title,
  content,
  additionalText,
  activityLink,
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
        <Typography variant="medium">{title}</Typography>
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
        <Box my="xl" color="success">
          <CheckmarkSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
        </Box>
        <Typography my="xl" width="16rem" variant="medium" textAlign="center">
          {content}
        </Typography>
      </Box>
      <Typography variant="extraSmall">{additionalText}</Typography>
      <Button
        mt="xl"
        size="small"
        width="100%"
        variant="filled"
        boxSizing="border-box"
        justifyContent="center"
        onClick={closeModal}
      >
        {capitalize(t('common.v2.lend.close'))}
      </Button>
      <a
        href={activityLink}
        target="_blank"
        rel="noreferrer"
        onClick={closeModal}
      >
        <Button
          mt="0.5rem"
          mb="2xl"
          size="small"
          width="100%"
          variant="text"
          boxSizing="border-box"
          justifyContent="center"
        >
          {t('Lend.modal.supply.confirm.secondButton')}
        </Button>
      </a>
    </Box>
  );
};

export default SupplyMarketConfirmModal;