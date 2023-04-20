import { Box, Typography } from '@interest-protocol/ui-kit';
import stylin from '@stylin.js/react';
import { useTranslations } from 'next-intl';
import { toPairs } from 'ramda';
import { FC, ImgHTMLAttributes } from 'react';
import { v4 } from 'uuid';

import { SOCIAL_SVG, TEAM_MEMBERS } from './team.data';

const ImageElement = stylin<ImgHTMLAttributes<unknown>>('img')();

const Team: FC = () => {
  const t = useTranslations();

  return (
    <Box bg="background" py="4xl">
      <Typography as="h1" variant="displayLarge" textAlign="center" mb="4xl">
        <Typography
          as="span"
          display="block"
          variant="displayLarge"
          letterSpacing="-0.15rem"
          background="linear-gradient(270deg, #99BBFF 50%, rgba(153, 187, 255, 0.2) 99.07%)"
          WebkitBackgroundClip="text"
          WebkitTextFillColor="transparent"
          backgroundClip="text"
        >
          {t('landingPage.team.title.first')}
        </Typography>
        <Typography
          as="span"
          display="block"
          variant="displayLarge"
          letterSpacing="-0.15rem"
          background="linear-gradient(90deg, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)"
          WebkitBackgroundClip="text"
          WebkitTextFillColor="transparent"
          backgroundClip="text"
        >
          {t('landingPage.team.title.second')}
        </Typography>
      </Typography>
      <Box
        display="grid"
        px="50.6px"
        gap="xs"
        gridColumn={['1/-1', '1/-1', '1/-1', 'span 3']}
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr 1fr']}
      >
        {TEAM_MEMBERS.map(({ name, role, social, image }) => (
          <Box
            key={v4()}
            borderRadius="m"
            overflow="hidden"
            border="1px solid"
            borderColor="textAccent"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            pt="24px"
            px="18px"
            gap="16px"
            height="468px"
          >
            <Box as="picture" borderRadius="4px">
              <source
                type="image/webp"
                srcSet={`/images/web/team/${image}.webp 800w, /images/web/team/${image}.webp`}
              />
              <source
                type="image/png"
                srcSet={`/images/min/team/${image}.png 800w, /images/min/team/${image}.png`}
              />
              <ImageElement
                alt={name}
                width="100%"
                height="288px"
                borderRadius="4px"
                loading="lazy"
                decoding="async"
                src={`/images/min/team/${image}.png`}
              />
            </Box>
            <Box width="100%">
              <Typography
                variant="medium"
                color="text"
                fontSize="28px"
                as="p"
                mb="1rem"
              >
                {name}
              </Typography>
              <Typography
                variant="small"
                color="#ACAAAF"
                fontSize="1rem"
                mb="xl"
                as="p"
                width="100%"
              >
                {role}
              </Typography>
              <Box width="100%">
                <Box display="flex" gap="1.25rem" alignItems="center">
                  {toPairs(social).map(([network, link]) => {
                    const Icon = SOCIAL_SVG[network];
                    return (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        key={v4()}
                      >
                        <Box
                          mx="M"
                          as="span"
                          width="1.6rem"
                          display="inline-block"
                          color="#F2F0F4"
                          nHover={{
                            color: 'accent',
                          }}
                        >
                          <Icon
                            width="100%"
                            maxHeight="1.6rem"
                            maxWidth="1.6rem"
                          />
                        </Box>
                      </a>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Team;
