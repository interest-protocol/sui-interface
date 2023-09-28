import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CheckSVG, WarningSVG } from '@/components/svg/v2';

import { SelectCardProps } from './select-card.types';

const SelectCard: FC<SelectCardProps> = ({
  title,
  content,
  checked,
  disabled,
  onSelect,
}) => {
  const { dark } = useTheme() as Theme;
  const handleChange = () => !checked && onSelect?.(!checked);

  const disabledBg = dark ? '#991B1B' : '#FECACA';
  const disabledColor = dark ? '#FECACA' : '#991B1B';

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
      bg={disabled ? disabledBg : checked ? 'primary' : 'unset'}
      color={
        disabled ? disabledColor : checked ? 'primary.onPrimary' : 'onSurface'
      }
      borderColor={
        disabled
          ? 'transparent'
          : checked
          ? 'primary'
          : 'outline.outlineVariant'
      }
      nHover={
        disabled
          ? {}
          : {
              borderColor: 'primary',
              background: checked
                ? 'linear-gradient(0deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.32) 100%), #B4C5FF'
                : 'unset',
            }
      }
    >
      <span>{title}</span>
      <Box
        width="1rem"
        height="1rem"
        border="1px solid"
        borderRadius="full"
        borderColor={checked ? 'transparent' : 'currentcolor'}
      >
        {disabled ? (
          <WarningSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        ) : (
          checked && <CheckSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        )}
      </Box>
      {content && <span>{content}</span>}
    </Box>
  );
};

export default SelectCard;
