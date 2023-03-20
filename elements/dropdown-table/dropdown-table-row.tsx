import { FC, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useDebounce } from 'use-debounce';
import { v4 } from 'uuid';

import { ArrowSVG } from '@/svg';

import Box from '../box';
import Button from '../button';
import RefBox from '../ref-box';
import Typography from '../typography';
import { DropdownTableRowProps } from './dropdown-table.types';
import DropdownTableCell from './dropdown-table-cell';

const AnimatedBox = animated(Box);

const DropdownTableRow: FC<DropdownTableRowProps> = ({
  items,
  index,
  headings,
  ordinate,
  dropdown,
  isDesktop,
  sideContent,
  bg = 'foreground',
  desktopBg = 'unset',
}) => {
  const mobileRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const { Component: DropdownComponent, args: dropdownArgs } = dropdown;

  const { mHeight, dHeight, arrowInvert } = useSpring({
    from: {
      dHeight: '0%',
      mHeight: '0%',
      arrowInvert: 'scaleY(1)',
    },
    to: {
      dHeight: `${
        isOpenDropdown ? desktopRef.current?.offsetHeight ?? 0 : 0
      }px`,
      mHeight: `${isOpenDropdown ? mobileRef.current?.offsetHeight ?? 0 : 0}px`,
      arrowInvert: !isOpenDropdown ? 'scaleY(1)' : 'scaleY(-1)',
    },
    config: {
      duration: 500,
    },
  });

  const [debouncedDropdownValue] = useDebounce(isOpenDropdown, 500);

  const toggleDropdown = () => setIsOpenDropdown((a) => !a);

  return isDesktop ? (
    <Box display={['none', 'none', 'none', 'block']} bg={desktopBg}>
      <Box
        py="M"
        px="XL"
        display="grid"
        alignItems="center"
        gridTemplateColumns={`1.5fr repeat(${
          headings.length + (ordinate ? 1 : 0)
        }, 1fr)`}
      >
        {items.map((item) => (
          <DropdownTableCell as="td" key={v4()}>
            {item}
          </DropdownTableCell>
        ))}
        <Box textAlign="right">
          {!!dropdown && (
            <Button
              py="L"
              width="3.3rem"
              variant="secondary"
              onClick={toggleDropdown}
              nHover={{ bg: 'accentActive' }}
              bg={isOpenDropdown ? 'accent' : 'bottomBackground'}
            >
              <AnimatedBox
                width="0.5rem"
                display="inline-block"
                style={{ transform: arrowInvert }}
              >
                <ArrowSVG width="100%" maxHeight="0.5rem" maxWidth="0.5rem" />
              </AnimatedBox>
            </Button>
          )}
        </Box>
      </Box>
      <AnimatedBox style={{ height: dHeight }} overflow="hidden">
        <RefBox
          p={debouncedDropdownValue || isOpenDropdown ? 'M' : 'unset'}
          bg="foreground"
          ref={desktopRef}
        >
          {(debouncedDropdownValue || isOpenDropdown) && (
            <DropdownComponent {...dropdownArgs} />
          )}
        </RefBox>
      </AnimatedBox>
    </Box>
  ) : (
    <Box
      display={['block', 'block', 'block', 'none']}
      mt="M"
      borderRadius="M"
      bg={bg}
    >
      <Box
        p="M"
        display="grid"
        cursor="pointer"
        gridTemplateColumns="1fr 1.5fr"
      >
        <Box
          my="M"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          {sideContent}
          {!!dropdown && (
            <Button
              py="M"
              width="2.5rem"
              height="2.5rem"
              variant="secondary"
              onClick={toggleDropdown}
              nHover={{ bg: 'accentActive' }}
              bg={isOpenDropdown ? 'accent' : 'bottomBackground'}
            >
              <AnimatedBox
                width="0.5rem"
                display="inline-block"
                style={{ transform: arrowInvert }}
              >
                <ArrowSVG width="100%" maxHeight="0.5rem" maxWidth="0.5rem" />
              </AnimatedBox>
            </Button>
          )}
        </Box>
        <Box
          display="grid"
          borderRadius="M"
          overflow="hidden"
          gridAutoFlow="column"
          gridTemplateColumns="1fr 7rem"
          gridTemplateRows={`repeat(${
            headings.length + (ordinate ? 1 : 0)
          }, 1fr)`}
        >
          {ordinate && (
            <Typography
              py="M"
              px="M"
              fontSize="S"
              variant="normal"
              color="textSecondary"
            >
              Nº
            </Typography>
          )}
          {headings.map(({ item }) => (
            <Typography
              py="M"
              px="M"
              key={v4()}
              fontSize="S"
              variant="normal"
              color="textSecondary"
            >
              {item}
            </Typography>
          ))}
          {ordinate && (
            <Box
              py="M"
              px="M"
              borderBottom="0.1rem solid"
              borderColor="textDescriptionHigh"
            >
              {index! + 1}
            </Box>
          )}
          {items.map((item) => (
            <Box py="M" px="M" key={v4()}>
              {item}
            </Box>
          ))}
        </Box>
      </Box>
      <AnimatedBox style={{ height: mHeight }} overflow="hidden">
        <RefBox
          bg="foreground"
          p={debouncedDropdownValue || isOpenDropdown ? 'M' : 'unset'}
          ref={mobileRef}
        >
          {(debouncedDropdownValue || isOpenDropdown) && (
            <DropdownComponent {...dropdownArgs} />
          )}
        </RefBox>
      </AnimatedBox>
    </Box>
  );
};

export default DropdownTableRow;
