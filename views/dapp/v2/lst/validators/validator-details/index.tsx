import { Box, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { pathOr } from 'ramda';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { FixedPointMath } from '@/lib';
import { ArrowLeft } from '@/svg';

import ErrorState from '../../components/error-state';
import ValidatorsTableSkeleton from '../../components/your-info-container/modal/validator-list/validators-table-skeleton';
import { useGetValidatorsApy, useLstData } from '../../lst.hooks';
import ValidatorRatings from './ratings-and-reviews';
import { validatorDetailsMockData } from './validator-details.mock';
import ValidatorDetailsSection from './validator-information';

const ValidatorDetailsPage: FC = () => {
  const t = useTranslations();
  const { push } = useRouter();
  const { validatorStakeRecord, activeValidators } = useLstData();
  const {
    query: { validatorAddress },
  } = useRouter();
  const {
    data: validatorsApy,
    isLoading: validatorsApyLoading,
    error: validatorsApyError,
  } = useGetValidatorsApy();

  if (!activeValidators)
    return (
      <ErrorState
        size="large"
        errorMessage={t('lst.validators.tableSection.error')}
      />
    );

  if (validatorsApyError)
    return (
      <ErrorState
        size="large"
        errorMessage={t('lst.validators.tableSection.error')}
      />
    );

  if (validatorsApyLoading) return <ValidatorsTableSkeleton />;

  console.log('activeValidators', activeValidators);

  const apyMap = (validatorsApy?.apys?.reduce(
    (acc, { address, apy }) => ({ ...acc, [address]: apy }),
    {}
  ) ?? {}) as Record<string, number>;

  const validators = activeValidators.map(
    ({
      name,
      imageUrl,
      gasPrice,
      projectUrl,
      suiAddress,
      description,
      votingPower,
      commissionRate,
      nextEpochGasPrice,
    }) => ({
      name,
      imageUrl,
      gasPrice,
      projectUrl,
      suiAddress,
      description,
      nextEpochGasPrice,
      votingPower: +votingPower / 100,
      commissionRate: +commissionRate / 100,
      apy: Number((apyMap[suiAddress] * 100 ?? 0).toFixed(2)).toPrecision(),
      lstStaked: Number(
        FixedPointMath.toNumber(
          BigNumber(
            pathOr('0', [suiAddress, 'principal'], validatorStakeRecord)
          )
        ).toFixed(4)
      ).toPrecision(),
    })
  );

  const validatorData = validators.find(
    (data) => data.suiAddress === validatorAddress
  );

  const validatorDetailsAndComments = {
    ...validatorData,
    ...validatorDetailsMockData,
  };

  return (
    <Box variant="container" display="flex">
      <Box
        pb="xl"
        gap="2rem"
        width="100%"
        display="flex"
        gridColumn="1/-1"
        flexDirection="column"
        justifyContent="center"
      >
        <Box width="100%">
          <Box
            gap="s"
            py=".625rem"
            display="flex"
            cursor="pointer"
            color="onSurface"
            px={['l', 'l', 'l', 'unset']}
            onClick={() => push(Routes[RoutesEnum.LSTValidators])}
          >
            <ArrowLeft width="100%" maxWidth="1.125rem" maxHeight="1.125rem" />
            <Typography variant="extraSmall" textTransform="capitalize">
              {t('common.back')}
            </Typography>
          </Box>
        </Box>
        <Box
          width="100%"
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
          gap="1.5rem"
        >
          {/* 
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          @ts-ignore */}
          <ValidatorDetailsSection {...validatorDetailsAndComments} />
          <ValidatorRatings {...validatorDetailsAndComments} />
        </Box>
      </Box>
    </Box>
  );
};

export default ValidatorDetailsPage;
