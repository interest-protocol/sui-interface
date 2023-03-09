import { FC } from 'react';

import DEXViewWrapper from './dex-wrapper';
import Pool from './pool';

const DEXPoolView: FC = () => (
  <DEXViewWrapper>
    <Pool />
  </DEXViewWrapper>
);

export default DEXPoolView;
