import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, PropsWithChildren } from 'react';

const EpochHeader: FC<PropsWithChildren> = ({ children }) => {
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
          {t('lst.epoch.end')}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};

export default EpochHeader;
