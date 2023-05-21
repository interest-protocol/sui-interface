import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { Switch } from '@/components';
import { Routes, RoutesEnum } from '@/constants';
import { Box, Button, Typography } from '@/elements';

import Pools from './pools';

const Pool: FC = () => {
  const t = useTranslations();
  const { push } = useRouter();
  const [recommended, setRecommended] = useState(true);

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
          <Switch
            thin
            defaultValue={recommended ? 'recommended' : 'myPools'}
            options={[
              {
                value: 'recommended',
                displayValue: t('common.recommended'),
                onSelect: () => setRecommended(true),
              },
              {
                value: 'myPools',
                displayValue: t('dexPool.myPools'),
                onSelect: () => setRecommended(false),
              },
            ]}
          />
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
        <Pools isRecommended={recommended} />
      </Box>
    </>
  );
};

export default Pool;
