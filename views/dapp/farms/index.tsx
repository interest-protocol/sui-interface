import { Network } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Container } from '@/components';
import { COINS, FARMS } from '@/constants';
import { Box, InfiniteScroll, Typography } from '@/elements';
import { useGetCoinsPrices, useWeb3 } from '@/hooks';
import useEventListener from '@/hooks/use-event-listener';
import { LoadingSVG } from '@/svg';
import { noop } from '@/utils';

import ErrorView from '../components/error';
import FarmsFilters from './components/farms-filters';
import FarmsTable from './components/farms-table';
import { useFarmListData } from './farms.hooks';
import { FarmSortByFilter, FarmTypeFilter, IFarmsForm } from './farms.types';
import { parseFarmListData } from './farms.utils';

const COIN_PRICES = [
  COINS[Network.DEVNET].ETH.type,
  COINS[Network.DEVNET].BTC.type,
  COINS[Network.DEVNET].DAI.type,
  COINS[Network.DEVNET].BNB.type,
  COINS[Network.DEVNET].USDT.type,
  COINS[Network.DEVNET].USDC.type,
];

const Farms: FC = () => {
  const t = useTranslations();
  const { register, setValue, control } = useForm<IFarmsForm>({
    defaultValues: {
      search: '',
      sortBy: FarmSortByFilter.Default,
      typeFilter: FarmTypeFilter.All,
      onlyFinished: false,
      onlyStaked: false,
    },
  });

  const { account } = useWeb3();
  const [isDesktop, setDesktop] = useState(false);

  const prices = useGetCoinsPrices(COIN_PRICES);

  const handleSetDesktop = useCallback(() => {
    const mediaIsDesktop = window.matchMedia('(min-width: 64em)').matches;
    setDesktop(mediaIsDesktop);
  }, []);

  const { data, isLoading, error } = useFarmListData({
    farms: FARMS,
    account,
  });

  useEventListener('resize', handleSetDesktop, true);

  if (error || prices.error)
    return <ErrorView message={error || prices.error} />;

  const parsedData = parseFarmListData(data, prices.data);

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
            control={control}
            register={register}
            setValue={setValue}
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
                control={control}
                data={parsedData}
                isDesktop={isDesktop}
                intUSDPrice={new BigNumber(34)}
                loading={isLoading || prices.isLoading || isEmpty(parsedData)}
              />
            </Box>
          </InfiniteScroll>
        </Box>
      </Container>
    </Box>
  );
};

export default Farms;
