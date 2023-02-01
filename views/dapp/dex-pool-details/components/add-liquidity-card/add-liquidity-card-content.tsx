import { useTranslations } from 'next-intl';
import { identity } from 'ramda';
import { FC } from 'react';
//import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { Box, Button } from '@/elements';
import { LineLoaderSVG } from '@/svg';
import { capitalize } from '@/utils';
import { WalletGuardButton } from '@/views/dapp/components';

import AddLiquidityButton from './add-liquidity-button';
import {
  AddLiquidityCardContentProps,
  INPUT_NAMES,
} from './add-liquidity-card.types';
import BalanceError from './balance-error';
import ErrorLiquidityMessage from './error-liquidity-message';

const AddLiquidityCardContent: FC<AddLiquidityCardContentProps> = ({
  tokens,
  fetchingInitialData,
  refetch,
  control,
  setValue,
  setLoading,
  loading,
}) => {
  const t = useTranslations();

  const needsAllowance = tokens
    .map(({ allowance }) => allowance == '0')
    .some(identity);

  return (
    <>
      <Box mb="L">{loading && <LineLoaderSVG width="100%" />}</Box>
      <ErrorLiquidityMessage control={control} />
      {tokens.map(({ symbol, balance }, index) => (
        <BalanceError
          key={v4()}
          name={INPUT_NAMES[index]}
          balance={balance}
          control={control}
          symbol={symbol}
        />
      ))}
      <WalletGuardButton>
        <Box
          display="grid"
          gridColumnGap="1rem"
          gridTemplateColumns={
            needsAllowance ? `repeat(${tokens.length}, 1fr)` : '1fr 1fr'
          }
        >
          {/*fetchingInitialData ? (
            <Box width="200%" mx="auto" cursor="pointer">
              <Skeleton height="2rem" width="100%" borderRadius="L" />
            </Box>
          ) : (
            tokens
              .filter((token) => token.symbol != '???')
              .map(({ symbol }) => (
                <Button
                  key={v4()}
                  width="100%"
                  variant="primary"
                  disabled={loading}
                  bg="bottomBackground"
                  hover={{ bg: 'accentActive' }}
                >
                  {capitalize(t('common.approve', { isLoading: 0 }))} {symbol}
                </Button>
              ))
              )*/}
          {!needsAllowance && (
            <>
              <Button
                width="100%"
                variant="primary"
                bg="bottomBackground"
                disabled={loading}
                hover={{ bg: 'disabled' }}
                onClick={() => {
                  setValue('token0Amount', '0.0');
                  setValue('token1Amount', '0.0');
                  setValue('locked', false);
                }}
              >
                {capitalize(t('common.reset'))}
              </Button>
              <AddLiquidityButton
                refetch={refetch}
                setLoading={setLoading}
                loading={loading || fetchingInitialData}
              />
            </>
          )}
        </Box>
      </WalletGuardButton>
    </>
  );
};

export default AddLiquidityCardContent;
