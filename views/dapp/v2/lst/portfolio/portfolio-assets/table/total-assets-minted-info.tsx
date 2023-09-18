import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { CopyToClipboard } from '@/components';

import DropdownBox from '../../../components/dropdown-box';
import DropdownItem from '../../../components/dropdown-box/dropdown-item';
import TableRow from '../../../components/table-row';
import OpenDetails from '../../tokens/table/open-details';
import { TotalAssetsMintedInfoProps } from './assets-table.types';

const TotalAssetsMintedInfo: FC<
  TotalAssetsMintedInfoProps & { index: number }
> = ({
  Icon,
  name,
  value,
  index,
  moreDetails,
  handleClick,
  isDropdownOpen,
}) => {
  return (
    <Box
      key={v4()}
      width="100%"
      borderRadius="0.25rem"
      mr={index != 0 ? '.125rem' : ''}
    >
      <TableRow isFirstRow isDropdownInformation withBG={isDropdownOpen}>
        <Box display="flex" width="100%" alignItems="center" gap="m">
          <Box width="2.25rem" height="2.5rem">
            <Icon width="100%" maxWidth="2.25rem" maxHeight="2.5rem" />
          </Box>
          <Typography variant="small">{name}</Typography>
        </Box>
        <Box
          width="100%"
          display="flex"
          gridColumn="2/-1"
          justifyContent="center"
        >
          <Typography variant="small">{value}</Typography>
        </Box>
        <Box
          zIndex="4"
          top="26px"
          display="flex"
          right="1.25rem"
          position="absolute"
        >
          <OpenDetails isOpen={isDropdownOpen} handleClick={handleClick} />
        </Box>
      </TableRow>
      <DropdownBox isOpen={isDropdownOpen}>
        <TableRow hasDropdown isDropdownInformation withBG={isDropdownOpen}>
          <DropdownItem
            ml="xl"
            display="flex"
            gap="0.25rem"
            flexDirection="column"
            isOpen={isDropdownOpen}
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
            width="100%"
            display="flex"
            gap="0.25rem"
            gridColumn="2/-1"
            alignItems="center"
            flexDirection="column"
            isOpen={isDropdownOpen}
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
        </TableRow>
      </DropdownBox>
    </Box>
  );
};

export default TotalAssetsMintedInfo;
