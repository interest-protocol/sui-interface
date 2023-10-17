import {
  Box,
  TextField,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';
import { v4 } from 'uuid';

import { capitalize } from '@/utils';

import { PercentageButton } from '../../../../components';
import { MoneyInputProps } from './money-input.types';
import MoneyInputDollars from './money-input-dollars';
import MoneyInputErrorWrapper from './money-input-error-wrapper';

const MoneyInput = forwardRef(
  (
    { Prefix, control, balance, onChangeValue, ...props }: MoneyInputProps,
    ref
  ) => {
    const t = useTranslations();
    const { colors } = useTheme() as Theme;
    return (
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="extraSmall" opacity=".6" color="onSurface">
            {capitalize(t('lst.amountField.wallet'))}: {balance}
          </Typography>
          <Box display="flex" gap="s">
            {([25, 50, 75, 100] as ReadonlyArray<25 | 50 | 75 | 100>).map(
              (value) => (
                <PercentageButton
                  isFilled
                  key={v4()}
                  total={100}
                  value={value}
                  onSelect={() => onChangeValue(value)}
                />
              )
            )}
          </Box>
        </Box>
        <Box position="relative">
          <MoneyInputErrorWrapper
            control={control}
            isStake={props.isStake || false}
          />
          <Box position="absolute" right="0" pr="l" pt="m" color="onSurface">
            <MoneyInputDollars control={control} />
          </Box>
          <TextField
            my="0"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            ref={ref}
            fontSize="xl"
            placeholder="0"
            Prefix={Prefix}
            zIndex={3}
            textAlign="right"
            Top={<Box p="m" />}
            {...props}
            fieldProps={{
              my: 'm',
              pl: 'l',
              borderColor: colors['outline.outlineVariant'] + '!important',
            }}
          />
        </Box>
      </Box>
    );
  }
);

MoneyInput.displayName = 'MoneyInput';

export default MoneyInput;
