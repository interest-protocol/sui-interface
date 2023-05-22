import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { Switch } from '@/components';
import { Box } from '@/elements';

import SelectCurrency from '../components/select-currency';
import { FindPoolProps } from './dex-find-pool.types';

const FindPool: FC<FindPoolProps> = ({
  control,
  setValue,
  getValues,
  onSelectCurrency,
}) => {
  const t = useTranslations();
  const stable = useWatch({ control, name: `stable` });
  const typeA = useWatch({ control, name: `tokenA.type` });
  const typeB = useWatch({ control, name: `tokenB.type` });

  return (
    <Box
      my="L"
      px="L"
      py="XL"
      color="text"
      bg="foreground"
      maxWidth="30rem"
      borderRadius="M"
      width={['100%', '100%', '100%', '30rem']}
    >
      <Box
        gap="L"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
      >
        <SelectCurrency
          currentToken={typeA}
          searchTokenModalState={null}
          type={getValues('tokenA.type')}
          symbol={getValues('tokenA.symbol')}
          onSelectCurrency={onSelectCurrency('tokenA')}
        />
        <Box
          textAlign="center"
          order={['1', '1', '0']}
          width={['100%', '100%', 'unset']}
        >
          <Switch
            thin
            defaultValue={stable ? 'stable' : 'volatile'}
            options={[
              {
                value: 'volatile',
                displayValue: t('common.volatile', {
                  count: 1,
                }),
                onSelect: () => setValue('stable', false),
              },
              {
                value: 'stable',
                displayValue: t('common.stable', {
                  count: 1,
                }),
                onSelect: () => setValue('stable', true),
              },
            ]}
          />
        </Box>
        <SelectCurrency
          currentToken={typeB}
          searchTokenModalState={null}
          type={getValues('tokenB.type')}
          symbol={getValues('tokenB.symbol')}
          onSelectCurrency={onSelectCurrency('tokenB')}
        />
      </Box>
    </Box>
  );
};

export default FindPool;
