import { Box, Typography } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import {
  ArrowDownSVG,
  CalendarSVG,
  CheckSVG,
  ISuiPSVG,
  ISuiYNSVG,
} from '@/components/svg/v2';
import { MONTHS } from '@/constants';
import { useGetLstBondObjects } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { convertDayToMS } from '@/utils';

import { useBondsContext } from '../../bonds.hooks';

const DerivativeIcon: FC<{ type: string }> = ({ type }) => {
  const { principalType, couponType } = useBondsContext();
  if (type === principalType)
    return <ISuiPSVG maxWidth="2rem" maxHeight="2rem" width="2rem" />;
  if (type === couponType)
    return <ISuiYNSVG maxWidth="2rem" maxHeight="2rem" width="2rem" />;
  return null;
};

const UnstakeMaturity: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { form, principalType, couponType, suiSystem } = useBondsContext();
  const { bondsMap } = useGetLstBondObjects();

  const maturityId = useWatch({
    control: form.control,
    name: 'maturity.epoch',
  });
  const bondObjectsPairs = Object.values(bondsMap).filter(
    (x) =>
      !!x?.principal &&
      !!x?.coupon &&
      x.principal.value.isPositive() &&
      x.coupon.value.isPositive()
  );

  const startDateMS = Number(suiSystem.epochStartTimestampMs);
  const durationMS = Number(suiSystem.epochDurationMs);
  const endTime = startDateMS + durationMS;

  const selectMaturity = bondObjectsPairs.find(
    ({ principal }) => maturityId === principal.maturity.toString()
  );

  return (
    <Box
      cursor="pointer"
      borderRadius="m"
      border="1px solid"
      onClick={() => setIsOpen(not)}
      borderColor="outline.outlineVariant"
    >
      <Box
        p="xl"
        gap="l"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {selectMaturity ? (
          <CheckSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
        ) : (
          <CalendarSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
        )}
        <Box flex="1" ml="xl" display="grid" gridTemplateColumns="1fr 1fr">
          {selectMaturity ? (
            <>
              <Box display="flex" alignItems="center">
                <Typography variant="medium">
                  {new Date(
                    convertDayToMS(selectMaturity.principal.maturity.toNumber())
                  ).getDate()}
                  {' • '}
                  {
                    MONTHS[
                      new Date(
                        convertDayToMS(
                          selectMaturity.principal.maturity.toNumber()
                        )
                      ).getMonth()
                    ]
                  }
                  {' • '}
                  {new Date(
                    convertDayToMS(selectMaturity.principal.maturity.toNumber())
                  ).getFullYear()}
                </Typography>
                <Typography
                  ml="m"
                  variant="extraSmall"
                  color={
                    convertEpochToMS(
                      selectMaturity.principal.maturity.toNumber()
                    ) > Date.now()
                      ? 'success'
                      : 'primary'
                  }
                >
                  {convertEpochToMS(
                    selectMaturity.principal.maturity.toNumber()
                  ) > Date.now()
                    ? `(${(
                        (convertEpochToMS(
                          selectMaturity.principal.maturity.toNumber()
                        ) -
                          Date.now()) /
                        (1000 * 60 * 60 * 24)
                      ).toFixed(0)}D)`
                    : 'Matured'}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="xl">
                <Box key={v4()} display="flex" alignItems="center" gap="m">
                  <DerivativeIcon type={principalType} />
                  <Typography variant="medium">
                    {FixedPointMath.toNumber(selectMaturity.principal.value)}
                  </Typography>
                </Box>
                <Box key={v4()} display="flex" alignItems="center" gap="m">
                  <DerivativeIcon type={couponType} />
                  <Typography variant="medium">
                    {FixedPointMath.toNumber(selectMaturity.coupon.value)}
                  </Typography>
                </Box>
              </Box>
            </>
          ) : (
            <Typography variant="medium">DD • MM • YYYY</Typography>
          )}
        </Box>
        <ArrowDownSVG maxHeight="0.7rem" maxWidth="0.7rem" />
      </Box>
      {isOpen &&
        bondObjectsPairs.map(({ principal, coupon }) => (
          <Box
            p="xl"
            key={v4()}
            onClick={() =>
              form.setValue('maturity', {
                epoch: principal.maturity.toString(),
                date: String(convertEpochToMS(principal.maturity.toNumber())),
              })
            }
            bg={
              maturityId == principal.maturity.toString()
                ? 'primary.primaryContainer'
                : 'unset'
            }
          >
            <Box
              display="grid"
              alignItems="center"
              gridTemplateColumns="2rem 1fr 1fr"
            >
              <Box>
                {maturityId == principal.maturity.toString() && (
                  <CheckSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
                )}
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="medium">
                  {new Date(
                    convertEpochToMS(principal.maturity.toNumber())
                  ).getDate()}
                  {' • '}
                  {
                    MONTHS[
                      new Date(
                        convertEpochToMS(principal.maturity.toNumber())
                      ).getMonth()
                    ]
                  }
                  {' • '}
                  {new Date(
                    convertEpochToMS(principal.maturity.toNumber())
                  ).getFullYear()}
                </Typography>
                <Typography
                  ml="m"
                  variant="extraSmall"
                  color={
                    convertEpochToMS(principal.maturity.toNumber()) > Date.now()
                      ? 'success'
                      : 'primary'
                  }
                >
                  {convertEpochToMS(principal.maturity.toNumber()) > Date.now()
                    ? `(${(
                        (convertEpochToMS(principal.maturity.toNumber()) -
                          Date.now()) /
                        (1000 * 60 * 60 * 24)
                      ).toFixed(0)}D)`
                    : 'Matured'}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" ml="4xl" gap="xl">
                <Box display="flex" alignItems="center" gap="xl">
                  <Box key={v4()} display="flex" alignItems="center" gap="m">
                    <DerivativeIcon type={principalType} />
                    <Typography variant="medium">
                      {FixedPointMath.toNumber(principal.value)}
                    </Typography>
                  </Box>
                  <Box key={v4()} display="flex" alignItems="center" gap="m">
                    <DerivativeIcon type={couponType} />
                    <Typography variant="medium">
                      {FixedPointMath.toNumber(coupon.value)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
    </Box>
  );
};

export default UnstakeMaturity;
