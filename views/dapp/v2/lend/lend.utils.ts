import { SuiObjectResponse } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { pathOr } from 'ramda';

import { DOUBLE_SCALAR, MILLISECONDS_PER_YEAR } from '@/constants';
import { FixedPointMath, Rebase } from '@/lib';
import { safeIntDiv } from '@/utils';

import {
  CalculateUserBalancesInUSDArgs,
  CardLendProps,
  MakeCardsDataArgs,
  MoneyMarketStorage,
  UserBalancesInUSD,
} from './lend.types';

export const calculateUserBalancesInUSD = ({
  priceMap,
  marketRecord,
  ipxPrice,
  moneyMarketStorage,
}: CalculateUserBalancesInUSDArgs): UserBalancesInUSD =>
  moneyMarketStorage.allMarketKeys.reduce(
    (acc, key) => {
      const price = priceMap[key];
      if (!price) return acc;

      const market = marketRecord[key];

      const percentageOfIPX = moneyMarketStorage.totalAllocationPoints.isZero()
        ? 0
        : market.allocationPoints
            .dividedBy(moneyMarketStorage.totalAllocationPoints)
            .toNumber();

      const totalIpxMintedPerYear = FixedPointMath.toNumber(
        moneyMarketStorage.ipxPerYear.multipliedBy(percentageOfIPX)
      );

      const totalIPXCollateralEarnings = market.totalCollateralBase.isZero()
        ? 0
        : market.userShares.div(market.totalCollateralBase).toNumber() *
          (totalIpxMintedPerYear / 2) *
          ipxPrice;

      const totalIPXLoanEarnings = market.totalLoanBase.isZero()
        ? 0
        : market.userPrincipal.div(market.totalLoanBase).toNumber() *
          (totalIpxMintedPerYear / 2) *
          ipxPrice;

      const rebaseCollateral = new Rebase(
        market.totalCollateralBase,
        market.totalCollateralElastic
      );

      const rebaseLoan = new Rebase(
        market.totalLoanBase,
        market.totalLoanElastic
      );

      const collateralInUSD =
        FixedPointMath.toNumber(
          rebaseCollateral.toElastic(market.userShares),
          market.decimals
        ) * price.price;

      const loanInUSD =
        FixedPointMath.toNumber(
          rebaseLoan.toElastic(market.userPrincipal),
          market.decimals
        ) * price.price;

      const earningsInUSD =
        FixedPointMath.toNumber(
          rebaseCollateral
            .toElastic(market.userShares)
            .multipliedBy(market.supplyRatePerYear)
            .dividedBy(DOUBLE_SCALAR),
          market.decimals
        ) * price.price;

      const interestRateOwedInUSD =
        FixedPointMath.toNumber(
          rebaseLoan
            .toElastic(market.userPrincipal)
            .multipliedBy(market.borrowRatePerYear)
            .dividedBy(DOUBLE_SCALAR),
          market.decimals
        ) * price.price;

      return {
        totalSupply: acc.totalSupply + collateralInUSD,
        totalLoan: acc.totalLoan + loanInUSD,
        totalEarnings: acc.totalEarnings + earningsInUSD,
        totalInterestRateOwned:
          acc.totalInterestRateOwned + interestRateOwedInUSD,
        totalIPXCollateralRewards:
          acc.totalIPXCollateralRewards + totalIPXCollateralEarnings,
        totalIPXLoanRewards: acc.totalIPXLoanRewards + totalIPXLoanEarnings,
        totalCollateral:
          acc.totalCollateral +
          (market.collateralEnabled
            ? market.LTV.multipliedBy(collateralInUSD)
                .dividedBy(DOUBLE_SCALAR)
                .toNumber()
            : 0),
      };
    },
    {
      totalSupply: 0,
      totalLoan: 0,
      totalEarnings: 0,
      totalInterestRateOwned: 0,
      totalIPXCollateralRewards: 0,
      totalIPXLoanRewards: 0,
      totalCollateral: 0,
    } as UserBalancesInUSD
  );

