import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { AdvantagesCardProps } from './advantages.types';

const AdvantagesCard: FC<AdvantagesCardProps> = ({
  position,
  Illustration,
}) => {
  const t = useTranslations();

  return (
    <Box
      p="2xs"
      my="4xl"
      width="15.625rem"
      display="grid"
      columnGap="2xl"
      borderRadius="m"
      border="1px solid"
      borderColor="textAccent"
    >
      <Box p="xl" pb={['4xl', '4xl', 'xl']} mb={['xl', 'xl', 'unset']}>
        <Typography variant="title6" color="text" mb="xl" textAlign="center">
          {t(`landingPage.Advantages.content.${position}.description`)}
        </Typography>
      </Box>
      <Box bg="#B6C4FF0A" height="100%" position="relative">
        <Box m="4xl" p="4xl">
          <Illustration />
        </Box>
      </Box>
    </Box>
  );
};

export default AdvantagesCard;
