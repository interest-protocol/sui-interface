export interface NFTRowItemProps {
  id: number;
  value: {
    coin: number;
    inUSD: number;
  };
}

export interface NFTListProps {
  data: ReadonlyArray<NFTRowItemProps>;
}
