import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { useBondsContext } from '@/views/dapp/v2/lst/bonds/bonds.hooks';

import { ActionButtonsProps } from './action-buttons.types';

const ActionButtons: FC<ActionButtonsProps> = ({
  handleClear,
  submitText,
  handleSubmit,
}) => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;
  const { form } = useBondsContext();

  const formValues = useWatch({ control: form.control });

  const isEnabled = () => {
    if (formValues.type === 'stake')
      return (
        !!formValues.amount &&
        +formValues.amount >= 1 &&
        !!formValues?.maturity?.epoch &&
        +formValues?.maturity?.epoch > 0
      );

    if (formValues.type === 'unstake')
      return !!formValues.amount && +formValues.amount >= 1;

    return false;
  };

  return (
    <Box
      display={['flex', 'flex', 'flex', 'grid']}
      flexDirection="column"
      gridTemplateColumns="1fr 1fr"
      gap="0.5rem"
    >
      <Button
        variant="outline"
        p="0.625rem 0 !important"
        px="auto"
        onClick={handleClear}
      >
        <Typography
          variant="small"
          width="100%"
          textAlign="center"
          color="onSurface"
          textTransform="capitalize"
        >
          {t('lst.bonds.transactionSummary.buttonClear')}
        </Typography>
      </Button>
      <Button
        variant="filled"
        p="0.625rem 0 !important"
        py="0.625rem"
        disabled={!isEnabled()}
        onClick={handleSubmit}
        bg={!isEnabled() ? `${colors['surface.dim']} !important` : 'primary'}
      >
        <Typography
          variant="small"
          fontSize="0.875rem"
          textAlign="center"
          width="100%"
          textTransform="capitalize"
        >
          {submitText}
        </Typography>
      </Button>
    </Box>
  );
};
export default ActionButtons;
