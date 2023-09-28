import BigNumber from 'bignumber.js';

interface Principal {
  maturity: BigNumber;
  value: BigNumber;
  type: string;
}

interface PrincipalSummary extends Principal {
  objects: ReadonlyArray<Principal & { id: string }>;
}

interface Coupon {
  maturity: BigNumber;
  value: BigNumber;
  type: string;
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
