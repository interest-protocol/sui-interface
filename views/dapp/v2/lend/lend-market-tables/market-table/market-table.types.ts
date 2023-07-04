export interface MarketTableProps {
  title: string;
  isSupply?: boolean;
}

export interface MarketTableTokenIconProps {
  type: string;
}

export interface MarketTableCollapsibleProps {
  isOpen: boolean;
  description: string;
  handleButton: () => void;
}
