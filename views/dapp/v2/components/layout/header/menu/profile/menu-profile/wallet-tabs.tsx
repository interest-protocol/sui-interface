import {
  Box,
  Motion,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import InfiniteScroll from '@/elements/infinite-scroll';

import DollarCoinIllustration from './empty-actions-illustation';
import { TransactionDataProps, TRANSACTIONS_DATA } from './transactions.data';
import WalletTabItem from './wallet-tab-item';

const WalletTabs: FC = () => {
  const [toggle, setToggle] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] =
    useState<ReadonlyArray<TransactionDataProps>>(TRANSACTIONS_DATA);

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
    <Box pb="50px">
      <Box
        p=".125rem"
        width="100%"
        display="flex"
        cursor="pointer"
        borderRadius="full"
        bg="inverseSurface"
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
        <Motion
          flex="1"
          p=".5rem 1.5rem"
          borderRadius="full"
          onClick={() => setToggle(true)}
          bg={toggle ? 'surface' : 'transparent'}
          color={toggle ? 'onSurface' : 'inverseOnSurface'}
        >
          <Typography textAlign="center" variant="small">
            Activity
          </Typography>
        </Motion>
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
            pullDownToRefresh={false}
            scrollableTarget="divId"
            dataLength={data.length}
            loader={
              <Box
                display={!data.length ? 'none' : 'flex'}
                width="100%"
                mt="4xl"
                justifyContent="center"
              >
                <ProgressIndicator variant="loading" />
              </Box>
            }
          >
            {data.map((transaction) => (
              <WalletTabItem {...transaction} key={v4()} />
            ))}
          </InfiniteScroll>
        </Box>
      ) : (
        <Box overflow="auto" id="divId" height="25rem" mt="4xl">
          {!data.length && <DollarCoinIllustration />}
          <InfiniteScroll
            hasMore={hasMore}
            next={fetchMoreData}
            scrollableTarget="divId"
            dataLength={data.length}
            loader={
              <Box
                display={!data.length ? 'none' : 'flex'}
                width="100%"
                mt="4xl"
                justifyContent="center"
              >
                <ProgressIndicator variant="loading" />
              </Box>
            }
          >
            {data.map((transaction) => (
              <WalletTabItem {...transaction} key={v4()} />
            ))}
          </InfiniteScroll>
        </Box>
      )}
    </Box>
  );
};

export default WalletTabs;
