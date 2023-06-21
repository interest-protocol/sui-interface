import { Box, InfoCard, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const InfoCardGroup: FC = () => {
  const t = useTranslations();
  return (
    <Box gridColumn="1/-1" width="100%">
      <Typography variant="small" color="onSurface" mb="l">
        {t('dapp.topMovers')}
      </Typography>
      <Box
        border="0"
        overflow="auto"
        pb="1.5rem"
        borderStyle="solid"
        borderBottomWidth="1px"
        borderColor="outline.outlineVariant"
      >
        <Box display="flex" gap="m">
          <Box width="max-content">
            <InfoCard info="53%" title="Sol">
              USD 6,786.99
            </InfoCard>
          </Box>
          <Box width="max-content">
            <InfoCard info="53%" title="Floki">
              USD 6,786.99
            </InfoCard>
          </Box>
          <Box width="max-content">
            <InfoCard info="53%" title="Doge">
              USD 6,786.99
            </InfoCard>
          </Box>
          <Box width="max-content">
            <InfoCard info="53%" title="Floki">
              USD 6,786.99
            </InfoCard>
          </Box>
          <Box width="max-content">
            <InfoCard info="53%" title="Floki">
              USD 6,786.99
            </InfoCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoCardGroup;
