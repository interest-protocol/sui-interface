import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import TokenIcon from '../token-icon';
import { AmountProps } from './amount.type';

const Amount: FC<AmountProps> = ({
  label,
  symbol,
  title,
  description,
  value,
}) => {
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
            <TokenIcon symbol={symbol} size={2.5} lessRadius />
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
                  fontSize={['0.588rem', '0.588rem', '0.588rem', '0.688rem']}
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
          <Typography variant="medium" color="onSurface">
            {value}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Amount;
