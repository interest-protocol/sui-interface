import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const ValuePropositionTitle: FC = () => {
  const t = useTranslations();

  return (
    <Box
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
        bg={[
          'linear-gradient(90deg, #99BBFF 27.59%, rgba(153, 187, 255, 0.2) 72.37%)',
          'linear-gradient(90deg, #99BBFF 27.59%, rgba(153, 187, 255, 0.2) 72.37%)',
          'linear-gradient(90deg, #99BBFF 27.59%, rgba(153, 187, 255, 0.2) 72.37%)',
          'linear-gradient(270deg, #99BBFF 1.56%, rgba(153, 187, 255, 0.2) 100%)',
        ]}
        WebkitBackgroundClip={['text', 'text', 'text', 'text']}
        WebkitTextFillColor={[
          'transparent',
          'transparent',
          'transparent',
          'transparent',
        ]}
        backgroundClip={['text', 'text', 'text', 'text']}
      >
        {t('landingPage.valueProposition.title.first')}
      </Typography>
      <Typography
        as="span"
        display="block"
        variant="displayLarge"
        width={['unset', 'unset', 'unset', '30rem']}
        textAlign={['center', 'center', 'center', 'left']}
        bg={[
          'linear-gradient(270deg, #99BBFF 16.84%, rgba(153, 187, 255, 0.2) 83.81%)',
          'linear-gradient(270deg, #99BBFF 16.84%, rgba(153, 187, 255, 0.2) 83.81%)',
          'linear-gradient(270deg, #99BBFF 16.84%, rgba(153, 187, 255, 0.2) 83.81%)',
          'linear-gradient(90deg, #99BBFF 2.92%, rgba(153, 187, 255, 0.2) 102.1%)',
        ]}
        WebkitBackgroundClip={['text', 'text', 'text', 'text']}
        WebkitTextFillColor={[
          'transparent',
          'transparent',
          'transparent',
          'transparent',
        ]}
        backgroundClip={['text', 'text', 'text', 'text']}
      >
        {t('landingPage.valueProposition.title.second')}
      </Typography>
    </Box>
  );
};

export default ValuePropositionTitle;
