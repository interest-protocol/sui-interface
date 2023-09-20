import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, PropsWithChildren } from 'react';

import { EpochHeaderProps } from './next-epoch.types';

const EpochHeader: FC<PropsWithChildren<EpochHeaderProps>> = ({
  epochNumber,
  children,
}) => {
  const t = useTranslations();
  return (
    <Box
      p="l"
      gap="s"
      flex="1"
      display="flex"
      borderRadius="0.5rem"
      flexDirection="column"
      bg="surface.container"
    >
      <Box display="flex" flexDirection="column" gap="m">
        <Typography
          opacity="0.6"
          variant="small"
          color="onSurface"
          textTransform="uppercase"
        >
          {t('lst.epoch.title') + ` ${epochNumber ?? '#'}`}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};

export default EpochHeader;
