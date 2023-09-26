import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { capitalize } from '@/utils';

import {
  RatingRowProps,
  ValidatorDetailsProps,
  VotingButtonsProps,
} from '../validators-details.types';
import RatingRow from './rating-row';
import ReviewAndComments from './review-and-comments';

const MAX_RANKING = 10;

const DividerLine = () => {
  return (
    <Box
      top="50%"
      left="50%"
      width="1px"
      position="absolute"
      borderRight="1px solid"
      height="calc(100% - 2rem)"
      transform="translate(-50%, -50%)"
      borderColor="outline.outlineVariant"
    />
  );
};

const ValidatorRatings: FC<
  VotingButtonsProps & RatingRowProps & Pick<ValidatorDetailsProps, 'ranking'>
> = ({
  ranking,
  isNegative,
  isPositive,
  setIsNegative,
  setIsPositive,
  negativeReview,
  positiveReview,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  return (
    <Box
      gap=".5rem"
      display="flex"
      color="onSurface"
      flexDirection="column"
      p={['l', 'l', 'l', 'unset']}
      width={['100%', '100%', '100%', '45%']}
    >
      <Box
        p="l"
        display="flex"
        position="relative"
        borderRadius=".5rem"
        bg="surface.container"
      >
        <DividerLine />
        <Box flex="1" display="flex" flexDirection="column" gap="m">
          <Typography variant="extraSmall" textTransform="uppercase">
            {capitalize(
              t(
                'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.ranking'
              )
            )}
          </Typography>
          <Box
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="displaySmall"
              color={dark ? '#D9F99D' : '#3F6212'}
            >
              {ranking}
            </Typography>
            <Typography variant="medium" mt="l">
              /{MAX_RANKING}
            </Typography>
          </Box>
        </Box>
        <Box
          py="l"
          flex="1"
          gap="2rem"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <RatingRow
            type="positive"
            positiveReview={positiveReview}
            negativeReview={negativeReview}
          />
          <RatingRow
            type="negative"
            negativeReview={negativeReview}
            positiveReview={positiveReview}
          />
        </Box>
      </Box>
      <ReviewAndComments
        isPositive={isPositive}
        isNegative={isNegative}
        setIsPositive={setIsPositive}
        setIsNegative={setIsNegative}
      />
    </Box>
  );
};

export default ValidatorRatings;
