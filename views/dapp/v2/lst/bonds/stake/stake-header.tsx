import { Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import GoBackToBonds from '../go-back-to-bonds';

const BondsStakeHeader: FC = () => {
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
        {t('lst.bonds.stake.title')}
      </Typography>
      <Typography
        my="s"
        opacity=".6"
        variant="medium"
        fontWeight="400"
        color="onSurface"
      >
        {t('lst.bonds.stake.description')}
      </Typography>
    </>
  );
};

export default BondsStakeHeader;
