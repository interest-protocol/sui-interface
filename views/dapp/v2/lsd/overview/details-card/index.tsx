import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { UsersSVG } from '@/svg';

import { DetailsProps } from './details.type';
import Rewards from './rewards';

const DetailsCard: FC<DetailsProps> = ({ validatorNumbers, hasRewards }) => {
  const t = useTranslations();
  return (
    <Box
      width={['100%', '100%', '100%', '49%']}
      bg="surface.container"
      p="l"
      borderRadius="0.5rem"
    >
      <Typography
        variant="extraSmall"
        fontSize="0.688rem"
        color="onSurface"
        mb="l"
        textTransform="capitalize"
      >
        {t('lsd.details')}
      </Typography>
      <Box display="flex">
        <Box
          bg="surface.containerHigh"
          width="3rem"
          height="3rem"
          borderRadius="0.35rem"
          mr="l"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="primary"
        >
          <UsersSVG
            maxWidth="1.25rem"
            maxHeight="1.25rem"
            width="100%"
            height="100%"
          />
        </Box>
        <Box>
          <Typography
            variant="extraSmall"
            fontSize="0.688rem"
            color="onSurface"
            opacity={0.6}
            textTransform="capitalize"
          >
            {t('lsd.validator')}
          </Typography>
          <Typography
            variant="extraSmall"
            fontSize="1.375rem"
            color="onSurface"
            lineHeight="1.75rem"
          >
            {validatorNumbers}
          </Typography>
        </Box>
      </Box>

      {hasRewards && <Rewards />}
    </Box>
  );
};

export default DetailsCard;
