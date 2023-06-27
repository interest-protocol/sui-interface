import { Motion } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { GroupBorrowRow } from '../market-table.types';
import BorrowMarketTableGroupRowHeader from './group-row-header';
import BorrowMarketTableRow from './rows';

const BorrowMarketTableGroupRow: FC<GroupBorrowRow> = ({
  isEngaged,
  description,
  BorrowMarketTableData,
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
      <BorrowMarketTableGroupRowHeader
        description={description}
        handleButton={handleChangeElement}
        isOpen={toggle.element1}
      />
      <Motion
        initial={{ height: toggle.element1 ? '0' : 'auto' }}
        animate={{ height: toggle.element1 ? 'auto' : '0' }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        overflow="hidden"
      >
        {BorrowMarketTableData.map((item) => (
          <BorrowMarketTableRow {...item} isEngaged={isEngaged} key={v4()} />
        ))}
      </Motion>
    </>
  );
};

export default BorrowMarketTableGroupRow;
