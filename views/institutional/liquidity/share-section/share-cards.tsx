import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ArrowRightSVG } from '@/svg';

import { ShareProps } from './share.types';

const ShareCard: FC<ShareProps> = ({
  title,
  subtitle,
  hasLink,
  description,
  color,
  Illustration,
}) => {
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
        height="22.688rem"
        position="relative"
        mb="2.5rem"
      >
        <Illustration />
      </Box>
      <Box p="m" pb={['4xl', '4xl', 'xl']} mb={['xl', 'xl', 'unset']}>
        <Typography
          variant="displayLarge"
          color={color}
          textAlign="left"
          pr="xl"
        >
          {t(title as any)}
        </Typography>
        <Typography variant="medium" color={color} fontSize="1.875rem">
          {t(subtitle as any) + ' '}
          {hasLink && (
            <Typography
              as="span"
              variant="medium"
              fontSize="1.875rem"
              textDecoration="underline"
            >
              <a href={hasLink.url} target="_blank" rel="noreferrer">
                {hasLink.caption}
              </a>
            </Typography>
          )}
        </Typography>
        <Typography variant="medium" opacity=".7" color="textSoft" my="1rem">
          {t(description as any)}
        </Typography>
        <Button
          variant="text"
          width="max-content"
          fontWeight="400"
          PrefixIcon={
            <Box width="1.25rem" height="1.25rem" color="textSoft">
              <ArrowRightSVG
                maxHeight="1.25rem"
                maxWidth="1.25rem"
                width="100%"
                height="100%"
              />
            </Box>
          }
        >
          {t('liquidity.share.buttonCard')}
        </Button>
      </Box>
    </Box>
  );
};

export default ShareCard;
