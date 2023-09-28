import BigNumber from 'bignumber.js';

interface Principal {
  type: string;
  value: BigNumber;
  maturity: BigNumber;
}

interface PrincipalSummary extends Principal {
  objects: ReadonlyArray<Principal & { id: string }>;
}

interface Coupon extends Principal {
  shares: BigNumber;
  rewardsPaid: BigNumber;
}

interface CouponSummary extends Coupon {
  objects: ReadonlyArray<Coupon & { id: string }>;
}

export interface BondsMap {
  principal?: PrincipalSummary;
  coupon?: CouponSummary;
}

export type RequiredBondsMap = Required<BondsMap>;
