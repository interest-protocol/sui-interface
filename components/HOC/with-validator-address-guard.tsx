import { curryN } from 'ramda';

import withParamsGuard from './with-params-guard';

const withValidatorAddressGuard = curryN(
  2,
  withParamsGuard
)(['validatorAddress']);

export default withValidatorAddressGuard;
