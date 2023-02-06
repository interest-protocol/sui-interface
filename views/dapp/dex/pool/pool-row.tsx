import Link from 'next/link';
import { FC } from 'react';

import { Routes, RoutesEnum, TOKENS_SVG_MAP } from '@/constants';
import { Box, Button, Typography } from '@/elements';
import { FixedPointMath } from '@/sdk';
import { UnknownCoinSVG } from '@/svg';
import { formatMoney } from '@/utils';

import { PoolRowProps } from './pool.types';

const PoolRow: FC<PoolRowProps> = ({
  type0,
  type1,
  symbol0,
  symbol1,
  balance,
  objectId,
  decimals,
}) => {
  const FirstIcon = TOKENS_SVG_MAP[type0] ?? UnknownCoinSVG;
  const SecondIcon = TOKENS_SVG_MAP[type1] ?? UnknownCoinSVG;
  const balanceNumber = FixedPointMath.toNumber(balance, decimals);

  return (
    <Link
      href={`${Routes[RoutesEnum.DEXPoolDetails]}?objectId=${objectId}`}
      as={`${Routes[RoutesEnum.DEXPoolDetails]}?objectId=${objectId}`}
    >
      <Button
        my="M"
        py="M"
        width="100%"
        display="flex"
        variant="tertiary"
        borderRadius="2.5rem"
        flexDirection="column"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box display="flex">
            <Box my="M" display="flex" alignItems="center">
              <FirstIcon width="1.2rem" maxHeight="1.2rem" maxWidth="1.2rem" />
              <SecondIcon width="1.2rem" maxHeight="1.2rem" maxWidth="1.2rem" />
              <Typography mx="M" as="span" variant="normal">
                {symbol0} / {symbol1}
              </Typography>
            </Box>
          </Box>
          <Typography variant="normal">{formatMoney(balanceNumber)}</Typography>
        </Box>
      </Button>
    </Link>
  );
};

export default PoolRow;
