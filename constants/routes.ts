/**
 * @RoutesEnum is a custom data type
 * @description this data type will help us to uniformize our route names
 */
export enum RoutesEnum {
  Home = 'home',
  DApp = 'dapp',
  Swap = 'swap',
  Farms = 'farms',
  FarmDetails = 'farms-details',
  DEXPool = 'dex-pool',
  DEXFindPool = 'dex-find-pool',
  DEXPoolDetails = 'dex-pool-details',
  Wormhole = 'wormhole',
  Celer = 'celer',
  Faucet = 'faucet',
  Lend = 'lend',
  LiquidityCampaign = 'liquidity-campaign',
  CreateToken = 'create-token',
  LiquidityFarms = 'liquidity-farms',
  LiquidityFarmsDetails = 'liquidity-farms-details',
}

/**
 * @Routes is the constant with our internal or external routes
 * @description this constant will help us to create standard routes
 */
export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.Home]: '/',
  [RoutesEnum.DApp]: '/dapp',
  [RoutesEnum.Swap]: '/dapp/swap',
  [RoutesEnum.Farms]: '/dapp/farms',
  [RoutesEnum.FarmDetails]: '/dapp/farms/details',
  [RoutesEnum.DEXPool]: '/dapp/dex/pool',
  [RoutesEnum.DEXFindPool]: '/dapp/dex/pool/find',
  [RoutesEnum.DEXPoolDetails]: '/dapp/dex/pool/details',
  [RoutesEnum.Faucet]: '/dapp/alpha/faucet',
  [RoutesEnum.CreateToken]: '/dapp/create-token',
  [RoutesEnum.Lend]: '/dapp/alpha/lending',
  [RoutesEnum.LiquidityCampaign]: '/campaign/liquidity',
  [RoutesEnum.Wormhole]: 'https://wormhole.interestprotocol.com/',
  [RoutesEnum.Celer]: 'https://cbridge.celer.network/1/12370001/USDC',
  [RoutesEnum.LiquidityFarms]: '/dapp/liquidity',
  [RoutesEnum.LiquidityFarmsDetails]: '/dapp/liquidity/details',
};
