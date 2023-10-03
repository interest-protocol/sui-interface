import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useBondsContext } from '../../../bonds.hooks';
import { OverviewProps } from './overview.types';

const Overview: FC<OverviewProps> = ({ fee }) => {
  const t = useTranslations();

  const { form } = useBondsContext();

  const type = form.getValues('type');
  const rewards = undefined; // TODO: calculate rewards

  return (
    <Box>
      <Typography
        variant="medium"
        fontSize={['0.588rem', '0.588rem', '0.588rem', '0.688rem']}
        color="onSurface"
        lineHeight="1rem"
        opacity={0.6}
        width="100%"
        mb="0.5rem"
        textTransform="uppercase"
      >
        {t('lst.transactionOverview.title')}
      </Typography>
      <Box
        bg="surface.containerHigh"
        p="l"
        display="flex"
        flexDirection="column"
        gap="0.5rem"
        borderRadius="0.5rem"
        mb="3xl"
      >
        <Box key={v4()} display="flex" justifyContent="space-between">
          <Typography variant="small" fontSize="0.75rem" color="onSurface">
            {t('lst.bonds.transactionSummary.depositFee')}
          </Typography>
          <Typography
            variant="small"
            fontSize="0.75rem"
            color="onSurface"
            fontWeight="700"
          >
            {fee}
          </Typography>
        </Box>
        {type === 'stake' && (
          <Box key={v4()} display="flex" justifyContent="space-between">
            <Typography variant="small" fontSize="0.75rem" color="onSurface">
              {t('lst.bonds.transactionSummary.estimatedRewards')}
            </Typography>
            <Typography
              variant="small"
              fontWeight="700"
              color="onSurface"
              fontSize="0.75rem"
            >
              {rewards ?? '--'}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Overview;
