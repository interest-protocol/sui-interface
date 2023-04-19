import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const UsedByTitle: FC = () => {
  const t = useTranslations();

  return (
    <Typography
      my="4xl"
      gridColumn="1/-1"
      textAlign="center"
      variant="displayLarge"
      background="linear-gradient(270deg, #99BBFF 11.7%, rgba(153, 187, 255, 0) 100%);"
      WebkitBackgroundClip="text"
      WebkitTextFillColor="transparent"
      backgroundClip="text"
    >
      {t('landingPage.usedBy.title')}
    </Typography>
  );
};

export default UsedByTitle;
