import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const BorrowMarketTableHeader: FC = () => {
  const { dark } = useTheme() as Theme;
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      py="1rem"
      borderBottom="1px solid"
      borderColor="outline.outlineVariant"
      pl="1.125rem"
    >
      <Box px="l">
        <Typography
          variant="extraSmall"
          whiteSpace="nowrap"
          color={dark ? '#77767A' : '#47464A'}
        >
          Asset / APY
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="extraSmall"
          textAlign="center"
          color={dark ? '#77767A' : '#47464A'}
        >
          Borrowed
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="extraSmall"
          textAlign="center"
          color={dark ? '#77767A' : '#47464A'}
        >
          Wallet
        </Typography>
      </Box>
      <Box paddingRight="l">
        <Typography
          variant="extraSmall"
          textAlign="right"
          color={dark ? '#77767A' : '#47464A'}
        >
          Liquidity
        </Typography>
      </Box>
    </Box>
  );
};

export default BorrowMarketTableHeader;
