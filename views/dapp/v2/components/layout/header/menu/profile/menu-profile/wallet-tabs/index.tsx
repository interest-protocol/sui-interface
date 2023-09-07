import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { capitalize } from '@/utils';

import { WalletTabsProps } from '../menu-profile.types';

const WalletTabs: FC<WalletTabsProps> = ({ setToggleTab, toggleTab }) => {
  const t = useTranslations();
  return (
    <Box
      mx="auto"
      p=".125rem"
      width="100%"
      mt="2.875rem"
      display="flex"
      cursor="pointer"
      borderRadius="full"
      bg="inverseSurface"
      justifyContent="space-between"
    >
      <Box
        flex="1"
        p=".5rem 1.5rem"
        borderRadius="full"
        onClick={() => setToggleTab(false)}
        bg={toggleTab ? 'transparent' : 'surface'}
        color={!toggleTab ? 'onSurface' : 'inverseOnSurface'}
      >
        <Typography textAlign="center" variant="small">
          Token
        </Typography>
      </Box>
      <Box
        flex="1"
        p=".5rem 1.5rem"
        borderRadius="full"
        onClick={() => setToggleTab(true)}
        bg={toggleTab ? 'surface' : 'transparent'}
        color={toggleTab ? 'onSurface' : 'inverseOnSurface'}
      >
        <Typography textAlign="center" variant="small">
          {capitalize(t('common.v2.wallet.activity'))}
        </Typography>
      </Box>
    </Box>
  );
};

export default WalletTabs;
