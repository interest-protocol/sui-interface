import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { AmountFieldProps } from '../your-info.types';
import AmountFieldInput from './amount-field-input';

const AmountField: FC<AmountFieldProps> = (props) => {
  const t = useTranslations();

  return (
    <Box mt="l">
      <Typography
        mb="s"
        color="onSurface"
        fontSize="0.688rem"
        variant="extraSmall"
        textTransform="uppercase"
      >
        {t('lst.amountField.title')}
      </Typography>
      <Box
        px="m"
        pb="m"
        mb="l"
        bg="surface.containerHigh"
        borderRadius="0.25rem"
      >
        <AmountFieldInput {...props} />
      </Box>
    </Box>
  );
};

export default AmountField;
