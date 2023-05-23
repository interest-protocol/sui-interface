import { AddressZero } from 'lib';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Container } from '@/components';
import { Typography } from '@/elements';
import { useWeb3 } from '@/hooks';

import { GoBack } from '../components';
import { OnSelectCurrency } from '../components/select-currency/select-currency.types';
import CreatePool from './create-pool';
import { DEXFindPoolProps } from './dex-find-pool.types';
import FindPool from './find-pool';
import FindPoolButton from './find-pool-button';

const DEXFindPool: FC<DEXFindPoolProps> = ({
  form,
  tokenAType,
  tokenBType,
  setCreatingPair,
  isCreatingPair,
}) => {
  const { account } = useWeb3();
  const t = useTranslations();

  const { setValue, control, getValues, register } = form;

  const onSelectCurrency =
    (name: 'tokenA' | 'tokenB'): OnSelectCurrency =>
    ({ type, decimals, symbol }) => {
      setValue(`${name}.type`, type);
      setValue(`${name}.decimals`, decimals);
      setValue(`${name}.symbol`, symbol);
      setValue(`${name}.name`, symbol);
      setValue('tokenA.value', '0.0');
      setValue('tokenB.value', '0.0');
      setCreatingPair(false);
    };

  return (
    <Container py="XL" dapp width={['100%', '100%', '100%', 'unset']}>
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
