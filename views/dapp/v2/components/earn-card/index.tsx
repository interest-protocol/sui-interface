import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import BigCard from './big';
import MediumCard from './medium';

interface EarnCardProps {
  isPool?: boolean;
  isPosition?: boolean;
  type: 'normal' | 'preview';
  action?: 'add' | 'remove';
}

// const CARD_DATA = [
//   {
//     first: 'SUI',
//     second: 'BTCB',
//     apr: '304.66%',
//     fee: '0.00%',
//     liquidity: '10,123.01',
//     volume: '1,234.56',
//     allocation: '1.7 M',
//     tags: ['Volatile', 'Farm', 'Stable'],
//   },
// ];

const EarnCard: FC<EarnCardProps> = ({ type, isPool, isPosition, action }) => {
  return (
    <Box>
      {type === 'normal' ? (
        <MediumCard isPool={isPool} isPosition={isPosition} />
      ) : type === 'preview' ? (
        <BigCard action={action} />
      ) : null}
    </Box>
  );
};

export default EarnCard;