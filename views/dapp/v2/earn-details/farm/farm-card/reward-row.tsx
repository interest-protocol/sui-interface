import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import TokenIcon from '../../components/row-token-field/token-icon';
import { RewardRowProps } from '../../earn.types';

const RewardRow: FC<RewardRowProps> = ({
  coin,
  amount,
  currentAmount,
  balance,
}) => {
  const t = useTranslations();
  return (
    <Box pt="1.5rem" display="flex" flexDirection="column" gap="0.5rem">
      <Typography variant="medium" color="onSurface">
        {t('earn.previewInformations.balance') + ' ' + balance}
      </Typography>
      <Box display="flex" justifyContent="space-between" mb="3.25rem">
        <Box
          display="flex"
          gap="0.75rem"
          alignItems="center"
          width="fill-available"
          flexWrap="wrap"
        >
          <TokenIcon type={coin.type} />
          <Typography variant="medium" color="white">
            {coin.symbol} Token
          </Typography>
        </Box>
        <Box width="100%">
          <Typography variant="medium" textAlign="end" color="white">
            {currentAmount}
          </Typography>
          <Typography variant="medium" textAlign="end" color="#ACAAAF">
            {amount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RewardRow;
