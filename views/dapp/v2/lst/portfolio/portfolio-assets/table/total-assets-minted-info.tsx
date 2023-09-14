import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { CopyToClipboard } from '@/components';

import DropdownBox from '../../../components/dropdown-box';
import DropdownItem from '../../../components/dropdown-box/dropdown-item';
import TableRow from '../../../components/table-row';
import OpenDetails from '../../tokens/table/open-details';
import { TotalAssetsMintedInfoProps } from './assets-table.types';

const TotalAssetsMintedInfo: FC<TotalAssetsMintedInfoProps> = ({
  Icon,
  handleClick,
  isDropdownOpen,
  moreDetails,
  name,
  value,
}) => {
  return (
    <Box
      key={v4()}
      width="100%"
      mr=".125rem"
      overflow="hidden"
      borderRadius="0.5rem"
    >
      <TableRow
        numCols={4}
        isFirstRow
        isDropdownInformation
        withBG={isDropdownOpen}
      >
        <Box display="flex" width="100%" alignItems="center" gap="m">
          <Box width="1.875rem" height="2.125rem">
            <Icon width="100%" maxWidth="2.25rem" maxHeight="2.5rem" />
          </Box>
          <Typography variant="small">{name}</Typography>
        </Box>
        <Box ml="2xl">
          <Typography variant="small" textAlign="right">
            {value}
          </Typography>
        </Box>
        <Box />
        <Box display="flex" ml="-.75rem">
          <OpenDetails isOpen={isDropdownOpen} handleClick={handleClick} />
        </Box>
      </TableRow>
      <DropdownBox isOpen={isDropdownOpen}>
        <TableRow
          numCols={3}
          hasDropdown
          isDropdownInformation
          withBG={isDropdownOpen}
        >
          <DropdownItem
            ml="xl"
            display="flex"
            gap="0.25rem"
            isOpen={isDropdownOpen}
            flexDirection="column"
          >
            {moreDetails.map((item) => (
              <Box
                gap="s"
                key={v4()}
                py="0.5rem"
                display="flex"
                alignItems="center"
              >
                <Typography variant="extraSmall" fontSize=".6875rem">
                  {item.type}
                </Typography>
                <Box>
                  <CopyToClipboard
                    data="Test"
                    width=".125rem"
                    height=".125rem"
                  />
                </Box>
              </Box>
            ))}
          </DropdownItem>
          <DropdownItem
            display="flex"
            gap="0.25rem"
            isOpen={isDropdownOpen}
            flexDirection="column"
          >
            {moreDetails.map((item) => (
              <Box
                gap="m"
                key={v4()}
                py="0.5rem"
                display="flex"
                alignItems="center"
              >
                <Typography
                  width="100%"
                  textAlign="right"
                  fontSize=".6875rem"
                  variant="extraSmall"
                >
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

export default TotalAssetsMintedInfo;
