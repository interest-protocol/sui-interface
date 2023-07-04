import { add, pathOr, subtract } from 'ramda';

import { COIN_TYPE_TO_COIN, DOUBLE_SCALAR } from '@/constants';
import { FixedPointMath } from '@/lib';
import { safeIntDiv, ZERO_BIG_NUMBER } from '@/utils';

import { BORROW_MARKETS_UI, SUPPLY_MARKETS_UI } from '../lend.data';
import {
  BorrowRow,
  CalculateIPXAPRArgs,
  calculateNewBorrowLimitEnableCollateralArgs,
  CalculateNewBorrowLimitNewAmountArgs,
  MakeMoneyMarketDataArgs,
  MoneyMarketUI,
  SupplyRow,
} from './lend-table.types';

export const makeSupplyData = ({
  coinsMap,
  marketRecord,
  network,
  priceMap,
}: MakeMoneyMarketDataArgs): [MoneyMarketUI, MoneyMarketUI] =>
  SUPPLY_MARKETS_UI[network].reduce(
    ([engaged, notEngaged], key) => {
      const market = marketRecord[key];

      const amountOfCoins = FixedPointMath.toNumber(
        market.totalCollateralRebase.toElastic(market.userShares),
        market.decimals
      );

      const isNotEngaged = market.userShares.isZero();

      const data = {
        asset: {
          coin: {
            token: COIN_TYPE_TO_COIN[network][key],
            color: null,
          },
          percentage: +(
            market.supplyRatePerYear.dividedBy(DOUBLE_SCALAR).toNumber() * 100
          ).toFixed(2),
        },
        supplied: {
          amount: market.userShares.isZero() ? 0 : amountOfCoins,
          value: market.userShares.isZero()
            ? 0
            : amountOfCoins * priceMap[key].price,
        },
        wallet: FixedPointMath.toNumber(
          pathOr(ZERO_BIG_NUMBER, [key, 'totalBalance'], coinsMap),
          pathOr(1, [key, 'decimals'], coinsMap)
        ),
        collateral: market.collateralEnabled,
        marketKey: key,
      } as SupplyRow;

      return isNotEngaged
        ? [engaged, { ...notEngaged, data: notEngaged.data.concat([data]) }]
        : [{ ...engaged, data: engaged.data.concat([data]) }, notEngaged];
    },
    [
      {
        isEngaged: true,
        description: 'lend.supplyAdded',
        data: [] as ReadonlyArray<SupplyRow>,
      } as MoneyMarketUI,
      {
        isEngaged: false,
        description: 'lend.notEngaged',
        data: [] as ReadonlyArray<SupplyRow>,
      } as MoneyMarketUI,
    ]
  );

export const makeBorrowData = ({
  coinsMap,
  marketRecord,
  network,
  priceMap,
}: MakeMoneyMarketDataArgs): [MoneyMarketUI, MoneyMarketUI] =>
  BORROW_MARKETS_UI[network].reduce(
    ([engaged, notEngaged], key) => {
      const market = marketRecord[key];

      const amountOfCoins = FixedPointMath.toNumber(
        market.totalLoanRebase.toElastic(market.userPrincipal),
        market.decimals
      );

      const isNotEngaged = market.userPrincipal.isZero();

      const data = {
        asset: {
          coin: {
            token: COIN_TYPE_TO_COIN[network][key],
            color: null,
          },
          percentage: +(
            market.borrowRatePerYear.dividedBy(DOUBLE_SCALAR).toNumber() * 100
          ).toFixed(2),
        },
        borrowed: {
          amount: market.userPrincipal.isZero() ? 0 : amountOfCoins,
          value: market.userPrincipal.isZero()
            ? 0
            : amountOfCoins * priceMap[key].price,
        },
        wallet: coinsMap[key]
          ? FixedPointMath.toNumber(
              pathOr(ZERO_BIG_NUMBER, [key, 'totalBalance'], coinsMap),
              pathOr(1, [key, 'decimals'], coinsMap)
            )
          : 0,
        cash: FixedPointMath.toNumber(market.cash, market.decimals),
        marketKey: key,
      } as BorrowRow;

      return isNotEngaged
        ? [engaged, { ...notEngaged, data: notEngaged.data.concat([data]) }]
        : [{ ...engaged, data: engaged.data.concat([data]) }, notEngaged];
    },
    [
      {
        isEngaged: true,
        description: 'lend.borrowing',
        data: [] as ReadonlyArray<BorrowRow>,
      } as MoneyMarketUI,
      {
        isEngaged: false,
        description: 'lend.notEngaged',
        data: [] as ReadonlyArray<BorrowRow>,
      } as MoneyMarketUI,
    ]
  );

