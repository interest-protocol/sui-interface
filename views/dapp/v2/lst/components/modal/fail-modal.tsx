import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';

import HeaderModal from './header-modal';
import { FormModalProps } from './modal.types';

const FormFailModal: FC<Omit<FormModalProps, 'onClick'>> = ({
  handleClose,
  labels,
}) => (
  <Box
    width={['90vw', '90vw', '90vw', '27rem']}
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
          <Box color="error" zIndex={2} height="3rem">
            <TimesSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
          </Box>
        </Box>
        <Typography
          my="xl"
          width="16rem"
          variant="medium"
          textAlign="center"
          color="onSurface"
          textTransform="uppercase"
        >
          {labels.description}
        </Typography>
      </Box>
      <Button
        size="small"
        width="95%"
        variant="filled"
        onClick={handleClose}
        boxSizing="border-box"
        justifyContent="center"
        mx="auto"
      >
        {labels.button}
      </Button>
    </Box>
  </Box>
);

export default FormFailModal;
