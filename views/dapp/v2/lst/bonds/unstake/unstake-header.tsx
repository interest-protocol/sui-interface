import { Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import GoBackToBonds from '../go-back-to-bonds';

const BondsUnstakeHeader: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  return (
    <>
      <GoBackToBonds />
      <Typography
        pt="2xl"
        variant="displaySmall"
        textTransform="capitalize"
        color={dark ? 'white' : 'unset'}
      >
        {t('lst.bonds.unstake.title')}
      </Typography>
      <Typography variant="medium" opacity=".6" color="onSurface" my="s">
        {t('lst.bonds.unstake.description')}
      </Typography>
    </>
  );
};

export default BondsUnstakeHeader;
