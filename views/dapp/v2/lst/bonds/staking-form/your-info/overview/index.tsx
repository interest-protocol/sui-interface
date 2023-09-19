import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { TOKEN_SYMBOL } from '@/lib';

import IconValue from './icon-value';
import Line from './line';
import { IconValueProps, TransactionOverviewProps } from './overview.type';

const Overview: FC<TransactionOverviewProps> = ({
  form,
  isStake,
  unstakeAmountType,
}) => {
  const t = useTranslations();

  const amount = useWatch({ control: form.control, name: 'amount' });

  const stakeOrBurnList = (
    isStake
      ? [{ symbol: TOKEN_SYMBOL.SUI, value: amount }]
      : unstakeAmountType.map((amountType) => ({
          symbol: amountType,
          value: '',
        }))
  ) as ReadonlyArray<IconValueProps>;

  const receiveList = (
    isStake
      ? unstakeAmountType.map((amountType) => ({
          symbol: amountType,
          value: '',
        }))
      : [{ symbol: TOKEN_SYMBOL.SUI, value: '' }]
  ) as ReadonlyArray<IconValueProps>;

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
        {stakeOrBurnList.map((stakeOrBurn) => (
          <Line
            description={t('lst.transactionOverview.stakeOrBurn', {
              isStake: +isStake,
            })}
            value={<IconValue {...stakeOrBurn} />}
            key={v4()}
          />
        ))}
        {receiveList.map((receive) => (
          <Line
            description={t('lst.transactionOverview.receive', {
              isStake: +isStake,
            })}
            value={<IconValue {...receive} />}
            key={v4()}
          />
        ))}
        <Line description={t('lst.modal.preview.depositFee')} value="0%" />
        <Line description={t('lst.modal.preview.rewards')} value="2.5%" />
      </Box>
    </Box>
  );
};

export default Overview;
