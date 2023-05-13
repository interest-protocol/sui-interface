import { Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ArrowRightSVG } from '@/svg';

const ActionButton: FC = () => {
  const t = useTranslations();
  return (
    <Button
      variant="outline"
      width={[
        '-webkit-fill-available',
        '-webkit-fill-available',
        '-webkit-fill-available',
        'unset',
      ]}
      display="flex"
      justifyContent="center"
      color="text"
      textTransform="capitalize"
    >
      <ArrowRightSVG
        width="1.25rem"
        maxWidth="1.25rem"
        height="1.25rem"
        maxHeight="1.25rem"
      />
      <Typography variant="medium" color="primary">
        {t('liquidity.firstThingFirst.button')}
      </Typography>
    </Button>
  );
};
export default ActionButton;
