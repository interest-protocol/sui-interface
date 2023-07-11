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

const EarnCard: FC<EarnCardProps> = ({ type, isPool, isPosition, action }) => {
  return (
    <Box width="100%">
      {type === 'normal' ? (
        <MediumCard isPool={isPool} isPosition={isPosition} />
      ) : type === 'preview' ? (
        <BigCard action={action} />
      ) : null}
    </Box>
  );
};

export default EarnCard;
