import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { useQuerySenderEvents } from 'hooks/use-query-sender-events';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import InfiniteScroll from '@/elements/infinite-scroll';
import { useWeb3 } from '@/hooks';
import { capitalize } from '@/utils';
import LoadingPage from '@/views/dapp/components/loading-page';

import DollarCoinIllustration from './empty-actions-illustation';
import { parseData } from './menu-profile.utils';
import WalletActivityItem from './wallet-activity-item';
import WalletTokenItem from './wallet-token-item';

const WalletTabs: FC = () => {
  const t = useTranslations();
  const { coins } = useWeb3();
  const [toggle, setToggle] = useState(false);

  const [nextCursorParam, setNextCursorParam] = useState<{
    eventSeq: string;
    txDigest: string;
  } | null>(null);

  const {
    data: senderEvents,
    error,
    isLoading,
  } = useQuerySenderEvents({ cursor: nextCursorParam });

  if (isLoading) return <LoadingPage />;

  if (error || !senderEvents) {
    console.log(error, senderEvents);

    return <>Error</>;
  }

  const { hasNextPage, data, nextCursor } = senderEvents;

  console.log(coins);
  console.log({ hasNextPage });
  console.log(senderEvents);

  const fetchMoreData = () => {
    setNextCursorParam(nextCursor);
  };

  const parsedDataArr = parseData(data);

  console.log(parsedDataArr);

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
      {/* {toggle ? (
        <Box
          mt="4xl"
          id="divId"
          overflow="auto"
          height={['65rem', '65rem', '65rem', '25rem']}
        >
          {!parsedDataArr.length && <DollarCoinIllustration />}
          <InfiniteScroll
            hasMore={hasNextPage}
            next={fetchMoreData}
            scrollableTarget="divId"
            dataLength={parsedDataArr.length}
            loader={
              <Box
                mt="4xl"
                width="100%"
                justifyContent="center"
                display={!parsedDataArr.length ? 'none' : 'flex'}
              >
                <ProgressIndicator variant="loading" />
              </Box>
            }
          >
            {parsedDataArr.map(({ txId, type }) => (
              <WalletActivityItem id={txId} key={v4()} description={type} />
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
            hasMore={hasNextPage}
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
            {coins.map(({ totalBalance, objects, symbol }) => (
              <WalletTokenItem
                key={v4()}
                symbol={symbol}
                totalBalance={totalBalance}
                balance={objects[0]?.balance}
              />
            ))}
          </InfiniteScroll>
        </Box>
      )} */}
    </Box>
  );
};

export default WalletTabs;
