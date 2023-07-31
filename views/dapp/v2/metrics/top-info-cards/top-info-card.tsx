import { Box, InfoCard } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';
import { formatDollars } from '@/utils';

import { TopInfoCardsProps } from './top-info-cards.types';

const TopInfoCards: FC<TopInfoCardsProps> = ({ Icon, description, amount }) => {
  const t = useTranslations();

  return (
    <InfoCard
      title={
        <Box display="flex" alignItems="center" gap="m">
          <Box
            display="flex"
            width="1.3rem"
            height="1.3rem"
            alignItems="center"
            justifyContent="center"
          >
            <Icon maxWidth="1.3rem" maxHeight="1.3rem" width="100%" />
          </Box>
          {t(description as TTranslatedMessage)}
        </Box>
      }
      info={null}
    >
      {formatDollars(amount)}
    </InfoCard>
  );
};

export default TopInfoCards;
