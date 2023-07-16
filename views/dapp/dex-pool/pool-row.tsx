import { FixedPointMath } from 'lib';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Routes, RoutesEnum, TOKENS_SVG_MAP } from '@/constants';
import { Box, Button, Typography } from '@/elements';
import { useAmmSdk } from '@/hooks';
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
  stable,
}) => {
  const sdk = useAmmSdk();
  const { push } = useRouter();
  const FirstIcon = TOKENS_SVG_MAP[type0] ?? UnknownCoinSVG;
  const SecondIcon = TOKENS_SVG_MAP[type1] ?? UnknownCoinSVG;
  const balanceNumber = FixedPointMath.toNumber(balance, decimals);

  const pushToPoolDetails = async () => {
    const poolId =
      objectId || // It always exists because we are taking it from a LPCoin
      (await sdk.findPoolId({
        tokenAType: type0,
        tokenBType: type1,
        stable,
      })!);

    push(`${Routes[RoutesEnum.DEXPoolDetails]}?objectId=${poolId}`);
  };

  return (
    <Button
      my="M"
      py="M"
      width="100%"
      display="flex"
      variant="tertiary"
      borderRadius="2.5rem"
      flexDirection="column"
      onClick={pushToPoolDetails}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Box display="flex">
          <Box my="M" display="flex" alignItems="center">
            <FirstIcon width="1.7rem" maxHeight="1.7rem" maxWidth="1.7rem" />
            <SecondIcon width="1.7rem" maxHeight="1.7rem" maxWidth="1.7rem" />
            <Typography mx="M" as="span" variant="normal">
              {symbol0} / {symbol1}
            </Typography>
          </Box>
        </Box>
        <Typography variant="normal">{formatMoney(balanceNumber)}</Typography>
      </Box>
    </Button>
  );
};

export default PoolRow;
