import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { useQuerySenderEvents } from 'hooks/use-query-sender-events';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import InfiniteScroll from '@/elements/infinite-scroll';
import { useWeb3 } from '@/hooks';
import LoadingPage from '@/views/dapp/components/loading-page';

import { WalletTabsContentProps } from '../menu-profile.types';
import { parseData } from '../menu-profile.utils';
import DollarCoinIllustration from './empty-actions-illustation';
import WalletActivityItem from './wallet-activity-item';
import WalletTokenItem from './wallet-token-item';

const WalletTabsContent: FC<WalletTabsContentProps> = ({ toggleTab }) => {
  const { coins } = useWeb3();

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
    return <DollarCoinIllustration />;
  }

  const { hasNextPage, data, nextCursor } = senderEvents;

  const fetchMoreData = () => {
    setNextCursorParam(nextCursor);
  };

  const parsedDataArr = parseData(data);

  const ActivitiesDataByDate = Object.entries(parsedDataArr).map(
    ([dateKey, items]) => {
      const match = dateKey.match(/(\d{4})(\d{2})/);
      if (match) {
        const [year, month] = match.slice(1);
        const header = `${new Date(`${month}`).toLocaleDateString('en-US', {
          month: 'long',
        })} • ${year}`;
        return { header, items: [...items] };
      }
      return { header: 'Invalid Date', items: [] };
    }
  );

  console.log(ActivitiesDataByDate);

  return (
    <Box overflow="auto" flex="1" width="100%">
      {toggleTab ? (
        <Box mt="l" id="divId" width="100%">
          {!ActivitiesDataByDate.length && <DollarCoinIllustration />}
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
                display={!ActivitiesDataByDate.length ? 'none' : 'flex'}
              >
                <ProgressIndicator variant="loading" />
              </Box>
            }
          >
            {ActivitiesDataByDate.map((group) => (
              <Box key={v4()}>
                <Typography
                  px="xl"
                  pb="xs"
                  color="outline"
                  variant="extraSmall"
                >
                  {group.header}
                </Typography>
                {group.items.map((props) => (
                  <WalletActivityItem
                    key={v4()}
                    id={props.txId}
                    description={props.type}
                  />
                ))}
              </Box>
            ))}
          </InfiniteScroll>
        </Box>
      ) : (
        <Box mt="l" id="divId" width="100%">
          {!coins.length && <DollarCoinIllustration />}
          <InfiniteScroll
            hasMore={hasNextPage}
            next={fetchMoreData}
            scrollableTarget="divId"
            dataLength={coins.length}
            loader={
              <Box
                mt="4xl"
                width="100%"
                justifyContent="center"
                display={!coins.length ? 'none' : 'flex'}
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
      )}
    </Box>
  );
};

export default WalletTabsContent;
