import { ParsedData, TransactionData } from './menu-profile.types';

export const parseData = (data: ReadonlyArray<TransactionData>): ParsedData =>
  data
    .map(({ type, id: { txDigest: txId }, timestampMs, packageId }) => ({
      type,
      txId,
      packageId,
      date: new Date(Number(timestampMs!)),
    }))
    .reduce((acc, curr) => {
      const key = curr.date.getFullYear() * 100 + (curr.date.getMonth() + 1);

      return {
        ...acc,
        [key]: (acc[key] ?? []).concat(curr),
      };
    }, {} as ParsedData);
