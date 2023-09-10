import { Box, Typography } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { CopyToClipboard } from '@/components';
import { SUISVG } from '@/components/svg/v2';
import { ISuiPCSVG, ISuiSVG } from '@/svg';
import { formatDollars } from '@/utils';

import DropdownBox from '../../../components/dropdown-box';
import DropdownItem from '../../../components/dropdown-box/dropdown-item';
import TableRow from '../../../components/table-row';
import { DERIVATED_SUI_SYMBOL } from '../../../lsd.type';
import { TokensRowItemProps } from '../../portfolio.type';
import OpenDetails from './open-details';
const TokensTableBodyRow: FC<TokensRowItemProps & { index: number }> = ({
  tokens,
  value,
  moreDetails,
  index,
}) => {
  const [openDetails, setOpenDetails] = useState(false);
  const getSuiIcon = (symbol: Omit<DERIVATED_SUI_SYMBOL, 'iSui-YN'>) => {
    return (
      <Box
        width="2.25rem"
        height="2.25rem"
        borderRadius="0.25rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="white"
        bg={symbol == 'SUI' ? '#6FBCF0' : 'unset'}
      >
        {symbol == 'SUI' ? (
          <SUISVG
            maxHeight="2.5rem"
            maxWidth="2.5rem"
            width="100%"
            height="100%"
          />
        ) : symbol == 'iSui' ? (
          <ISuiSVG
            maxHeight="2.25rem"
            maxWidth="2.25rem"
            width="100%"
            height="100%"
            filled
          />
        ) : (
          <ISuiPCSVG
            maxHeight="2.25rem"
            maxWidth="2.25rem"
            width="100%"
            height="100%"
            filled
          />
        )}
      </Box>
    );
  };

  return (
    <Box key={v4()}>
      <TableRow numCols={4} withBG={openDetails} isFirstRow>
        <Box height="100%" pt="0.75rem">
          <Typography variant="small">{index + 1}</Typography>
        </Box>
        <Box>
          <Box display="flex" gap="m" alignItems="center">
            {getSuiIcon(tokens[0])}
            <Box>
              <Typography variant="medium">{tokens[0]}</Typography>
              <Typography variant="extraSmall" opacity={0.6}>
                {tokens[1]}
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
            {value.coin}
          </Typography>
          <Typography variant="extraSmall" textAlign="center">
            {formatDollars(value.inUSD)}
          </Typography>
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
              handleClick={() => setOpenDetails(not)}
              isOpen={openDetails}
            />
          </Box>
        </Box>
      </TableRow>
      <DropdownBox isOpen={openDetails}>
        <TableRow numCols={4} withBG={openDetails} hasDropdown>
          <Box />
          <DropdownItem
            display="flex"
            gap="0.25rem"
            isOpen={openDetails}
            flexDirection="column"
          >
            {moreDetails.map((item) => (
              <Box
                key={v4()}
                display="flex"
                gap="m"
                alignItems="center"
                py="0.5rem"
              >
                <Typography variant="extraSmall">{item.type}</Typography>
                <Box>
                  <CopyToClipboard
                    data="Test"
                    width="0.25rem"
                    height="0.25rem"
                  />
                </Box>
              </Box>
            ))}
          </DropdownItem>
          <DropdownItem
            display="flex"
            gap="0.25rem"
            isOpen={openDetails}
            flexDirection="column"
          >
            {moreDetails.map((item) => (
              <Box
                key={v4()}
                display="flex"
                gap="m"
                alignItems="center"
                py="0.5rem"
              >
                <Typography variant="extraSmall" width="100%" textAlign="right">
                  {item.value}
                </Typography>
              </Box>
            ))}
          </DropdownItem>
          <Box />
        </TableRow>
      </DropdownBox>
    </Box>
  );
};
export default TokensTableBodyRow;
