import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CheckmarkSVG, TimesSVG } from '@/components/svg/v2';

import { ResultModalProps } from './modal.types';

const ResultCollateralModal: FC<ResultModalProps> = ({
  title,
  content,
  closeModal,
  isSuccess,
}) => {
  return (
    <Motion
      layout
      width="24.375rem"
      display="flex"
      maxHeight="90vh"
      maxWidth="26rem"
      overflow="hidden"
      color="onSurface"
      borderRadius="1rem"
      bg="surface.container"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
      transition={{ duration: 0.3 }}
    >
      <Box
        p="1.65rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="medium">{title}</Typography>
      </Box>
      <Box
        pt="4xl"
        pb="xl"
        mb="xl"
        mx="xl"
        display="flex"
        borderRadius="m"
        alignItems="center"
        flexDirection="column"
        bg="surface.containerLowest"
      >
        <Box my="xl" color={isSuccess ? 'success' : 'error'}>
          {isSuccess ? (
            <CheckmarkSVG
              filled
              width="100%"
              maxWidth="3rem"
              maxHeight="3rem"
            />
          ) : (
            <TimesSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
          )}
        </Box>
        <Typography my="xl" width="16rem" variant="medium" textAlign="center">
          {content}
        </Typography>
      </Box>
      <Box mx="xl">
        <Button
          onClick={closeModal}
          mb="2xl"
          size="small"
          width="100%"
          variant="filled"
          boxSizing="border-box"
          justifyContent="center"
        >
          Close
        </Button>
      </Box>
    </Motion>
  );
};

export default ResultCollateralModal;
