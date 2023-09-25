import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ActionButtonsProps } from './action-buttons.type';

const ActionButtons: FC<ActionButtonsProps> = ({
  disable,
  handleClear,
  handleSubmit,
}) => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;

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
          fontSize="0.875rem"
          width="100%"
          textAlign="center"
          color="onSurface"
          textTransform="capitalize"
        >
          {t('lst.claimnRewards.transactionSummary.buttonClear')}
        </Typography>
      </Button>
      <Button
        variant="filled"
        p="0.625rem 0 !important"
        py="0.625rem"
        disabled={disable}
        onClick={handleSubmit}
        bg={disable ? `${colors['surface.dim']} !important` : 'primary'}
      >
        <Typography
          variant="small"
          fontSize="0.875rem"
          textAlign="center"
          width="100%"
          textTransform="capitalize"
        >
          {t('lst.claimnRewards.transactionSummary.buttonClear')}
        </Typography>
      </Button>
    </Box>
  );
};
export default ActionButtons;
