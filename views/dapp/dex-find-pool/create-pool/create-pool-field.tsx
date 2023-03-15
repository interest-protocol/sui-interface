import BigNumber from 'bignumber.js';
import { FC } from 'react';

import { TOKENS_SVG_MAP } from '@/constants';
import { Box, InputBalance, Typography } from '@/elements';
import { useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/sdk';

import { CreatePoolFieldProps } from '../dex-find-pool.types';

const CreatePoolField: FC<CreatePoolFieldProps> = ({
  name,
  register,
  setValue,
  getValues,
}) => {
  const token = getValues(name);
  const { coinsMap } = useWeb3();

  const SVG = TOKENS_SVG_MAP[token.type] ?? TOKENS_SVG_MAP.default;
  const balance = FixedPointMath.toNumber(
    coinsMap[token.type]?.totalBalance ?? BigNumber(0),
    token.decimals
  ).toString();

  return (
    <InputBalance
      max
      balance={balance}
      register={register}
      setValue={setValue}
      name={`${name}.value`}
      disabled={!token.type}
      Suffix={
        <Box
          m="M"
          p="M"
          pr="L"
          opacity="0.7"
          display="flex"
          bg="accentActive"
          alignItems="center"
          borderRadius="2rem"
        >
          <Box width="1.5rem" height="1.5rem" mr="M">
            <SVG maxWidth="100%" maxHeight="100%" width="100%" />
          </Box>
          <Typography variant="normal">{token.symbol}</Typography>
        </Box>
      }
    />
  );
};

export default CreatePoolField;
