import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, PropsWithChildren } from 'react';

import { TTranslatedMessage } from '@/interface';

import { FarmCardWrapperProps } from '../../earn.types';

const FarmCardWrapper: FC<PropsWithChildren<FarmCardWrapperProps>> = ({
  type,
  action,
  reset,
  disabled,
  children,
}) => {
  const { dark } = useTheme() as Theme;
  const t = useTranslations();
  return (
    <Box
      bg={
        type != 'rewards' ? 'surface.containerLow' : 'primary.primaryContainer'
      }
      px="2xl"
      position="relative"
      borderRadius="m"
    >
      <Box
        borderBottom="1px dashed"
        borderColor={type == 'rewards' ? 'white' : 'outline.outlineVariant'}
        py="2xl"
      >
        <Box display="flex" gap="2xl" alignItems="center">
          <Typography
            color={dark ? 'white' : 'dark'}
            variant="large"
            textTransform="capitalize"
          >
            {t(`earnDetails.cards.${type}` as TTranslatedMessage)}
          </Typography>
        </Box>
      </Box>
      {children}
      <Box
        ml="auto"
        my="2xl"
        pt="2xl"
        gap="s"
        display="flex"
        width="fit-content"
        justifyContent="space-between"
      >
        {type != 'rewards' && (
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
        )}
        <Button flex="1" size="small" variant="filled" onClick={action}>
          <Typography
            textAlign="center"
            width="100%"
            variant="small"
            textTransform="capitalize"
          >
            {t(
              type == 'staked'
                ? 'common.add'
                : type == 'unstaked'
                ? 'common.remove'
                : 'earnDetails.cards.button.harvest',
              { isLoading: +false }
            )}
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
