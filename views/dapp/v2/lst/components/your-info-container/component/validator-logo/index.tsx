import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { CUSTOM_DEFAULT_IMAGE_VALIDATOR } from '../../your-info-container.data';
import { ValidatorLogoProps } from './validator-logo.types';

const ValidatorLogo: FC<ValidatorLogoProps> = ({ url, isToModal }) => {
  const { colors } = useTheme() as Theme;
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [errorImage, setErrorImage] = useState(false);

  const handleLoadImage = () => {
    setIsImageLoaded(true);
  };

  const handleErrorImage = () => {
    setErrorImage(true);
  };

  return (
    <Box display="flex">
      <Box
        width="2rem"
        height="2rem"
        borderRadius="0.25rem"
        bg={isToModal ? 'white' : 'unset'}
        position="relative"
      >
        <img
          src={errorImage ? CUSTOM_DEFAULT_IMAGE_VALIDATOR : url}
          alt={url}
          style={{
            borderRadius: '0.25rem',
            backgroundSize: 'contain',
          }}
          onLoad={handleLoadImage}
          onError={handleErrorImage}
          width="100%"
          height="100%"
        />
        {!isImageLoaded && (
          <Box width="2rem" height="2.2rem" position="absolute" top="-0.2rem">
            <Skeleton
              highlightColor={colors['outline.outlineVariant']}
              baseColor={colors.inverseOnSurface}
              width="100%"
              height="100%"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ValidatorLogo;
