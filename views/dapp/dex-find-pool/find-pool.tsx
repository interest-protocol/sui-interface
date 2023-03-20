import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { Box } from '@/elements';

import SelectCurrency from '../components/select-currency';
import { FindPoolProps } from './dex-find-pool.types';

const FindPool: FC<FindPoolProps> = ({
  control,
  getValues,
  onSelectCurrency,
}) => {
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
        width="100%"
        display="flex"
        alignItems="center"
        flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
        justifyContent={['center', 'center', 'center', 'space-between']}
      >
        <SelectCurrency
          currentToken={typeA}
          searchTokenModalState={null}
          type={getValues('tokenA.type')}
          symbol={getValues('tokenA.symbol')}
          onSelectCurrency={onSelectCurrency('tokenA')}
        />
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
