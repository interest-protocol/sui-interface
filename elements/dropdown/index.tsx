import { FC, useState } from 'react';

import Box from '../box';
import { DropdownProps } from './dropdown.types';
import DropdownList from './dropdown-list';

const dropdownWrapperId = 'dropdown-wrapper';

const Dropdown: FC<DropdownProps> = ({
  bg,
  data,
  mode,
  title,
  header,
  search,
  bottom,
  suffix,
  footer,
  callback,
  minWidth,
  fromRight,
  bgSelected,
  buttonMode,
  customTitle,
  customItems,
  emptyMessage,
  wrapperProps,
  defaultValue,
  staticPosition,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(
    data.findIndex(({ value }) => value === defaultValue)
  );

  const toggleDropdown = () =>
    setIsOpen((state) => {
      callback?.(!state);
      return !state;
    });

  return (
    <Box
      display="flex"
      alignItems="center"
      id={dropdownWrapperId}
      position={staticPosition ? 'static' : 'relative'}
    >
      {mode === 'select' && selectedIndex !== -1 && customTitle ? (
        <Box
          width="100%"
          cursor="pointer"
          alignItems="center"
          whiteSpace="nowrap"
          display="inline-flex"
          onClick={toggleDropdown}
        >
          {data[selectedIndex].displayTitle ||
            data[selectedIndex].displayOption}
          {suffix}
        </Box>
      ) : buttonMode ? (
        <Box
          mx="S"
          px="0.7rem"
          py="0.7rem"
          width="100%"
          height="100%"
          cursor="pointer"
          borderRadius="2rem"
          alignItems="center"
          display="inline-flex"
          onClick={toggleDropdown}
          bg={isOpen ? bg || 'accentActive' : 'bottomBackground'}
          nHover={{
            bg: bg || 'accent',
          }}
          nActive={{
            bg: bgSelected || 'accentActive',
          }}
        >
          {mode === 'select' && selectedIndex !== -1
            ? data[selectedIndex].displayTitle ||
              data[selectedIndex].displayOption
            : title}
          {suffix && <Box as="span" px="S" display="inline-block" />}
          {suffix}
        </Box>
      ) : (
        <Box
          width="100%"
          cursor="pointer"
          whiteSpace="nowrap"
          onClick={toggleDropdown}
          color={isOpen ? bg || 'accent' : 'text'}
        >
          {mode === 'select' && selectedIndex !== -1
            ? data[selectedIndex].displayTitle ||
              data[selectedIndex].displayOption
            : title}
          {suffix}
        </Box>
      )}
      <DropdownList
        bg={bg}
        data={data}
        isOpen={isOpen}
        header={header}
        search={search}
        bottom={bottom}
        footer={footer}
        minWidth={minWidth}
        fromRight={fromRight}
        setIsOpen={setIsOpen}
        bgSelected={bgSelected}
        customItems={customItems}
        wrapperProps={wrapperProps}
        emptyMessage={emptyMessage}
        selectedIndex={selectedIndex}
        toggleDropdown={toggleDropdown}
        setSelectedIndex={setSelectedIndex}
        dropdownWrapperId={dropdownWrapperId}
      />
    </Box>
  );
};

export default Dropdown;
