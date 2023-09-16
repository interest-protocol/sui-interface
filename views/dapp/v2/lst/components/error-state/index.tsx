import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';
import { SEMANTIC_COLORS } from '@/constants/semantic-colors';

import { ErrorStateProps } from './error-state.types';

const ErrorState: FC<ErrorStateProps> = ({ errorMessage, size }) => {
  const { dark } = useTheme() as Theme;
  const red = dark ? SEMANTIC_COLORS[1].dark : SEMANTIC_COLORS[1].light;
  return (
    <Box
      gap="m"
      color={red}
      width="100%"
      display="flex"
      alignItems="center"
      my={size === 'large' ? '4xl' : 'unset'}
      flexDirection={size === 'large' ? 'column' : 'row'}
    >
      <Box
        p=".25rem"
        display="flex"
        borderColor={red}
        alignItems="center"
        borderRadius="full"
        justifyContent="center"
        width={size === 'large' ? '2.5rem' : '1.25rem'}
        height={size === 'large' ? '2.5rem' : '1.25rem'}
        border={size === 'large' ? '0.125rem solid' : '0.0625rem solid'}
      >
        {size === 'large' ? (
          <TimesSVG width="100%" maxHeight="1rem" maxWidth="1rem" />
        ) : (
          <TimesSVG width="100%" maxHeight=".875rem" maxWidth=".875rem" />
        )}
      </Box>
      <Typography
        variant="small"
        textAlign={size === 'large' ? 'center' : 'left'}
        width={size === 'large' ? '40%' : 'fit-content'}
      >
        {errorMessage}
      </Typography>
    </Box>
  );
};

export default ErrorState;
