import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { BORROW_MARKET_TABLE_DATA } from '../market-table/market-table-data';

const BorrowMarketTable: FC = () => {
  const t = useTranslations();
  const [hovered, setHovered] = useState<number | null>(null);
  const { dark } = useTheme() as Theme;
  const surface1 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.04), rgba(182, 196, 255, 0.04)), #1B1B1F'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.04), rgba(0, 85, 255, 0.04)), #F2F0F4';
  const surface2 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.08), rgba(182, 196, 255, 0.08)), #1B1B1F'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.08), rgba(0, 85, 255, 0.08)), #F2F0F4';

  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(4, 1fr)">
        <Box px="l">
          <Typography variant="small" color="foreground">
            {t('common.v2.lend.marketTables.borrowMarket.columns.netAPY')}
          </Typography>
        </Box>
        <Box>
          <Typography variant="small" textAlign="center" color="foreground">
            {t('common.v2.lend.marketTables.borrowMarket.columns.borrowed')}
          </Typography>
        </Box>
        <Box>
          <Typography variant="small" textAlign="center" color="foreground">
            {t('common.v2.lend.marketTables.borrowMarket.columns.wallet')}
          </Typography>
        </Box>
        <Box px="l">
          <Typography variant="small" textAlign="right" color="foreground">
            {t('common.v2.lend.marketTables.borrowMarket.columns.liquidity')}
          </Typography>
        </Box>

        {BORROW_MARKET_TABLE_DATA.map((item, index) => (
          <>
            <Motion
              key={v4()}
              p="l"
              gap="m"
              display="flex"
              cursor="pointer"
              marginTop={index === 0 ? 'l' : '0'}
              onMouseOver={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              initial={{
                background: surface1,
              }}
              animate={{
                background: hovered === index ? surface2 : surface1,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
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
            </Motion>
            <Motion
              gap="2xs"
              display="flex"
              cursor="pointer"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              marginTop={index === 0 ? 'l' : '0'}
              onMouseOver={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              initial={{
                background: surface1,
              }}
              animate={{
                background: hovered === index ? surface2 : surface1,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
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
            </Motion>
            <Motion
              display="flex"
              cursor="pointer"
              alignItems="center"
              justifyContent="center"
              marginTop={index === 0 ? 'l' : '0'}
              onMouseOver={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              initial={{
                background: surface1,
              }}
              animate={{
                background: hovered === index ? surface2 : surface1,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Typography variant="small" textAlign="center">
                {item.wallet}
              </Typography>
            </Motion>
            <Motion
              px="l"
              display="flex"
              cursor="pointer"
              alignItems="center"
              justifyContent="flex-end"
              marginTop={index === 0 ? 'l' : '0'}
              onMouseOver={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              initial={{
                background: surface1,
              }}
              animate={{
                background: hovered === index ? surface2 : surface1,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Typography variant="small" textAlign="right">
                ${item.liquidity}
              </Typography>
            </Motion>
          </>
        ))}
      </Box>
    </>
  );
};
export default BorrowMarketTable;
