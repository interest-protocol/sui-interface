/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';

import RefBox from '../ref-box';
import Typography from '../typography';
import { DropdownListProps } from './dropdown.types';
import DropdownItem from './dropdown-item';

const DropdownList: FC<DropdownListProps> = ({
  data,
  isOpen,
  footer,
  header,
  bottom,
  search,
  minWidth,
  setIsOpen,
  fromRight,
  customItems,
  customTitle,
  emptyMessage,
  wrapperProps,
  selectedIndex,
  toggleDropdown,
  setSelectedIndex,
  dropdownWrapperId,
  bg,
  bgSelected,
}) => {
  const [safeMarginLeft, setSafeMarginLeft] = useState<boolean>(false);
  const [safeMarginRight, setSafeMarginRight] = useState<boolean>(false);

  const closeDropdown = useCallback((event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == dropdownWrapperId) ||
      event?.composedPath()?.some((node: any) => node?.id == dropdownWrapperId)
    ) {
      return;
    }
    setIsOpen(false);
  }, []);

  const handleSelect = (index: number) => () => {
    setSelectedIndex(index);
    toggleDropdown();
  };

  const dropdownContainerRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

  useEffect(() => {
    const domRect = dropdownContainerRef.current?.getBoundingClientRect();
    const screenWidth = document.documentElement.clientWidth;

    setSafeMarginLeft(!!domRect && domRect.left < 0);
    setSafeMarginRight(!!domRect && screenWidth - domRect.right < 0);
  }, [isOpen]);

  const target = data.filter(({ value }) =>
    value.toLocaleLowerCase().match(`^${search?.toLocaleLowerCase() ?? ''}`)
  );

  if (!isOpen) return null;

  return (
    <RefBox
      p="M"
      zIndex={4}
      bg="foreground"
      maxHeight="22rem"
      overflowY="auto"
      overflowX="hidden"
      borderRadius="M"
      position="absolute"
      ref={dropdownContainerRef}
      boxShadow="0 0 1rem rgba(0,0,0,.3)"
      left={safeMarginLeft ? '1rem' : 'unset'}
      right={safeMarginRight ? '1rem' : fromRight ? '1rem' : 'unset'}
      {...(bottom
        ? { bottom: '5rem' }
        : { top: customTitle ? '2rem' : '4rem' })}
      {...wrapperProps}
    >
      {header &&
        (typeof header === 'string' ? (
          <Typography variant="normal" p="L" fontSize="S" textAlign="center">
            {header}
          </Typography>
        ) : (
          header
        ))}
      {target.length
        ? target.map((item, index) => (
            <DropdownItem
              key={v4()}
              minWidth={minWidth}
              setter={handleSelect(index)}
              customItem={customItems}
              isSelected={index === selectedIndex}
              {...(index === selectedIndex && {
                closeDropdown: toggleDropdown,
              })}
              bg={bg}
              bgSelected={bgSelected}
              {...item}
            />
          ))
        : emptyMessage && (
            <Typography variant="normal" fontSize="S" my="L" textAlign="center">
              {emptyMessage}
            </Typography>
          )}
      {footer && (
        <Typography
          p="L"
          fontSize="XS"
          variant="normal"
          textAlign="center"
          whiteSpace="nowrap"
        >
          {footer}
        </Typography>
      )}
    </RefBox>
  );
};

export default DropdownList;
