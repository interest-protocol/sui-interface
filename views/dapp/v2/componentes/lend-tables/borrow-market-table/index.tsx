import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { BORROW_MARKET_TABLE_DATA } from '../market-table/market-table-data';

const BorrowMarketTable: FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { dark } = useTheme() as Theme;
  const surface2 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.08), rgba(182, 196, 255, 0.08)), #1B1B1F;'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.08), rgba(0, 85, 255, 0.08)), #F2F0F4;';

  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)">
        <Box px="l">
          <Typography variant="small" color="foreground">
            Asset / APY
          </Typography>
        </Box>
        <Box>
          <Typography variant="small" textAlign="center" color="foreground">
            Borrowed
          </Typography>
        </Box>
        <Box>
          <Typography variant="small" textAlign="center" color="foreground">
            Wallet
          </Typography>
        </Box>
        <Box px="l">
          <Typography variant="small" textAlign="right" color="foreground">
            Liquidity
          </Typography>
        </Box>

        {BORROW_MARKET_TABLE_DATA.map((item, index) => (
          <>
            <Box
              key={v4()}
              p="l"
              gap="m"
              display="flex"
              cursor="pointer"
              marginTop={index === 0 ? 'l' : '0'}
              onMouseOver={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              bg={hovered === index ? surface2 : 'transparent'}
            >
              <Box display="flex" alignItems="center">
                {
                  <item.assetApy.coin.symbol
                    maxHeight="100%"
                    maxWidth="2.5rem"
                    width="2.5rem"
                  />
                }
              </Box>
              <Box display="flex" flexDirection="column" rowGap="2xs">
                <Typography variant="small">
                  {item.assetApy.coin.name}
                </Typography>
                <Typography
                  variant="extraSmall"
                  color={
                    item.assetApy.coin.color !== undefined && dark
                      ? item.assetApy.coin.color.dark
                      : item.assetApy.coin.color !== undefined && !dark
                      ? item.assetApy.coin.color.light
                      : 'foreground'
                  }
                >
                  {item.assetApy.percentage}%
                </Typography>
              </Box>
            </Box>
            <Box
              gap="2xs"
              display="flex"
              cursor="pointer"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              marginTop={index === 0 ? 'l' : '0'}
              onMouseOver={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              bg={hovered === index ? surface2 : 'transparent'}
            >
              <Typography variant="small" textAlign="center">
                {item.borrowed.percentage}
              </Typography>
              <Typography
                variant="extraSmall"
                textAlign="center"
                color="foreground"
              >
                ${item.borrowed.value}
              </Typography>
            </Box>
            <Box
              display="flex"
              cursor="pointer"
              alignItems="center"
              justifyContent="center"
              marginTop={index === 0 ? 'l' : '0'}
              onMouseOver={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              bg={hovered === index ? surface2 : 'transparent'}
            >
              <Typography variant="small" textAlign="center">
                {item.wallet}
              </Typography>
            </Box>
            <Box
              px="l"
              display="flex"
              cursor="pointer"
              alignItems="center"
              justifyContent="flex-end"
              marginTop={index === 0 ? 'l' : '0'}
              onMouseOver={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              bg={hovered === index ? surface2 : 'transparent'}
            >
              <Typography variant="small" textAlign="right">
                ${item.liquidity}
              </Typography>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
};
export default BorrowMarketTable;
