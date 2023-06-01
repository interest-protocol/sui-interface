import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { CheckmarkSVG } from '@/components/svg/v2';

import { AutomatedPriceProps } from './settings-modal.types';

const AutomatedPrice: FC<AutomatedPriceProps> = ({ setValue, control }) => {
  const autoFetch = useWatch({ control, name: 'autoFetch' });

  return (
    <>
      <Typography variant="extraSmall" alignSelf="start" mb="s">
        Automated Price
      </Typography>
      <Box
        my="s"
        bg="#1B1B1F"
        width="100%"
        display="grid"
        borderRadius="m"
        overflow="hidden"
        textAlign="center"
        gridTemplateColumns="1fr 1fr"
      >
        <Typography
          py="m"
          variant="small"
          cursor="pointer"
          onClick={() => setValue('autoFetch', true)}
          {...(autoFetch && { bg: 'primary', color: 'textAccent' })}
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
          {...(!autoFetch && { bg: 'primary', color: 'textAccent' })}
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
