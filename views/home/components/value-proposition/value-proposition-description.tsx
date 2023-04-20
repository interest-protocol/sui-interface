import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

export const MobileValuePropositionDescription: FC = () => {
  const t = useTranslations();
  return (
    <Typography
      variant="medium"
      color="textSoft"
      p={['l', 'l', 'l', '0']}
      pl={['l', 'l', 'l', '4xl']}
      mb={['0', '0', '0', '4xl']}
      display={['block', 'block', 'block', 'none']}
    >
      {t('landingPage.valueProposition.description')}
    </Typography>
  );
};

export const DesktopValuePropositionDescription: FC = () => {
  const t = useTranslations();
  return (
    <Typography
      mb="4xl"
      pl="4xl"
      gridArea="c"
      variant="medium"
      color="textSoft"
      display={['none', 'none', 'none', 'block']}
    >
      {t('landingPage.valueProposition.description')}
    </Typography>
  );
};
