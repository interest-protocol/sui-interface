import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';
import { ArrowLinkSVG } from '@/svg';

import HeaderModal from './header-modal';
import { FormModalProps, ViewInExplorerLinkProps } from './modal.types';

const FormConfirmModal: FC<FormModalProps & ViewInExplorerLinkProps> = ({
  labels,
  onClick,
  handleClose,
  viewInExplorerLink,
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
            {labels.description}
          </Typography>
          <Box
            p="m"
            mb="xl"
            width="95%"
            display="flex"
            borderRadius="m"
            color="onSurface"
            alignItems="center"
            justifyContent="center"
            bg="surface.containerLowest"
          >
            <a href={viewInExplorerLink} target="_blank" rel="noreferrer">
              <Box display="flex" alignItems="center" gap="m">
                <Typography variant="extraSmall" opacity=".6">
                  {t('lst.bonds.modal.success.viewInExplorer')}
                </Typography>
                <ArrowLinkSVG maxHeight=".5rem" maxWidth=".5rem" width="100%" />
              </Box>
            </a>
          </Box>
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
          {labels.button}
        </Button>
      </Box>
    </Box>
  );
};

export default FormConfirmModal;
