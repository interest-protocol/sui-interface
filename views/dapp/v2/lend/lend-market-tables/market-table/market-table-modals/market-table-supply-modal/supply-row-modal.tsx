import { Network } from '@interest-protocol/sui-amm-sdk';
import {
  Box,
  Button,
  Motion,
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
import { PercentageButton } from '@/views/dapp/v2/components';
import BorrowLimits from '@/views/dapp/v2/lend/lend-market-tables/market-table/market-table-modals/borrow-limits';

import {
  calculateIPXAPR,
  calculateNewDepositBorrowLimit,
  calculateNewWithdrawLimitNewAmount,
} from '../../../lend-table.utils';
import { MarketTableTokenIcon } from '../../market-table-token-icon';
import HeaderModal from '../header';
import MarketTableModalField from '../market-table-modal-field';
import { SupplyBorrowForm } from '../modal.types';
import {
  BorrowLimitsWrapperProps,
  SupplyMarketModalProps,
} from './supply-modal.types';

const IPX_TOKEN = COINS[Network.DEVNET].IPX;

const BorrowLimitsWrapper: FC<BorrowLimitsWrapperProps> = ({
  valueForm,
  marketRecord,
  marketKey,
  userBalancesInUSD,
  isDeposit,
  priceMap,
}) => {
  const value = useWatch({ control: valueForm.control, name: 'value' });

  return isDeposit ? (
    <BorrowLimits
      {...calculateNewDepositBorrowLimit({
        marketRecord,
        marketKey,
        userBalancesInUSD,
        newAmount: +value,
        priceMap,
      })}
    />
  ) : (
    <BorrowLimits
      {...calculateNewWithdrawLimitNewAmount({
        marketRecord,
        marketKey,
        userBalancesInUSD,
        newAmount: +value,
        priceMap,
      })}
    />
  );
};

const SupplyMarketModal: FC<SupplyMarketModalProps> = ({
  asset,
  closeModal,
  openRowMarketPreviewModal,
  marketKey,
  marketRecord,
  priceMap,
  userBalancesInUSD,
  coinsMap,
  ipxPrice,
  moneyMarketStorage,
  isDeposit: _isDeposit,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const supplyForm = useForm<SupplyBorrowForm>({
    defaultValues: {
      value: '',
      isMax: false,
      originalValue: '',
    },
  });

  const [isDeposit, setIsDeposit] = useState(_isDeposit);

  const ipxAPR = calculateIPXAPR({
    priceMap,
    isLoan: false,
    ipxPrice,
    marketKey,
    marketRecord,
    moneyMarketStorage,
  });

  const handleTab = () => {
    supplyForm.reset();
    setIsDeposit(not);
  };

  const handlePreview = () => {
    openRowMarketPreviewModal({
      isDeposit,
      ...supplyForm.getValues(),
    });
  };

  const market = marketRecord[marketKey];

  const suppliedAmount = FixedPointMath.toNumber(
    market.totalCollateralRebase.toElastic(market.userShares),
    market.decimals
  );

  const balance = FixedPointMath.toNumber(
    pathOr(ZERO_BIG_NUMBER, [marketKey, 'totalBalance'], coinsMap),
    marketRecord[marketKey].decimals
  );

  const coinPrice = priceMap[marketKey].price;

  const loanInUSD = userBalancesInUSD.totalLoan / 0.9;

  const extraCollateralInUSD = market.collateralEnabled
    ? userBalancesInUSD.totalCollateral - loanInUSD
    : 0;

  const ltv = market.LTV.dividedBy(DOUBLE_SCALAR).toNumber();

  const safeAmountToWithdraw = market.collateralEnabled
    ? extraCollateralInUSD / ltv / coinPrice
    : suppliedAmount;

  const checkValue = isDeposit
    ? balance
    : min(safeAmountToWithdraw, suppliedAmount);

  return (
    <Motion
      layout
      display="flex"
      maxHeight="90vh"
      maxWidth="26rem"
      overflow="hidden"
      width={['90vw', '90vw', '90vw', '24.375rem']}
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
      <Box
        display="flex"
        justifyContent="center"
        borderBottom="1px solid"
        borderColor="outline.outlineVariant"
      >
        <Tabs
          items={[t('lend.supply'), t('lend.withdraw')]}
          onChangeTab={handleTab}
          defaultTabIndex={+!isDeposit}
        />
      </Box>
      <Box
        pb="l"
        p="2xl"
        display="flex"
        flexDirection="column"
        bg="surface.containerLow"
      >
        {isDeposit ? (
          <Box
            display="flex"
            fontWeight="300"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="extraSmall" textTransform="capitalize">
              {t('common.v2.wallet.name')}:{' '}
              {formatMoney(Number((+balance.toFixed(6)).toPrecision()))}{' '}
              {asset.coin.token.symbol}
            </Typography>
            <Typography variant="extraSmall" textTransform="capitalize">
              {t('lend.overview.supply')}:{' '}
              {formatMoney(Number((+suppliedAmount.toFixed(6)).toPrecision()))}{' '}
              {asset.coin.token.symbol}
            </Typography>
          </Box>
        ) : (
          <Box
            display="flex"
            fontWeight="300"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="extraSmall" textTransform="capitalize">
              {t('common.v2.wallet.name')}:{' '}
              {formatMoney(Number((+balance.toFixed(6)).toPrecision()))}{' '}
              {asset.coin.token.symbol}
            </Typography>
            <Typography variant="extraSmall" textTransform="capitalize">
              {t('lend.overview.supply')}:{' '}
              {formatMoney(Number((+suppliedAmount.toFixed(6)).toPrecision()))}{' '}
              {asset.coin.token.symbol}
            </Typography>
          </Box>
        )}
        <MarketTableModalField
          symbol={asset.coin.token.symbol}
          disabled={!checkValue}
          control={supplyForm.control}
          max={checkValue}
          {...supplyForm.register('value', {
            onChange: (v: ChangeEvent<HTMLInputElement>) => {
              const parsedValue = parseInputEventToNumberString(v);
              supplyForm.setValue('isMax', +parsedValue === checkValue);
              supplyForm.setValue(
                'value',
                +parsedValue > checkValue
                  ? (+checkValue.toFixed(6)).toPrecision()
                  : parsedValue
              );
              supplyForm.setValue('originalValue', v.target.value);
            },
          })}
        />
        <Box display="flex" columnGap=".25rem">
          <PercentageButton
            value={25}
            total={checkValue}
            onSelect={(parsedValue) => {
              supplyForm.setValue('value', parsedValue);
              supplyForm.setValue('originalValue', parsedValue);
              supplyForm.setValue('isMax', false);
            }}
          />
          <PercentageButton
            value={50}
            total={checkValue}
            onSelect={(parsedValue) => {
              supplyForm.setValue('value', parsedValue);
              supplyForm.setValue('originalValue', parsedValue);
              supplyForm.setValue('isMax', false);
            }}
          />
          <PercentageButton
            value={75}
            total={checkValue}
            onSelect={(parsedValue) => {
              supplyForm.setValue('value', parsedValue);
              supplyForm.setValue('originalValue', parsedValue);
              supplyForm.setValue('isMax', false);
            }}
          />
          <PercentageButton
            value={100}
            total={checkValue}
            onSelect={(parsedValue) => {
              supplyForm.setValue('value', parsedValue);
              supplyForm.setValue('originalValue', parsedValue);
              supplyForm.setValue('isMax', true);
            }}
          />
        </Box>
      </Box>
      <Box overflowX="hidden" overflowY="auto" bg="surface.containerLow">
        <Box p="xl" pt="0" pb="2xl">
          <BorrowLimitsWrapper
            priceMap={priceMap}
            isDeposit={isDeposit}
            marketKey={marketKey}
            valueForm={supplyForm}
            marketRecord={marketRecord}
            userBalancesInUSD={userBalancesInUSD}
          />
        </Box>
        <Box px="xl">
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
                  {asset.coin.token.symbol + ' ' + t('lend.supply') + ' '} APY
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography variant="medium" color={dark ? 'white' : 'black'}>
                  {marketRecord[marketKey].supplyRatePerYear
                    .multipliedBy(100)
                    .dividedBy(DOUBLE_SCALAR)
                    .toNumber()
                    .toFixed(2) + '%'}
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
                <Typography variant="medium">
                  {IPX_TOKEN.symbol} {' ' + t('lend.rewards') + ' '}
                  APR
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography variant="medium" color={dark ? 'white' : 'black'}>
                  {formatMoney(ipxAPR * 100)}%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          p="xl"
          gap="0.5rem"
          display="flex"
          bg="surface.containerLow"
          justifyContent="space-between"
        >
          <Button
            variant="filled"
            fontSize="s"
            width="100%"
            display="flex"
            size="small"
            justifyContent="center"
            onClick={() => handlePreview()}
          >
            {t('lend.modal.supply.normal.button', {
              isDeposit: +isDeposit,
            })}
          </Button>
        </Box>
      </Box>
    </Motion>
  );
};

export default SupplyMarketModal;
