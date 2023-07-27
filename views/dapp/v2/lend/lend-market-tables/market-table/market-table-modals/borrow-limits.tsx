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
    <Box display="flex" flexDirection="column" gap="l">
      <Box>
        <LineModal
          description="lend.overview.currentBorrowLimit"
          value={formatDollars(currentBorrowLimit)}
        />
        <LineModal
          description="lend.overview.borrowLimitUsed"
          value={`${formatMoney(currentBorrowLimitPercentage, 6)}%`}
        />
        <Box px="xs" py="s" display="flex" justifyContent="space-between">
          <ProgressIndicator
            value={currentBorrowLimitPercentage}
            variant="bar"
          />
        </Box>
      </Box>
      <Box>
        <LineModal
          description="lend.overview.newBorrowLimit"
          value={formatDollars(newBorrowLimit)}
        />
        <LineModal
          description="lend.overview.borrowLimitUsed"
          value={`${formatMoney(newBorrowLimitPercentage, 6)}%`}
        />
        <Box px="xs" py="s" display="flex" justifyContent="space-between">
          <ProgressIndicator value={newBorrowLimitPercentage} variant="bar" />
        </Box>
      </Box>
    </Box>
  );
};

export default BorrowLimits;
