import { useTranslations } from 'next-intl';
import { FC, ReactNode } from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container } from '@/components';
import { TOKENS_SVG_MAP } from '@/constants';
import { Box, Typography } from '@/elements';
import { useLocale } from '@/hooks';
import { TimesSVG } from '@/svg';

import GoBack from '../components/go-back';
import {
  AddLiquidityCard,
  LiquidityDetailsCard,
  RemoveLiquidityCard,
} from './components';
import { IToken } from './components/add-liquidity-card/add-liquidity-card.types';
import { DEXPoolDetailsViewProps } from './dex-pool-details.types';
import { PairTypeMock } from './dex-pool-details-data';

interface TokenData {
  symbol: string;
  Icon: ReactNode;
  decimals: number;
  address: string;
}

const DEXPoolDetailsView: FC<DEXPoolDetailsViewProps> = ({ pairType }) => {
  const t = useTranslations();

  const { currentLocale } = useLocale();

  const processedData = PairTypeMock.filter((pair) => pair.type == pairType)[0];

  const DefaultIcon = TOKENS_SVG_MAP.default;

  const FirstIcon = TOKENS_SVG_MAP[processedData.token0] ?? DefaultIcon;

  const SecondIcon = TOKENS_SVG_MAP[processedData.token1] ?? DefaultIcon;

  const addLiquidityTokens: IToken[] = [
    {
      symbol: processedData.token0Metadata.symbol,
      Icon: (
        <Box as="span" display="inline-flex" width="1rem">
          <FirstIcon width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      ),
      balance: processedData.token0Balance,
      allowance: processedData.token0Allowance,
      decimals: parseFloat(processedData.token0Metadata.decimals),
      address: processedData.token0,
    },
    {
      symbol: processedData.token1Metadata.symbol,
      Icon: (
        <Box as="span" display="inline-flex" width="1rem">
          <SecondIcon width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      ),
      balance: processedData.token1Balance,
      allowance: processedData.token1Allowance,
      decimals: parseFloat(processedData.token1Metadata.decimals),
      address: processedData.token1,
    },
  ];

  const removeLiquidityTokens: TokenData[] = [
    {
      symbol: processedData.token0Metadata.symbol,
      Icon: processedData.loading ? (
        <Box as="span" width="1rem" borderRadius="2rem" display="inline-block">
          <Skeleton height="100%" borderRadius="2rem" />
        </Box>
      ) : (
        <Box as="span" display="inline-block" width="1rem">
          <FirstIcon width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      ),
      address: processedData.token0,
      decimals: parseFloat(processedData.token0Metadata.decimals),
    },
    {
      symbol: processedData.token1Metadata.symbol,
      Icon: processedData.loading ? (
        <Box as="span" width="1rem" borderRadius="2rem" display="inline-block">
          <Skeleton height="100%" borderRadius="2rem" />
        </Box>
      ) : (
        <Box as="span" display="inline-block" width="1rem">
          <SecondIcon width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      ),
      address: processedData.token1,
      decimals: parseFloat(processedData.token1Metadata.decimals),
    },
  ];

  // error verification
  // eslint-disable-next-line no-constant-condition
  if (false)
    return (
      <Box
        my="XXXL"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box color="error">
          <TimesSVG width="10rem" maxHeight="10rem" maxWidth="10rem" />
        </Box>
        <Typography variant="normal">
          {t('dexPoolPairAddress.error.pairData')}
        </Typography>
      </Box>
    );

  // pairs not exist verification
  // eslint-disable-next-line no-constant-condition
  if (!processedData.pairExists)
    return (
      <Box
        my="XXXL"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box color="error">
          <TimesSVG width="10rem" maxHeight="10rem" maxWidth="10rem" />
        </Box>
        <Typography variant="normal">
          {t('dexPoolPairAddress.error.pairDoesNotExist', { pairType })}
        </Typography>
      </Box>
    );

  return (
    <Container dapp mt="XXL" width="100%">
      <GoBack routeBack />
      <Box display="flex" alignItems="center">
        {
          /*processedData.loading ? (
          <HeaderSkeleton />
        ) : */ <>
            <FirstIcon width="2rem" maxHeight="2rem" maxWidth="2rem" />
            <SecondIcon width="2rem" maxHeight="2rem" maxWidth="2rem" />
            <Typography variant="normal" ml="L" textTransform="capitalize">
              {processedData.token0Metadata.symbol +
                ' - ' +
                processedData.token1Metadata.symbol +
                ' ' +
                t('dexPoolPairAddress.title', {
                  currentLocale,
                  type: t('common.volatile', { count: 1 }),
                })}
            </Typography>
          </>
        }
      </Box>
      <Box
        mt="XL"
        color="text"
        display="grid"
        gridGap="1rem"
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
      >
        <LiquidityDetailsCard
          isStable={false}
          lines={[
            {
              address: processedData.token0,
              symbol: processedData.token0Metadata.symbol,
              value: processedData.reserve0,
              isFetchingInitialData: processedData.loading,
            },
            {
              address: processedData.token1,
              symbol: processedData.token1Metadata.symbol,
              value: processedData.reserve1,
              isFetchingInitialData: processedData.loading,
            },
          ]}
        />
        <AddLiquidityCard
          fetchingInitialData={false}
          tokens={addLiquidityTokens}
          refetch={false}
        />
        <RemoveLiquidityCard
          pairAddress={pairType}
          isStable={false}
          isFetchingInitialData={processedData.loading}
          lpAllowance={processedData.lpAllowance}
          lpBalance={processedData.lpBalance}
          tokens={removeLiquidityTokens}
          refetch={2}
        />
      </Box>
    </Container>
  );
};

export default DEXPoolDetailsView;
