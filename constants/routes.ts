import { Network } from '@interest-protocol/sui-amm-sdk';

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
  LSTStake = 'lst',
  LSTBonds = 'lst-bonds',
  LSTBondsStake = 'lst-bonds-stake',
  LSTBondsUnstake = 'lst-bonds-unstake',
  LSTBondsRewards = 'lst-bonds-rewards',
  LSTValidators = 'lst-validators',
  LSTValidatorDetails = 'lst-validator-details',
  LSTPortfolio = 'lst-portfolio',
  LSTStats = 'lst-stats',
  Metrics = 'metrics',
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
  [RoutesEnum.LSTStake]: '/dapp/alpha/lst',
  [RoutesEnum.LSTBonds]: '/dapp/alpha/lst/bonds',
  [RoutesEnum.LSTBondsStake]: '/dapp/alpha/lst/bonds/stake',
  [RoutesEnum.LSTBondsUnstake]: '/dapp/alpha/lst/bonds/unstake',
  [RoutesEnum.LSTBondsRewards]: '/dapp/alpha/lst/bonds/rewards',
  [RoutesEnum.LSTValidatorDetails]: '/dapp/alpha/lst/validators/details',
  [RoutesEnum.LSTValidators]: '/dapp/alpha/lst/validators',
  [RoutesEnum.LSTPortfolio]: '/dapp/alpha/lst/portfolio',
  [RoutesEnum.LSTStats]: '/dapp/alpha/lst/stats',
  [RoutesEnum.Swap]: '/dapp/swap',
  [RoutesEnum.Farms]: '/dapp/farms',
  [RoutesEnum.FarmDetails]: '/dapp/farms/details',
  [RoutesEnum.DEXPool]: '/dapp/dex/pool',
  [RoutesEnum.DEXFindPool]: '/dapp/dex/pool/find',
  [RoutesEnum.DEXPoolDetails]: '/dapp/dex/pool/details',
  [RoutesEnum.Faucet]: '/dapp/alpha/faucet',
  [RoutesEnum.CreateToken]: '/dapp/create-token',
  [RoutesEnum.Lend]: '/dapp/alpha/lending',
  [RoutesEnum.Metrics]: '/dapp/metrics',
  [RoutesEnum.LiquidityCampaign]: '/campaign/liquidity',
  [RoutesEnum.Wormhole]: 'https://wormhole.interestprotocol.com/',
  [RoutesEnum.Celer]: 'https://cbridge.celer.network/1/12370001/USDC',
  [RoutesEnum.LiquidityFarms]: '/dapp/liquidity',
  [RoutesEnum.LiquidityFarmsDetails]: '/dapp/liquidity/details',
};

export const NETWORK_RESTRICTION: Record<Network, ReadonlyArray<string>> = {
  [Network.DEVNET]: [],
  [Network.TESTNET]: [Routes[RoutesEnum.Lend], Routes[RoutesEnum.Faucet]],
  [Network.MAINNET]: [
    Routes[RoutesEnum.Metrics],
    Routes[RoutesEnum.Wormhole],
    Routes[RoutesEnum.Celer],
  ],
};
