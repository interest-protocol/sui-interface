import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, PropsWithChildren } from 'react';
import Skeleton from 'react-loading-skeleton';

import { capitalize } from '@/utils';

import ErrorState from '../error-state';
import FirstOverviewRow from './first-row';
import { OverviewProps } from './overview.type';

const Overview: FC<PropsWithChildren<OverviewProps>> = ({
  data,
  error,
  title,
  children,
  isLoading,
}) => {
  const t = useTranslations();
  return (
    <Box
      p="l"
      rowGap="l"
      width="100%"
      display="flex"
      gridColumn="1/-1"
      flexDirection="column"
      borderRadius="8px"
      bg="surface.container"
    >
      <Box gridColumn="1/-1" width="100%">
        <Typography variant="extraSmall" color="onSurface">
          {title}
        </Typography>
      </Box>
      <Box
        gap="l"
        display="flex"
        flexDirection={['row', 'row', 'column', 'column']}
        justifyContent={['space-between', 'space-between', 'unset', 'unset']}
      >
        <Box
          gap="l"
          display="flex"
          flexDirection={['column', 'column', 'row', 'row']}
          alignItems={['unset', 'unset', 'center', 'center']}
          justifyContent={['space-between', 'space-between', 'unset', 'unset']}
        >
          {isLoading ? (
            <Skeleton width="100%" height="3.125rem" />
          ) : error ? (
            <ErrorState errorMessage={capitalize(t('lst.overview.error'))} />
          ) : (
            <FirstOverviewRow data={data} />
          )}
        </Box>
        {children && isLoading ? (
          <Skeleton width="100%" height="3.125rem" />
        ) : children && error ? (
          <ErrorState errorMessage={capitalize(t('lst.overview.error'))} />
        ) : (
          <>{children}</>
        )}
      </Box>
    </Box>
  );
};

export default Overview;
