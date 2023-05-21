import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';

import { Routes, RoutesEnum } from '@/constants';
import { LOCAL_STORAGE_VERSION } from '@/constants/local-storage';
import { Box, Button, Typography } from '@/elements';
import { useNetwork, useWeb3 } from '@/hooks';
import { LocalTokenMetadataRecord } from '@/interface';

import { formatLpCoinToPool, isIPXLPCoin } from './pool.utils';
import Pools from './pools';

const Pool: FC = () => {
  const t = useTranslations();
  const { push } = useRouter();
  const { coins } = useWeb3();
  const { network } = useNetwork();
  const tokensMetadataRecord = useReadLocalStorage<LocalTokenMetadataRecord>(
    `${LOCAL_STORAGE_VERSION}-sui-interest-tokens-metadata`
  );
  const lpCoins = coins.filter((coin) => isIPXLPCoin(coin.type, network));

  console.log(
    lpCoins.map((object) =>
      formatLpCoinToPool({ object, network, tokensMetadataRecord })
    )
  );

  return (
    <>
      <Box color="text" width="100%" minWidth={['100%', '40rem']}>
        <Box
          py="L"
          my="L"
          px="L"
          display="flex"
          bg="foreground"
          borderRadius="M"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="normal"
            mr={['unset', 'auto']}
            textTransform="capitalize"
          >
            {t('dexPool.title')}
          </Typography>
          <Box position="relative">
            <Button
              px="XL"
              type="button"
              variant="primary"
              ml={['unset', 'auto']}
              onClick={() => push(Routes[RoutesEnum.DEXFindPool])}
            >
              {t('dexPool.button')}
            </Button>
          </Box>
        </Box>
        <Pools />
      </Box>
    </>
  );
};

export default Pool;
