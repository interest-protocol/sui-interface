import { curryN } from 'ramda';

import withParamsGuard from './with-params-guard';

const withObjectIdGuard = curryN(2, withParamsGuard)(['objectId']);

export default withObjectIdGuard;
