import {
  Box,
  Motion,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SUPPLY_MARKET_TABLE_DATA } from '../market-table/market-table-data';

const SupplyMarketTable: FC = () => {
  const t = useTranslations();
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
          <Typography
            variant="extraSmall"
            whiteSpace="nowrap"
            color={dark ? '#77767A' : '#47464A'}
          >
            {t('common.v2.lend.marketTables.supplyMarket.columns.netAPY')}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="extraSmall"
            textAlign="center"
            color={dark ? '#77767A' : '#47464A'}
          >
            {t('common.v2.lend.marketTables.supplyMarket.columns.supplied')}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="extraSmall"
            textAlign="center"
            color={dark ? '#77767A' : '#47464A'}
          >
            {t('common.v2.lend.marketTables.supplyMarket.columns.wallet')}
          </Typography>
        </Box>
        <Box paddingRight="l">
          <Typography
            variant="extraSmall"
            textAlign="right"
            color={dark ? '#77767A' : '#47464A'}
          >
            {t('common.v2.lend.marketTables.supplyMarket.columns.collateral')}
          </Typography>
        </Box>
      </Box>

      {SUPPLY_MARKET_TABLE_DATA.map((item, index) => (
        <Motion
          key={v4()}
          width="100%"
          display="grid"
          cursor="pointer"
          marginTop={index === 0 ? 'l' : '0'}
          whileHover={{
            background: surface2,
          }}
          initial={{
            background: surface1,
          }}
          gridTemplateColumns="repeat(4, 1fr)"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Box p="l" gap="m" display="flex">
            <Box display="flex" alignItems="center">
              {
                <item.assetApy.coin.symbol
                  width="2.5rem"
                  maxHeight="100%"
                  maxWidth="2.5rem"
                />
              }
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography variant="medium">
                {item.assetApy.coin.name}
              </Typography>
              <Typography
                variant="small"
                color={
                  item.assetApy.coin.color !== undefined && dark
                    ? item.assetApy.coin.color.dark
                    : item.assetApy.coin.color !== undefined && !dark
                    ? item.assetApy.coin.color.light
                    : dark
                    ? '#77767A'
                    : '#47464A'
                }
              >
                {item.assetApy.percentage}%
              </Typography>
            </Box>
          </Box>
          <Box
            gap="2xs"
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography variant="medium" textAlign="center">
              {item.supplied.percentage}
            </Typography>
            <Typography
              textAlign="center"
              color={dark ? '#77767A' : '#47464A'}
              variant="small"
            >
              ${item.supplied.value}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="medium" textAlign="center">
              {item.wallet}
            </Typography>
          </Box>
          <Box
            px="l"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Box>
              <SwitchButton
                defaultValue={item.collateral}
                name={item.assetApy.coin.name}
                labels={''}
              />
            </Box>
          </Box>
        </Motion>
      ))}
    </>
  );
};

export default SupplyMarketTable;
