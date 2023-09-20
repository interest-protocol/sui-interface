import { Box, Button, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FC, useState } from 'react';

import { ArrowSpecialSVG } from '@/svg';
import { parseInputEventToNumberString } from '@/utils';

import TokenIcon from '../../token-icon';
import { AmountFieldInputUnstakeProps } from '../../your-info.types';

const AmountFieldInputUnstake: FC<AmountFieldInputUnstakeProps> = ({
  form,
  symbol,
}) => {
  const t = useTranslations();
  const [maturity, setMaturity] = useState('');

  return (
    <Box position="relative" borderRadius="0.25rem" bg="surface.containerHigh">
      <TextField
        Prefix={
          <Button
            variant="filled"
            size="small"
            height="3.5rem"
            width={['10rem', '10rem', '10rem', '13.5rem']}
            alignItems="center"
            bg="surface.containerHighest"
            p="0 0.5rem !important"
            onClick={() => setMaturity('Maturity: MM/DD/YYYY')}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              gap="0.25rem"
            >
              <TokenIcon symbol={symbol} size={2.5} />
              <Box display="flex" flexDirection="column" width="max-content">
                <Typography
                  variant="medium"
                  fontSize={['xs', 'xs', 'xs', 'l']}
                  color="onSurface"
                  width="100%"
                >
                  {maturity ? symbol : t('lst.selectAssets')}
                </Typography>
                {maturity && (
                  <Typography
                    variant="medium"
                    fontSize={['0.588rem', '0.588rem', '0.588rem', '0.688rem']}
                    color="onSurface"
                    width="100%"
                    opacity={0.6}
                  >
                    {t('lst.maturity', { date: 'DD/MM/YYYY' })}
                  </Typography>
                )}
              </Box>
              <Box
                color="onSurface"
                width={['0.5rem', '0.5rem', '0.5rem', '1rem']}
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <ArrowSpecialSVG
                  width="100%"
                  maxWidth="0.75rem"
                  maxHeight="0.75rem"
                />
              </Box>
            </Box>
          </Button>
        }
        fontSize={['m', 'm', 'm', 'xl']}
        placeholder="0"
        textAlign="right"
        color="onSurface"
        fieldProps={{ border: 'none', p: '0' }}
        {...form.register('amount', {
          onChange: (v: ChangeEvent<HTMLInputElement>) => {
            form.setValue?.('amount', parseInputEventToNumberString(v));
          },
        })}
      />
    </Box>
  );
};

export default AmountFieldInputUnstake;
