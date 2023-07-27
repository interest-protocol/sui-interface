import { MONEY_MARKET_KEYS } from '@interest-protocol/sui-money-market-sdk';
import { SuiObjectResponse } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { pathOr } from 'ramda';

import { DOUBLE_SCALAR, MILLISECONDS_PER_YEAR } from '@/constants';
import { FixedPointMath } from '@/lib';
import { BoxDownSVG, BoxUpSVG, PercentageSVG } from '@/svg';
import { formatDollars, safeIntDiv } from '@/utils';

import {
  CalculateUserBalancesInUSDArgs,
  MakeCardsDataArgs,
  MoneyMarketStorage,
  UserBalancesInUSD,
} from './lend.types';
import { APRCardProps } from './overview/apr-card/card.types';

export const calculateUserBalancesInUSD = ({
  network,
  ipxPrice,
  priceMap,
  marketRecord,
  moneyMarketStorage,
}: CalculateUserBalancesInUSDArgs): UserBalancesInUSD =>
  MONEY_MARKET_KEYS[network].reduce(
    (acc, key) => {
      const price = priceMap[key];

      if (!price) return acc;

      const market = marketRecord[key];

      if (!market) return acc;

      const percentageOfIPX = moneyMarketStorage.totalAllocationPoints.isZero()
        ? 0
        : market.allocationPoints
            .dividedBy(moneyMarketStorage.totalAllocationPoints)
            .toNumber();

      const totalIpxMintedPerYear = FixedPointMath.toNumber(
        moneyMarketStorage.ipxPerYear.multipliedBy(percentageOfIPX)
      );

      const totalIPXCollateralEarnings = market?.totalCollateralBase.isZero()
        ? 0
        : market.userShares.div(market.totalCollateralBase).toNumber() *
          (totalIpxMintedPerYear / 2) *
          ipxPrice;

      const totalIPXLoanEarnings = market.totalLoanBase.isZero()
        ? 0
        : market.userPrincipal.div(market.totalLoanBase).toNumber() *
          (totalIpxMintedPerYear / 2) *
          ipxPrice;

      const collateralInUSD =
        FixedPointMath.toNumber(
          market.totalCollateralRebase.toElastic(market.userShares),
          market.decimals
        ) * price.price;

      const loanInUSD =
        FixedPointMath.toNumber(
          market.totalLoanRebase.toElastic(market.userPrincipal),
          market.decimals
        ) * price.price;

      const earningsInUSD =
        FixedPointMath.toNumber(
          market.totalCollateralRebase
            .toElastic(market.userShares)
            .multipliedBy(market.supplyRatePerYear)
            .dividedBy(DOUBLE_SCALAR),
          market.decimals
        ) * price.price;

      const interestRateOwedInUSD =
        FixedPointMath.toNumber(
          market.totalLoanRebase
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
  const totalProfit =
    data.totalEarnings +
    data.totalIPXLoanRewards +
    data.totalIPXCollateralRewards;

  const loss = -data.totalInterestRateOwned;

  const net = totalProfit + loss;

  const totalAmount = data.totalSupply - data.totalLoan;

  if (!totalAmount) return 0;

  return net / totalAmount;
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
}: MakeCardsDataArgs): ReadonlyArray<APRCardProps> => {
  const netAPY = calculateNetAPY(userBalancesInUSD);
  const borrowAPY = calculateBorrowAPY(userBalancesInUSD);

  return [
    {
      Icon: PercentageSVG,
      description: 'lend.overview.net',
      trend: Number((netAPY * 100).toFixed(2)),
      amount: formatDollars(
        userBalancesInUSD.totalSupply - userBalancesInUSD.totalLoan
      ),
    },
    {
      Icon: BoxDownSVG,
      description: 'lend.overview.supply',
      trend: Number((calculateSupplyAPY(userBalancesInUSD) * 100).toFixed(2)),
      amount: formatDollars(userBalancesInUSD.totalSupply),
    },
    {
      Icon: BoxUpSVG,
      trend: Number((borrowAPY * 100).toFixed(2)),
      description: 'lend.overview.borrow',
      amount: formatDollars(userBalancesInUSD.totalLoan),
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
