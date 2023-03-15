import { useTheme } from '@emotion/react';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Theme } from '@/design-system';
import { Box, Typography } from '@/elements';
import { InfoSVG } from '@/svg';

import { CreatePoolProps, DexFindPoolForm } from '../dex-find-pool.types';
import CreatePoolField from './create-pool-field';
import Price from './create-pool-price';

const TOKEN_NAMES = ['tokenA', 'tokenB'] as ReadonlyArray<
  keyof Omit<DexFindPoolForm, 'isStable'>
>;

const CreatePool: FC<CreatePoolProps> = ({
  control,
  register,
  setValue,
  getValues,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  return (
    <Box
      p="L"
      my="L"
      color="text"
      width="100%"
      bg="foreground"
      maxWidth="30rem"
      borderRadius="M"
    >
      <Typography variant="normal" textTransform="uppercase" mb="L">
        {t('dexPoolFind.createPoolTitle')}
      </Typography>
      <Typography
        p="L"
        variant="normal"
        borderRadius="M"
        border="1px solid"
        borderColor="textSoft"
        bg={dark ? 'bottomBackground' : 'background'}
      >
        {t('dexPoolFind.createPoolAdvice')}
      </Typography>
      <Price control={control} />
      {TOKEN_NAMES.map((name) => (
        <CreatePoolField
          key={v4()}
          name={name}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />
      ))}
      <Box
        p="L"
        mt="L"
        display="grid"
        borderRadius="M"
        border="1px solid"
        alignItems="center"
        borderColor="textSoft"
        gridTemplateColumns="3rem auto"
        bg={dark ? 'bottomBackground' : 'background'}
      >
        <Box as="span" width="1.5rem" display="inline-block">
          <InfoSVG width="100%" maxHeight="1.5rem" maxWidth="1.5rem" />
        </Box>
        <Typography variant="normal" fontSize="0.85rem">
          {t('dexPoolFind.createPoolInfo')}
        </Typography>
      </Box>
    </Box>
  );
};
export default CreatePool;
