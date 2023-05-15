import { Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { ArrowRightSVG } from '@/svg';

const ActionButton: FC<{ tutorial?: boolean }> = ({ tutorial }) => {
  const t = useTranslations();

  if (tutorial)
    return (
      <a href={Routes[RoutesEnum.Bridge]} target="_blank" rel="noreferrer">
        <Button
          variant="text"
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
            {t('liquidity.firstThingFirst.tutorial')}
          </Typography>
        </Button>
      </a>
    );

  return (
    <a href="https://youtu.be/czLQNJoQHBA" target="_blank" rel="noreferrer">
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
    </a>
  );
};
export default ActionButton;
