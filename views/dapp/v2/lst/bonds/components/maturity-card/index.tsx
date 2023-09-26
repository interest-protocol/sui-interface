import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';

import { MaturityCardProps } from './maturity-card.type';

const MaturityCard: FC<MaturityCardProps> = ({
  id,
  onSelected,
  date,
  amount,
  selected,
}) => (
  <Box
    gap="l"
    p="0.875rem"
    display="flex"
    cursor="pointer"
    border="1px solid"
    flexDirection="column"
    borderRadius="0.25rem"
    transition="border-color .5s"
    bg={selected ? 'primary' : 'unset'}
    onClick={() => onSelected(date, amount, id)}
    borderColor={selected ? 'primary' : 'outline.outlineVariant'}
    nHover={{
      borderColor: 'primary',
      background: selected
        ? 'linear-gradient(0deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.32) 100%), #B4C5FF'
        : 'unset',
    }}
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
  </Box>
);

export default MaturityCard;
