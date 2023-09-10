import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Overview from '../components/overview';
import AllValidators from './all-validators';
import { OVERVIEW_DATA } from './validatores.data';

const Validators: FC = () => {
  const t = useTranslations();
  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Overview title={t('lsd.overview.title')} data={OVERVIEW_DATA} />
      <AllValidators />
    </Box>
  );
};

export default Validators;
