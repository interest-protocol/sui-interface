import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ValuePropositionCard from './value-proposition-card';
import {
  DesktopValuePropositionDescription,
  MobileValuePropositionDescription,
} from './value-proposition-description';
import ValuePropositionTitle from './value-proposition-title';

const ValueProposition: FC = () => {
  const t = useTranslations();

  return (
    <Box bg="background" pb="4xl">
      <Box
        borderRadius="m"
        border="1px solid"
        variant="container"
        justifyItems="unset"
        borderColor={[
          'transparent',
          'transparent',
          'transparent',
          'textAccent',
        ]}
      >
        <Box
          p="l"
          display="grid"
          columnGap="4xl"
          gridColumn="1/-1"
          gridTemplateAreas={[
            "'b' 'a'",
            "'b' 'a'",
            "'b' 'a'",
            "'a a b b b' 'a a c c c'",
          ]}
          gridTemplateColumns={['1fr', '1fr', '1fr', 'repeat(5, 1fr)']}
        >
          <Box
            mb="4xl"
            gridArea="a"
            borderRadius="m"
            border="1px solid"
            p={['s', 's', 's', '0']}
            borderColor={[
              'textAccent',
              'textAccent',
              'textAccent',
              'transparent',
            ]}
          >
            <MobileValuePropositionDescription />
            <Box bg="#B6C4FF0A" height="23rem" borderRadius="m" p="4xl"></Box>
          </Box>
          <ValuePropositionTitle />
          <DesktopValuePropositionDescription />
        </Box>
        <Box
          p="l"
          gap="s"
          display="grid"
          gridColumn="1/-1"
          gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
        >
          <ValuePropositionCard>
            {t('landingPage.valueProposition.values.supported')}
          </ValuePropositionCard>
          <ValuePropositionCard>
            {t('landingPage.valueProposition.values.secure')}{' '}
          </ValuePropositionCard>
          <ValuePropositionCard>
            {t('landingPage.valueProposition.values.decentralized')}{' '}
          </ValuePropositionCard>
          <ValuePropositionCard>
            {t('landingPage.valueProposition.values.experience')}{' '}
          </ValuePropositionCard>
        </Box>
      </Box>
    </Box>
  );
};

export default ValueProposition;
