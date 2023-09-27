import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

import HeaderModal from './header-modal';
import { BondsFormModalProps } from './modal.types';

const BondsFormConfirmModal: FC<BondsFormModalProps> = ({
  onClick,
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
      <Box px="l" display="flex" flexDirection="column">
        <Box
          pt="xl"
          display="flex"
          borderRadius="m"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="6rem"
            height="6rem"
          >
            <Box
              width="100%"
              height="100%"
              borderRadius="full"
              bg="surface.container"
              display="flex"
              position="absolute"
              zIndex={1}
            />
            <Box color="success" zIndex={2} height="3rem">
              <CheckmarkSVG
                filled
                width="100%"
                maxWidth="3rem"
                maxHeight="3rem"
              />
            </Box>
          </Box>
          <Typography
            my="xl"
            width="16rem"
            variant="medium"
            textAlign="center"
            color="onSurface"
            textTransform="capitalize"
          >
            {t('lst.clamRewards.modal.success.description')}
          </Typography>
        </Box>
        <Button
          size="small"
          width="95%"
          variant="filled"
          boxSizing="border-box"
          justifyContent="center"
          mx="auto"
          onClick={onClick}
        >
          {capitalize(t('common.backHome'))}
        </Button>
      </Box>
    </Box>
  );
};

export default BondsFormConfirmModal;