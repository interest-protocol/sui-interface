import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import { v4 } from 'uuid';

import { CopyToClipboard } from '@/components';
import RefBox from '@/elements/ref-box';
import { FixedPointMath } from '@/lib';
import { capitalize } from '@/utils';

import { ItemBalanceDetailsProps } from './faucet.types';

const AnimatedBox = animated(Box);

const ItemBalanceDetails: FC<ItemBalanceDetailsProps> = ({
  objectsData,
  openDetails,
  decimals,
}) => {
  const t = useTranslations();
  const { colors, space } = useTheme() as Theme;
  const containerRef = useRef<HTMLDivElement>(null);

  const style = useSpring({
    from: { height: '0px', margin: '0rem 0' },
    to: {
      margin: `${openDetails ? space.s : '0rem'} 0`,
      height: `${openDetails ? containerRef.current?.clientHeight : 0}px`,
    },
    config: {
      duration: 300,
    },
  });

  return (
    <AnimatedBox style={style} overflow="hidden">
      <RefBox
        ref={containerRef}
        p="M"
        color={colors.onSurface}
        borderRadius="M"
      >
        {objectsData.map(({ balance, id }) => (
          <Box
            display="flex"
            justifyContent="space-between"
            key={v4()}
            alignItems="center"
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
      </RefBox>
    </AnimatedBox>
  );
};

export default ItemBalanceDetails;
