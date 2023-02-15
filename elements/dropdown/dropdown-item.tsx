import { FC } from 'react';

import Box from '../box';
import Typography from '../typography';
import { DropdownItemProps } from './dropdown.types';

const DropdownItem: FC<DropdownItemProps> = ({
  setter,
  onSelect,
  minWidth,
  disabled,
  isSelected,
  customItem,
  noSelectable,
  closeDropdown,
  displayOption,
  bg,
  bgSelected,
}) => {
  const handleSelect = () => {
    if (!isSelected) {
      if (!noSelectable) setter();
      onSelect?.();
    } else closeDropdown?.();
  };

  return (
    <Box
      {...(!customItem && {
        m: 'M',
        display: 'flex',
        minHeight: '3rem',
        borderRadius: '2rem',
        alignItems: 'center',
        overflow: 'hidden',
        minWidth: minWidth || ['12rem', '17rem'],
        boxShadow: '0px 5px 5px -5px rgba(0, 0, 0, 0.35)',
        bg: disabled
          ? 'disabled'
          : isSelected
          ? bgSelected || 'accent'
          : 'bottomBackground',
        ...(!isSelected &&
          !disabled && {
            hover: {
              bg: bg || 'accent',
            },
            active: {
              bg: bgSelected || 'accentActive',
            },
          }),
      })}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      onClick={disabled ? undefined : handleSelect}
    >
      {typeof displayOption == 'string' ? (
        <Typography px="L" variant="normal">
          {displayOption}
        </Typography>
      ) : (
        displayOption
      )}
    </Box>
  );
};

export default DropdownItem;
