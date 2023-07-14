import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, PropsWithChildren } from 'react';

import { MinusSVG } from '@/components/svg/v2';
import { PlusSVG } from '@/svg';

import { LiquidityCardWrapperProps } from '../earn.types';

const LiquidityCardWrapper: FC<
  PropsWithChildren<LiquidityCardWrapperProps>
> = ({ type, disabled, openPreviewModal, children }) => {
  const t = useTranslations();
  return (
    <Box
      bg="surface.containerLow"
      px="1.5rem"
      width="100%"
      my={['0.5rem', '0.5rem', '0.5rem', '2rem']}
      position="relative"
      borderRadius="m"
    >
      <Box
        borderBottom="1px dashed"
        borderColor="outline.outlineVariant"
        py="1.5rem"
      >
        <Box display="flex" gap="1.5rem" alignItems="center">
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
              <PlusSVG maxHeight="1.5rem" maxWidth="1.5rem" width="0.703rem" />
            ) : (
              <MinusSVG maxHeight="1.5rem" maxWidth="1.5rem" width="0.703rem" />
            )}
          </Box>
          <Typography color="white" variant="large" textTransform="uppercase">
            {t(
              type === 'add'
                ? 'earn.buttons.addLiquidity'
                : 'earn.buttons.removeLiquidity'
            )}
          </Typography>
        </Box>
      </Box>
      {children}
      <Box
        ml="auto"
        pt="3rem"
        pb="1.5rem"
        gap=".5rem"
        display="flex"
        width="17.875rem"
        justifyContent="space-between"
      >
        <Button flex="1" size="small" variant="outline">
          <Typography textAlign="center" width="100%" variant="small">
            {t('earn.buttons.reset')}
          </Typography>
        </Button>
        <Button
          flex="1"
          size="small"
          variant="filled"
          onClick={openPreviewModal}
        >
          <Typography textAlign="center" width="100%" variant="small">
            {t(type === 'add' ? 'earn.buttons.add' : 'earn.buttons.remove')}
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

export default LiquidityCardWrapper;
