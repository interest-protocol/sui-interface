import { Box, Slider, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { SUISVG } from '@/components/svg/v2';

const RowTokenField: FC = () => {
  const [isInput, setIsInput] = useState(false);
  const t = useTranslations();
  return (
    <Box pt="1.5rem" display="flex" flexDirection="column" gap="0.5rem">
      <Typography variant="medium" color="onSurface">
        {t('earn.previewInformations.balance')} 2.123
      </Typography>
      <Box display="flex" gap="1.5rem" alignItems="center">
        <Box
          bg="primary"
          color="inverseOnSurface"
          width="2.5rem"
          height="2.5rem"
          minWidth="2.5rem"
          minHeight="2.5rem"
          borderRadius=".25rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <SUISVG maxHeight="1.5rem" maxWidth="1.5rem" width="1.5rem" />
        </Box>
        <Typography variant="medium" color="white">
          BTCB
        </Typography>
        <Box
          ml="auto"
          px="1rem"
          color="onSurfaceVariant"
          width="100%"
          height="3.5rem"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          onClick={() => setIsInput(true)}
        >
          {isInput ? (
            <Box width="100%">
              <TextField
                fontSize="m"
                placeholder="0.000"
                fieldProps={{
                  border: '0px',
                  bg: 'surface.containerLowest',
                  height: '3.5rem',
                  color: 'onSurfaceVariant',
                  paddingLeft: '1rem',
                  textAlign: 'end',
                }}
              />
            </Box>
          ) : (
            <Typography variant="medium">0.00000</Typography>
          )}
        </Box>
      </Box>
      <Box mt="-1.5rem">
        <Slider
          max={100}
          onChange={() => {
            return;
          }}
        />
      </Box>
    </Box>
  );
};

export default RowTokenField;
