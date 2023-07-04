import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { TOKENS_SVG_MAP_V2 } from '@/constants';
import { FixedPointMath } from '@/lib';

import { ItemBalanceProps } from './faucet.types';
import ItemBalanceDetails from './item-balance-details';
import OpenDetails from './open-details';

const ItemBalance: FC<ItemBalanceProps> = ({
  decimals,
  totalBalance,
  symbol,
  type,
  objectsData,
}) => {
  const { colors } = useTheme() as Theme;
  const SVG = TOKENS_SVG_MAP_V2[type] ?? TOKENS_SVG_MAP_V2.default;
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <Box
      bg={openDetails ? `${colors.primary}14` : 'unset'}
      py="s"
      mb="s"
      px="m"
      borderRadius="m"
    >
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="primary"
            borderRadius="4px"
            color="inverseOnSurface"
            mr="xl"
            height="2.5rem"
            width="2.5rem"
          >
            <SVG
              maxHeight="100%"
              maxWidth="2.5rem"
              width="1.5rem"
              height="1.5rem"
            />
          </Box>
          <Typography variant="medium" color="onSurface">
            {FixedPointMath.toNumber(totalBalance, decimals)}
          </Typography>
        </Box>
        <Box
          display="grid"
          alignItems="center"
          gridTemplateColumns="2fr 0.5rem"
        >
          <Typography variant="medium" color="onSurface" mr="xs">
            {symbol}
            <Typography variant="small" as="span" color="#ACAAAF">
              ({objectsData.length})
            </Typography>
          </Typography>
          {objectsData.length != 0 && (
            <OpenDetails
              isOpen={openDetails}
              handleClick={() => setOpenDetails(!openDetails)}
            />
          )}
        </Box>
      </Box>
      <ItemBalanceDetails
        objectsData={objectsData}
        decimals={decimals}
        openDetails
      />
    </Box>
  );
};

export default ItemBalance;
