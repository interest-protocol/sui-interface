import { Network } from '@interest-protocol/sui-amm-sdk';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { COINS } from '@/constants';
import { ISUI_COIN_TYPE } from '@/constants/lst';
import { useWeb3 } from '@/hooks';

import TokensTableBodyRow from './tokens-table-body-row';

const TOKENS = [COINS[Network.TESTNET].SUI.type, ISUI_COIN_TYPE];

const TokensTableBody: FC = () => {
  const { isFetchingCoinBalances } = useWeb3();

  return !isFetchingCoinBalances ? (
    <>
      {TOKENS.map((type, index) => (
        <TokensTableBodyRow index={index} key={v4()} type={type} />
      ))}
    </>
  ) : (
    <>
      <Skeleton height="2rem" width="100%" />
      <Skeleton height="2rem" width="100%" style={{ marginTop: '1rem' }} />
    </>
  );
};

export default TokensTableBody;
