import { curryN } from 'ramda';
import { FC } from 'react';

import { NextPageWithObjectId } from '@/interface';

import withParamsGuard from './with-params-guard';

type WithObjectIdGuard = (Component: NextPageWithObjectId) => FC;

const withObjectIdGuard: WithObjectIdGuard = curryN(
  2,
  withParamsGuard
)(['objectId']);

export default withObjectIdGuard;
