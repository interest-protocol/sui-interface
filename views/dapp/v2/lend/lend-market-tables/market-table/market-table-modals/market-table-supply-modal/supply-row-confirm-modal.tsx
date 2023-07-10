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
      <a
        href={activityLink}
        target="_blank"
        rel="noreferrer"
        onClick={closeModal}
      >
        <Button
          mt="xl"
          size="small"
          width="100%"
          variant="filled"
          boxSizing="border-box"
          justifyContent="center"
        >
          {t('lend.modal.supply.confirm.viewOnExplorer')}
        </Button>
      </a>
      <Button
        mb="2xl"
        mt="0.5rem"
        size="small"
        width="100%"
        variant="text"
        boxSizing="border-box"
        justifyContent="center"
        onClick={closeModal}
      >
        {capitalize(t('lend.close'))}
      </Button>
    </Box>
  );
};

export default SupplyMarketConfirmModal;
