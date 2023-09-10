import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import IconValue from './icon-value';
import Line from './line';
import { IconValueProps, TransactionOverviewProps } from './overview.type';

const Overview: FC<TransactionOverviewProps> = ({
  stakeOrBurn,
  receive,
  depositFee,
  rewards,
  isStake,
}) => {
  const t = useTranslations();

  return (
    <Box>
      <Typography
        variant="extraSmall"
        fontSize="0.688rem"
        color="onSurface"
        mt="l"
        mb="m"
        textTransform="uppercase"
      >
        {t('lsd.transactionOverview.title')}
      </Typography>
      <Box
        bg="surface.containerHigh"
        p="l"
        borderRadius="0.25rem"
        display="flex"
        flexDirection="column"
        gap="0.5rem"
      >
        <Line
          description={t('lsd.transactionOverview.stakeOrBurn', {
            isStake: +isStake,
          })}
          value={
            typeof stakeOrBurn == 'string' ? (
              stakeOrBurn
            ) : (
              <IconValue
                symbol={(stakeOrBurn as IconValueProps).symbol}
                value={(stakeOrBurn as IconValueProps).value}
              />
            )
          }
        />
        <Line
          description={t('lsd.transactionOverview.receive', {
            isStake: +isStake,
          })}
          value={
            typeof receive == 'string' ? (
              receive
            ) : (
              <IconValue
                symbol={(receive as IconValueProps).symbol}
                value={(receive as IconValueProps).value}
              />
            )
          }
        />
        <Line
          description={t('lsd.modal.preview.depositFee')}
          value={depositFee}
        />
        <Line description={t('lsd.modal.preview.rewards')} value={rewards} />
      </Box>
    </Box>
  );
};

export default Overview;