export const calculateNewBorrowLimitNewAmount = ({
  priceMap,
  userBalancesInUSD,
  marketRecord,
  marketKey,
  newAmount,
  isLoan,
  adding,
}: CalculateNewBorrowLimitNewAmountArgs) => {
  const market = marketRecord[marketKey];

  const ltv = market.LTV.dividedBy(DOUBLE_SCALAR).toNumber();

  const preLTVAmount =
    market.collateralEnabled || isLoan
      ? newAmount * priceMap[marketKey].price
      : 0;

  // IF it cannot be collateral, it has no impact on the borrow limit
  const amountInUSD = isLoan ? preLTVAmount : preLTVAmount * ltv;

  const currentBorrowLimit =
    userBalancesInUSD.totalCollateral - userBalancesInUSD.totalLoan;

  const currentBorrowLimitPercentage =
    safeIntDiv(userBalancesInUSD.totalLoan, userBalancesInUSD.totalCollateral) *
    100;

  const newBorrowLimit = isLoan
    ? adding
      ? currentBorrowLimit - amountInUSD
      : currentBorrowLimit + amountInUSD
    : adding
    ? currentBorrowLimit + amountInUSD
    : currentBorrowLimit - amountInUSD;

  const newBorrowLimitPercentage =
    (isLoan
      ? adding
        ? safeIntDiv(
            userBalancesInUSD.totalLoan + amountInUSD,
            userBalancesInUSD.totalCollateral
          )
        : safeIntDiv(
            userBalancesInUSD.totalLoan - amountInUSD,
            userBalancesInUSD.totalCollateral
          )
      : adding
      ? safeIntDiv(
          userBalancesInUSD.totalLoan,
          userBalancesInUSD.totalCollateral + amountInUSD
        )
      : safeIntDiv(
          userBalancesInUSD.totalLoan,
          userBalancesInUSD.totalCollateral - amountInUSD
        )) * 100;

  return {
    currentBorrowLimit,
    currentBorrowLimitPercentage,
    newBorrowLimit,
    newBorrowLimitPercentage,
  };
};

export const calculateNewBorrowLimitEnableCollateral = ({
  priceMap,
  userBalancesInUSD,
  marketRecord,
  marketKey,
  addCollateral,
}: calculateNewBorrowLimitEnableCollateralArgs) => {
  const operation = addCollateral ? add : subtract;

  const currentBorrowLimit =
    userBalancesInUSD.totalCollateral - userBalancesInUSD.totalLoan;

  const market = marketRecord[marketKey];

  const newBorrowLimit = market.userShares.isZero()
    ? currentBorrowLimit
    : operation(
        currentBorrowLimit,
        FixedPointMath.toNumber(
          market.totalCollateralRebase.toElastic(market.userShares),
          market.decimals
        ) * priceMap[marketKey].price
      );

  const currentBorrowLimitPercentage =
    safeIntDiv(userBalancesInUSD.totalLoan, userBalancesInUSD.totalCollateral) *
    100;

  const newBorrowLimitPercentage = market.userShares.isZero()
    ? currentBorrowLimitPercentage
    : safeIntDiv(
        userBalancesInUSD.totalLoan,
        operation(
          userBalancesInUSD.totalCollateral,
          FixedPointMath.toNumber(
            market.totalCollateralRebase.toElastic(market.userShares),
            market.decimals
          ) * priceMap[marketKey].price
        )
      ) * 100;

  return {
    currentBorrowLimit,
    newBorrowLimit,
    currentBorrowLimitPercentage,
    newBorrowLimitPercentage,
  };
};

export const calculateIPXAPR = ({
  ipxPrice,
  moneyMarketStorage,
  marketRecord,
  marketKey,
  isLoan,
  priceMap,
}: CalculateIPXAPRArgs) => {
  const market = marketRecord[marketKey];

  if (
    market.allocationPoints.isZero() ||
    moneyMarketStorage.totalAllocationPoints.isZero()
  )
    return 0;

  const percentageOfRewards = market.allocationPoints
    .dividedBy(moneyMarketStorage.totalAllocationPoints)
    .toNumber();

  const ipxPerYear =
    percentageOfRewards *
    FixedPointMath.toNumber(moneyMarketStorage.ipxPerYear, 9);

  const ipxInUSD = (ipxPerYear * ipxPrice) / 2;

  return isLoan
    ? safeIntDiv(
        ipxInUSD,
        FixedPointMath.toNumber(market.totalLoanElastic, market.decimals) *
          priceMap[marketKey].price
      )
    : safeIntDiv(
        ipxInUSD,
        FixedPointMath.toNumber(
          market.totalCollateralElastic,
          market.decimals
        ) * priceMap[marketKey].price
      );
};
