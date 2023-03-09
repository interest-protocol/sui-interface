import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Box, InputBalance, Typography } from '@/elements';
import { getSafeTotalBalance } from '@/utils';

import { RemoveLiquidityCardProps } from './remove-liquidity-card.types';
import RemoveLiquidityCardContent from './remove-liquidity-card-content';

const RemoveLiquidityCard: FC<RemoveLiquidityCardProps> = ({
  tokens,
  lpToken,
  refetch,
  isStable,
  formRemoveLiquidity,
  loadingRemoveLiquidityState,
}) => {
  const t = useTranslations();

  const resetLpAmount = () => formRemoveLiquidity.setValue('lpAmount', '0');
  const getLpAmount = () => formRemoveLiquidity.getValues('lpAmount');
  const lpBalance = getSafeTotalBalance(lpToken);

  return (
    <Box bg="foreground" p="L" borderRadius="M" width="100%">
      <Box mb="L">
        <Typography
          width="100%"
          fontSize="S"
          variant="normal"
          textTransform="uppercase"
        >
          {t('dexPoolPair.removeLiquidity')}
        </Typography>
      </Box>
      <InputBalance
        name="lpAmount"
        register={formRemoveLiquidity.register}
        setValue={formRemoveLiquidity.setValue}
        balance={lpBalance.decimalPlaces(0, BigNumber.ROUND_DOWN).toString()}
        max={lpBalance.decimalPlaces(0, BigNumber.ROUND_DOWN).toString()}
        disabled={lpBalance.isZero()}
        Prefix={
          <Box display="flex" width="5rem" ml="S">
            <Box display="flex" alignItems="center" justifyContent="center">
              {tokens[0].Icon}
              {tokens[1].Icon}
            </Box>
            <Typography variant="normal" ml="M">
              LP
            </Typography>
          </Box>
        }
        isLarge={false}
        buttonMaxPosition="left"
      />
      <RemoveLiquidityCardContent
        tokens={tokens}
        lpToken={lpToken}
        refetch={refetch}
        isStable={isStable}
        lpAmountControl={formRemoveLiquidity.control}
        getLpAmount={getLpAmount}
        resetLpAmount={resetLpAmount}
        loadingRemoveLiquidityState={loadingRemoveLiquidityState}
      />
    </Box>
  );
};

export default RemoveLiquidityCard;
