import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { Container } from '@/components';
import { DEX_TOKENS_DATA } from '@/constants';
import { Typography } from '@/elements';
import { useWeb3 } from '@/hooks';
import { AddressZero } from '@/sdk';

import { GoBack } from '../components';
import { OnSelectCurrency } from '../components/select-currency/select-currency.types';
import CreatePool from './create-pool';
import { DexFindPoolForm } from './dex-find-pool.types';
import FindPool from './find-pool';
import FindPoolButton from './find-pool-button';

const DEXFindPool: FC = () => {
  const { account } = useWeb3();
  const t = useTranslations();
  const [isCreatingPair, setCreatingPair] = useState(false);
  const { setValue, control, getValues, register } = useForm<DexFindPoolForm>({
    defaultValues: {
      tokenA: { ...DEX_TOKENS_DATA[0], value: '0' },
      tokenB: { ...DEX_TOKENS_DATA[1], value: '0' },
    },
  });

  // We want the form to re-render if types change
  const tokenAType = useWatch({ control, name: 'tokenA.type' });
  const tokenBType = useWatch({ control, name: 'tokenB.type' });

  const onSelectCurrency =
    (name: 'tokenA' | 'tokenB'): OnSelectCurrency =>
    ({ type, decimals, symbol }) => {
      setValue(`${name}.type`, type);
      setValue(`${name}.decimals`, decimals);
      setValue(`${name}.symbol`, symbol);
      setValue('tokenA.value', '0.0');
      setValue('tokenB.value', '0.0');
      setCreatingPair(false);
    };

  return (
    <Container py="XL" dapp>
      <GoBack routeBack />
      <Typography variant="normal" width="100%">
        {t('dexPoolFind.title')}
      </Typography>
      <FindPool
        control={control}
        getValues={getValues}
        onSelectCurrency={onSelectCurrency}
      />
      {isCreatingPair && (
        <CreatePool
          getValues={getValues}
          control={control}
          register={register}
          setValue={setValue}
        />
      )}
      <FindPoolButton
        account={account ?? AddressZero}
        control={control}
        tokenAType={tokenAType}
        tokenBType={tokenBType}
        setCreatingPair={setCreatingPair}
        isCreatingPair={isCreatingPair}
        getValues={getValues}
      />
    </Container>
  );
};

export default DEXFindPool;
