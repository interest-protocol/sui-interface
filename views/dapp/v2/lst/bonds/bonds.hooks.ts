import { useContext } from 'react';

import bondsContext from './context';
import { IBondsContext } from './context/bonds-context.types';

export const useBondsContext = (): IBondsContext => useContext(bondsContext);