const calculateNetAPY = (data: UserBalancesInUSD) => {
  const loanPercentageEarned = safeIntDiv(
    data.totalIPXLoanRewards,
    data.totalLoan
  );
  const percentageOwed = safeIntDiv(
    data.totalInterestRateOwned,
    data.totalLoan
  );

  const borrowAPY = loanPercentageEarned - percentageOwed;
  const collateralAPY = safeIntDiv(
    data.totalIPXCollateralRewards + data.totalEarnings,
    data.totalSupply
  );
  return collateralAPY - borrowAPY;
};

const calculateNetAPYAmount = (data: UserBalancesInUSD) => {
  return (
    data.totalIPXCollateralRewards +
    data.totalIPXLoanRewards +
    data.totalEarnings -
    data.totalInterestRateOwned
  );
};

const calculateSupplyAPY = (data: UserBalancesInUSD) => {
  return safeIntDiv(
    data.totalIPXCollateralRewards + data.totalEarnings,
    data.totalSupply
  );
};

const calculateBorrowAPY = (data: UserBalancesInUSD) => {
  return safeIntDiv(
    data.totalIPXLoanRewards - data.totalInterestRateOwned,
    data.totalLoan
  );
};

export const makeCardsData = ({
  userBalancesInUSD,
}: MakeCardsDataArgs): ReadonlyArray<CardLendProps> => {
  const netAPY = calculateNetAPY(userBalancesInUSD);
  const borrowAPY = calculateBorrowAPY(userBalancesInUSD);

  return [
    {
      icon: 'percentage',
      description: 'common.v2.lend.firstSection.netAPY',
      isTrendUp: netAPY >= 0,
      trendAmount: (netAPY * 100).toString(),
      symbol: '$',
      amount: calculateNetAPYAmount(userBalancesInUSD).toString(),
    },
    {
      icon: 'box-up',
      description: 'common.v2.lend.firstSection.supplyBalance',
      isTrendUp: true,
      trendAmount: (calculateSupplyAPY(userBalancesInUSD) * 100).toString(),
      symbol: '$',
      amount: (
        userBalancesInUSD.totalEarnings +
        userBalancesInUSD.totalIPXCollateralRewards
      ).toString(),
    },
    {
      icon: 'box-down',
      description: 'common.v2.lend.firstSection.borrowBalance',
      isTrendUp: borrowAPY >= 0,
      trendAmount: (Math.abs(borrowAPY) * 100).toString(),
      symbol: '$',
      amount: userBalancesInUSD.totalInterestRateOwned.toString(),
    },
    {
      icon: 'special',
      description: 'Lend.claimReward',
      isTrendUp: false,
      trendAmount: '',
      symbol: '$',
      amount: '1,2345 IPX',
      disabled: false,
    },
  ];
};

export const parseMoneyMarketStorage = (
  x: SuiObjectResponse | null
): MoneyMarketStorage => {
  const totalAllocationPoints = BigNumber(
    pathOr(0, ['data', 'content', 'fields', 'total_allocation_points'], x)
  );

  const allMarketKeys = pathOr(
    [],
    ['data', 'content', 'fields', 'all_markets_keys'],
    x
  );

  const ipxPerYear = BigNumber(
    pathOr(0, ['data', 'content', 'fields', 'ipx_per_ms'], x)
  ).multipliedBy(MILLISECONDS_PER_YEAR);

  const suidInterestRatePerYear = BigNumber(
    pathOr(0, ['data', 'content', 'fields', 'suid_interest_rate_per_ms'], x)
  ).multipliedBy(MILLISECONDS_PER_YEAR);

  return {
    totalAllocationPoints,
    allMarketKeys,
    ipxPerYear,
    suidInterestRatePerYear,
  };
};
