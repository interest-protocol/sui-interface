declare module 'toformat';
type CommonMessages = typeof import('../assets/messages/common/en-US.json');
type FaucetMessages = typeof import('../assets/messages/faucet/en-US.json');
type DexPoolFindMessages =
  typeof import('../assets/messages/dex/pool/find/en-US.json');
type DexPoolDetailsMessages =
  typeof import('../assets/messages/dex/pool/details/en-US.json');
type DexPoolMessages = typeof import('../assets/messages/dex/pool/en-US.json');
type DexSwapMessages = typeof import('../assets/messages/dex/swap/en-US.json');
type FarmsMessages = typeof import('../assets/messages/farms/en-US.json');
type FarmDetailsMessages =
  typeof import('../assets/messages/farms/details/en-US.json');

declare interface IntlMessages
  extends CommonMessages,
    FaucetMessages,
    DexPoolFindMessages,
    DexPoolDetailsMessages,
    DexSwapMessages,
    FarmsMessages,
    FarmDetailsMessages,
    DexPoolMessages {}
