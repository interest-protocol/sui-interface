import { Box, InfoCard } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { TTranslatedMessage } from '@/interface';

import { TopInfoCardsProps } from './top-info-cards.types';

const TopInfoCards: FC<TopInfoCardsProps> = ({
  Icon,
  description,
  amount,
  loading,
}) => {
  const t = useTranslations();

  return (
    <InfoCard
      title={
        <Box display="flex" alignItems="center" gap="m">
          <Box
            color="surface"
            display="flex"
            width="1.3rem"
            height="1.3rem"
            borderRadius="50%"
            bg="inverseSurface"
            alignItems="center"
            justifyContent="center"
          >
            <Icon maxWidth="0.8rem" maxHeight="0.8rem" width="100%" />
          </Box>
          {t(description as TTranslatedMessage)}
        </Box>
      }
      info={null}
      width={['18rem', '18rem', '18rem', '100%']}
    >
      {loading ? <Skeleton width="40%" /> : amount}
    </InfoCard>
  );
};

export default TopInfoCards;
