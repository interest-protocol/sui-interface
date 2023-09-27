import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';
import Skeleton from 'react-loading-skeleton';

import FirstOverviewRow from './first-row';
import { OverviewProps } from './overview.type';

const Overview: FC<PropsWithChildren<OverviewProps>> = ({
  data,
  title,
  children,
  isLoading,
}) => (
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
        ) : (
          <FirstOverviewRow data={data} />
        )}
      </Box>
      {children && isLoading ? (
        <Skeleton width="100%" height="3.125rem" />
      ) : (
        children
      )}
    </Box>
  </Box>
);

export default Overview;
