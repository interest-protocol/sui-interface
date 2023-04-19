import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Slider from 'react-slick';
import { v4 } from 'uuid';

import { PARTNER_LIST, partnersSlick } from './partners.data';

const Partners: FC = () => {
  const t = useTranslations();

  return (
    <Box bg="background" py="4xl">
      <Typography
        my="4xl"
        textAlign="center"
        variant="displayLarge"
        bg="linear-gradient(90deg, #99BBFF 20.36%, rgba(153, 187, 255, 0) 92.45%)"
        WebkitBackgroundClip="text"
        WebkitTextFillColor="transparent"
        backgroundClip="text"
      >
        {t('landingPage.partners.title')}
      </Typography>
      <Box py="4xl" mb={['0', 'm', '2xl', '4xl']}>
        <Slider {...partnersSlick}>
          {PARTNER_LIST.map(({ link, name }) => (
            <a key={v4()} href={link} target="_blank" rel="noreferrer">
              <Typography
                p="xl"
                mx="xs"
                color="text"
                variant="medium"
                borderRadius="m"
                border="1px solid"
                textDecoration="none"
                borderColor="textAccent"
              >
                {name}
              </Typography>
            </a>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Partners;
