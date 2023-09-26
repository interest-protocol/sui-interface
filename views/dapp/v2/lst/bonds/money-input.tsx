import {
  Box,
  TextField,
  TextFieldProps,
  Typography,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { Control, UseFormRegisterReturn, useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { PercentageButton } from '../../components';
import { IBondsContext } from './context/bonds-context.types';

interface MoneyInputProps
  extends Pick<TextFieldProps, 'Prefix'>,
    UseFormRegisterReturn<'amount'> {
  balance: string;
  control: Control<IBondsContext>;
  onChangeValue: (value: number) => void;
}

const MoneyInputDollars: FC<Pick<MoneyInputProps, 'control'>> = ({
  control,
}) => {
  const amount = useWatch({ control, name: 'amountUSD' });

  return <Box as="span">{amount}</Box>;
};

const MoneyInput: FC<MoneyInputProps> = ({
  Prefix,
  control,
  balance,
  onChangeValue,
}) => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="small" color="onSurface">
          Wallet Balance: {balance}
        </Typography>
        <Box display="flex" gap="l">
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
        <Box position="absolute" right="0" pr="l" pt="m" color="onSurface">
          <MoneyInputDollars control={control} />
        </Box>
        <TextField
          my="0"
          fontSize="xl"
          placeholder="0"
          Prefix={Prefix}
          textAlign="right"
          Top={<Box p="m" />}
          fieldProps={{
            my: 'm',
            pl: 'l',
            borderColor: 'outline.outlineVariant',
          }}
        />
      </Box>
    </Box>
  );
};

export default MoneyInput;
