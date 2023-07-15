import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, PropsWithChildren } from 'react';

import { FarmCardWrapperProps } from '../../earn.types';

const FarmCardWrapper: FC<PropsWithChildren<FarmCardWrapperProps>> = ({
  type,
  action,
  reset,
  disabled,
  children,
}) => {
  const t = useTranslations();
  return (
    <Box
      bg={
        type != 'rewards' ? 'surface.containerLow' : 'primary.primaryContainer'
      }
      px="1.5rem"
      position="relative"
      borderRadius="m"
    >
      <Box
        borderBottom="1px dashed"
        borderColor={type == 'rewards' ? 'white' : 'outline.outlineVariant'}
        py="1.5rem"
      >
        <Box display="flex" gap="1.5rem" alignItems="center">
          <Typography color="white" variant="large" textTransform="capitalize">
            {type == 'staked'
              ? 'Staked'
              : type == 'unstaked'
              ? 'Unstaked'
              : 'Rewards'}
          </Typography>
        </Box>
      </Box>
      {children}
      <Box
        ml="auto"
        my="1.5rem"
        pt="1.5rem"
        gap=".5rem"
        display="flex"
        width="fit-content"
        justifyContent="space-between"
      >
        {type != 'rewards' && (
          <Button flex="1" size="small" variant="outline" onClick={reset}>
            <Typography textAlign="center" width="100%" variant="small">
              {t('earn.buttons.reset')}
            </Typography>
          </Button>
        )}
        <Button flex="1" size="small" variant="filled" onClick={action}>
          <Typography textAlign="center" width="100%" variant="small">
            {type == 'staked'
              ? 'Add'
              : type == 'unstaked'
              ? 'Remove'
              : 'Harvest'}
          </Typography>
        </Button>
      </Box>
      {disabled && (
        <Box
          position="absolute"
          width="100%"
          height="100%"
          bg="surface.containerLow"
          opacity="0.3"
          top="0"
          left="0"
          cursor="not-allowed"
        />
      )}
    </Box>
  );
};

export default FarmCardWrapper;
