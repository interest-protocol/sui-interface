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
  parseInputEventToNumberString,
  ZERO_BIG_NUMBER,
} from '@/utils';
import BorrowLimits from '@/views/dapp/v2/lend/lend-market-tables/market-table/market-table-modals/borrow-limits';

import {
  calculateIPXAPR,
  calculateNewBorrowLimitNewAmount,
} from '../../../lend-table.utils';
import { MarketTableTokenIcon } from '../../market-table-token-icon';
import HeaderModal from '../header';
import MarketTableModalField from '../market-table-modal-field';
import {
  BorrowLimitsWrapperProps,
  SupplyBorrowForm,
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

  return (
    <BorrowLimits
      {...calculateNewBorrowLimitNewAmount({
        marketRecord,
        marketKey,
        userBalancesInUSD,
        newAmount: +value,
        adding: !!isDeposit,
        isLoan: false,
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
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const supplyForm = useForm<SupplyBorrowForm>({
    defaultValues: {
      value: '0',
      isMax: false,
    },
  });

  const [isDeposit, setIsDeposit] = useState(true);

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

  const balance = isDeposit
    ? FixedPointMath.toNumber(
        pathOr(ZERO_BIG_NUMBER, [marketKey, 'totalBalance'], coinsMap),
        marketRecord[marketKey].decimals
      )
    : FixedPointMath.toNumber(
        market.totalCollateralRebase.toElastic(market.userShares),
        market.decimals
      );

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
      <Box display="flex" justifyContent="center">
        <Tabs
          items={[t('lend.supply'), t('lend.withdraw')]}
          onChangeTab={handleTab}
          defaultTabIndex={+!isDeposit}
        />
      </Box>
      <Box p="xl" display="flex" flexDirection="column" pb="2rem">
        <Typography
          mb="2.313rem"
          textAlign="end"
          variant="extraSmall"
          textTransform="capitalize"
        >
          {t('common.balance')}: {formatMoney(balance)}
        </Typography>
        <MarketTableModalField
          disabled={!balance}
          control={supplyForm.control}
          {...supplyForm.register('value', {
            onChange: (v: ChangeEvent<HTMLInputElement>) => {
              const parsedValue = parseInputEventToNumberString(v);
              supplyForm.setValue('isMax', +parsedValue === balance);
              supplyForm.setValue('value', parsedValue);
            },
          })}
        />
        <Slider
          max={100}
          disabled={!balance}
          onChange={(value) => {
            supplyForm.setValue(
              'value',
              Number(((value / 100) * balance).toFixed(6)).toPrecision()
            );
            supplyForm.setValue('isMax', value === 100);
          }}
        />
      </Box>
      <Box overflowX="hidden" overflowY="auto">
        <Box p="xl">
          <BorrowLimitsWrapper
            priceMap={priceMap}
            isDeposit={isDeposit}
            marketKey={marketKey}
            valueForm={supplyForm}
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
                  {asset.coin.token.symbol + ' ' + t('lend.supply') + ' '} APY
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography variant="medium" color={dark ? 'white' : 'black'}>
                  {marketRecord[marketKey].supplyRatePerYear
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
                <Typography variant="medium">
                  {IPX_TOKEN.symbol} {' ' + t('lend.rewards') + ' '}
                  APR
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
