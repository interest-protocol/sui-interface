import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ShieldCheckSVG, UserPlusSVG } from '@/svg';

import SecurityCard from './security-card';

const Security: FC = () => {
  const t = useTranslations();

  return (
    <Box bg="background">
      <Box variant="container">
        <SecurityCard
          color="#99BBFF"
          icon={<UserPlusSVG maxHeight="2rem" maxWidth="2rem" width="100%" />}
          title={t('landingPage.security.openSource.title')}
          text={t('landingPage.security.openSource.description')}
          cat={{
            name: t('landingPage.security.openSource.link'),
            link: 'https://github.com/interest-protocol',
          }}
        />
        <SecurityCard
          color="#E9D5FF"
          icon={
            <ShieldCheckSVG maxHeight="2rem" maxWidth="2rem" width="100%" />
          }
          title={t('landingPage.security.audited.title')}
          text={t.rich('landingPage.security.audited.description', {
            link: (chunk) => (
              <Box
                as="a"
                color="primary"
                {...{
                  target: '_blank',
                  rel: 'noreferrer',
                  href: 'https://movebit.xyz/',
                }}
              >
                {chunk}
              </Box>
            ),
          })}
          cat={{
            name: t('landingPage.security.audited.link'),
            link: 'https://github.com/interest-protocol/sui-defi/blob/main/audits/Interest%20Protocol%20DEX%20Smart%20Contract%20Audit%20Report.pdf',
          }}
        />
      </Box>
    </Box>
  );
};

export default Security;
