import { Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { PreviewButtonProps } from './your-info.types';

const PreviewButton: FC<PreviewButtonProps> = ({
  isStake,
  openStakeModal,
  openUnstakeModal,
  lstForm,
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
      onClick={isStake ? openStakeModal : openUnstakeModal}
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
