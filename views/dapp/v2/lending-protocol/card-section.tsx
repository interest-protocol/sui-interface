import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';
import { v4 } from 'uuid';

import { CardSectionProps } from './lending-protocol.types';

const CardSection: FC<PropsWithChildren<CardSectionProps>> = ({
  title,
  lines,
  isModal,
  children,
}) => {
  const { dark } = useTheme() as Theme;
  const surface1 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.04), rgba(182, 196, 255, 0.04)), #1B1B1F;'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.04), rgba(0, 85, 255, 0.04)), #F2F0F4;';

  return (
    <Box
      p="1.5rem"
      borderTop="1px solid"
      borderColor="#B6C4FF33"
      bg={isModal ? 'transparent' : surface1}
    >
      <Typography variant="medium" mb="0.75rem">
        {title}
      </Typography>
      {lines.map(({ description, value, Icon }) => (
        <Box
          mb="0.438rem"
          display="flex"
          justifyContent="space-between"
          color="#ACAAAF"
          key={v4()}
        >
          <Box
            mb="0.438rem"
            display="flex"
            justifyContent="space-between"
            color="#ACAAAF"
            width="fill-available"
          >
            <Box width="fill-available">
              {Icon}
              <Typography
                variant="medium"
                as="span"
                ml={Icon ? '0.5rem' : 'unset'}
              >
                {description}
              </Typography>
            </Box>
            <Typography variant="medium" as="span">
              {value}
            </Typography>
          </Box>
        </Box>
      ))}
      {children}
    </Box>
  );
};

export default CardSection;
