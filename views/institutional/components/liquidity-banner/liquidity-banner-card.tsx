import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { PlusSVG } from '@/svg';

import { LiquidityBannerCardProps } from './liquidity-banner.types';

const LiquidityBannerCard: FC<LiquidityBannerCardProps> = ({
  title,
  label,
  colors,
  buttons,
  description,
  Illustration,
}) => {
  const t = useTranslations();

  return (
    <Box
      p="2xs"
      pr="m"
      bg={colors[0]}
      display="flex"
      borderRadius="m"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Box
        display="flex"
        alignItems="center"
        flexDirection={['column', 'column', 'row']}
        justifyContent={['unset', 'unset', 'center', 'unset']}
      >
        <Box
          mr="xl"
          width="12rem"
          bg="background"
          borderRadius="m"
          height={['12rem', '12rem', '10rem']}
        >
          <Box p="10%" width="80%" height="80%" position="relative">
            <Illustration />
          </Box>
        </Box>
        <Box my="xl" textAlign={['center', 'center', 'left']}>
          <Typography
            px="xl"
            py="2xs"
            bg={colors[1]}
            variant="medium"
            borderRadius="0.2rem"
            display="inline-block"
          >
            {t(label)}
          </Typography>
          <Typography variant="title3" color="black">
            {t(title)}
          </Typography>
          <Typography variant="small" color="black" mt="s">
            {t(description)}
          </Typography>
        </Box>
      </Box>
      <Box
        pb="m"
        mt="3xl"
        gap="s"
        display="flex"
        flexDirection={['column', 'row']}
        alignSelf={['center', 'center', 'center', 'end']}
      >
        {buttons[0].link.startsWith('/') ? (
          <Link href={buttons[0].link}>
            <Button
              bg="black"
              color="text"
              width="8rem"
              variant="filled"
              py="0.8rem !important"
              justifyContent="center"
            >
              {t(buttons[0].name)}
            </Button>
          </Link>
        ) : (
          <a href={buttons[0].link} target="_blank" rel="noreferrer">
            <Button
              bg="black"
              color="text"
              width="8rem"
              variant="filled"
              py="0.8rem !important"
              justifyContent="center"
            >
              {t(buttons[0].name)}
            </Button>
          </a>
        )}
        {buttons[1].link.startsWith('/') ? (
          <Link href={buttons[1].link}>
            <Button
              width="8rem"
              color="black"
              borderColor="black"
              variant="outline"
              py="0.8rem !important"
              justifyContent="center"
            >
              {t(buttons[1].name)}
              <PlusSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
            </Button>
          </Link>
        ) : (
          <a href={buttons[1].link} target="_blank" rel="noreferrer">
            <Button
              width="8rem"
              color="black"
              borderColor="black"
              variant="outline"
              py="0.8rem !important"
              justifyContent="center"
            >
              {t(buttons[1].name)}
              <PlusSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
            </Button>
          </a>
        )}
      </Box>
    </Box>
  );
};

export default LiquidityBannerCard;
