import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const BenefitsLiquidityProviderHeader: FC = () => {
  const t = useTranslations();
  return (
    <>
      <Typography
        as="span"
        display={['none', 'none', 'none', 'block']}
        variant="extraSmall"
        mb="1.5rem"
        textAlign="center"
        color="foreground"
      >
        {t('liquidity.benefitsLiquidityProvider.subtitle')}
      </Typography>
      <Typography
        as="span"
        display="block"
        variant="displayLarge"
        color="primary"
        textAlign="center"
        mb={['2.5rem', '2.5rem', '2.5rem', '5rem']}
      >
        {t('liquidity.benefitsLiquidityProvider.title')}
      </Typography>
    </>
  );
};
export default BenefitsLiquidityProviderHeader;
