import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { SUISVG } from '@/components/svg/v2';
import { formatMoney } from '@/utils';

import TableRow from '../../../components/table-row';
import { AllValidatorsProps } from '../all-validators.types';
import ValidatorsTableHead from './validators-table-head';

const ValidatorsTable: FC<AllValidatorsProps> = ({
  control,
  activeValidators,
}) => {
  const search = useWatch({ control, name: 'search' });

  return (
    <Box
      width="100%"
      display="flex"
      overflowX="auto"
      borderRadius="m"
      overflowY="hidden"
      color="onSurface"
      gridColumn="1/-1"
      flexDirection="column"
    >
      <Box minWidth="55em">
        <ValidatorsTableHead />
        <Box>
          {activeValidators
            .filter(
              ({ name, description }) =>
                !search ||
                name.toLowerCase().includes(search.toLocaleLowerCase()) ||
                description.toLowerCase().includes(search.toLowerCase())
            )
            .map(
              (
                {
                  name,
                  imageUrl,
                  projectUrl,
                  commissionRate,
                  stakingPoolSuiBalance,
                },
                index
              ) => (
                <Box
                  key={v4()}
                  cursor="pointer"
                  onClick={() => window.open(projectUrl)}
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
                          backgroundImage={`url(${imageUrl})`}
                        />
                      </Box>
                      <Typography variant="medium">{name}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                      <Box display="flex" alignItems="center" gap="0.5rem">
                        <Typography variant="small" textAlign="center">
                          {formatMoney(stakingPoolSuiBalance / 10e9)}
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
                      {0}%
                    </Typography>
                    <Typography variant="small" textAlign="right">
                      {commissionRate / 1000}%
                    </Typography>
                  </TableRow>
                </Box>
              )
            )}
        </Box>
      </Box>
    </Box>
  );
};

export default ValidatorsTable;
