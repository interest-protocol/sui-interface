import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { capitalize } from '@/utils';

import Switcher from '../components/switch';

const YourInfo: FC = () => {
  const t = useTranslations();
  const [isStake, setIsStake] = useState(true);

  const handleSelect = () => setIsStake(!isStake);
  return (
    <Box bg="surface.container" p="2xl" borderRadius="0.5rem">
      <Box mb="2xl">
        <Typography
          variant="medium"
          textTransform="uppercase"
          fontWeight="700"
          color="inverseSurface"
          mb="2xl"
        >
          {t('lsd.stakingForm.title')}
        </Typography>
        <Switcher
          defaultValue={+isStake}
          options={[
            {
              value: +true,
              displayValue: capitalize(t('common.stake', { isLoading: 0 })),
              onSelect: handleSelect,
            },
            {
              value: +false,
              displayValue: capitalize(t('common.unstake', { isLoading: 0 })),
              onSelect: handleSelect,
            },
          ]}
        />
      </Box>
      <Typography variant="extraSmall" color="onSurface">
        {capitalize(
          t(`common.${isStake ? 'stake' : 'unstake'}`, { isLoading: 0 })
        )}
      </Typography>
    </Box>
  );
};

export default YourInfo;
