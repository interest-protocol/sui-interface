import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SEMANTIC_COLORS } from '@/constants';
import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

import { OVERVIEW_DATA } from './overview.data';

const FirstOverviewRow: FC = () => {
  const { dark } = useTheme() as Theme;
  const t = useTranslations();

  return (
    <>
      {OVERVIEW_DATA.slice(0, 3).map((item, index) => (
        <Box
          key={v4()}
          display="flex"
          columnGap="l"
          alignItems="center"
          flex={['unset', 'unset', '1 1 200px', '1 1 200px']}
        >
          <Box
            display="flex"
            width="2.5rem"
            height="2.5rem"
            borderRadius="m"
            aspectRatio="1/1"
            alignItems="center"
            justifyContent="center"
            bg={
              index === 0
                ? dark
                  ? SEMANTIC_COLORS[3].dark
                  : SEMANTIC_COLORS[3].light
                : 'surface.containerHigh'
            }
            color={index === 0 ? (dark ? 'white' : 'black') : 'primary'}
          >
            <item.Icon width="100%" maxHeight="1.25rem" maxWidth="1.25rem" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="extraSmall" opacity="0.6" color="onSurface">
              {capitalize(
                t(
                  `lsd.statsSection.overview.${item.description}` as TTranslatedMessage
                )
              )}
            </Typography>
            <Typography variant="large" color="onSurface">
              {item.value}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default FirstOverviewRow;
