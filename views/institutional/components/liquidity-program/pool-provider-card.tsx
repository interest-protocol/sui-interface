import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { TTranslatedMessage } from '@/interface';
import { ArrowLinkSVG } from '@/svg';

import { PoolProviderProps } from './liquidity-program.types';

const PoolProviderCard: FC<PoolProviderProps> = ({
  name,
  points,
  objectId,
  percentage,
  Illustration,
}) => {
  const t = useTranslations();
  const { push } = useRouter();

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
      <Box p="xl" textAlign="left" pb={['4xl', '4xl', 'unset']}>
        <Typography
          mb="xl"
          as="h3"
          color="text"
          variant="displaySmall"
          fontWeight="normal"
        >
          {t.rich(
            `liquidity.liquidity-program.poolProviders.${name}.title` as TTranslatedMessage,
            {
              sup: (chunks) => (
                <Box as="sub" fontSize="m">
                  {chunks}
                </Box>
              ),
            }
          )}
        </Typography>
        <Box display="flex" mb="l" gap="m">
          <Typography
            py="xs"
            px="xl"
            variant="medium"
            border="1px solid"
            borderRadius="0.7rem"
            borderColor="outline"
          >
            {points}pt
          </Typography>
          <Typography
            py="xs"
            px="xl"
            variant="medium"
            border="1px solid"
            borderRadius="0.7rem"
            borderColor="outline"
          >
            {percentage}%
          </Typography>
        </Box>
        <Box height={['13rem', '7rem', '15rem', '12rem']}>
          <Typography variant="medium" opacity=".7">
            {t.rich(
              `liquidity.liquidity-program.poolProviders.${name}.available` as TTranslatedMessage,
              {
                sup: (chunks) => (
                  <Typography as="sub" variant="extraSmall">
                    ({chunks})
                  </Typography>
                ),
              }
            )}
          </Typography>
        </Box>
      </Box>
      <Button
        variant="filled"
        bg="primary"
        width="max-content"
        margin="xl"
        onClick={() =>
          push({
            pathname: Routes[RoutesEnum.DEXPoolDetails],
            query: { objectId },
          })
        }
      >
        {t('liquidity.liquidity-program.addLiquidity')}
      </Button>
    </Box>
  );
};

export default PoolProviderCard;
