import { useContext } from 'react';

import { NetworkProviderContext } from '@/components/network-provider';

export const useNetwork = () => useContext(NetworkProviderContext);
