import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';
import { ArrowLinkSVG } from '@/svg';

import { PoolProviderProps } from './liquidity-program.types';

const PoolProviderCard: FC<PoolProviderProps> = ({ name, Illustration }) => {
  const t = useTranslations();

  return (
    <Box
      mx="s"
      p="2xs"
      as="span"
      height="100%"
      display="grid"
      columnGap="2xl"
      borderRadius="m"
      overflow="hidden"
      border="1px solid"
      borderColor="textAccent"
    >
      <Box
        mb="2xl"
        width="100%"
        bg="#B6C4FF0A"
        borderRadius="m"
        height="15.7rem"
        position="relative"
        maxWidth={['100%', '100%', '100%', '22rem']}
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
        textAlign="left"
        pb={['4xl', '4xl', 'xl']}
        mb={['xl', 'xl', 'unset']}
      >
        <Typography mb="xl" color="text" variant="displaySmall">
          {t.rich(
            `liquidity.liquidity-program.poolProviders.${name}.title` as TTranslatedMessage,
            {
              sub: (chunks) => (
                <Typography as="sub" variant="extraSmall">
                  {chunks}
                </Typography>
              ),
            }
          )}
        </Typography>
        <Box height={['14rem', '5rem', '12rem', '9rem']}>
          <Typography variant="medium" opacity=".7">
            {t.rich(
              `liquidity.liquidity-program.poolProviders.${name}.available` as TTranslatedMessage,
              {
                sub: (chunks) => (
                  <Typography as="sub" variant="extraSmall">
                    {chunks}
                  </Typography>
                ),
              }
            )}
          </Typography>
        </Box>
      </Box>
      <Button variant="filled" bg="primary" width="max-content" margin="xl">
        {t('liquidity.liquidity-program.addLiquidity')}
      </Button>
    </Box>
  );
};

export default PoolProviderCard;
