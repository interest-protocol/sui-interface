import { Motion } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { GroupSupplyRow } from '../market-table.types';
import SupplyMarketTableGroupRowHeader from './group-row-header';
import SupplyMarketTableRow from './rows';

const SupplyMarketTableGroupRow: FC<GroupSupplyRow> = ({
  isEngaged,
  description,
  SupplyMarketTableData,
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
      <SupplyMarketTableGroupRowHeader
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
        {SupplyMarketTableData.map((item) => (
          <SupplyMarketTableRow {...item} isEngaged={isEngaged} key={v4()} />
        ))}
      </Motion>
    </>
  );
};

export default SupplyMarketTableGroupRow;
