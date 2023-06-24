import BigNumber from 'bignumber.js';

export class Rebase {
  constructor(
    public readonly base: BigNumber,
    public readonly elastic: BigNumber
  ) {}

  public toElastic(base: BigNumber): BigNumber {
    if (this.base.isZero()) return base;
    return base.multipliedBy(this.elastic).dividedBy(this.base);
  }

  public toBase(elastic: BigNumber): BigNumber {
    if (this.elastic.isZero()) return elastic;
    return elastic.multipliedBy(this.base).dividedBy(this.elastic);
  }
}
