import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { CopyToClipboard } from '@/components';
import { FixedPointMath } from '@/lib';
import { capitalize } from '@/utils';

import { ItemBalanceDetailsProps } from './faucet.types';

const ItemBalanceDetails: FC<ItemBalanceDetailsProps> = ({
  decimals,
  openDetails,
  objectsData,
}) => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;

  return (
    <Motion
      overflow="hidden"
      initial={{ height: '0rem' }}
      animate={{ height: openDetails ? 'auto' : '0' }}
    >
      <Box pt="m" px="s" borderRadius="m" color={colors.onSurface}>
        {objectsData.map(({ balance, id }) => (
          <Box
            my="s"
            key={v4()}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="small" fontSize="S">
              {capitalize(t('common.coin'))} ...{id?.slice(-4)}:{' '}
              {FixedPointMath.from(balance).toNumber(decimals)}
            </Typography>
            <Box as="span" pr="xs">
              <CopyToClipboard data={id} />
            </Box>
          </Box>
        ))}
      </Box>
    </Motion>
  );
};

export default ItemBalanceDetails;
