import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC, useCallback } from 'react';

import { Container } from '@/components';
import { Box, InfiniteScroll, Typography } from '@/elements';
import {
  useGetCoinsPrices,
  useGetFarms,
  useGetIPXStorage,
  useGetVolatilePools,
  useNetwork,
  useWeb3,
} from '@/hooks';
import useEventListener from '@/hooks/use-event-listener';
import { LoadingSVG } from '@/svg';
import { noop } from '@/utils';

import ErrorView from '../components/error';
import FarmsFilters from './components/farms-filters';
import FarmsTable from './components/farms-table';
import {
  COIN_PRICES,
  FARM_TYPE_ARGS,
  FILLED_FARM_TYPE_ARGS,
  FILLED_POOL_TYPE_ARGS,
} from './farms.constants';
import { FarmsProps } from './farms.types';
import { parseData, parseError } from './farms.utils';

const Farms: FC<FarmsProps> = ({ form, desktopState }) => {
  const t = useTranslations();

  const { account } = useWeb3();
  const { network } = useNetwork();
  const { data: ipxStorage, error: ipxStorageError } = useGetIPXStorage();

  const prices = useGetCoinsPrices(COIN_PRICES[network]);

  const handleSetDesktop = useCallback(() => {
    const mediaIsDesktop = window.matchMedia('(min-width: 64em)').matches;
    desktopState.setDesktop(mediaIsDesktop);
  }, []);

  const { error: errorFarms, data: farms } = useGetFarms(
    account,
    FILLED_FARM_TYPE_ARGS[network],
    FARM_TYPE_ARGS[network].length
  );
  const { error: errorPools, data: pools } = useGetVolatilePools(
    account,
    FILLED_POOL_TYPE_ARGS[network],
    7
  );

  useEventListener('resize', handleSetDesktop, true);

  if (errorFarms || prices.error || ipxStorageError || errorPools)
    return (
      <ErrorView
        message={t(
          parseError({
            errorFarms,
            errorPools,
            pricesError: prices.error,
            ipxStorageError,
          })
        )}
      />
    );

  const parsedData = parseData({
    pools,
    farms,
    ipxStorage,
    prices: prices.data,
    network,
  });

  return (
    <Box display="flex" flexDirection="column" flex="1">
      <Box>
        <Container
          dapp
          py="XL"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent={['center', 'flex-start']}
        >
          <Typography variant="normal" ml="M">
            Farms
          </Typography>
        </Container>
      </Box>
      <Container
        dapp
        width="100%"
        height="100%"
        display="flex"
        position="relative"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <FarmsFilters
            control={form.control}
            register={form.register}
            setValue={form.setValue}
          />
          <InfiniteScroll
            overflow="visible !important"
            hasMore={false}
            next={noop}
            scrollableTarget="body"
            dataLength={isEmpty(parsedData) ? 0 : parsedData.farms.length}
            loader={
              <Box display="flex" alignItems="center" justifyContent="center">
                <Box as="span" display="inline-block" width="1rem">
                  <LoadingSVG width="100%" maxHeight="1rem" maxWidth="1rem" />
                </Box>
                <Typography fontSize="S" variant="normal" ml="M">
                  {t('common.load', { isLoading: 1 })}
                </Typography>
              </Box>
            }
          >
            <Box>
              <FarmsTable
                control={form.control}
                data={parsedData}
                isDesktop={desktopState.isDesktop}
              />
            </Box>
          </InfiniteScroll>
        </Box>
      </Container>
    </Box>
  );
};

export default Farms;
