export type MINT_TYPE_OPTION = 'NONE' | 'ISUI' | 'OTHER';

export type DERIVATED_SUI_SYMBOL = 'SUI' | 'iSui' | 'iSui-PC' | 'iSui-YN';

export interface MintTypeProps {
  onChange: (type: string) => void;
  mintTypeOption: MINT_TYPE_OPTION;
}

export interface AmountFieldsProps {
  balance: number;
}

import BigNumber from 'bignumber.js';

export interface LstFee {
  base: BigNumber;
  kink: BigNumber;
  jump: BigNumber;
}

export interface LstPool {
  base: BigNumber;
  elastic: BigNumber;
}

export interface LstStorage {
  pool: LstPool;
  fee: LstFee;
  lastEpoch: BigNumber;
  totalPrincipal: BigNumber;
  validatorCount: number;
  whiteListedValidators: ReadonlyArray<string>;
}
