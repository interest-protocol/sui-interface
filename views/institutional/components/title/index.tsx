import { Typography, TypographyProps } from '@interest-protocol/ui-kit';
import { CustomDomComponent, easeInOut, motion } from 'framer-motion';
import { FC } from 'react';

import { TitleProps } from './title.types';

const TypographyMotion = motion(Typography) as CustomDomComponent<
  Pick<TypographyProps, 'variant'> & TitleProps
>;

const Title: FC<TitleProps> = (props) => (
  <TypographyMotion
    as="h1"
    mb="4xl"
    variant="displayLarge"
    background="linear-gradient(30deg, rgba(153, 187, 255, 0.2) 0%, #99BBFF 3%, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)"
    WebkitTextFillColor="transparent"
    WebkitBackgroundClip="text"
    backgroundClip="text"
    animate={{
      background: [
        'linear-gradient(30deg, rgba(153, 187, 255, 0.2) 0%, #99BBFF 3%, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)',
        'linear-gradient(30deg, rgba(153, 187, 255, 0.2) 0%, #99BBFF 3%, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)',
        'linear-gradient(30deg, rgba(153, 187, 255, 0.2) 0%, #99BBFF 3%, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)',
        'linear-gradient(30deg, rgba(153, 187, 255, 0.2) 0%, #99BBFF 3%, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)',
        'linear-gradient(30deg, rgba(153, 187, 255, 0.2) 0%, #99BBFF 3%, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)',
        'linear-gradient(30deg, rgba(153, 187, 255, 0.2) 0%, #99BBFF 3%, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)',
        'linear-gradient(30deg, rgba(153, 187, 255, 0.2) 0%, #99BBFF 3%, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)',
        'linear-gradient(30deg, rgba(153, 187, 255, 0.2) 3%, #99BBFF 94.16%, #99BBFF 100%, rgba(153, 187, 255, 0.2) 100%)',
        'linear-gradient(30deg, rgba(153, 187, 255, 0.2) 0%, #99BBFF 3%, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)',
      ],
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
    }}
    {...props}
    transition={{
      duration: 6,
      ease: easeInOut,
      repeat: Infinity,
    }}
    fontWeight="400"
  />
);

export default Title;
