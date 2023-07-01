import { Network } from '@interest-protocol/sui-amm-sdk';
import {
  Box,
  Button,
  Motion,
  Slider,
  Tabs,
  TextField,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { not, pathOr } from 'ramda';
import { ChangeEvent, FC, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { COINS, DOUBLE_SCALAR } from '@/constants';
import { FixedPointMath, Rebase } from '@/lib';
import { min, parseInputEventToNumberString, ZERO_BIG_NUMBER } from '@/utils';
import {
  calculateIPXAPR,
  calculateNewBorrowLimitNewAmount,
} from '@/views/dapp/v2/lend/lend-tables/lend-table.utils';
import BorrowLimits from '@/views/dapp/v2/lend/lend-tables/market-table/modals/borrow-limits';

import { getSVG } from '../../market-table.utils';
import HeaderModal from '../header';
import {
  BorrowLimitsWrapperProps,
  BorrowMarketModalProps,
  SupplyBorrowForm,
} from '../modal.types';

const IPX_TOKEN = COINS[Network.DEVNET].IPX;

const BorrowLimitsWrapper: FC<BorrowLimitsWrapperProps> = ({
  valueForm,
  marketRecord,
  marketKey,
  userBalancesInUSD,
  isLoan,
  priceMap,
}) => {
  const value = useWatch({ control: valueForm.control, name: 'value' });

  return (
    <BorrowLimits
      {...calculateNewBorrowLimitNewAmount({
        marketRecord,
        marketKey,
        userBalancesInUSD,
        newAmount: +value,
        adding: !!isLoan,
        isLoan: true,
        priceMap,
      })}
    />
  );
};

const BorrowMarketModal: FC<BorrowMarketModalProps> = ({
  asset,
  closeModal,
  openRowMarketPreviewModal,
  marketKey,
  marketRecord,
  moneyMarketStorage,
  ipxPrice,
  priceMap,
  coinsMap,
  userBalancesInUSD,
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

  const [FromIcon, ToIcon] = [
    getSVG(asset.coin.token.type),
    getSVG(IPX_TOKEN.type),
  ];

  const ipxAPR = calculateIPXAPR({
    priceMap,
    isLoan: true,
    ipxPrice,
    marketKey,
    marketRecord,
    moneyMarketStorage,
  });

  const market = marketRecord[marketKey];

  const loanRebase = new Rebase(market.totalLoanBase, market.totalLoanElastic);

  const loanBalance = FixedPointMath.toNumber(
    loanRebase.toElastic(market.userPrincipal),
    market.decimals
  );

  const balance = FixedPointMath.toNumber(
    pathOr(ZERO_BIG_NUMBER, [marketKey, 'totalBalance'], coinsMap),
    marketRecord[marketKey].decimals
  );

  const maxBorrowAmount =
    userBalancesInUSD.totalCollateral * 0.9 - userBalancesInUSD.totalLoan;

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
      width="24.375rem"
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
    >
      <HeaderModal
        type={asset.coin.token.type}
        symbol={asset.coin.token.symbol}
        closeModal={closeModal}
        isCenter
      />
      <Box display="flex" justifyContent="center">
        <Tabs
          items={[t('common.v2.lend.borrow'), t('common.v2.lend.repay')]}
          onChangeTab={handleTab}
          defaultTabIndex={+!isLoan}
        />
      </Box>
      <Box p="xl" display="flex" flexDirection="column" pb="2rem">
        <Typography variant="extraSmall" textAlign="end" mb="2.313rem">
          {t('common.balance')}: {loanBalance}
        </Typography>
        <TextField
          disabled={
            isLoan ? maxBorrowAmount === 0 : market.userPrincipal.isZero()
          }
          {...borrowForm.register('value', {
            onChange: (v: ChangeEvent<HTMLInputElement>) => {
              const parsedValue = parseInputEventToNumberString(v);
              borrowForm.setValue(
                'isMax',
                isLoan
                  ? +parsedValue === maxBorrowAmount
                  : +parsedValue === balance
              );

              const value = +parseInputEventToNumberString(v);

              borrowForm.setValue(
                'value',
                (isLoan ? min(maxBorrowAmount, value) : value).toString()
              );
            },
          })}
          placeholder="0"
          fontSize="3.563rem"
          mb="1rem"
          fieldProps={{
            border: 'none',
            textAlign: 'center',
          }}
        />
        <Slider
          max={100}
          onChange={(value) => {
            borrowForm.setValue(
              'value',
              isLoan
                ? `${(value / 100) * maxBorrowAmount}`
                : `${(value / 100) * balance}`
            );
            borrowForm.setValue('isMax', value === 100);
          }}
        />
      </Box>
      <Box overflowX="hidden" overflowY="auto">
        <Box p="xl">
          <BorrowLimitsWrapper
            marketKey={marketKey}
            marketRecord={marketRecord}
            priceMap={priceMap}
            userBalancesInUSD={userBalancesInUSD}
            valueForm={borrowForm}
            isLoan={isLoan}
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
                {FromIcon}
                <Typography variant="medium" color="">
                  {asset.coin.token.symbol}{' '}
                  {' ' + t('common.v2.lend.supply') + ' '} APY
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography variant="medium" color={dark ? 'white' : 'black'}>
                  %{' '}
                  {marketRecord[marketKey].borrowRatePerYear
                    .multipliedBy(100)
                    .dividedBy(DOUBLE_SCALAR)
                    .toNumber()
                    .toFixed(2)}
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
                {ToIcon}
                <Typography variant="medium" color="">
                  {IPX_TOKEN.symbol} {' ' + t('common.v2.lend.rewards') + ' '}
                  APR
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography variant="medium" color={dark ? 'white' : 'black'}>
                  {ipxAPR}
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
              isLoan ? maxBorrowAmount === 0 : market.userPrincipal.isZero()
            }
          >
            {isLoan ? 'Preview Borrow' : 'Preview Repay'}
          </Button>
        </Box>
      </Box>
    </Motion>
  );
};

export default BorrowMarketModal;
