import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { Switch } from '@/components';
import { Box, Typography } from '@/elements';
import { getFilterSwitchDefaultData } from '@/views/dapp/views/farms/components/farms.data';

import { OnlyFinishedFilterProps } from './farms-filters.types';

const OnlyFinishedFilter: FC<OnlyFinishedFilterProps> = ({
  control,
  setValue,
}) => {
  const t = useTranslations();
  const onlyFinished = useWatch({ control, name: 'onlyFinished' });
  const SWITCH_ONLY_FINISHED_DATA = getFilterSwitchDefaultData(
    [t('common.live'), t('common.finished')],
    setValue,
    'onlyFinished'
  );

  return (
    <Box display="flex" flexDirection="column" my={['M', 'M', 'M', 'NONE']}>
      <Typography
        mb="M"
        fontSize="S"
        variant="normal"
        display="inline-block"
        textAlign={['center', 'center', 'center', 'left']}
        textTransform="capitalize"
      >
        {t('common.state')}
      </Typography>
      <Switch
        defaultValue={onlyFinished ? t('common.finished') : t('common.live')}
        options={SWITCH_ONLY_FINISHED_DATA}
        bg="background"
        bgSelected="accentAlternative"
      />
    </Box>
  );
};

export default OnlyFinishedFilter;
