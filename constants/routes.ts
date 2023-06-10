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
  Bridge = 'bridge',
  Faucet = 'faucet',
  Lend = 'lend',
  LendDetails = 'lend-details',
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
  [RoutesEnum.Faucet]: '/dapp/faucet',
  [RoutesEnum.CreateToken]: '/dapp/create-token',
  [RoutesEnum.Lend]: '/dapp/v2/lending',
  [RoutesEnum.LendDetails]: '/dapp/v2/lending/details',
  [RoutesEnum.LiquidityCampaign]: '/campaign/liquidity',
  [RoutesEnum.Bridge]: 'https://wormhole.interestprotocol.com/',
  [RoutesEnum.LiquidityFarms]: '/dapp/liquidity',
  [RoutesEnum.LiquidityFarmsDetails]: '/dapp/liquidity/details',
};
