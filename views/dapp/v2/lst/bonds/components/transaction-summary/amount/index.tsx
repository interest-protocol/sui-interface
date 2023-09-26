import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import TokenIcon from '../../../components/token-icon';
import { AmountProps } from './amount.type';

const Amount: FC<AmountProps> = ({ label, value, fieldList }) => {
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
      {fieldList.map((field) => (
        <Box
          key={v4()}
          position="relative"
          borderRadius="0.25rem"
          bg="surface.containerHigh"
          mb="0.5rem"
        >
          <Box
            height="4rem"
            display="flex"
            alignItems="center"
            px="0.5rem"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap="0.25rem"
            >
              <TokenIcon symbol={field.symbol} size={2.5} lessRadius />
              <Box display="flex" flexDirection="column" width="max-content">
                <Typography
                  variant="medium"
                  fontSize={['xs', 'xs', 'xs', 'l']}
                  color="onSurface"
                  fontWeight="400"
                  width="100%"
                  lineHeight="1.5rem"
                >
                  {field.title}
                </Typography>
                {field.description && (
                  <Typography
                    variant="medium"
                    fontSize={['0.588rem', '0.588rem', '0.588rem', '0.688rem']}
                    color="onSurface"
                    lineHeight="1rem"
                    opacity={0.6}
                    width="100%"
                  >
                    {field.description}
                  </Typography>
                )}
              </Box>
            </Box>
            <Typography variant="medium" color="onSurface">
              {value}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Amount;
