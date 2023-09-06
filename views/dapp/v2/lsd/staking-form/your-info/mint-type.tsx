import { Box, RadioButton, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import SuiDerivated from '../../components/sui-derivated/sui-derivated';
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
        <SuiDerivated
          symbol="iSui"
          boxSize="1.25rem"
          iconSize="0.875rem"
          withSymbol
        />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <RadioButton
          name="mintType"
          checked={mintTypeOption == 'OTHER'}
          onChange={() => onChange('OTHER')}
        />
        <Box color="onSurface" display="flex" gap="1rem">
          <SuiDerivated
            symbol="iSui-PC"
            boxSize="1.25rem"
            iconSize="0.875rem"
            withSymbol
          />
          &
          <SuiDerivated
            symbol="iSui-YN"
            boxSize="1.25rem"
            iconSize="0.875rem"
            withSymbol
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MintType;
