import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Box from '@/elements/box';
import Button from '@/elements/button';
import Typography from '@/elements/typography';

import { CreatePoolPopupProps } from './create-pool-modal.types';

const CreatePoolPopup: FC<CreatePoolPopupProps> = ({
  symbol0,
  symbol1,
  onCancel,
  onContinue,
}) => {
  const t = useTranslations();

  return (
    <Box
      p="L"
      color="text"
      borderRadius="L"
      bg="foreground"
      minWidth="20rem"
      maxWidth="25rem"
    >
      <Typography
        variant="normal"
        textTransform="uppercase"
        color="textSecondary"
      >
        {t('dexPoolFind.createPoolPopup.title')}
      </Typography>
      <Typography variant="normal" my="XL">
        {t('dexPoolFind.createPoolPopup.description', { symbol0, symbol1 })}
      </Typography>
      <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap="1rem">
        <Button
          bg="error"
          variant="primary"
          onClick={onCancel}
          nHover={{ bg: 'errorActive' }}
        >
          <Typography
            as="span"
            fontSize="S"
            variant="normal"
            textTransform="capitalize"
          >
            {t('common.cancel')}
          </Typography>
        </Button>
        <Button
          variant="primary"
          onClick={onContinue}
          nHover={{ bg: 'accentActive' }}
        >
          {t('dexPoolFind.createPoolPopup.submit')}
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePoolPopup;
