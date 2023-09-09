export type MINT_TYPE_OPTION = 'NONE' | 'ISUI' | 'OTHER';

export type DERIVATED_SUI_SYMBOL = 'iSui' | 'iSui-PC' | 'iSui-YN';

export interface MintTypeProps {
  onChange: (type: string) => void;
  mintTypeOption: MINT_TYPE_OPTION;
}

export interface AmountFieldsProps {
  balance: number;
}
