import { Box, RadioButton, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SUISVG } from '@/components/svg/v2';
import TableRow from '@/views/dapp/v2/lst/components/table-row';

import { ValidatorListTableDataItemProps } from '../../your-info.types';

const ValidatorsTableDataItem: FC<ValidatorListTableDataItemProps> = ({
  index,
  validator,
  newValidator,
  setNewValidator,
}) => {
  const selectValidator = () => {
    setNewValidator({
      name: validator.name,
      imageUrl: validator.imageUrl,
      suiAddress: validator.suiAddress,
    });
  };

  return (
    <Box
      key={v4()}
      cursor="pointer"
      borderRadius="m"
      nHover={{
        bg: 'surface.surfaceVariant',
      }}
      onClick={selectValidator}
      minWidth={['55em', '55em', '55em', 'unset']}
    >
      <TableRow numCols={5}>
        <Typography variant="small">{index + 1}</Typography>
        <Box display="flex" gap="m" alignItems="center">
          <Box display="flex">
            <Box
              width="2rem"
              height="2rem"
              borderRadius="0.25rem"
              backgroundColor="white"
              backgroundSize="contain"
              backgroundPosition="center center"
              backgroundImage={`url(${validator.imageUrl})`}
            />
          </Box>
          <Typography variant="medium">{validator.name}</Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Typography variant="small" textAlign="center">
              {validator.stakingPoolSuiBalance}
            </Typography>
            <Box
              bg="#6FBCF0"
              width="1rem"
              color="white"
              height="1rem"
              display="flex"
              borderRadius="full"
              justifyContent="center"
            >
              <SUISVG
                maxHeight="1rem"
                maxWidth="1rem"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
        <Typography variant="small" textAlign="right">
          {validator.apy}%
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <RadioButton
            onClick={selectValidator}
            defaultValue={newValidator.suiAddress === validator.suiAddress}
          />
        </Box>
      </TableRow>
    </Box>
  );
};

export default ValidatorsTableDataItem;
