import { formatAddress } from '@mysten/sui.js';

export const getName = (
  account: string,
  suiNSRecord: Record<string, string>
): string =>
  suiNSRecord[account] ? suiNSRecord[account] : formatAddress(account);
