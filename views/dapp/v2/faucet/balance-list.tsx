import { FC } from 'react';
import { v4 } from 'uuid';

import { FAUCET_TOKENS_V2 } from '@/constants';
import { Box } from '@/elements';
import { useNetwork, useWeb3 } from '@/hooks';
import { ZERO_BIG_NUMBER } from '@/utils';

import ItemBalance from './item-balance';

const DEFAULT_COIN = {
  type: 'Unknown',
  name: 'Unknown',
  totalBalance: ZERO_BIG_NUMBER,
  objects: [],
  id: 'Unknown',
};

const BalanceList: FC = () => {
  const { coinsMap } = useWeb3();

  const { network } = useNetwork();

  const tokens = FAUCET_TOKENS_V2[network];

  return (
    <Box>
      {tokens.map(({ symbol, type, decimals }) => {
        const coin = coinsMap[type]?.objects ? coinsMap[type] : DEFAULT_COIN;
        return (
          <ItemBalance
            type={type}
            key={v4()}
            symbol={symbol}
            decimals={decimals}
            totalBalance={coin.totalBalance}
            objectsData={coin.objects.map((elem) => ({
              id: elem.coinObjectId,
              balance: elem.balance.toString(),
            }))}
          />
        );
      })}
    </Box>
  );
};

export default BalanceList;
