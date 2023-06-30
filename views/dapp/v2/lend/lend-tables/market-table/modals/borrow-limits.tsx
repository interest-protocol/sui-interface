import { Box, ProgressIndicator } from '@interest-protocol/ui-kit';
import { FC } from 'react';

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
        description="common.v2.lend.firstSection.currentBorrowLimit"
        value={`$ ${currentBorrowLimit.toFixed(2)}`}
      />
      <LineModal
        description="common.v2.lend.firstSection.borrowLimitUsed"
        value={`${currentBorrowLimitPercentage.toFixed(2)} %`}
      />
      <Box p="1rem" display="flex" justifyContent="space-between">
        <ProgressIndicator value={currentBorrowLimitPercentage} variant="bar" />
      </Box>
      <LineModal
        description="common.v2.lend.firstSection.newBorrowLimit"
        value={`$ ${newBorrowLimit.toFixed(2)}`}
      />
      <LineModal
        description="common.v2.lend.firstSection.borrowLimitUsed"
        value={`${newBorrowLimitPercentage.toFixed(2)} %`}
      />
      <Box p="1rem" display="flex" justifyContent="space-between">
        <ProgressIndicator value={newBorrowLimitPercentage} variant="bar" />
      </Box>
    </>
  );
};

export default BorrowLimits;
