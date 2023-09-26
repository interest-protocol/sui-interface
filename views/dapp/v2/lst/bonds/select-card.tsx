import { Box } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, ReactNode, useState } from 'react';

import { CheckSVG } from '@/components/svg/v2';

interface SelectCardProps {
  value?: boolean;
  title?: ReactNode;
  content?: ReactNode;
  onChange?: (value: boolean) => void;
}

const SelectCard: FC<SelectCardProps> = ({
  value,
  content,
  onChange,
  title,
}) => {
  const [checked, setCheck] = useState(value ?? false);

  const handleChange = () => {
    setCheck(not);
    onChange?.(!checked);
  };

  return (
    <Box
      p="l"
      gap="m"
      width="100%"
      display="grid"
      borderRadius="m"
      cursor="pointer"
      border="1px solid"
      alignItems="center"
      onClick={handleChange}
      gridTemplateColumns="1fr 1rem"
      color={checked ? 'primary.onPrimary' : 'onSurface'}
      bg={checked ? 'primary.onPrimaryContainer' : 'unset'}
      borderColor={checked ? 'transparent' : 'outline.outlineVariant'}
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
