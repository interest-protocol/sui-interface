import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';

const ValuePropositionTitle: FC = () => {
  const t = useTranslations();

  return (
    <Title
      as="h2"
      gridArea="b"
      display="flex"
      textAlign="center"
      flexDirection="column"
      pb={['l', 'l', 'l', '0']}
      pl={['0', '0', '0', '4xl']}
      mb={['4xl', '4xl', '4xl', '0']}
      alignItems={['center', 'center', 'center', 'start']}
    >
      <Typography
        as="span"
        display="block"
        variant="displayLarge"
        width={['unset', 'unset', 'unset', '30rem']}
        textAlign={['center', 'center', 'center', 'left']}
      >
        {t('landingPage.valueProposition.title.first')}
      </Typography>
      <Typography
        as="span"
        display="block"
        variant="displayLarge"
        width={['unset', 'unset', 'unset', '30rem']}
        textAlign={['center', 'center', 'center', 'left']}
      >
        {t('landingPage.valueProposition.title.second')}
      </Typography>
    </Title>
  );
};

export default ValuePropositionTitle;
