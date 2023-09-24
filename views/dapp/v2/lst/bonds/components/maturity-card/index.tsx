import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';
import { ISuiYNSVG } from '@/svg';

import { MaturityCardProps } from './maturity-card.type';

const MaturityCard: FC<MaturityCardProps> = ({
  id,
  onSelected,
  date,
  amount,
  selected,
}) => (
  <Box
    borderRadius="0.25rem"
    border="1px solid"
    borderColor={selected ? 'primary' : 'outline.outlineVariant'}
    p="0.875rem"
    transition="border-color .5s"
    cursor="pointer"
    display="flex"
    flexDirection="column"
    gap="l"
    nHover={{
      borderColor: selected ? 'primary' : 'primary',
      background: selected
        ? 'linear-gradient(0deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.32) 100%), #B4C5FF'
        : 'unset',
    }}
    onClick={() => onSelected(date, amount, id)}
    bg={selected ? 'primary' : 'unset'}
  >
    <Box>
      <Box
        width="1.5rem"
        height="1.5rem"
        borderRadius="full"
        border="2px solid"
        borderColor={
          selected ? 'primary.primaryContainer' : 'outline.outlineVariant'
        }
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg={selected ? 'primary.primaryContainer' : 'unset'}
        color="primary.onPrimaryContainer"
        float="right"
      >
        <CheckmarkSVG
          width="100%"
          maxWidth="0.85rem"
          maxHeight="0.85rem"
          display={selected ? 'flex' : 'none'}
        />
      </Box>
    </Box>
    <Box display="flex">
      <Box color="white" mr="0.5rem">
        <ISuiYNSVG maxHeight="2.5rem" maxWidth="2.5rem" width="100%" filled />
      </Box>
      <Box color={selected ? 'primary.onPrimary' : 'onSurface'}>
        <Typography variant="small" fontSize="0.875rem">
          {date}
        </Typography>
        <Typography variant="small" fontSize="0.875rem" opacity="0.6">
          {amount}
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default MaturityCard;
