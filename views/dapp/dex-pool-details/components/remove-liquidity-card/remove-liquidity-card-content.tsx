import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { propOr } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import { Box, Button } from '@/elements';
import { useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/sdk';
import { capitalize } from '@/utils';
import { WalletGuardButton } from '@/views/dapp/components';

import LinearLoader from './linear-loader';
import RemoveLiquidityButton from './remove-liquidity-button';
import { useGetRemoveLiquidityAmounts } from './remove-liquidity-card.hooks';
import { RemoveLiquidityCardContentProps } from './remove-liquidity-card.types';
import TokenAmount from './token-amount';

const RemoveLiquidityCardContent: FC<RemoveLiquidityCardContentProps> = ({
  tokens,
  lpToken,
  refetch,
  getLpAmount,
  resetLpAmount,
  lpAmountControl,
}) => {
  const t = useTranslations();
  const { account } = useWeb3();

  const [lpAmount] = useDebounce(
    useWatch({ control: lpAmountControl, name: 'lpAmount' }),
    1000
  );

  const [token0, token1] = tokens;

  const objectIds = lpToken?.objects?.map((elem) => elem.coinObjectId) || [];

  const { isLoading, data, error } = useGetRemoveLiquidityAmounts({
    lpAmount,
    objectIds,
    token0Type: token0.type,
    token1Type: token1.type,
    account: account,
  });

  const amount0 = new BigNumber(propOr(0, token0.type || '', data));
  const amount1 = new BigNumber(propOr(0, token1.type || '', data));

  if (error) return <>error</>;

  return (
    <>
      <LinearLoader loading={isLoading} />
      <Box my="L" rowGap="1rem" display="grid" gridTemplateColumns="1fr">
        <TokenAmount
          Icon={tokens[0].Icon}
          symbol={tokens[0].symbol}
          amount={FixedPointMath.toNumber(amount0, token0.decimals).toString()}
        />
        <TokenAmount
          Icon={tokens[1].Icon}
          symbol={tokens[1].symbol}
          amount={FixedPointMath.toNumber(amount1, token1.decimals).toString()}
        />
      </Box>
      <WalletGuardButton>
        <Box
          mt="L"
          display="grid"
          gridColumnGap="1rem"
          gridTemplateColumns="1fr 1fr"
        >
          <Button width="100%" variant="neutral" onClick={resetLpAmount}>
            {capitalize(t('common.reset'))}
          </Button>
          <RemoveLiquidityButton
            getLpAmount={getLpAmount}
            token0Amount={amount0}
            token1Amount={amount1}
            refetch={refetch}
            isFetching={isLoading}
            objectIds={objectIds}
            token0={token0}
            token1={token1}
            resetLpAmount={resetLpAmount}
          />
        </Box>
      </WalletGuardButton>
    </>
  );
};

export default RemoveLiquidityCardContent;
