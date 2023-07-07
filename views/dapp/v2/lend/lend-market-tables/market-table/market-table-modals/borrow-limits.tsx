import { Box, ProgressIndicator } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { formatDollars, formatMoney } from '@/utils';

import LineModal from './lines';
import { BorrowLimitProps } from './modal.types';

const BorrowLimits: FC<BorrowLimitProps> = ({
  currentBorrowLimit,
  currentBorrowLimitPercentage,
  newBorrowLimit,
  newBorrowLimitPercentage,
}) => {
  return (
    <>
      <LineModal
        description="lend.overview.currentBorrowLimit"
        value={formatDollars(currentBorrowLimit)}
      />
      <LineModal
        description="lend.overview.borrowLimitUsed"
        value={`${formatMoney(currentBorrowLimitPercentage || 0, 6)}%`}
      />
      <Box p="1rem" display="flex" justifyContent="space-between">
        <ProgressIndicator
          value={currentBorrowLimitPercentage || 0}
          variant="bar"
        />
      </Box>
      <LineModal
        description="lend.overview.newBorrowLimit"
        value={formatDollars(newBorrowLimit || 0)}
      />
      <LineModal
        description="lend.overview.borrowLimitUsed"
        value={`${formatMoney(newBorrowLimitPercentage || 0, 6)}%`}
      />
      <Box p="1rem" display="flex" justifyContent="space-between">
        <ProgressIndicator value={newBorrowLimitPercentage} variant="bar" />
      </Box>
    </>
  );
};

export default BorrowLimits;
