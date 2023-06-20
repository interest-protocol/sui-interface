import { Box, InfoCard, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const InfoCardGroup: FC = () => {
  return (
    <Box gridColumn="1/-1" width="100%">
      <Typography variant="small" color="onSurface">
        Top Movers
      </Typography>
      <Box overflow="auto">
        <Box display="flex" gap="m">
          <Box width="max-content">
            <InfoCard info="53%" title="List item">
              USD 6,786.99
            </InfoCard>
          </Box>
          <Box width="max-content">
            <InfoCard info="53%" title="List item">
              USD 6,786.99
            </InfoCard>
          </Box>
          <Box width="max-content">
            <InfoCard info="53%" title="List item">
              USD 6,786.99
            </InfoCard>
          </Box>
          <Box width="max-content">
            <InfoCard info="53%" title="List item">
              USD 6,786.99
            </InfoCard>
          </Box>
          <Box width="max-content">
            <InfoCard info="53%" title="List item">
              USD 6,786.99
            </InfoCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoCardGroup;
