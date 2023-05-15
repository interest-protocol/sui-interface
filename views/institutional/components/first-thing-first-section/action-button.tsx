import { Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ArrowRightSVG } from '@/svg';

import { ActionButtonProps } from './first-thing-first-section.types';

const ActionButton: FC<ActionButtonProps> = ({ isText, text, url }) => {
  const t = useTranslations();
  return (
    <Button
      variant={isText ? 'text' : 'outline'}
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
      <Typography
        as="a"
        variant="medium"
        color="primary"
        textDecoration={isText ? 'unset' : 'underline'}
        {...{ href: url, target: '_blank', rel: 'noreferrer' }}
      >
        {t(text)}
      </Typography>
    </Button>
  );
};
export default ActionButton;
