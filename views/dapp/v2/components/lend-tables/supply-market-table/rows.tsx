import {
  Box,
  Motion,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Routes, RoutesEnum } from '@/constants';

import { MarketTableSupplyProps } from '../market-table/market-table.types';
import { TOKENS_SVG_MARKET_MAP } from '../svg/market-tables';

const SupplyMarketTableRow: FC<
  MarketTableSupplyProps & { isEngaged: boolean }
> = ({ assetApy, supplied, wallet, collateral, isEngaged }) => {
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
    <Link
      key={v4()}
      href={{
        pathname: Routes[RoutesEnum.Lend],
        query: { type: assetApy.coin.token.type },
      }}
    >
      <Motion
        width="100%"
        display="grid"
        cursor="pointer"
        whileHover={{
          background: surface2,
        }}
        initial={{
          background: surface1,
        }}
        gridTemplateColumns="repeat(4, 1fr)"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        pl="0.75rem"
        pr="0.5rem"
        mb="1rem"
      >
        <Box
          borderLeft="2px solid"
          borderColor={isEngaged ? '#D9F99D' : 'surface.containerLow'}
          py="1.5rem"
          pl="1.125rem"
          gap="m"
          display="flex"
        >
          <Box display="flex" alignItems="center">
            {getSVG(assetApy.coin.token.type)}
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography variant="medium">
              {assetApy.coin.token.symbol}
            </Typography>
            <Typography
              variant="small"
              color={
                assetApy.coin.color !== undefined && dark
                  ? assetApy.coin.color.dark
                  : assetApy.coin.color !== undefined && !dark
                  ? assetApy.coin.color.light
                  : dark
                  ? '#77767A'
                  : '#47464A'
              }
            >
              {assetApy.percentage}%
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
            {supplied.percentage}
          </Typography>
          <Typography
            variant="small"
            textAlign="center"
            color={dark ? '#77767A' : '#47464A'}
          >
            ${supplied.value}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="medium" textAlign="center">
            {wallet}
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
              defaultValue={collateral}
              name={assetApy.coin.token.symbol}
              labels={''}
            />
          </Box>
        </Box>
      </Motion>
    </Link>
  );
};

export default SupplyMarketTableRow;
