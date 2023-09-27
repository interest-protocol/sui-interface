import { Box, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { SUISVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';

import TableRow from '../../../components/table-row';
import { ValidatorsTableDataProps } from '../all-validators.types';

const ValidatorsTableData: FC<ValidatorsTableDataProps> = ({
  control,
  validators,
}) => {
  const search = useWatch({ control, name: 'search' });
  const { push } = useRouter();

  return (
    <Box>
      {validators
        .filter(
          ({ name, description }) =>
            !search ||
            name.toLowerCase().includes(search.toLocaleLowerCase()) ||
            description.toLowerCase().includes(search.toLowerCase())
        )
        .map(
          (
            {
              apy,
              name,
              imageUrl,
              votingPower,
              suiAddress,
              commissionRate,
              stakingPoolSuiBalance,
            },
            index
          ) => (
            <Box
              key={v4()}
              cursor="pointer"
              borderRadius="m"
              onClick={() =>
                push(
                  `${
                    Routes[RoutesEnum.LSTValidatorDetails]
                  }?validatorAddress=${suiAddress}`
                )
              }
              nHover={{
                bg: 'surface.surfaceVariant',
              }}
            >
              <TableRow numCols={6}>
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
                      backgroundImage={`url(${imageUrl})`}
                    />
                  </Box>
                  <Typography variant="medium">{name}</Typography>
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  <Box display="flex" alignItems="center" gap="0.5rem">
                    <Typography variant="small" textAlign="center">
                      {stakingPoolSuiBalance}
                    </Typography>
                    <Box
                      width="1rem"
                      height="1rem"
                      display="flex"
                      overflow="hidden"
                      borderRadius="full"
                      justifyContent="center"
                    >
                      <SUISVG
                        filled
                        width="100%"
                        height="100%"
                        maxWidth="1rem"
                        maxHeight="1rem"
                      />
                    </Box>
                  </Box>
                </Box>
                <Typography variant="small" textAlign="right">
                  {apy}%
                </Typography>
                <Typography variant="small" textAlign="center">
                  {votingPower}%
                </Typography>
                <Typography variant="small" textAlign="right">
                  {commissionRate}%
                </Typography>
              </TableRow>
            </Box>
          )
        )}
    </Box>
  );
};

export default ValidatorsTableData;
