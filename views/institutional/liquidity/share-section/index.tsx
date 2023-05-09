import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { InfoLightSVG } from '@/svg';

import { SHARE_LIST } from './share.data';
import ShareCard from './share-cards';

const ShareSection: FC = () => {
  const t = useTranslations();
  return (
    <Box
      gridColumn="1/-1"
      width="100%"
      py={['3.5rem', '3.5rem', '3.5rem', '5rem']}
    >
      <Typography
        gridColumn={['1/19', '1/19', '1/19', '1/-1']}
        color="primary"
        variant="displaySmall"
        letterSpacing="-0.15rem"
        width="100%"
        textAlign="center"
      >
        {t('liquidity.share.title')}
      </Typography>
      <Box
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
        gap="0.5rem"
        mt="2.5rem"
      >
        {SHARE_LIST.map((share) => (
          <ShareCard key={v4()} {...share} />
        ))}
      </Box>
      <Box
        gridColumn={['1/23', '1/-1']}
        mt="2.5rem"
        background="#E9D5FF"
        padding="l"
        borderRadius="m"
      >
        <Box display="flex" gap="1rem" alignItems="center" color="#6B21A8">
          <InfoLightSVG width="1.5rem" maxHeight="1.5rem" maxWidth="1.5rem" />
          <Typography variant="small" width="100%">
            {t('liquidity.share.sentence.first')}
            <Typography variant="small" as="span" color="#991B1B">
              {t('liquidity.share.sentence.date')}
            </Typography>
            {t('liquidity.share.sentence.second')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default ShareSection;
