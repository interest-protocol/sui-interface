import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ArrowLinkSVG } from '@/svg';

import { PoolProviderProps } from './liquidity-program.types';

const PoolProviderCard: FC<PoolProviderProps> = ({ name, Illustration }) => {
  const t = useTranslations();

  return (
    <Box
      as="span"
      p="2xs"
      display="grid"
      columnGap="2xl"
      borderRadius="m"
      border="1px solid"
      borderColor="textAccent"
    >
      <Box
        bg="#B6C4FF0A"
        borderRadius="m"
        width="350px"
        height="250px"
        position="relative"
        mb="2xl"
      >
        <Illustration />
        <Button
          m="l"
          right="0"
          zIndex="1"
          variant="icon"
          border="1px solid"
          position="absolute"
          borderColor="outline"
        >
          <ArrowLinkSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
      </Box>
      <Box
        p="xl"
        height="6.5rem"
        pb={['4xl', '4xl', 'xl']}
        mb={['xl', 'xl', 'unset']}
      >
        <Typography
          variant="displaySmall"
          color="text"
          mb="xl"
          textAlign="left"
        >
          {t(`liquidity.liquidity-program.poolProviders.${name}.title`)}
        </Typography>
        <Typography variant="medium" opacity=".7">
          {t(`liquidity.liquidity-program.poolProviders.${name}.available`)}
        </Typography>
      </Box>
      <Button variant="filled" bg="primary" width="max-content" margin="xl">
        {t('liquidity.liquidity-program.addLiquidity')}
      </Button>
    </Box>
  );
};

export default PoolProviderCard;
