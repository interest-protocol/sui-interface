import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { useLocalStorage } from '@/hooks';
import { capitalize } from '@/utils';

import Switcher from '../../components/switch';
import { MINT_TYPE_OPTION } from '../../lsd.type';
import AmountField from './amount-field';
import MintType from './mint-type';

const YourInfo: FC = () => {
  const t = useTranslations();
  const [proMode] = useLocalStorage<boolean>('sui-interest-pro-mode', false);
  const [isStake, setIsStake] = useState(true);

  const [mintTypeOption, setMintTypeOption] =
    useState<MINT_TYPE_OPTION>('NONE');

  const onChangeMintType = (type: string) =>
    setMintTypeOption(type as MINT_TYPE_OPTION);

  const handleSelect = () => setIsStake(!isStake);
  return (
    <Box
      bg="surface.container"
      p="2xl"
      borderRadius="0.5rem"
      display="flex"
      flexDirection="column"
    >
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
      <Typography variant="extraSmall" color="onSurface" display="none">
        {capitalize(
          t(`common.${isStake ? 'stake' : 'unstake'}`, { isLoading: 0 })
        )}
      </Typography>
      <AmountField balance={0.434} />
      {proMode && (
        <MintType onChange={onChangeMintType} mintTypeOption={mintTypeOption} />
      )}
    </Box>
  );
};

export default YourInfo;
