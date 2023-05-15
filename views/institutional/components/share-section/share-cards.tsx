import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';
import { ArrowRightSVG } from '@/svg';

import { ShareProps } from './share.types';

const ShareCard: FC<ShareProps> = ({
  link,
  title,
  color,
  subtitle,
  description,
  Illustration,
}) => {
  const t = useTranslations();

  return (
    <Box
      p="2xs"
      as="span"
      textAlign="left"
      borderRadius="m"
      border="1px solid"
      borderColor="textAccent"
    >
      <Box
        mb="2.5rem"
        display="flex"
        bg="#B6C4FF0A"
        borderRadius="m"
        alignItems="center"
        position="relative"
        justifyContent="center"
        height={['13.688rem', '13.688rem', '22.688rem']}
      >
        <Illustration />
      </Box>
      <Box p="m" pb={['4xl', '4xl', 'xl']} mb={['xl', 'xl', 'unset']}>
        <Typography color={color} textAlign="left" variant="displayLarge">
          {t(title as TTranslatedMessage)}
        </Typography>
        <Typography variant="title4" color={color}>
          {link
            ? t.rich(subtitle, {
                link: (chunks) => (
                  <Box
                    as="a"
                    textDecoration="underline"
                    {...{ href: link.url, target: '_blank', rel: 'noreferrer' }}
                  >
                    {chunks}
                  </Box>
                ),
              })
            : t(subtitle)}
        </Typography>
        <Typography variant="medium" opacity=".7" color="textSoft" my="1rem">
          {t(description)}
        </Typography>
        <a
          href="https://medium.com/@interestprotocol/interest-protocol-liquidity-program-e704f58e3e04"
          target="_blank"
          rel="noreferrer"
        >
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
        </a>
      </Box>
    </Box>
  );
};

export default ShareCard;
