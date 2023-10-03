import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { FixedPointMath, TOKEN_SYMBOL } from '@/lib';
import { useLstData } from '@/views/dapp/v2/lst/lst.hooks';

import IconValue from './icon-value';
import Line from './line';
import { TransactionOverviewProps } from './overview.type';

const Overview: FC<TransactionOverviewProps> = ({ form, isStake }) => {
  const t = useTranslations();
  const { lstStorage } = useLstData();

  const amount = useWatch({ control: form.control, name: 'amount' });

  const receiveValue =
    isStake && lstStorage.pool.elastic.isZero()
      ? amount
      : isStake
      ? FixedPointMath.toNumber(
          lstStorage.pool.toBase(FixedPointMath.toBigNumber(amount))
        )
      : FixedPointMath.toNumber(
          lstStorage.pool.toElastic(FixedPointMath.toBigNumber(amount))
        );

  const stakeOrBurn = isStake
    ? { symbol: TOKEN_SYMBOL.SUI, value: amount }
    : { symbol: TOKEN_SYMBOL.ISUI, value: amount };

  const receive = !isStake
    ? { symbol: TOKEN_SYMBOL.SUI, value: receiveValue }
    : { symbol: TOKEN_SYMBOL.ISUI, value: receiveValue };

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
        {t('lst.transactionOverview.title')}
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
          description={t('lst.transactionOverview.stakeOrBurn', {
            isStake: +isStake,
          })}
          value={<IconValue {...stakeOrBurn} />}
        />
        <Line
          description={t('lst.transactionOverview.receive', {
            isStake: +isStake,
          })}
          value={<IconValue {...receive} />}
        />
        <Line description={t('lst.modal.preview.depositFee')} value="0%" />
        <Line description={t('lst.modal.preview.rewards')} value="2.5%" />
      </Box>
    </Box>
  );
};

export default Overview;
