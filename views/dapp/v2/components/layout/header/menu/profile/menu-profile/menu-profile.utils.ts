interface TransactionData {
  id: {
    txDigest: string;
    eventSeq: string;
  };
  packageId: string;
  transactionModule: string;
  sender: string;
  type: string;
  parsedJson?: Record<string, any> | undefined;
  bcs?: string | undefined;
  timestampMs?: string | undefined;
}
[];

export const parseData = (
  data: ReadonlyArray<TransactionData>
): ReadonlyArray<{
  type: string;
  txId: string;
  date: Date;
  packageId: string;
}> =>
  data.map(({ type, id: { txDigest: txId }, timestampMs, packageId }) => {
    console.log('>>>> Type::', type);
    return {
      type,
      txId,
      packageId,
      date: new Date(Number(timestampMs!)),
    };
  });
