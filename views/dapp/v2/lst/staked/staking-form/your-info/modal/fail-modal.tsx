import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';

import HeaderModal from './header-modal';
import { LSTFormFailModalProps } from './modal.types';

const LSTFormFailModal: FC<LSTFormFailModalProps> = ({
  isStake,
  message,
  handleClose,
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
        title={t('lst.modal.error.title')}
        handleClose={handleClose}
      />
      <Box
        p="xl"
        pt="4xl"
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
          {t('lst.modal.error.title')}
        </Typography>
      </Box>
      <Box px="l" pt="l" display="flex" flexDirection="column">
        <Typography variant="extraSmall" textAlign="center">
          {message ??
            t('lst.modal.error.description', { isStake: Number(isStake) })}
        </Typography>
        <Button
          mt="xl"
          mb="2xl"
          size="small"
          width="100%"
          variant="filled"
          onClick={handleClose}
          boxSizing="border-box"
          justifyContent="center"
        >
          {t('lst.modal.error.button')}
        </Button>
      </Box>
    </Box>
  );
};

export default LSTFormFailModal;
