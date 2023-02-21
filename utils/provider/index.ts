import { JsonRpcProvider, Network } from '@mysten/sui.js';

export const provider = new JsonRpcProvider(Network.DEVNET);

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
