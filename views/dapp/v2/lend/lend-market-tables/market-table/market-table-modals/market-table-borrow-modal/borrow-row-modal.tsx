import { Network } from '@interest-protocol/sui-amm-sdk';
import {
  Box,
  Button,
  Motion,
  Slider,
  Tabs,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { not, pathOr } from 'ramda';
import { ChangeEvent, FC, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { COINS, DOUBLE_SCALAR } from '@/constants';
import { FixedPointMath } from '@/lib';
import {
  formatMoney,
  min,
  parseInputEventToNumberString,
  ZERO_BIG_NUMBER,
} from '@/utils';
import {
  calculateIPXAPR,
  calculateNewBorrowLimitNewAmount,
} from '@/views/dapp/v2/lend/lend-market-tables/lend-table.utils';
import BorrowLimits from '@/views/dapp/v2/lend/lend-market-tables/market-table/market-table-modals/borrow-limits';

import { MarketTableTokenIcon } from '../../market-table-token-icon';
import HeaderModal from '../header';
import MarketTableModalField from '../market-table-modal-field';
import { SupplyBorrowForm } from '../market-table-supply-modal/supply-modal.types';
import {
  BorrowLimitsWrapperProps,
  BorrowMarketModalProps,
} from '../modal.types';

const IPX_TOKEN = COINS[Network.DEVNET].IPX;

const BorrowLimitsWrapper: FC<BorrowLimitsWrapperProps> = ({
  isLoan,
  priceMap,
  valueForm,
  marketKey,
  marketRecord,
  userBalancesInUSD,
}) => {
  const value = useWatch({ control: valueForm.control, name: 'value' });

  const market = marketRecord[marketKey];

  const currentLoan = market.userPrincipal.isZero()
    ? 0
    : FixedPointMath.toNumber(
        market.totalLoanRebase.toElastic(market.userPrincipal),
        market.decimals
      );

  const repayAmount = +value > currentLoan ? currentLoan : +value;

  return (
    <BorrowLimits
      {...calculateNewBorrowLimitNewAmount({
        marketRecord,
        marketKey,
        userBalancesInUSD,
        newAmount: isLoan ? +value : repayAmount,
        adding: !!isLoan,
        isLoan: true,
        priceMap,
      })}
    />
  );
};

const BorrowMarketModal: FC<BorrowMarketModalProps> = ({
  asset,
  ipxPrice,
  priceMap,
  coinsMap,
  marketKey,
  closeModal,
  marketRecord,
  userBalancesInUSD,
  moneyMarketStorage,
  openRowMarketPreviewModal,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const [isLoan, setIsLoan] = useState(true);

  const borrowForm = useForm<SupplyBorrowForm>({
    defaultValues: {
      value: '0',
      isMax: false,
    },
  });

  const ipxAPR = calculateIPXAPR({
    priceMap,
    isLoan: true,
    ipxPrice,
    marketKey,
    marketRecord,
    moneyMarketStorage,
  });

  const market = marketRecord[marketKey];

  const loanBalance = FixedPointMath.toNumber(
    market.totalLoanRebase.toElastic(market.userPrincipal),
    market.decimals
  );

  const balance = FixedPointMath.toNumber(
    pathOr(ZERO_BIG_NUMBER, [marketKey, 'totalBalance'], coinsMap),
    marketRecord[marketKey].decimals
  );

  const maxBorrowAmount =
    userBalancesInUSD.totalCollateral * 0.9 - userBalancesInUSD.totalLoan;

  const maxBorrowInToken = maxBorrowAmount / priceMap[marketKey].price;

  const handleTab = () => {
    borrowForm.reset();
    setIsLoan(not);
  };

  const handlePreview = () => {
    openRowMarketPreviewModal({ isLoan, ...borrowForm.getValues() });
  };

  return (
    <Motion
      layout
      display="flex"
      maxHeight="90vh"
      maxWidth="26rem"
      overflow="hidden"
      color="onSurface"
      borderRadius="1rem"
      bg="surface.container"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
      transition={{ duration: 0.3 }}
      width={['90vw', '90vw', '90vw', '24.375rem']}
    >
      <HeaderModal
        type={asset.coin.token.type}
        symbol={asset.coin.token.symbol}
        closeModal={closeModal}
        isCenter
      />
      <Box display="flex" justifyContent="center">
        <Tabs
          items={[t('lend.borrow'), t('lend.repay')]}
          onChangeTab={handleTab}
          defaultTabIndex={+!isLoan}
        />
      </Box>
      <Box p="xl" display="flex" flexDirection="column" pb="2rem">
        {isLoan ? (
          <>
            <Typography
              mb="s"
              textAlign="end"
              variant="extraSmall"
              textTransform="capitalize"
            >
              {t('common.v2.wallet.name')}: {balance}
            </Typography>
            <Typography
              variant="extraSmall"
              textAlign="end"
              mb="2.313rem"
              textTransform="capitalize"
            >
              {t('common.plafond')}:{' '}
              {formatMoney(
                Number((+maxBorrowInToken.toFixed(6)).toPrecision())
              )}
            </Typography>
          </>
        ) : (
          <>
            <Typography
              mb="s"
              textAlign="end"
              variant="extraSmall"
              textTransform="capitalize"
            >
              {t('common.v2.wallet.name')}: {balance}
            </Typography>
            <Typography
              mb="2.313rem"
              textAlign="end"
              variant="extraSmall"
              textTransform="capitalize"
            >
              {t('lend.borrowed')}: {loanBalance}
            </Typography>
          </>
        )}
        <MarketTableModalField
          control={borrowForm.control}
          disabled={
            isLoan ? maxBorrowInToken === 0 : market.userPrincipal.isZero()
          }
          {...borrowForm.register('value', {
            onChange: (v: ChangeEvent<HTMLInputElement>) => {
              const parsedValue = parseInputEventToNumberString(v);
              borrowForm.setValue(
                'isMax',
                isLoan
                  ? +parsedValue === maxBorrowInToken
                  : +parsedValue === balance
              );

              const value = +parseInputEventToNumberString(v);

              borrowForm.setValue(
                'value',
                (isLoan ? min(maxBorrowInToken, value) : value).toString()
              );
            },
          })}
        />
        <Slider
          max={100}
          onChange={(value) => {
            borrowForm.setValue(
              'value',
              String(
                Number(
                  (isLoan
                    ? (value / 100) * maxBorrowInToken
                    : (value / 100) * balance
                  ).toFixed(6)
                ).toPrecision()
              )
            );
            borrowForm.setValue('isMax', value === 100);
          }}
        />
      </Box>
      <Box overflowX="hidden" overflowY="auto">
        <Box p="xl">
          <BorrowLimitsWrapper
            isLoan={isLoan}
            priceMap={priceMap}
            marketKey={marketKey}
            valueForm={borrowForm}
            marketRecord={marketRecord}
            userBalancesInUSD={userBalancesInUSD}
          />
        </Box>
        <Box mx="-0.5rem" px="xl">
          <Box bg="surface.containerLowest" borderRadius="m">
            <Box
              p="xl"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap="xl">
                <MarketTableTokenIcon type={asset.coin.token.type} />
                <Typography variant="medium" color="">
                  {asset.coin.token.symbol} {t('lend.borrow')} APY
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography variant="medium" color={dark ? 'white' : 'black'}>
                  {marketRecord[marketKey].borrowRatePerYear
                    .multipliedBy(100)
                    .dividedBy(DOUBLE_SCALAR)
                    .toNumber()
                    .toFixed(2) + ' %'}
                </Typography>
              </Box>
            </Box>
            <Box
              as="hr"
              mx="4xl"
              border="none"
              borderBottom="1px solid"
              borderColor="outline.outlineVariant"
            />
            <Box
              p="xl"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap="xl">
                <MarketTableTokenIcon type={IPX_TOKEN.type} />
                <Typography variant="medium" color="">
                  {IPX_TOKEN.symbol} {t('lend.rewards')} APR
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography variant="medium" color={dark ? 'white' : 'black'}>
                  {formatMoney(ipxAPR * 100) + ' %'}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          p="xl"
          bg="surface.containerLow"
          display="flex"
          gap="0.5rem"
          justifyContent="space-between"
        >
          <Button
            variant="filled"
            fontSize="s"
            width="100%"
            display="flex"
            justifyContent="center"
            onClick={() => handlePreview()}
            disabled={
              isLoan ? maxBorrowInToken === 0 : market.userPrincipal.isZero()
            }
          >
            {t('lend.modal.borrow.normal.button', {
              isBorrow: +isLoan,
            })}
          </Button>
        </Box>
      </Box>
    </Motion>
  );
};

export default BorrowMarketModal;
