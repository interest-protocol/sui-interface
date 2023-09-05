import { Box, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { ArrowLeft } from '@/svg';

import { DetailedHeaderProps } from '../earn.types';

const DetailedHeader: FC<DetailedHeaderProps> = ({ description }) => {
  const { push } = useRouter();

  return (
    <Box display="flex" gap="1.5rem" alignItems="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="2.5rem"
        height="2.5rem"
        border="1px solid"
        borderColor="outiline.outlineVariant"
        borderRadius="50%"
        color="onSurface"
        onClick={() => push({ pathname: Routes[RoutesEnum.Earn] }).then()}
        cursor="pointer"
      >
        <ArrowLeft maxHeight="100%" maxWidth="100%" width="60%" />
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="title4">{description}</Typography>
      </Box>
    </Box>
  );
};

export default DetailedHeader;
