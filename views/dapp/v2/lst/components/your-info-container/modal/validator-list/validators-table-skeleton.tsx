import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const ValidatorsTableSkeleton: FC<{ custom?: boolean }> = ({ custom }) => {
  const { colors } = useTheme() as Theme;
  return (
    <Box p="4xl" display="flex" flexDirection="column" gap="s">
      {custom ? (
        <>
          <Skeleton
            width="100%"
            height="1.5rem"
            baseColor={custom ? colors.primary : ''}
            highlightColor={colors['primary.onPrimaryContainer']}
          />
          <Skeleton
            width="100%"
            height="1.5rem"
            baseColor={colors.primary}
            highlightColor={colors['primary.onPrimaryContainer']}
          />
          <Skeleton
            width="100%"
            height="1.5rem"
            baseColor={colors.primary}
            highlightColor={colors['primary.onPrimaryContainer']}
          />
          <Skeleton
            width="100%"
            height="1.5rem"
            baseColor={colors.primary}
            highlightColor={colors['primary.onPrimaryContainer']}
          />
        </>
      ) : (
        <>
          <Skeleton width="100%" height="1.5rem" />
          <Skeleton width="100%" height="1.5rem" />
          <Skeleton width="100%" height="1.5rem" />
          <Skeleton width="100%" height="1.5rem" />
        </>
      )}
    </Box>
  );
};

export default ValidatorsTableSkeleton;
