import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { InfoLightSVG } from '@/svg';

import Title from '../title';
import { SHARE_LIST } from './share.data';
import ShareCard from './share-cards';

const ShareSection: FC = () => {
  const t = useTranslations();

  return (
    <Box variant="container" py={['3.5rem', '3.5rem', '3.5rem', '5rem']}>
      <Title gridColumn="1/-1">
        <Typography
          width="100%"
          color="primary"
          textAlign="center"
          variant="displaySmall"
          letterSpacing="-0.15rem"
        >
          {t('liquidity.share.title')}
        </Typography>
      </Title>
      <Box
        mt="2.5rem"
        gap="0.5rem"
        width="100%"
        display="flex"
        gridColumn="1/-1"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        {SHARE_LIST.map((share) => (
          <ShareCard key={v4()} {...share} />
        ))}
      </Box>
      <Box
        p="l"
        mt="2xl"
        borderRadius="m"
        gridColumn="1/-1"
        background="#E9D5FF"
      >
        <Box display="flex" gap="1rem" alignItems="center" color="#6B21A8">
          <InfoLightSVG width="1.5rem" maxHeight="1.5rem" maxWidth="1.5rem" />
          <Typography variant="small" width="100%" textAlign="left">
            {t('liquidity.share.sentence.first')}
            <Typography variant="small" as="span" color="#991B1B">
              {' '}
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
