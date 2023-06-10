import {
  Box,
  Motion,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Routes, RoutesEnum } from '@/constants';
import { TOKENS_SVG_MARKET_MAP } from '@/views/dapp/svg/market-tables';

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

  const getSVG = (type: string) => {
    const SVG = TOKENS_SVG_MARKET_MAP[type] ?? TOKENS_SVG_MARKET_MAP.default;
    return <SVG width="2.5rem" maxHeight="100%" maxWidth="2.5rem" />;
  };
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
        <Link
          key={v4()}
          href={{
            pathname: Routes[RoutesEnum.LendDetails],
            query: { type: item.assetApy.coin.token.type },
          }}
        >
          <Motion
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
                {getSVG(item.assetApy.coin.token.type)}
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography variant="medium">
                  {item.assetApy.coin.token.symbol}
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
              onClick={(e) => e.stopPropagation()}
            >
              <Box>
                <SwitchButton
                  defaultValue={item.collateral}
                  name={item.assetApy.coin.token.symbol}
                  labels={''}
                />
              </Box>
            </Box>
          </Motion>
        </Link>
      ))}
    </>
  );
};

export default SupplyMarketTable;
