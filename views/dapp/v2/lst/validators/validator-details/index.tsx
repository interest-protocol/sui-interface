import { Box, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { ArrowLeft } from '@/svg';

import ValidatorRatings from './ratings-and-reviews';
import { validatorDetailsData } from './validator-details.data';
import ValidatorDetailsSection from './validator-information';

const ValidatorDetailsPage: FC = () => {
  const [isNegative, setIsNegative] = useState<boolean>(false);
  const [isPositive, setIsPositive] = useState<boolean>(false);
  const t = useTranslations();
  const { push } = useRouter();

  return (
    <Box
      pb="xl"
      gap="2rem"
      width="100%"
      display="flex"
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
        <ValidatorDetailsSection {...validatorDetailsData} />
        <ValidatorRatings
          isNegative={isNegative}
          isPositive={isPositive}
          setIsNegative={setIsNegative}
          setIsPositive={setIsPositive}
          ranking={validatorDetailsData.ranking}
          positiveReview={validatorDetailsData.positiveReview}
          negativeReview={validatorDetailsData.negativeReview}
        />
      </Box>
    </Box>
  );
};

export default ValidatorDetailsPage;
