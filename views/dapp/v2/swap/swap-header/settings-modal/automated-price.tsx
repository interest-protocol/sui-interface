import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { CheckmarkSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

import { AutomatedPriceProps } from './settings-modal.types';

const AutomatedPrice: FC<AutomatedPriceProps> = ({ setValue, control }) => {
  const t = useTranslations();
  const autoFetch = useWatch({ control, name: 'autoFetch' });

  return (
    <>
      <Typography variant="extraSmall" alignSelf="start" mb="s">
        {capitalize(t('swap.modal.settings.field.automated'))}
      </Typography>
      <Box
        my="s"
        width="100%"
        display="grid"
        borderRadius="m"
        overflow="hidden"
        textAlign="center"
        bg="surface.containerLow"
        gridTemplateColumns="1fr 1fr"
      >
        <Typography
          py="m"
          variant="small"
          cursor="pointer"
          onClick={() => setValue('autoFetch', true)}
          {...(autoFetch && { bg: 'primary', color: 'primary.onPrimary' })}
        >
          {autoFetch && (
            <Box as="span" mr="m">
              <CheckmarkSVG maxWidth="0.8rem" maxHeight="0.8rem" width="100%" />
            </Box>
          )}
          Auto
        </Typography>
        <Typography
          py="m"
          variant="small"
          cursor="pointer"
          onClick={() => setValue('autoFetch', false)}
          {...(!autoFetch && { bg: 'primary', color: 'primary.onPrimary' })}
        >
          {!autoFetch && (
            <Box as="span" mr="m">
              <CheckmarkSVG maxWidth="0.8rem" maxHeight="0.8rem" width="100%" />
            </Box>
          )}
          Manual
        </Typography>
      </Box>
    </>
  );
};

export default AutomatedPrice;
