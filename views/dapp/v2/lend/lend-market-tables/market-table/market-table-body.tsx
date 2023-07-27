import { Motion } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { MoneyMarketUI } from '../lend-table.types';
import { isSupplyRow } from './market-table.utils';
import BorrowMarketTableRow from './market-table-borrow-row';
import MarketTableCollapsible from './market-table-collapsible';
import SupplyMarketTableRow from './market-table-supply-row';

const MarketTableBody: FC<MoneyMarketUI> = ({
  data,
  isEngaged,
  description,
}) => {
  const [toggle, setToggle] = useState({
    element1: true,
  });

  const handleChangeElement = () => {
    setToggle((prevState) => ({
      ...prevState,
      element1: !prevState.element1,
    }));
  };

  return (
    <>
      <MarketTableCollapsible
        isOpen={toggle.element1}
        description={description}
        handleButton={handleChangeElement}
      />
      <Motion
        overflow="hidden"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        animate={{ height: toggle.element1 ? 'auto' : '0' }}
      >
        {data.map((item) =>
          isSupplyRow(item) ? (
            <SupplyMarketTableRow {...item} isEngaged={isEngaged} key={v4()} />
          ) : (
            <BorrowMarketTableRow {...item} isEngaged={isEngaged} key={v4()} />
          )
        )}
      </Motion>
    </>
  );
};

export default MarketTableBody;
