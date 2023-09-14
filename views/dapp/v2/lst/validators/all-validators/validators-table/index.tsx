import { Box, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { SUISVG } from '@/components/svg/v2';
import { FixedPointMath } from '@/lib';
import { formatMoney } from '@/utils';
import { useGetValidatorsApy } from '@/views/dapp/v2/lst/lst.hooks';

import TableRow from '../../../components/table-row';
import { useGetValidatorsStakePosition, useLstData } from '../../../lst.hooks';
import { AllValidatorsProps } from '../all-validators.types';
import ValidatorsTableHead from './validators-table-head';

const ValidatorsTable: FC<AllValidatorsProps> = ({
  control,
  activeValidators,
}) => {
  const { lstStorage } = useLstData();
  const {
    data: validatorStakeDistribuition,
    isLoading: isValidatorTableLoading,
  } = useGetValidatorsStakePosition(
    lstStorage.validatorTable.head,
    lstStorage.validatorTable.tail
  );

  const search = useWatch({ control, name: 'search' });

  const { data: validatorsApy, isLoading: validatorsApyLoading } =
    useGetValidatorsApy();

  if (validatorsApyLoading) return <>loading</>; // TODO: Loading APY

  const apyMap =
    validatorsApy?.apys?.reduce(
      (acc, { address, apy }) => ({ ...acc, [address]: apy }),
      {}
    ) ?? [];

  console.log({
    apyMap,
    validatorsApy,
    validatorsApyLoading,
    validatorStakeDistribuition,
    activeValidators,
    isValidatorTableLoading,
  });

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
                  suiAddress,
                  projectUrl,
                  commissionRate,
                  stakingPoolSuiBalance,
                },
                index
              ) => (
                <Box
                  key={v4()}
                  cursor="pointer"
                  borderRadius="m"
                  onClick={() => window.open(projectUrl)}
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
                          {formatMoney(
                            FixedPointMath.toNumber(
                              BigNumber(stakingPoolSuiBalance)
                            )
                          )}
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
                      {Number(
                        (apyMap[suiAddress] ?? 0).toFixed(3)
                      ).toPrecision()}
                      %
                    </Typography>
                    <Typography variant="small" textAlign="right">
                      {Number(
                        FixedPointMath.toNumber(
                          BigNumber(
                            validatorStakeDistribuition[suiAddress] ?? '0'
                          )
                        ).toFixed(4)
                      ).toPrecision()}{' '}
                      SUI
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
