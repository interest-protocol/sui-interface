import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';

import { CardLendProps } from '../lend.types';
import NormalCard from './normal';

const Card: FC<CardLendProps> = ({
  icon,
  description,
  isTrendUp,
  trendAmount,
  symbol,
  amount,
  isLoading,
  disabled,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  return (
    <Box
      height="8.375rem"
      width={['unset', 'unset', 'unset', 'unset']}
      p="1rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border={icon == 'special' ? 'unset' : '1px dashed'}
      borderColor={icon == 'special' ? 'unset' : 'outline.outlineVariant'}
      borderRadius="4px"
      bg={
        icon == 'special'
          ? disabled
            ? 'surface.containerLow'
            : 'primary.primaryContainer'
          : 'unset'
      }
    >
      {icon == 'special' ? (
        <Box width="100%">
          <Typography
            variant="medium"
            color="secondary.onSecondaryContainer"
            fontSize="s"
            textAlign="center"
          >
            {t(description as TTranslatedMessage)}
          </Typography>
          <Typography
            variant="small"
            color={dark ? 'white' : 'black'}
            fontSize={['xs', 'xs', 'xs', 'xl']}
            mb="0.875rem"
            textAlign="center"
          >
            {amount}
          </Typography>
          <Button
            variant="filled"
            py="0.625rem"
            width="fill-available"
            display="flex"
            justifyContent="center"
            disabled={disabled}
            bg={disabled ? 'surface.containerHighest' : 'primary'}
          >
            {t('Lend.claim')}
          </Button>
        </Box>
      ) : (
        <NormalCard
          icon={icon}
          description={description}
          isTrendUp={isTrendUp}
          trendAmount={trendAmount}
          symbol={symbol}
          amount={amount}
          isLoading={isLoading}
        />
      )}
    </Box>
  );
};

export default Card;
