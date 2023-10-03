import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SmileySadSVG, SmileySVG } from '@/components/svg/v2';

import { RatingRowProps } from '../validators-details.types';

const RatingRow: FC<RatingRowProps> = ({
  type,
  negativeReview,
  positiveReview,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const handlePositivePercentage = (positiveReview: number) => {
    return (positiveReview / (positiveReview + negativeReview)) * 100;
  };

  const handleNegativePercentage = (negativeReview: number) => {
    return (negativeReview / (positiveReview + negativeReview)) * 100;
  };

  return (
    <Box flex="1">
      <Box
        gap="s"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="small" mt="s">
          {type === 'positive' ? positiveReview : negativeReview}
        </Typography>
        <Box
          width="1.5rem"
          height="1.5rem"
          overflow="hidden"
          position="relative"
          borderRadius="full"
          border={!dark ? '1px solid' : 0}
          bg={type === 'positive' ? '#D9F99D' : '#FECACA'}
          color={type === 'positive' ? '#3F6212' : '#991b1b'}
          borderColor={type === 'positive' ? '#A3E635' : '#F87171'}
        >
          <Box
            zIndex="2"
            width="100%"
            height="100%"
            display="flex"
            position="relative"
            alignItems="center"
            justifyContent="center"
          >
            {type === 'positive' ? (
              <SmileySVG width="100%" maxWidth="1.5rem" maxHeight="1.5rem" />
            ) : (
              <SmileySadSVG width="100%" maxWidth="1.5rem" maxHeight="1.5rem" />
            )}
          </Box>
          <Motion
            bottom="0"
            zIndex="0"
            initial="0"
            width="100%"
            position="absolute"
            transformOrigin="bottom"
            transition={{ delay: 0.5, duration: 0.7 }}
            bg={type === 'positive' ? '#A3E635' : '#F87171'}
            animate={{
              height:
                type === 'positive'
                  ? `${~~handlePositivePercentage(positiveReview)}%`
                  : `${~~handleNegativePercentage(negativeReview)}%`,
            }}
          />
        </Box>
        <Typography
          mt="s"
          variant="small"
          color={
            type === 'positive'
              ? dark
                ? '#D9F99D'
                : '#3F6212'
              : dark
              ? '#FECACA'
              : '#991b1b'
          }
        >
          {type === 'positive'
            ? `${~~handlePositivePercentage(positiveReview)}%`
            : `${~~handleNegativePercentage(negativeReview)}%`}
        </Typography>
      </Box>
      {type === 'positive' ? (
        <Typography variant="small">
          {t(
            'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.positiveReview'
          )}
        </Typography>
      ) : (
        <Typography variant="small">
          {t(
            'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.negativeReview'
          )}
        </Typography>
      )}
    </Box>
  );
};

export default RatingRow;
