import { Network } from '@interest-protocol/sui-amm-sdk';
import { PaginatedObjectsResponse } from '@mysten/sui.js/src/types/objects';
import BigNumber from 'bignumber.js';
import { path } from 'ramda';

import { getISuiPrincipalType, getISuiYieldType } from '@/constants/lst';

import { BondsMap } from './use-get-lst-bond-objects.types';

export const parseObjects = (
  x: PaginatedObjectsResponse['data'] | undefined,
  network: Network
) => {
  if (!x || !x.length) return {};
  return x.reduce((acc, obj) => {
    const isPrincipal = obj.data?.type === getISuiPrincipalType(network);
    const isCoupon = obj.data?.type === getISuiYieldType(network);

    if (isPrincipal) {
      const principal = {
        maturity: path(
          ['content', 'fields', 'balance', 'fields', 'slot'],
          obj.data
        ) as string,
        value: path(
          ['content', 'fields', 'balance', 'fields', 'value'],
          obj.data
        ) as string,
        type: obj.data?.type || '',
        id: obj.data?.objectId || '',
      };

      if (
        !principal.id ||
        !principal.maturity ||
        !principal.value ||
        !principal.type
      )
        return acc;

      const epoch = principal.maturity;

      const bnPrincipal = {
        id: principal.id,
        maturity: BigNumber(principal.maturity),
        value: BigNumber(principal.value),
        type: principal.type,
      };

      if (acc[epoch] && acc[epoch]?.principal) {
        return {
          ...acc,
          [epoch]: {
            ...acc[epoch],
            principal: {
              value: acc[epoch].principal?.value.plus(bnPrincipal.value),
              maturity: acc[epoch].principal?.maturity,
              objects: acc[epoch].principal?.objects.concat([bnPrincipal]),
            },
          },
        } as Record<string, BondsMap>;
      } else {
        return {
          ...acc,
          [epoch]: {
            ...acc[epoch],
            principal: {
              value: bnPrincipal.value,
              maturity: bnPrincipal.maturity,
              objects: [bnPrincipal],
            },
          },
        } as Record<string, BondsMap>;
      }
    }

    if (isCoupon) {
      const coupon = {
        maturity: path(
          ['content', 'fields', 'sft', 'fields', 'balance', 'fields', 'slot'],
          obj.data
        ) as string,
        value: path(
          ['content', 'fields', 'sft', 'fields', 'balance', 'fields', 'value'],
          obj.data
        ) as string,
        type: obj.data?.type || '',
        id: obj.data?.objectId || '',
        shares: path(['content', 'fields', 'shares'], obj.data) as string,
        rewardsPaid: path(
          ['content', 'fields', 'rewards_paid'],
          obj.data
        ) as string,
      };

      if (
        !coupon.id ||
        !coupon.maturity ||
        !coupon.value ||
        !coupon.type ||
        !coupon.shares ||
        !coupon.rewardsPaid
      )
        return acc;

      const epoch = coupon.maturity;

      const bnCoupon = {
        id: coupon.id,
        maturity: BigNumber(coupon.maturity),
        value: BigNumber(coupon.value),
        type: coupon.type,
        shares: BigNumber(coupon.shares),
        rewardsPaid: BigNumber(coupon.rewardsPaid),
      };

      if (acc[epoch] && acc[epoch]?.coupon) {
        return {
          ...acc,
          [epoch]: {
            ...acc[epoch],
            coupon: {
              value: acc[epoch].coupon?.value.plus(bnCoupon.value),
              maturity: acc[epoch].coupon?.maturity,
              objects: acc[epoch].coupon?.objects.concat([bnCoupon]),
              shares: acc[epoch].coupon?.shares.plus(bnCoupon.shares),
              rewardsPaid: acc[epoch].coupon?.shares.plus(bnCoupon.rewardsPaid),
            },
          },
        } as Record<string, BondsMap>;
      } else {
        return {
          ...acc,
          [epoch]: {
            ...acc[epoch],
            coupon: {
              value: bnCoupon.value,
              maturity: bnCoupon.maturity,
              objects: [bnCoupon],
              shares: bnCoupon.shares,
              rewardsPaid: bnCoupon.rewardsPaid,
            },
          },
        } as Record<string, BondsMap>;
      }
    }

    return acc;
  }, {} as Record<string, BondsMap>);
};
