import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SmileySadSVG, SmileySVG } from '@/components/svg/v2';
import { SEMANTIC_COLORS } from '@/constants/semantic-colors';
import { capitalize } from '@/utils';

import { VotingButtonsProps } from '../validators-details.types';

const VotingButtons: FC<VotingButtonsProps> = ({
  isPositive,
  isNegative,
  setIsNegative,
  setIsPositive,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const green = SEMANTIC_COLORS[0];
  const red = SEMANTIC_COLORS[1];
  return (
    <Box>
      <Typography mb=".25rem" variant="extraSmall">
        {capitalize(
          t(
            'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.vote'
          )
        )}
      </Typography>
      <Box display="flex" gap=".5rem">
        <Button
          width="50%"
          size="small"
          display="flex"
          variant="icon"
          border="1px solid"
          justifyContent="center"
          onClick={() => {
            setIsPositive(true);
            setIsNegative(false);
          }}
          borderColor="outline.outlineVariant"
          nHover={{
            bg: dark
              ? dark
                ? green.dark
                : green.light
              : 'surface.containerLow',
            color: dark || isPositive ? '#3F6212' : 'onSurface',
          }}
          bg={
            isPositive
              ? dark
                ? green.dark
                : green.light
              : 'surface.containerLow'
          }
        >
          <Box
            width="1rem"
            display="flex"
            maxHeight="1rem"
            border="1px solid"
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
            color={isPositive ? '#3F6212' : 'onSurface'}
            borderColor={isPositive ? '#3F6212' : 'onSurface'}
          >
            <SmileySVG width="100%" maxWidth="1rem" maxHeight="1rem" />
          </Box>
        </Button>
        <Button
          width="50%"
          size="small"
          display="flex"
          variant="icon"
          onClick={() => {
            setIsNegative(true);
            setIsPositive(false);
          }}
          border="1px solid"
          justifyContent="center"
          borderColor="outline.outlineVariant"
          nHover={{
            bg: dark ? (dark ? red.dark : red.light) : 'surface.containerLow',
            color: dark || isNegative ? '#991b1b' : 'onSurface',
          }}
          bg={
            isNegative ? (dark ? red.dark : red.light) : 'surface.containerLow'
          }
        >
          <Box
            width="1rem"
            display="flex"
            maxHeight="1rem"
            border="1px solid"
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
            color={isNegative ? '#991b1b' : 'onSurface'}
            borderColor={isNegative ? '#991b1b' : 'onSurface'}
          >
            <SmileySadSVG width="100%" maxWidth="1rem" maxHeight="1rem" />
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default VotingButtons;
