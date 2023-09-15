import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

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
