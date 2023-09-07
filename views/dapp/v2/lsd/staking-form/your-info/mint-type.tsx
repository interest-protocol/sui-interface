import { Box, RadioButton, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ISuiPCSVG, ISuiSVG, ISuiYNSVG } from '@/svg';

import { MintTypeProps } from '../../lsd.type';

const MintType: FC<MintTypeProps> = ({ onChange, mintTypeOption }) => {
  const t = useTranslations();

  return (
    <Box>
      <Typography
        variant="extraSmall"
        fontSize="0.688rem"
        color="onSurface"
        mb="1.375rem"
        textTransform="uppercase"
      >
        {t('lsd.mintType')}
      </Typography>
      <Box display="flex" justifyContent="space-between" mb="1.75rem">
        <RadioButton
          name="mintType"
          checked={mintTypeOption == 'ISUI'}
          onChange={() => onChange('ISUI')}
        />
        <Box display="flex" alignItems="center" gap="0.5rem" color="white">
          <ISuiSVG
            maxWidth="1.25rem"
            maxHeight="1.25rem"
            width="100%"
            height="100%"
            filled
            rounded
          />
          <Typography
            variant="extraSmall"
            fontSize="0.875rem"
            color="onSurface"
          >
            iSui
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <RadioButton
          name="mintType"
          checked={mintTypeOption == 'OTHER'}
          onChange={() => onChange('OTHER')}
        />
        <Box color="onSurface" display="flex" gap="1rem">
          <Box display="flex" alignItems="center" gap="0.5rem" color="white">
            <ISuiPCSVG
              maxWidth="1.25rem"
              maxHeight="1.25rem"
              width="100%"
              height="100%"
              filled
              rounded
            />
            <Typography
              variant="extraSmall"
              fontSize="0.875rem"
              color="onSurface"
            >
              iSui-PC
            </Typography>
          </Box>
          &
          <Box display="flex" alignItems="center" gap="0.5rem" color="white">
            <ISuiYNSVG
              maxWidth="1.25rem"
              maxHeight="1.25rem"
              width="100%"
              height="100%"
              filled
              rounded
            />
            <Typography
              variant="extraSmall"
              fontSize="0.875rem"
              color="onSurface"
            >
              iSui-YN
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MintType;
