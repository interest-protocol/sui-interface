import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { CaretUp } from '@/svg';

import BorrowMarketTable from '../borrow-market-table';
import SupplyMarketTable from '../supply-market-table';
import { MarketTableProps } from './market-table.types';

const MarketTable: FC<MarketTableProps> = ({ title }) => {
  const [toggle, setToggle] = useState({
    element1: true,
    element2: true,
  });

  const handleChangeElement1 = () => {
    setToggle((prevState) => ({
      ...prevState,
      element1: !prevState.element1,
    }));
  };

  const handleChangeElement2 = () => {
    setToggle((prevState) => ({
      ...prevState,
      element2: !prevState.element2,
    }));
  };

  return (
    <Box width="100%">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        onClick={
          title === 'Supply Market'
            ? handleChangeElement1
            : handleChangeElement2
        }
      >
        <Typography variant="title6" textAlign="center" py="2xl">
          {title}
        </Typography>
        <Box
          position="absolute"
          right="1rem"
          transform={
            !toggle.element1 || !toggle.element2
              ? 'rotate(180deg)'
              : 'rotate(0deg)'
          }
        >
          <CaretUp maxWidth="100%" maxHeight="100%" width="1.5625rem" />
        </Box>
      </Box>

      <Box>
        {title === 'Supply Market' ? (
          <Motion
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            display={toggle.element1 ? '' : 'none'}
          >
            <SupplyMarketTable />
          </Motion>
        ) : title === 'Borrow Market' ? (
          <Motion
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            display={toggle.element2 ? '' : 'none'}
          >
            <BorrowMarketTable />
          </Motion>
        ) : (
          ''
        )}
      </Box>
    </Box>
  );
};

export default MarketTable;
