import { COIN_TYPE_TO_COIN, DOUBLE_SCALAR } from '@/constants';
import { FixedPointMath, Rebase } from '@/lib';
import { formatMoney } from '@/utils';

import { BORROW_MARKETS_UI, SUPPLY_MARKETS_UI } from '../lend.constants';
import {
  BorrowRow,
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

      const collateralRebase = new Rebase(
        market.totalCollateralBase,
        market.totalCollateralElastic
      );

      const amountOfCoins = collateralRebase
        .toElastic(market.userShares)
        .dividedBy(market.decimals)
        .toNumber();

      const isNotEngaged = market.userShares.isZero();

      const data = {
        assetApy: {
          coin: {
            token: COIN_TYPE_TO_COIN[network][key],
            color: null,
          },
          percentage: +(
            market.supplyRatePerYear.dividedBy(DOUBLE_SCALAR).toNumber() * 100
          ).toFixed(2),
        },
        supplied: {
          amount: market.userShares.isZero() ? 0 : formatMoney(amountOfCoins),
          value: market.userShares.isZero()
            ? 0
            : formatMoney(amountOfCoins * priceMap[key].price),
        },
        wallet: FixedPointMath.toNumber(
          coinsMap[key].totalBalance,
          coinsMap[key].decimals
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
        description: 'Lend.supplyAdded',
        data: [] as ReadonlyArray<SupplyRow>,
      } as MoneyMarketUI,
      {
        isEngaged: false,
        description: 'Lend.notEngaged',
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

      const loanRebase = new Rebase(
        market.totalLoanBase,
        market.totalLoanElastic
      );

      const amountOfCoins = loanRebase
        .toElastic(market.userPrincipal)
        .dividedBy(market.decimals)
        .toNumber();

      const isNotEngaged = market.userPrincipal.isZero();

      const data = {
        assetApy: {
          coin: {
            token: COIN_TYPE_TO_COIN[network][key],
            color: null,
          },
          percentage: +(
            market.borrowRatePerYear.dividedBy(DOUBLE_SCALAR).toNumber() * 100
          ).toFixed(2),
        },
        borrowed: {
          amount: market.userPrincipal.isZero()
            ? 0
            : formatMoney(amountOfCoins),
          value: market.userPrincipal.isZero()
            ? 0
            : formatMoney(amountOfCoins * priceMap[key].price),
        },
        wallet: coinsMap[key]
          ? FixedPointMath.toNumber(
              coinsMap[key].totalBalance,
              coinsMap[key].decimals
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
        description: 'Lend.unLoan',
        data: [] as ReadonlyArray<BorrowRow>,
      } as MoneyMarketUI,
      {
        isEngaged: false,
        description: 'Lend.notEngaged',
        data: [] as ReadonlyArray<BorrowRow>,
      } as MoneyMarketUI,
    ]
  );
