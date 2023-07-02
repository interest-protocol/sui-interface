import { Motion } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { GroupSupplyRow } from '../market-table.types';
import SupplyMarketTableBodyHeader from './supply-market-table-body-header';
import SupplyMarketTableRow from './supply-market-table-row';

const SupplyMarketTableBody: FC<GroupSupplyRow> = ({
  isEngaged,
  description,
  supplyMarketTableData,
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
      <SupplyMarketTableBodyHeader
        isOpen={toggle.element1}
        description={description}
        handleButton={handleChangeElement}
      />
      <Motion
        overflow="hidden"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        animate={{ height: toggle.element1 ? 'auto' : '0' }}
      >
        {supplyMarketTableData.map((item) => (
          <SupplyMarketTableRow {...item} isEngaged={isEngaged} key={v4()} />
        ))}
      </Motion>
    </>
  );
};

export default SupplyMarketTableBody;
