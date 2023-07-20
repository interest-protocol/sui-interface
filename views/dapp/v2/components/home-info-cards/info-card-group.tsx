import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { CARD_DATA } from '../../home/cards.data';
import APRCard from '../../lend/overview/apr-card';

const InfoCardGroup: FC = () => {
  const t = useTranslations();
  return (
    <Box gridColumn="1/-1" width="100%">
      <Typography variant="small" color="onSurface" mb="l">
        {t('dapp.topMovers')}
      </Typography>
      <Box
        border="0"
        overflow="auto"
        pb="1.5rem"
        borderStyle="solid"
        borderBottomWidth="1px"
        borderColor="outline.outlineVariant"
      >
        <Box display="flex" gap="m">
          {CARD_DATA.map((item) => (
            <Box key={v4()}>
              <APRCard {...item} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InfoCardGroup;
