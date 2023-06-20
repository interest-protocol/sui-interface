import {
  Box,
  Button,
  TextField,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { WarningCircle } from '@/svg';
import { capitalize } from '@/utils';

const fieldProps = {
  border: '0px',
  bg: 'surface.containerLowest',
  height: '3.5rem',
  color: 'onSurfaceVariant',
  paddingLeft: '1rem',
};

const CreateToken: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const balance = '∞';
  return (
    <Box variant="container">
      <Box
        gridColumn={['1/-1', '1/-1', '1/-1', '3/11']}
        p="0 1.5rem"
        width="100%"
        color="onSurface"
      >
        <Typography
          variant="displayLarge"
          mb="4.625rem"
          textAlign="center"
          color={dark ? 'white' : 'black'}
        >
          {capitalize(t('createToken.pageTitle'))}
        </Typography>
        <Box
          display="flex"
          rowGap="2.3125rem"
          flexDirection={['column', 'column', 'column', 'row']}
          columnGap="1.5rem"
          mb="2.3125rem"
        >
          <Box flex={1}>
            <TextField
              placeholder={t('createToken.inputName')}
              fieldProps={fieldProps}
              fontSize="1rem"
            />
          </Box>
          <Box flex={1}>
            <TextField
              placeholder={t('createToken.inputSymbol')}
              fieldProps={fieldProps}
              fontSize="1rem"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="2.3125rem"
          mb="2.3125rem"
        >
          <TextField
            placeholder={t('createToken.inputDescription')}
            fieldProps={fieldProps}
            fontSize="1rem"
          />
          <TextField
            placeholder={t('createToken.inputIconUrl')}
            fieldProps={fieldProps}
            fontSize="1rem"
          />
          <Box>
            <Typography variant="medium" mb=".375rem" textAlign="right">
              {t('createToken.balance')}: {balance}
            </Typography>
            <TextField
              placeholder={t('createToken.inputAmount')}
              fieldProps={fieldProps}
              fontSize="1rem"
            />
          </Box>
          <Box
            bg="secondary.secondaryContainer"
            p=".6875rem"
            display="flex"
            gap=".625rem"
            alignItems="center"
            borderRadius=".25rem"
            color="primary"
          >
            <WarningCircle
              width="1.5rem"
              height="1.5rem"
              maxHeight="100%"
              maxWidth="100%"
            />
            <Typography variant="small">{t('createToken.advice')}</Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button variant="filled" size="small" fontSize=".875rem" px="1.5rem">
            {t('createToken.button', { isLoading: 0 })}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateToken;
