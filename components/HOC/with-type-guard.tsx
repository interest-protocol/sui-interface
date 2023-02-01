import { curryN } from 'ramda';
import { FC } from 'react';

import { NextPageWithType } from '@/interface';

import withParamsGuard from './with-params-guard';

type TWithTypeGuard = (Component: NextPageWithType) => FC;

const withTypeGuard: TWithTypeGuard = curryN(2, withParamsGuard)(['type']);

export default withTypeGuard;
