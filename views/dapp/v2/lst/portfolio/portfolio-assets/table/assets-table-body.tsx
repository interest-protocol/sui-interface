import { useTranslations } from 'next-intl';
import { values } from 'ramda';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { ISuiPSVG, ISuiYNSVG } from '@/components/svg/v2';
import { useGetLstBondObjects } from '@/hooks';
import { RequiredBondsMap } from '@/hooks/use-get-lst-bond-objects/use-get-lst-bond-objects.types';
import { FixedPointMath } from '@/lib';
import { convertEpochToMSFromBaseEpoch } from '@/utils';

import ErrorState from '../../../components/error-state';
import { useGetLatestSuiSystemState } from '../../../lst.hooks';
import AssetsTableBodyRow from './assets-table-body-row';

const AssetsTableBody: FC = () => {
  const t = useTranslations();
  const { data: suiSystem, error: suiSystemError } =
    useGetLatestSuiSystemState();
  const { bondsMap, isLoading, error } = useGetLstBondObjects();

  if (error || suiSystemError)
    return <ErrorState errorMessage={t('error.generic')} size="large" />;

  return !isLoading ? (
    <>
      {(
        values(bondsMap).filter(
          (x) =>
            !!x &&
            !!x.principal &&
            !!x.coupon &&
            x.principal.value.isPositive() &&
            x.coupon.value.isPositive()
        ) as ReadonlyArray<RequiredBondsMap>
      ).map((bondObject, index) => {
        const currentEpoch = +suiSystem!.epoch;
        const startDateMS = +suiSystem!.epochStartTimestampMs;
        const durationMS = +suiSystem!.epochDurationMs;

        const convertEpochToMS = convertEpochToMSFromBaseEpoch(
          currentEpoch,
          durationMS,
          startDateMS
        );

        const maturityDateMS = convertEpochToMS(
          Number(
            bondObject.principal?.maturity.toString()
              ? bondObject.principal?.maturity.toString()
              : bondObject.coupon?.maturity.toString() ?? '0'
          )
        );

        const maturityDate = new Date(maturityDateMS);

        const maturity = `${maturityDate.getDate()}/${
          maturityDate.getMonth() + 1
        }/${maturityDate.getFullYear()}`;

        const totalAssetsMinted = [
          {
            name: 'iSuiPC',
            Icon: ISuiPSVG,
            value: FixedPointMath.toNumber(bondObject.principal.value),
            moreDetails: bondObject.principal.objects.map(
              ({ type, value }) => ({
                type,
                value: FixedPointMath.toNumber(value),
              })
            ),
          },
          {
            name: 'iSuiYN',
            Icon: ISuiYNSVG,
            value: FixedPointMath.toNumber(bondObject.coupon.value),
            moreDetails: bondObject.coupon.objects.map(({ type, value }) => ({
              type,
              value: FixedPointMath.toNumber(value),
            })),
          },
        ];

        return (
          <AssetsTableBodyRow
            key={v4()}
            index={index}
            maturity={maturity}
            totalAssetsMinted={totalAssetsMinted}
            dayLeft={(maturityDateMS - Date.now()) / (1000 * 60 * 60 * 24)}
          />
        );
      })}
    </>
  ) : (
    <>
      <Skeleton height="2rem" width="100%" />
      <Skeleton height="2rem" width="100%" style={{ marginTop: '1rem' }} />
    </>
  );
};

export default AssetsTableBody;
