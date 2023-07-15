import { Box, Slider, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { RowTokenFieldProps } from '../../earn.types';
import { getSymbolsByCoins } from '../../earn.utils';
import TokenIcon from './token-icon';

const RowTokenField: FC<RowTokenFieldProps> = ({ coins, amount, balance }) => {
  const [isInput, setIsInput] = useState(false);
  const t = useTranslations();

  return (
    <Box pt="1.5rem" display="flex" flexDirection="column" gap="0.5rem">
      <Typography variant="medium" color="onSurface">
        {t('earn.previewInformations.balance') + ' ' + balance}
      </Typography>
      <Box display="flex" gap="1.5rem" alignItems="center">
        <Box
          display="flex"
          gap="0.75rem"
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
          px="1rem"
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
                  paddingLeft: '1rem',
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
