import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

const LendSkeleton: FC = () => {
  const t = useTranslations();
  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box pb="1rem" width="100%" gridColumn="1/-1">
        <Typography
          display={['block', 'block', 'block', 'none']}
          variant="displayLarge"
          color="onSurface"
          textTransform="capitalize"
          textAlign="center"
        >
          {t('common.v2.lend.title')}
        </Typography>
        <Typography variant="extraSmall" color="onSurface" my="1rem">
          <Skeleton width="10rem" />
        </Typography>
        <Box
          display={['grid', 'grid', 'grid', 'grid']}
          gridTemplateColumns={[
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(4, 1fr)',
          ]}
          overflowX="auto"
          gap="0.5rem"
          flexWrap="wrap"
        >
          {[1, 2, 3, 4].map(() => (
            <Box
              height="8.375rem"
              width={['unset', 'unset', 'unset', 'unset']}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              borderRadius="4px"
              key={v4()}
            >
              <Skeleton height="8rem" />
            </Box>
          ))}
        </Box>
        <Box
          my="2.375rem"
          color="onSurface"
          display="grid"
          gridTemplateColumns="1fr"
          mb={['m', 'm', 'm', '2.375rem']}
          gap="s"
        >
          <Skeleton />
        </Box>
        <Box as="hr" borderColor="outline.outlineVariant" />
        <Box mt="2rem">
          <Box
            display="grid"
            gridTemplateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
            ]}
            gap="m"
          >
            {[1, 2].map(() => (
              <Box key={v4()} color="text" borderRadius=".25rem" height="30rem">
                <Skeleton height="100%" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LendSkeleton;
