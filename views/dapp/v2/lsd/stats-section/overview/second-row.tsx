import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

import { OVERVIEW_DATA } from './overview.data';

const SecondOverviewRow: FC = () => {
  const t = useTranslations();
  return (
    <>
      {OVERVIEW_DATA.slice(3, 6).map((item) => (
        <Box
          key={v4()}
          display="flex"
          rowGap=".625rem"
          alignItems="flex-start"
          flexDirection="column"
          flex={['unset', 'unset', '1 1 200px', '1 1 200px']}
        >
          <Box>
            <Typography variant="extraSmall" opacity="0.6" color="onSurface">
              {capitalize(
                t(
                  `lsd.statsSection.overview.${item.description}` as TTranslatedMessage
                )
              )}
            </Typography>
          </Box>
          <Box display="flex" columnGap="s" alignItems="center">
            <item.Icon width="100%" maxHeight="1.25rem" maxWidth="1.25rem" />
            <Typography variant="large" m="0" color="onSurface">
              {item.value}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default SecondOverviewRow;
