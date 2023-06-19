import { Box, Button, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { WarningCircle } from '@/svg';
import { capitalize } from '@/utils';

const CreateToken: FC = () => {
  const t = useTranslations();
  const balance = 0.0234;
  return (
    <Box variant="container">
      <Box
        gridColumn={['1/-1', '1/-1', '1/-1', '3/11']}
        p="0 1.5rem"
        width="100%"
        color="onSurface"
      >
        <Typography variant="displayLarge" mb="4.625rem" textAlign="center">
          {capitalize(t('createToken.pageTitle'))}
        </Typography>
        <Box display="flex" columnGap="1.5rem" mb="2.3125rem">
          <Box flex={1}>
            <TextField placeholder={t('createToken.inputName')} />
          </Box>
          <Box flex={1}>
            <TextField placeholder={t('createToken.inputSymbol')} />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="2.3125rem"
          mb="2.3125rem"
        >
          <TextField placeholder={t('createToken.inputDescription')} />
          <TextField placeholder={t('createToken.inputIconUrl')} />
          <Box>
            <Typography variant="medium" mb="0.375rem" textAlign="right">
              {t('createToken.balance')} {balance}
            </Typography>
            <TextField placeholder={t('createToken.inputAmount')} />
          </Box>
          <Box
            bg="secondary.secondaryContainer"
            p="0.6875rem"
            display="flex"
            gap="0.625rem"
            alignItems="center"
            borderRadius="0.25rem"
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
          <Button variant="filled">
            {t('createToken.button', { isLoading: 0 })}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateToken;
