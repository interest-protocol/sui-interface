import { Box, Slider, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { capitalize } from '@/utils';

import { RowTokenFieldProps } from '../../earn.types';
import { getSymbolsByCoins } from '../../earn.utils';
import TokenIcon from './token-icon';

const RowTokenField: FC<RowTokenFieldProps> = ({ coins, amount, balance }) => {
  const [isInput, setIsInput] = useState(false);
  const t = useTranslations();

  return (
    <Box pt="2xl" display="flex" flexDirection="column" gap="s">
      <Typography variant="medium" color="onSurface">
        {capitalize(t('common.balance')) + ' ' + balance}
      </Typography>
      <Box display="flex" gap="2xl" alignItems="center">
        <Box
          display="flex"
          gap="2xl"
          alignItems="center"
          width="fill-available"
          flexWrap="wrap"
        >
          {coins.map((coin) => (
            <TokenIcon type={coin.type} key={v4()} />
          ))}
          <Typography variant="medium" color="white">
            {getSymbolsByCoins(coins)}
          </Typography>
        </Box>
        <Box
          ml="auto"
          px="l"
          color="onSurfaceVariant"
          width="100%"
          height="3.5rem"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          onClick={() => setIsInput(true)}
        >
          {isInput ? (
            <Box width="100%">
              <TextField
                fontSize="m"
                placeholder="0.000"
                value={amount}
                fieldProps={{
                  border: '0px',
                  bg: 'surface.containerLowest',
                  height: '3.5rem',
                  color: 'onSurfaceVariant',
                  paddingLeft: 'l',
                  textAlign: 'end',
                }}
              />
            </Box>
          ) : (
            <Typography variant="medium">{amount}</Typography>
          )}
        </Box>
      </Box>
      <Box mt="-1.5rem">
        <Slider
          max={100}
          onChange={() => {
            return;
          }}
        />
      </Box>
    </Box>
  );
};

export default RowTokenField;
