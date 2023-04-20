import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { AdvantagesCardProps } from './advantages.types';

const AdvantagesCard: FC<AdvantagesCardProps> = ({ name, Illustration }) => {
  const t = useTranslations();

  return (
    <Box
      p="2xs"
      display="grid"
      columnGap="2xl"
      borderRadius="m"
      width="15.625rem"
      border="1px solid"
      borderColor="textAccent"
    >
      <Box
        p="xl"
        height="6.5rem"
        pb={['4xl', '4xl', 'xl']}
        mb={['xl', 'xl', 'unset']}
      >
        <Typography variant="large" color="text" mb="xl" textAlign="center">
          {t(`landingPage.advantages.content.${name}.description`)}
        </Typography>
      </Box>
      <Box
        bg="#B6C4FF0A"
        borderRadius="m"
        width="15.625rem"
        height="15.625rem"
        position="relative"
      >
        <Illustration />
      </Box>
    </Box>
  );
};

export default AdvantagesCard;
