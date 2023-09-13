import { Button, Typography } from '@interest-protocol/ui-kit';
import { SUI_TYPE_ARG } from '@mysten/sui.js';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { DEFAULT_VALIDATOR, ISUI_COIN_TYPE } from '@/constants/lst';

import { PreviewButtonProps } from './your-info.types';

const PreviewButton: FC<PreviewButtonProps> = ({
  isStake,
  openModal,
  lstForm,
  network,
}) => {
  const t = useTranslations();
  const amount = useWatch({ control: lstForm.control, name: 'amount' });

  return (
    <Button
      px="1.5rem"
      mt="1.875rem"
      py="0.625rem"
      variant="filled"
      textAlign="center"
      width="fill-available"
      onClick={() => {
        openModal();
        lstForm.setValue('coinType', isStake ? SUI_TYPE_ARG : ISUI_COIN_TYPE);
        lstForm.setValue('validator', DEFAULT_VALIDATOR[network]);
      }}
      disabled={1 > +amount}
    >
      <Typography
        variant="small"
        fontWeight="500"
        textAlign="center"
        fontSize="0.875rem"
        width="100%"
        color="primary.onPrimary"
        textTransform="capitalize"
      >
        {t('lst.infoButton', { isStake: +isStake })}
      </Typography>
    </Button>
  );
};

export default PreviewButton;
