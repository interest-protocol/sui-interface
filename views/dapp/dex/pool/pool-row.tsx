import { FixedPointMath } from 'lib';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Routes, RoutesEnum, TOKENS_SVG_MAP } from '@/constants';
import { Box, Button, Typography } from '@/elements';
import { useSDK } from '@/hooks';
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
  const { push } = useRouter();
  const sdk = useSDK();
  const pushToPoolDetails = async () => {
    const poolId = objectId
      ? objectId
      : // It always exists because we are taking it from a LPCoin
        await sdk.findPoolId({
          tokenAType: type0,
          tokenBType: type1,
        })!;

    push(`${Routes[RoutesEnum.DEXPoolDetails]}?objectId=${poolId}`);
  };

  console.log(pushToPoolDetails);

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
    </Link>
  );
};

export default PoolRow;
