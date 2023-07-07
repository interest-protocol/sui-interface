import { add, pathOr, subtract } from 'ramda';

import { COIN_TYPE_TO_COIN, DOUBLE_SCALAR } from '@/constants';
import { FixedPointMath } from '@/lib';
import { min, safeIntDiv, ZERO_BIG_NUMBER } from '@/utils';

import { BORROW_MARKETS_UI, SUPPLY_MARKETS_UI } from '../lend.data';
import {
  BorrowRow,
  CalculateIPXAPRArgs,
  CalculateNewBorrowLimitArgs,
  calculateNewBorrowLimitEnableCollateralArgs,
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

export const calculateNewDepositBorrowLimit = ({
  userBalancesInUSD,
  marketRecord,
  marketKey,
  newAmount,
  priceMap,
}: CalculateNewBorrowLimitArgs) => {
  const market = marketRecord[marketKey];

  const currentBorrowLimit =
    userBalancesInUSD.totalCollateral - userBalancesInUSD.totalLoan;
  const currentBorrowLimitPercentage =
    userBalancesInUSD.totalLoan > 0
      ? userBalancesInUSD.totalLoan / userBalancesInUSD.totalCollateral
      : userBalancesInUSD.totalLoan >= userBalancesInUSD.totalCollateral
      ? 100
      : 0;

  if (!market.collateralEnabled)
    return {
      currentBorrowLimit,
      currentBorrowLimitPercentage: currentBorrowLimitPercentage * 100,
      newBorrowLimit: currentBorrowLimit,
      newBorrowLimitPercentage: currentBorrowLimitPercentage * 100,
    };

  const newAmountInUSD = newAmount * priceMap[marketKey].price;
  const ltv = market.LTV.dividedBy(DOUBLE_SCALAR).toNumber();
  const newTotalCollateral =
    newAmountInUSD * ltv + userBalancesInUSD.totalCollateral;

  const newBorrowLimit = newTotalCollateral - userBalancesInUSD.totalLoan;

  const newBorrowLimitPercentage =
    userBalancesInUSD.totalLoan >= newTotalCollateral
      ? 100
      : userBalancesInUSD.totalLoan > 0
      ? userBalancesInUSD.totalLoan / newTotalCollateral
      : 0;

  return {
    currentBorrowLimit,
    currentBorrowLimitPercentage: currentBorrowLimitPercentage * 100,
    newBorrowLimit,
    newBorrowLimitPercentage: newBorrowLimitPercentage * 100,
  };
};

export const calculateNewLoanBorrowLimit = ({
  userBalancesInUSD,
  marketKey,
  newAmount,
  priceMap,
}: CalculateNewBorrowLimitArgs) => {
  const currentBorrowLimit =
    userBalancesInUSD.totalCollateral - userBalancesInUSD.totalLoan;
  const currentBorrowLimitPercentage =
    userBalancesInUSD.totalLoan > 0
      ? userBalancesInUSD.totalLoan / userBalancesInUSD.totalCollateral
      : userBalancesInUSD.totalLoan >= userBalancesInUSD.totalCollateral
      ? 100
      : 0;

  const newAmountInUSD = newAmount * priceMap[marketKey].price;
  const newLoanAmount = userBalancesInUSD.totalLoan + newAmountInUSD;

  const newBorrowLimit =
    newLoanAmount >= userBalancesInUSD.totalCollateral
      ? 0
      : userBalancesInUSD.totalCollateral - newLoanAmount;

  const newBorrowLimitPercentage =
    newLoanAmount > userBalancesInUSD.totalCollateral
      ? 100
      : newLoanAmount / userBalancesInUSD.totalCollateral;

  return {
    currentBorrowLimit,
    currentBorrowLimitPercentage: currentBorrowLimitPercentage * 100,
    newBorrowLimit,
    newBorrowLimitPercentage: newBorrowLimitPercentage * 100,
  };
};

export const calculateNewWithdrawLimitNewAmount = ({
  userBalancesInUSD,
  marketKey,
  newAmount,
  priceMap,
  marketRecord,
}: CalculateNewBorrowLimitArgs) => {
  const currentBorrowLimit =
    userBalancesInUSD.totalCollateral - userBalancesInUSD.totalLoan;
  const currentBorrowLimitPercentage =
    userBalancesInUSD.totalLoan > 0
      ? userBalancesInUSD.totalLoan / userBalancesInUSD.totalCollateral
      : userBalancesInUSD.totalLoan >= userBalancesInUSD.totalCollateral
      ? 100
      : 0;

  const market = marketRecord[marketKey];

  if (!market.collateralEnabled)
    return {
      currentBorrowLimit,
      currentBorrowLimitPercentage: currentBorrowLimitPercentage * 100,
      newBorrowLimit: currentBorrowLimit,
      newBorrowLimitPercentage: currentBorrowLimitPercentage * 100,
    };

  const coinPrice = priceMap[marketKey].price;

  const ltv = market.LTV.dividedBy(DOUBLE_SCALAR).toNumber();

  const newAmountInUSD = newAmount * coinPrice * ltv;

  const extraCollateralInUSD = market.collateralEnabled
    ? userBalancesInUSD.totalCollateral - userBalancesInUSD.totalLoan
    : 0;

  const newBorrowLimit =
    newAmountInUSD >= extraCollateralInUSD
      ? 0
      : extraCollateralInUSD - newAmountInUSD;

  const newBorrowLimitPercentage =
    newBorrowLimit > 0
      ? userBalancesInUSD.totalLoan /
        (userBalancesInUSD.totalCollateral - newAmountInUSD)
      : 1;

  return {
    currentBorrowLimit,
    currentBorrowLimitPercentage: currentBorrowLimitPercentage * 100,
    newBorrowLimit,
    newBorrowLimitPercentage: newBorrowLimitPercentage * 100,
  };
};

export const calculateNewRepayLimitNewAmount = ({
  userBalancesInUSD,
  marketKey,
  newAmount,
  priceMap,
  marketRecord,
}: CalculateNewBorrowLimitArgs) => {
  const currentBorrowLimit =
    userBalancesInUSD.totalCollateral - userBalancesInUSD.totalLoan;
  const currentBorrowLimitPercentage =
    userBalancesInUSD.totalLoan > 0
      ? userBalancesInUSD.totalLoan / userBalancesInUSD.totalCollateral
      : userBalancesInUSD.totalLoan >= userBalancesInUSD.totalCollateral
      ? 100
      : 0;

  const price = priceMap[marketKey].price;

  const newAmountInUSD = newAmount * price;

  const market = marketRecord[marketKey];

  const maximumRepayAmount = min(
    newAmountInUSD,
    FixedPointMath.toNumber(
      market.totalLoanRebase.toElastic(market.userPrincipal),
      market.decimals
    ) * price
  );

  const newLoanAmount =
    maximumRepayAmount >= userBalancesInUSD.totalLoan
      ? 0
      : userBalancesInUSD.totalLoan - maximumRepayAmount;

  const newBorrowLimit =
    newLoanAmount >= userBalancesInUSD.totalCollateral
      ? 0
      : userBalancesInUSD.totalCollateral - newLoanAmount;

  const newBorrowLimitPercentage =
    newLoanAmount >= userBalancesInUSD.totalCollateral
      ? 100
      : newLoanAmount > 0
      ? newLoanAmount / userBalancesInUSD.totalCollateral
      : 0;

  return {
    currentBorrowLimit,
    currentBorrowLimitPercentage: currentBorrowLimitPercentage * 100,
    newBorrowLimit,
    newBorrowLimitPercentage: newBorrowLimitPercentage * 100,
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
