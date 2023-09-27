import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CheckSVG } from '@/components/svg/v2';

import { SelectCardProps } from './select-card.types';

const SelectCard: FC<SelectCardProps> = ({
  title,
  content,
  checked,
  onSelect,
}) => {
  const handleChange = () => !checked && onSelect?.(!checked);

  return (
    <Box
      gap="l"
      p="0.875rem"
      width="100%"
      display="grid"
      cursor="pointer"
      border="1px solid"
      alignItems="center"
      onClick={handleChange}
      borderRadius="0.25rem"
      transition="border-color .5s"
      gridTemplateColumns="1fr 1rem"
      bg={checked ? 'primary' : 'unset'}
      color={checked ? 'primary.onPrimary' : 'onSurface'}
      borderColor={checked ? 'primary' : 'outline.outlineVariant'}
      nHover={{
        borderColor: 'primary',
        background: checked
          ? 'linear-gradient(0deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.32) 100%), #B4C5FF'
          : 'unset',
      }}
    >
      <span>{title}</span>
      <Box
        width="1rem"
        height="1rem"
        border="1px solid"
        borderRadius="full"
        borderColor={checked ? 'transparent' : 'currentcolor'}
      >
        {checked && <CheckSVG maxWidth="1rem" maxHeight="1rem" width="100%" />}
      </Box>
      {content && <span>{content}</span>}
    </Box>
  );
};

export default SelectCard;
