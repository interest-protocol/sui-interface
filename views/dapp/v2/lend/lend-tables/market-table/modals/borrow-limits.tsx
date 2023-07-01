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
        description="lend.firstSection.currentBorrowLimit"
        value={formatDollars(currentBorrowLimit)}
      />
      <LineModal
        description="lend.firstSection.borrowLimitUsed"
        value={`${formatMoney(currentBorrowLimitPercentage)}%`}
      />
      <Box p="1rem" display="flex" justifyContent="space-between">
        <ProgressIndicator value={currentBorrowLimitPercentage} variant="bar" />
      </Box>
      <LineModal
        description="lend.firstSection.newBorrowLimit"
        value={formatDollars(newBorrowLimit)}
      />
      <LineModal
        description="lend.firstSection.borrowLimitUsed"
        value={`${formatMoney(newBorrowLimitPercentage)}%`}
      />
      <Box p="1rem" display="flex" justifyContent="space-between">
        <ProgressIndicator value={newBorrowLimitPercentage} variant="bar" />
      </Box>
    </>
  );
};

export default BorrowLimits;
