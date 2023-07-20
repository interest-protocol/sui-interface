import { Box, InfoCard, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import APRCardTrendInfo from './apr-card-trend-info';
import { APRCardProps } from './card.types';

const APRCard: FC<APRCardProps> = ({ Icon, description, amount, trend }) => {
  const { dark } = useTheme() as Theme;

  return (
    <InfoCard
      info={<APRCardTrendInfo value={trend} />}
      title={
        <Box as="span" display="flex" alignItems="center" gap="m">
          <Box
            as="span"
            width="1.3rem"
            height="1.3rem"
            alignItems="center"
            borderRadius="full"
            bg="inverseSurface"
            display="inline-flex"
            justifyContent="center"
            color={dark ? 'black' : 'white'}
          >
            <Icon maxWidth="0.85rem" maxHeight="0.85rem" width="100%" />
          </Box>
          {description}
        </Box>
      }
    >
      {amount}
    </InfoCard>
  );
};

export default APRCard;
