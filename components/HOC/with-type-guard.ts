import { curryN } from 'ramda';

import withParamsGuard from './with-params-guard';

const withTypeGuard = curryN(2, withParamsGuard)(['type']);

export default withTypeGuard;
