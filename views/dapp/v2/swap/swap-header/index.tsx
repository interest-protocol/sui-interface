import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CogsSVG, LeftArrowSVG } from '@/components/svg/v2';

const SwapHeader: FC = () => {
  const t = useTranslations();

  return (
    <>
      <Box display={['block', 'block', 'none']}>
        <LeftArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
      </Box>
      <Typography
        color="text"
        variant="displayLarge"
        gridColumn={['2/span 2', '2/span 2', '2/span 6', '2/span 10']}
      >
        {t('swap.metadata.title')}
      </Typography>
      <Box color="textSoft">
        <CogsSVG maxWidth="1.2rem" maxHeight="1.2rem" width="100%" />
      </Box>
    </>
  );
};

export default SwapHeader;
