import { always, ifElse, isNil, toString, tryCatch } from 'ramda';

export const safeStringify = tryCatch(JSON.stringify, always(''));

export const makeSWRKey = (
  args: ReadonlyArray<unknown>,
  methodName: string
): string =>
  args
    .map(ifElse(isNil, always(''), toString))
    .concat([methodName])
    .join('|');
