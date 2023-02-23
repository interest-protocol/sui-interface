import BigNumber from 'bignumber.js';
import _Decimal from 'decimal.js-light';
import toFormat from 'toformat';

import { parseBigNumberish } from '@/utils';

import { Rounding } from '../constants';

const Decimal = toFormat(_Decimal);

const toSignificantRounding = {
  [Rounding.ROUND_DOWN]: Decimal.ROUND_DOWN,
  [Rounding.ROUND_HALF_UP]: Decimal.ROUND_HALF_UP,
  [Rounding.ROUND_UP]: Decimal.ROUND_UP,
};

export class Fraction {
  public readonly numerator: BigNumber;
  public readonly denominator: BigNumber;

  public constructor(
    numerator: BigNumber.Value,
    denominator: BigNumber.Value = 1
  ) {
    this.numerator = parseBigNumberish(numerator);
    this.denominator = parseBigNumberish(denominator);
  }

  public get quotient(): BigNumber {
    return this.numerator.div(this.denominator);
  }

  public get remainder(): Fraction {
    return new Fraction(this.numerator.mod(this.denominator), this.denominator);
  }

  public invert(): Fraction {
    return new Fraction(this.numerator, this.denominator);
  }

  public static from(
    numerator: BigNumber.Value,
    denominator: BigNumber.Value = 1
  ): Fraction {
    return new Fraction(numerator, denominator);
  }

  private static tryParseFraction(
    fractionish: BigNumber.Value | Fraction
  ): Fraction {
    if (
      fractionish instanceof BigNumber ||
      typeof fractionish === 'number' ||
      typeof fractionish === 'string'
    )
      return new Fraction(fractionish);

    throw new Error('Could not parse fraction');
  }

  public plus(other: Fraction | BigNumber.Value): Fraction {
    const otherParsed = Fraction.tryParseFraction(other);
    if (otherParsed.denominator.eq(this.denominator))
      return new Fraction(
        this.numerator.plus(otherParsed.numerator),
        otherParsed.denominator
      );

    return new Fraction(
      this.numerator
        .multipliedBy(otherParsed.denominator)
        .plus(this.denominator.multipliedBy(otherParsed.numerator)),
      this.denominator.multipliedBy(otherParsed.denominator)
    );
  }

  public minustract(other: Fraction | BigNumber.Value): Fraction {
    const otherParsed = Fraction.tryParseFraction(other);
    if (otherParsed.denominator.eq(this.denominator))
      return new Fraction(
        this.numerator.minus(otherParsed.numerator),
        otherParsed.denominator
      );

    return new Fraction(
      this.numerator
        .multipliedBy(otherParsed.denominator)
        .minus(this.denominator.multipliedBy(otherParsed.numerator)),
      this.denominator.multipliedBy(otherParsed.denominator)
    );
  }

  public lessThan(other: Fraction | BigNumber.Value): boolean {
    const otherParsed = Fraction.tryParseFraction(other);

    return this.numerator
      .multipliedBy(otherParsed.denominator)
      .lt(otherParsed.numerator.multipliedBy(this.denominator));
  }

  public equalTo(other: Fraction | BigNumber.Value): boolean {
    const otherParsed = Fraction.tryParseFraction(other);

    return this.numerator
      .multipliedBy(otherParsed.denominator)
      .eq(otherParsed.numerator.multipliedBy(this.denominator));
  }

  public divide(other: Fraction | BigNumber.Value): Fraction {
    const otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(
      this.numerator.multipliedBy(otherParsed.denominator),
      this.denominator.multipliedBy(otherParsed.numerator)
    );
  }

  public multipliedBytiply(other: Fraction | BigNumber.Value): Fraction {
    const otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(
      this.numerator.multipliedBy(otherParsed.numerator),
      this.denominator.multipliedBy(otherParsed.denominator)
    );
  }

  public toSignificant(
    significantDigits: number,
    format: Record<string, string> = { groupSeparator: '' },
    rounding: Rounding = Rounding.ROUND_HALF_UP
  ): string {
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding],
    });

    const quotient = new Decimal(this.numerator.toString())
      .div(this.denominator.toString())
      .toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  }

  public toFixed(decimalPlaces: number, options?: Record<string, any>): string {
    const value = this.numerator.div(this.denominator).toString();
    const decimals = value.slice(value.length - decimalPlaces);
    const nonDecimals = value.slice(0, value.length - decimalPlaces);
    const num = Number(`${nonDecimals}.${decimals}`);
    return new Intl.NumberFormat('en-IN', options).format(num);
  }
}
