import { v4 } from 'uuid';

import { FAUCET_TOKENS, Network } from '@/constants';
import { Box } from '@/elements';
import { useWeb3 } from '@/hooks';
import { ZERO_BIG_NUMBER } from '@/utils';

import ItemBalance from './item-balance';

const tokens = FAUCET_TOKENS[Network.DEVNET];

const DEFAULT_COIN = {
  type: 'Unknown',
  name: 'Unknown',
  totalBalance: ZERO_BIG_NUMBER,
  objects: [],
  id: 'Unknown',
};

const BalanceList = () => {
  const { coinsMap } = useWeb3();

  return (
    <Box display="grid" overflowY="auto" gridGap="0.25rem" alignItems="start">
      {tokens.map(({ symbol, Icon, type, decimals }) => {
        const SVG = Icon;
        const coin = coinsMap[type]?.objects ? coinsMap[type] : DEFAULT_COIN;
        return (
          <ItemBalance
            SVG={SVG}
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
