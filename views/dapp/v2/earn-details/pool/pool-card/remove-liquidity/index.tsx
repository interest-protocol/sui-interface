import { Network } from '@interest-protocol/sui-amm-sdk';
import { FC } from 'react';

import { COINS } from '@/constants';

import RowTokenField from '../../../components/row-token-field';
import LiquidityCardWrapper from '../wrapper';
import TokenDescription from './token-description';

const RemoveLiquidityCard: FC = () => {
  return (
    <LiquidityCardWrapper type="remove" disabled>
      <RowTokenField
        balance="0.12345"
        amount="0.345"
        coins={[COINS[Network.TESTNET].ETH, COINS[Network.TESTNET].BNB]}
      />
      <TokenDescription coin={COINS[Network.TESTNET].BNB} amount="0.432" />
      <TokenDescription coin={COINS[Network.TESTNET].ETH} amount="0.432" />
    </LiquidityCardWrapper>
  );
};

export default RemoveLiquidityCard;
