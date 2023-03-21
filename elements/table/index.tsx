import { pathOr } from 'ramda';
import { FC, useCallback, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import useEventListener from '@/hooks/use-event-listener';

import Box from '../box';
import Typography from '../typography';
import {
  CellProps,
  ResponsiveTableProps,
  TableLoadingProps,
  TableRowProps,
} from './table.types';

const Cell: FC<CellProps> = ({ as, tip, children }) => (
  <Box
    py="L"
    px="M"
    data-tooltip-id="interest-tooltip"
    data-tooltip-content={tip}
    textAlign="left"
    fontWeight={400}
    {...(tip && { cursor: 'help' })}
    role={as == 'td' ? 'gridcell' : 'columnheader'}
  >
    {children}
  </Box>
);

const TableLoading: FC<TableLoadingProps> = ({ columns }) => (
  <Box
    py="M"
    px="XL"
    role="row"
    key={v4()}
    display="grid"
    alignItems="center"
    gridTemplateColumns={`repeat(${columns}, 1fr)`}
  >
    {Array.from({ length: columns }).map(() => (
      <Cell as="td" key={v4()}>
        <Skeleton />
      </Cell>
    ))}
  </Box>
);

const TableRow: FC<TableRowProps> = ({
  bg,
  index,
  items,
  button,
  ordinate,
  headings,
  hasButton,
  separated,
  desktopBg,
  mobileSide,
  handleClick,
  specialRowHover,
}) => {
  const incomingBg = bg ?? 'foreground';
  const incomingDesktopBg = desktopBg ?? 'unset';

  return (
    <>
      <Box
        transition="none"
        border="1px solid"
        onClick={handleClick}
        borderColor="transparent"
        my={separated ? 'M' : 'unset'}
        borderRadius={separated ? 'L' : 'unset'}
        display={['none', 'none', 'none', 'block']}
        cursor={handleClick ? 'pointer' : 'normal'}
        bg={desktopBg ? incomingDesktopBg : separated ? 'foreground' : 'unset'}
        {...(specialRowHover && {
          borderRadius: 'L',
        })}
        nHover={
          specialRowHover || separated
            ? {
                borderColor: 'accent',
              }
            : {
                bg: handleClick ? 'bottomBackground' : 'transparent',
              }
        }
      >
        <Box
          py="M"
          px="XL"
          role="row"
          display="grid"
          alignItems="center"
          gridTemplateColumns={`1.5fr repeat(${
            headings.length + (ordinate ? 1 : 0) + (hasButton ? 1 : 0) - 1
          }, 1fr)`}
        >
          {ordinate && (
            <Cell as="td" key={v4()}>
              {index + 1}
            </Cell>
          )}
          {items.map((item) => (
            <Cell as="td" key={v4()}>
              {item}
            </Cell>
          ))}
          {button && <Cell as="td">{button}</Cell>}
        </Box>
      </Box>
      <Box
        mt="M"
        bg={incomingBg}
        borderRadius="M"
        onClick={handleClick}
        display={['block', 'block', 'block', 'none']}
        nHover={{
          bg: 'bottomBackground',
        }}
      >
        <Box display="flex" flexDirection="column" p="L">
          <Box my="L" display="flex" justifyContent="center">
            {mobileSide}
          </Box>
          <Box
            key={v4()}
            display="grid"
            borderRadius="M"
            overflow="hidden"
            gridAutoFlow="column"
            columnGap="1rem"
            gridTemplateColumns="1fr 1fr"
            gridTemplateRows={`repeat(${
              headings.length + (ordinate ? 1 : 0)
            }, 1fr)`}
          >
            {ordinate && (
              <Typography
                p="M"
                fontSize="S"
                variant="normal"
                color="textSecondary"
              >
                Nº
              </Typography>
            )}
            {headings.map(({ item }) => (
              <Typography
                p="M"
                key={v4()}
                fontSize="S"
                variant="normal"
                color="textSecondary"
                textAlign="right"
              >
                {item}
              </Typography>
            ))}
            {ordinate && <Box p="M">{index + 1}</Box>}
            {items.map((item) => (
              <Box
                key={v4()}
                display="flex"
                alignItems="stretch"
                flexDirection="column"
              >
                <Box p="M">{item}</Box>
              </Box>
            ))}
          </Box>
          <Box my="L" display="flex" justifyContent="center">
            {!!button && button}
          </Box>
        </Box>
      </Box>
    </>
  );
};

const Table: FC<ResponsiveTableProps> = ({
  data,
  loading,
  ordinate,
  headings,
  hasButton,
  isDesktop,
  separated,
  specialRowHover,
  backgroundColorMap,
}) => {
  const [desktop, setDesktop] = useState(!!isDesktop);

  const handleSetDesktop = useCallback(() => {
    const mediaIsDesktop = window.matchMedia('(min-width: 64em)').matches;
    setDesktop(mediaIsDesktop);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  return (
    <>
      {desktop ? (
        <Box
          my="L"
          overflow="hidden"
          borderColor="textDescription"
          display={['none', 'none', 'none', 'block']}
        >
          <Box role="table" width="100%" overflowX="auto" overflowY="hidden">
            <Box
              my="M"
              py="M"
              px="XL"
              role="row"
              fontSize="S"
              display="grid"
              bg="foreground"
              borderRadius="L"
              alignItems="center"
              color="textSecondary"
              gridTemplateColumns={`1.5fr repeat(${
                headings.length + (ordinate ? 1 : 0) + (hasButton ? 1 : 0) - 1
              }, 1fr)`}
            >
              {ordinate && <Cell as="th">Nº</Cell>}
              {headings.map(({ item, tip }) => (
                <Cell as="th" key={v4()} tip={tip}>
                  {item}
                </Cell>
              ))}
              {hasButton && <Cell as="th" />}
            </Box>
            <Box
              my="M"
              overflow="hidden"
              bg={separated ? 'unset' : 'foreground'}
              borderRadius={separated ? 'unset' : 'L'}
            >
              {loading ? (
                <TableLoading columns={headings.length + (ordinate ? 1 : 0)} />
              ) : (
                data.map(({ items, button, handleClick }, index) => (
                  <TableRow
                    isDesktop
                    key={v4()}
                    index={index}
                    items={items}
                    button={button}
                    ordinate={ordinate}
                    headings={headings}
                    separated={separated}
                    mobileSide={undefined}
                    hasButton={!!hasButton}
                    handleClick={handleClick}
                    desktopBg={
                      backgroundColorMap
                        ? pathOr(
                            undefined,
                            [index.toString(), 'desktopBg'],
                            backgroundColorMap
                          )
                        : undefined
                    }
                    specialRowHover={specialRowHover}
                  />
                ))
              )}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box my="XL" width="100%" display={['block', 'block', 'block', 'none']}>
          {data.map(({ items, button, mobileSide, handleClick }, index) => (
            <TableRow
              key={v4()}
              index={index}
              items={items}
              button={button}
              ordinate={ordinate}
              headings={headings}
              hasButton={!!hasButton}
              mobileSide={mobileSide}
              handleClick={handleClick}
              bg={
                backgroundColorMap
                  ? pathOr(
                      undefined,
                      [index.toString(), 'bg'],
                      backgroundColorMap
                    )
                  : undefined
              }
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default Table;
