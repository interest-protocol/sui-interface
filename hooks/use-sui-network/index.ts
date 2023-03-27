import { useContext } from 'react';

import { SuiProviderContext } from '@/components/sui-provider';

export const useSuiNetwork = () => useContext(SuiProviderContext);
