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
  Earn = 'earn',
  EarnDetails = 'earn-details',
  EarnCreatePool = 'earn-create-pool',
  EarnFindPool = 'earn-find-pool',
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
  [RoutesEnum.Earn]: '/dapp/alpha/earn',
  [RoutesEnum.EarnDetails]: '/dapp/alpha/earn/details',
  [RoutesEnum.EarnCreatePool]: '/dapp/alpha/earn/create-pool',
  [RoutesEnum.EarnFindPool]: '/dapp/alpha/earn/find-pool',
  [RoutesEnum.LiquidityCampaign]: '/campaign/liquidity',
  [RoutesEnum.Bridge]: 'https://wormhole.interestprotocol.com/',
  [RoutesEnum.LiquidityFarms]: '/dapp/liquidity',
  [RoutesEnum.LiquidityFarmsDetails]: '/dapp/liquidity/details',
};
