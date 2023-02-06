import { useTheme } from '@emotion/react';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { Switch } from '@/components';
import { Box, Button, Typography } from '@/elements';

import Pools from './pools';

const Pool: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as { dark: boolean };
  const [isRecommended, setRecommended] = useState(true);

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
              disabled
              type="button"
              bg="disabled"
              variant="primary"
              cursor="not-allowed"
              // onClick={() => push(Routes[RoutesEnum.DEXFindPool])}
              ml={['unset', 'auto']}
            >
              {t('dexPool.button')}
            </Button>
            <Typography
              px="M"
              py="S"
              ml="M"
              as="span"
              bg="warning"
              top="-.5rem"
              right="-.5rem"
              variant="small"
              borderRadius="S"
              position="absolute"
              display="inline-block"
              color={dark ? 'text' : 'textInverted'}
            >
              {t('common.soon')}
            </Typography>
          </Box>
        </Box>
        <Box
          p="L"
          mb="L"
          display="flex"
          bg="foreground"
          borderRadius="M"
          justifyContent="center"
        >
          <Switch
            defaultValue={isRecommended ? 'recommended' : 'myPools'}
            options={[
              {
                value: 'recommended',
                displayValue: t('dexPool.recommended'),
                onSelect: () => setRecommended(true),
              },
              {
                value: 'myPools',
                displayValue: t('dexPool.myPools'),
                onSelect: () => setRecommended(false),
              },
            ]}
          />
        </Box>
        <Pools isRecommended={isRecommended} />
      </Box>
    </>
  );
};

export default Pool;
