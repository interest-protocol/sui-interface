import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';

import HeaderModal from './header-modal';
import { LSTFormConfirmModalProps } from './modal.types';

const LSTFormConfirmModal: FC<LSTFormConfirmModalProps> = ({
  txLink,
  isStake,
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
        title={t('lst.modal.preview.title')}
        handleClose={handleClose}
      />
      <Box px="l" pt="l" display="flex" flexDirection="column">
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
            <CheckmarkSVG
              filled
              width="100%"
              maxWidth="3rem"
              maxHeight="3rem"
            />
          </Box>
          <Typography
            my="xl"
            width="16rem"
            variant="medium"
            textAlign="center"
            color="onSurface"
          >
            {t('lst.modal.confirm.title', { isStake: Number(isStake) })}
          </Typography>
        </Box>
        <Typography variant="extraSmall" color="onSurface">
          {t('lst.modal.confirm.description')}
        </Typography>
        <a href={txLink} target="_blank" rel="noreferrer" onClick={handleClose}>
          <Button
            mt="xl"
            mb="2xl"
            size="small"
            width="100%"
            variant="filled"
            boxSizing="border-box"
            justifyContent="center"
          >
            {t('lst.modal.confirm.button')}
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default LSTFormConfirmModal;
