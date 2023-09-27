import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC, useMemo } from 'react';
import { v4 } from 'uuid';

import { CheckmarkSVG, SUISVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { GotoSVG } from '@/svg';
import TableRow from '@/views/dapp/v2/lst/components/table-row';

import { ValidatorListTableDataItemProps } from '../../your-info.types';

const ValidatorsTableDataItem: FC<ValidatorListTableDataItemProps> = ({
  index,
  validator,
  handleSelected,
  currentValidatorAddress,
}) => {
  const rating = useMemo(() => Number((Math.random() * 10).toFixed(0)), []);
  const review = useMemo(() => Number((Math.random() * 100).toFixed(0)), []);

  return (
    <Box
      key={v4()}
      cursor="pointer"
      borderRadius="m"
      nHover={{
        bg: 'surface.surfaceVariant',
      }}
      minWidth={['55em', '55em', '55em', 'unset']}
      onClick={(e) => {
        handleSelected(validator.suiAddress);
        e.stopPropagation();
      }}
    >
      <TableRow numCols={6} extraSpace={3}>
        <Typography variant="small">
          {currentValidatorAddress == validator.suiAddress ? (
            <CheckmarkSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
          ) : (
            index + 1
          )}
        </Typography>
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
          <Box width="max-content">
            <Typography variant="medium">{validator.name}</Typography>
            <Box display="flex">
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Typography variant="small" textAlign="center">
                  {validator.lstStaked}
                </Typography>
                <Box
                  width="1rem"
                  color="white"
                  height="1rem"
                  display="flex"
                  overflow="hidden"
                  borderRadius="full"
                  justifyContent="center"
                >
                  <SUISVG
                    filled
                    maxHeight="1rem"
                    maxWidth="1rem"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography variant="small" textAlign="right">
          {validator.apy}%
        </Typography>
        <Typography variant="small" textAlign="right">
          <Typography
            as="span"
            variant="small"
            color={rating > 7 ? 'success' : rating < 5 ? 'error' : 'warning'}
          >
            {rating}
          </Typography>
          /10
        </Typography>
        <Typography
          variant="small"
          color={review <= 50 ? 'error' : 'success'}
          textAlign="right"
        >
          {review}%
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <a
            onClick={(e) => e.stopPropagation()}
            href={`${Routes[RoutesEnum.LSTValidatorDetails]}?validatorAddress=${
              validator.suiAddress
            }`}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="icon">
              <GotoSVG
                width="100%"
                height="100%"
                maxWidth="2.5rem"
                maxHeight="2.5rem"
              />
            </Button>
          </a>
        </Box>
      </TableRow>
    </Box>
  );
};

export default ValidatorsTableDataItem;
