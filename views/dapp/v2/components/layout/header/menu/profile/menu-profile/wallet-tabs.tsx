import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { useQuerySenderEvents } from 'hooks/use-query-sender-events';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import InfiniteScroll from '@/elements/infinite-scroll';
import { capitalize } from '@/utils';

import DollarCoinIllustration from './empty-actions-illustation';
import { TransactionDataProps, TRANSACTIONS_DATA } from './transactions.data';
import WalletActivityItem from './wallet-activity-item';
import WalletTokenItem from './wallet-token-item';

const WalletTabs: FC = () => {
  const t = useTranslations();
  const [toggle, setToggle] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] =
    useState<ReadonlyArray<TransactionDataProps>>(TRANSACTIONS_DATA);

  useQuerySenderEvents();

  const fetchMoreData = () => {
    data.length > 50 || (data.length === 0 && setHasMore(false));

    setTimeout(() => {
      const result = data.concat(
        Array.from({ length: 5 }).map(() => TRANSACTIONS_DATA[0])
      );
      console.log('DONT_USE_THAT_OR_YOU_WILL_BE_FIRED: ', result);
      setData(result);
    }, 3500);
  };

  return (
    <Box pb="3.125rem">
      <Box
        mx="auto"
        p=".125rem"
        display="flex"
        cursor="pointer"
        borderRadius="full"
        bg="inverseSurface"
        width="calc(100% - 1.5rem)"
        justifyContent="space-between"
      >
        <Box
          flex="1"
          p=".5rem 1.5rem"
          borderRadius="full"
          onClick={() => setToggle(false)}
          bg={toggle ? 'transparent' : 'surface'}
          color={!toggle ? 'onSurface' : 'inverseOnSurface'}
        >
          <Typography textAlign="center" variant="small">
            Token
          </Typography>
        </Box>
        <Box
          flex="1"
          p=".5rem 1.5rem"
          borderRadius="full"
          onClick={() => setToggle(true)}
          bg={toggle ? 'surface' : 'transparent'}
          color={toggle ? 'onSurface' : 'inverseOnSurface'}
        >
          <Typography textAlign="center" variant="small">
            {capitalize(t('common.v2.wallet.activity'))}
          </Typography>
        </Box>
      </Box>
      {toggle ? (
        <Box
          mt="4xl"
          id="divId"
          overflow="auto"
          height={['65rem', '65rem', '65rem', '25rem']}
        >
          {!data.length && <DollarCoinIllustration />}
          <InfiniteScroll
            hasMore={hasMore}
            next={fetchMoreData}
            scrollableTarget="divId"
            dataLength={data.length}
            loader={
              <Box
                mt="4xl"
                width="100%"
                justifyContent="center"
                display={!data.length ? 'none' : 'flex'}
              >
                <ProgressIndicator variant="loading" />
              </Box>
            }
          >
            {data.map((transaction) => (
              <WalletActivityItem {...transaction} key={v4()} />
            ))}
          </InfiniteScroll>
        </Box>
      ) : (
        <Box
          mt="4xl"
          id="divId"
          overflow="auto"
          height={['65rem', '65rem', '65rem', '25rem']}
        >
          {!data.length && <DollarCoinIllustration />}
          <InfiniteScroll
            hasMore={hasMore}
            next={fetchMoreData}
            scrollableTarget="divId"
            dataLength={data.length}
            loader={
              <Box
                mt="4xl"
                width="100%"
                justifyContent="center"
                display={!data.length ? 'none' : 'flex'}
              >
                <ProgressIndicator variant="loading" />
              </Box>
            }
          >
            {data.map((transaction) => (
              <WalletTokenItem {...transaction} key={v4()} />
            ))}
          </InfiniteScroll>
        </Box>
      )}
    </Box>
  );
};

export default WalletTabs;
