import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, PropsWithChildren } from 'react';

import { MinusSVG } from '@/components/svg/v2';
import { PlusSVG } from '@/svg';

import { PoolCardWrapperProps } from '../../earn.types';

const PoolCardWrapper: FC<PropsWithChildren<PoolCardWrapperProps>> = ({
  type,
  disabled,
  action,
  reset,
  children,
}) => {
  const t = useTranslations();
  return (
    <Box
      bg="surface.containerLow"
      px="2xl"
      position="relative"
      borderRadius="m"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Box
          borderBottom="1px dashed"
          borderColor="outline.outlineVariant"
          py="2xl"
        >
          <Box display="flex" gap="2xl" alignItems="center">
            <Box
              display="flex"
              width="1.25rem"
              height="1.25rem"
              borderRadius="50%"
              bg="inverseSurface"
              alignItems="center"
              justifyContent="center"
            >
              {type === 'add' ? (
                <PlusSVG
                  maxHeight="1.5rem"
                  maxWidth="1.5rem"
                  width="0.703rem"
                />
              ) : (
                <MinusSVG
                  maxHeight="1.5rem"
                  maxWidth="1.5rem"
                  width="0.703rem"
                />
              )}
            </Box>
            <Typography color="white" variant="large" textTransform="uppercase">
              {t(
                type === 'add'
                  ? 'earnDetails.cards.addLiquidity'
                  : 'earnDetails.cards.removeLiquidity'
              )}
            </Typography>
          </Box>
        </Box>
        {children}
      </Box>
      <Box
        ml="auto"
        pt="3rem"
        pb="2xl"
        gap="s"
        display="flex"
        width="fit-content"
        justifyContent="space-between"
      >
        <Button flex="1" size="small" variant="outline" onClick={reset}>
          <Typography
            textAlign="center"
            width="100%"
            variant="small"
            textTransform="capitalize"
          >
            {t('common.reset')}
          </Typography>
        </Button>
        <Button flex="1" size="small" variant="filled" onClick={action}>
          <Typography
            textAlign="center"
            width="100%"
            variant="small"
            textTransform="capitalize"
          >
            {t(type === 'add' ? 'common.add' : 'common.remove', {
              isLoading: +false,
            })}
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

export default PoolCardWrapper;
