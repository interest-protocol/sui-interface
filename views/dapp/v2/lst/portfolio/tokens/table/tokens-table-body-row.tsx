import { Box, Typography } from '@interest-protocol/ui-kit';
import { formatAddress, SUI_TYPE_ARG } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { CopyToClipboard } from '@/components';
import { ISuiSVG, SUISVG } from '@/components/svg/v2';
import { COINS } from '@/constants';
import { useNetwork, useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { formatDollars } from '@/utils';

import DropdownBox from '../../../components/dropdown-box';
import DropdownItem from '../../../components/dropdown-box/dropdown-item';
import TableRow from '../../../components/table-row';
import { useLstData } from '../../../lst.hooks';
import { DERIVATED_SUI_SYMBOL } from '../../../lst.types';
import OpenDetails from './open-details';

const TokenIcon: FC<{ symbol: Omit<DERIVATED_SUI_SYMBOL, 'iSui-YN'> }> = ({
  symbol,
}) => (
  <Box
    width="2.25rem"
    height="2.25rem"
    borderRadius="0.25rem"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    {symbol == 'SUI' ? (
      <SUISVG
        filled
        width="100%"
        height="100%"
        maxWidth="2.25rem"
        maxHeight="2.25rem"
      />
    ) : (
      symbol == 'ISUI' && (
        <ISuiSVG
          filled
          width="100%"
          height="100%"
          maxWidth="2.25rem"
          maxHeight="2.25rem"
        />
      )
    )}
  </Box>
);

const TokensTableBodyRow: FC<{ index: number; type: string }> = ({
  type,
  index,
}) => {
  const { network } = useNetwork();
  const { coinsMap } = useWeb3();
  const { suiCoinInfo } = useLstData();
  const [openDetails, setOpenDetails] = useState<boolean>(false);

  const coin = coinsMap[type] ?? {
    ...(type === SUI_TYPE_ARG
      ? COINS[network].SUI
      : {
          type,
          symbol: 'ISUI',
          decimals: 0,
        }),
    totalBalance: BigNumber(0),
    objects: [],
  };

  return (
    <Box key={v4()}>
      {coin && (
        <TableRow numCols={4} withBG={openDetails} isFirstRow>
          <Box height="100%" pt="0.75rem">
            <Typography variant="small">{index + 1}</Typography>
          </Box>
          <Box>
            <Box display="flex" gap="m" alignItems="center">
              {<TokenIcon symbol={coin.symbol} />}
              <Box>
                <Typography variant="medium">{coin.symbol}</Typography>
                <Typography variant="extraSmall" opacity={0.6}>
                  {coin.symbol}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            flexDirection="column"
          >
            <Typography variant="medium" textAlign="center">
              {FixedPointMath.toNumber(coin.totalBalance)}
            </Typography>
            {suiCoinInfo?.price && (
              <Typography variant="extraSmall" textAlign="center">
                {formatDollars(
                  FixedPointMath.toNumber(coinsMap[type]?.totalBalance) *
                    suiCoinInfo?.price
                )}
              </Typography>
            )}
          </Box>
          <Box height="100%" pt="0.05rem">
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              pr="l"
              py="l"
            >
              <OpenDetails
                handleClick={() => {
                  setOpenDetails(not);
                }}
                isOpen={openDetails}
              />
            </Box>
          </Box>
        </TableRow>
      )}
      <DropdownBox isOpen={openDetails}>
        {coin?.objects.map(({ coinType, balance }) => (
          <TableRow numCols={4} withBG={openDetails} hasDropdown key={v4()}>
            <Box />
            <DropdownItem
              display="flex"
              gap="0.25rem"
              isOpen={openDetails}
              flexDirection="column"
            >
              <Box
                key={v4()}
                display="flex"
                gap="m"
                alignItems="center"
                py="0.5rem"
              >
                <Typography variant="extraSmall">
                  {formatAddress(coinType)}
                </Typography>
                <Box>
                  <CopyToClipboard
                    data="Test"
                    width="0.25rem"
                    height="0.25rem"
                  />
                </Box>
              </Box>
            </DropdownItem>
            <DropdownItem
              display="flex"
              gap="0.25rem"
              isOpen={openDetails}
              flexDirection="column"
            >
              <Box
                key={v4()}
                display="flex"
                gap="m"
                alignItems="center"
                py="0.5rem"
              >
                <Typography variant="extraSmall" width="100%" textAlign="right">
                  {FixedPointMath.toNumber(BigNumber(balance))}
                </Typography>
              </Box>
            </DropdownItem>
            <Box />
          </TableRow>
        ))}
      </DropdownBox>
    </Box>
  );
};

export default TokensTableBodyRow;
