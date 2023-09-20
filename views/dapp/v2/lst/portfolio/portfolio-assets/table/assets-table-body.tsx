import { FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { AssetsListProps } from '../../portfolio.type';
import AssetsTableBodyRow from './assets-table-body-row';

const AssetsTableBody: FC<AssetsListProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  return !isLoading ? (
    <>
      {data.map((item, index) => (
        <AssetsTableBodyRow {...item} index={index} key={v4()} />
      ))}
    </>
  ) : (
    <>
      <Skeleton height="2rem" width="100%" />
      <Skeleton height="2rem" width="100%" style={{ marginTop: '1rem' }} />
    </>
  );
};

export default AssetsTableBody;
