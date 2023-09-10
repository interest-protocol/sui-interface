import { FC } from 'react';
import { v4 } from 'uuid';

import { TokensListProps } from '../../portfolio.type';
import TokensTableBodyRow from './tokens-table-body-row';

const TokensTableBody: FC<TokensListProps> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <TokensTableBodyRow {...item} index={index} key={v4()} />
      ))}
    </>
  );
};

export default TokensTableBody;
