import {
  Box,
  // ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { useQuerySenderEvents } from 'hooks/use-query-sender-events';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

// import { v4 } from 'uuid';
// import InfiniteScroll from '@/elements/infinite-scroll';
// import { useNetwork } from '@/hooks';
import { capitalize } from '@/utils';
import LoadingPage from '@/views/dapp/components/loading-page';
import ErrorPage from '@/views/dapp/v2/error';

// import DollarCoinIllustration from './empty-actions-illustation';
import { parseData } from './menu-profile.utils';
// import WalletActivityItem from './wallet-activity-item';
// import WalletTokenItem from './wallet-token-item';

const WalletTabs: FC = () => {
  const t = useTranslations();

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

  if (error || !senderEvents) return <ErrorPage />;

  const { hasNextPage, data, nextCursor } = senderEvents;

  console.log({ hasNextPage });

  const fetchMoreData = () => {
    setNextCursorParam(nextCursor);

    // data.length > 50 || (data.length === 0 && setHasMore(false));
    // setTimeout(() => {
    //   const result = data.concat(
    //     Array.from({ length: 5 }).map(() => TRANSACTIONS_DATA[0])
    //   );
    //   console.log('DONT_USE_THAT_OR_YOU_WILL_BE_FIRED: ', result);
    //   setData(result);
    // }, 3500);
  };

  const parsedData = parseData(data);

  console.log({ parsedData });

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
      {null}
    </Box>
  );
};

export default WalletTabs;
