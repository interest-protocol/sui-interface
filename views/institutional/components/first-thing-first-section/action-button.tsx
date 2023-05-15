import { Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { ArrowRightSVG } from '@/svg';

import { ActionButtonProps } from './first-thing-first-section.types';

const ActionButton: FC<ActionButtonProps> = ({ tutorial }) => {
  const t = useTranslations();

  return (
    <a
      href={
        tutorial ? 'https://youtu.be/czLQNJoQHBA' : Routes[RoutesEnum.Bridge]
      }
      target="_blank"
      rel="noreferrer"
    >
      <Button
        variant={tutorial ? 'text' : 'outline'}
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
          {tutorial
            ? t('liquidity.firstThingFirst.buttonTutorial')
            : t('liquidity.firstThingFirst.buttonAssets')}
        </Typography>
      </Button>
    </a>
  );
};

export default ActionButton;
