import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const RewardDistributionList: FC = () => {
  const t = useTranslations();
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      color="textSoft"
      justifyContent="space-around"
      rowGap={['1.5rem', '1.5rem', '1.5rem', '5rem']}
      my={['unset', 'unset', 'unset', '5rem']}
      textAlign="left"
    >
      <Typography
        variant="medium"
        as="span"
        width={['100%', '100%', '100%', '47.5%']}
      >
        {t('liquidity.rewardDistribution.distributionList.option1')}
      </Typography>
      <Typography
        variant="medium"
        as="span"
        width={['100%', '100%', '100%', '47.5%']}
      >
        {t('liquidity.rewardDistribution.distributionList.option2')}
      </Typography>
    </Box>
  );
};

export default RewardDistributionList;
