import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Container } from '@/components';
import { FARMS } from '@/constants';
import { Box, InfiniteScroll, Typography } from '@/elements';
import { useWeb3 } from '@/hooks';
import useEventListener from '@/hooks/use-event-listener';
import { LoadingSVG } from '@/svg';
import { noop } from '@/utils';

import ErrorView from '../components/error';
import FarmsFilters from './components/farms-filters';
import FarmsTable from './components/farms-table';
import { useFarmListData } from './farms.hooks';
import { FarmSortByFilter, FarmTypeFilter, IFarmsForm } from './farms.types';
import { parseFarmListData } from './farms.utils';

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

  const handleSetDesktop = useCallback(() => {
    const mediaIsDesktop = window.matchMedia('(min-width: 64em)').matches;
    setDesktop(mediaIsDesktop);
  }, []);

  const { data, isLoading, error } = useFarmListData({
    farms: FARMS,
    account,
  });

  useEventListener('resize', handleSetDesktop, true);

  if (error) return <ErrorView message={error} />;

  const parsedData = parseFarmListData(data as any[]);

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
            dataLength={parsedData.length}
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
                loading={isLoading}
                farms={parsedData!}
                isDesktop={isDesktop}
                intUSDPrice={new BigNumber(34)}
              />
            </Box>
          </InfiniteScroll>
        </Box>
      </Container>
    </Box>
  );
};

export default Farms;
