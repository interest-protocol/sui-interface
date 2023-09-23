import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ISuiYNSVG } from '@/svg';

import { InputProps } from './input.type';

const Input: FC<InputProps> = ({ label, symbol, title, description }) => {
  return (
    <Box>
      <Typography
        variant="small"
        fontSize="0.688rem"
        color="onSurface"
        opacity="0.6"
        mb="0.5rem"
      >
        {label}
      </Typography>
      <Box
        position="relative"
        borderRadius="0.25rem"
        bg="surface.containerHigh"
      >
        <TextField
          Prefix={
            <Box height="4rem" display="flex" alignItems="center" pl="0.5rem">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                gap="0.25rem"
              >
                <Box color="white" display="flex" alignItems="center">
                  <ISuiYNSVG
                    filled
                    maxWidth="2.5rem"
                    maxHeight="2.5rem"
                    width="100%"
                  />
                </Box>
                <Box display="flex" flexDirection="column" width="max-content">
                  <Typography
                    variant="medium"
                    fontSize={['xs', 'xs', 'xs', 'l']}
                    color="onSurface"
                    fontWeight="400"
                    width="100%"
                    lineHeight="1.5rem"
                  >
                    {title}
                  </Typography>
                  {description && (
                    <Typography
                      variant="medium"
                      fontSize={[
                        '0.588rem',
                        '0.588rem',
                        '0.588rem',
                        '0.688rem',
                      ]}
                      color="onSurface"
                      lineHeight="1rem"
                      opacity={0.6}
                      width="100%"
                    >
                      {description}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          }
          fontSize={['m', 'm', 'm', 'xl']}
          placeholder="0"
          textAlign="right"
          color="onSurface"
          fieldProps={{ border: 'none', p: '0', pr: '0.75rem' }}
        />
      </Box>
    </Box>
  );
};

export default Input;
