import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { Container, Switch } from '@/components';
import { Routes, RoutesEnum } from '@/constants';
import { Box, Button, Typography } from '@/elements';

import Pools from './pools';

const Pool: FC = () => {
  const t = useTranslations();
  const { push } = useRouter();
  const [recommended, setRecommended] = useState(true);

  return (
    <Container
      display="flex"
      minHeight="60vh"
      flexDirection="column"
      justifyContent="center"
      width={['100%', '100%', '100%', 'auto']}
    >
      <Box color="text" width="100%" minWidth={['100%', '40rem']}>
        <Box
          p="L"
          my="L"
          gap="L"
          display="flex"
          bg="foreground"
          flexWrap="wrap"
          borderRadius="M"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            order="1"
            variant="normal"
            mr={['unset', 'auto']}
            textTransform="capitalize"
          >
            {t('dexPool.title')}
          </Typography>
          <Box
            textAlign="center"
            order={['3', '3', '2']}
            width={['100%', '100%', 'unset']}
          >
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
          </Box>
          <Button
            px="XL"
            order={['2', '2', '3']}
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
    </Container>
  );
};

export default Pool;
