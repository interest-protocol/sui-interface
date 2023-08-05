import { Box, Button, Tabs, TextField } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { SearchSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { PlusSVG } from '@/svg';
import { capitalize } from '@/utils';

import { EARN_POOL_DATA, EARN_POSITION_DATA } from './earn.data';
import { EarnListCardsProps } from './earn.types';
import EarnContainer from './earn-card/earn-container';
import PoolCard from './earn-card/pool-card';
import PositionCard from './earn-card/position-card';

const EarnListCard: FC<EarnListCardsProps> = ({ openModalFilters }) => {
  const t = useTranslations();
  const { push } = useRouter();
  const [isPool, setIsPool] = useState(true);

  const handleTab = () => {
    setIsPool(not);
  };

  return (
    <Box>
      <Box display="flex" variant="container">
        <Box display="grid" gridColumn="1/-1" width="100%">
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            gap="m"
            alignItems="center"
            width="100%"
          >
            <Tabs
              items={[
                capitalize(t('common.pool')),
                capitalize(t('earn.tabs.myPosition')),
              ]}
              defaultTabIndex={+!isPool}
              onChangeTab={handleTab}
            />
            <Box display="flex" gap="s" alignItems="center">
              <TextField
                Prefix={
                  <Button
                    variant="icon"
                    borderRadius="full"
                    height="1rem"
                    width="1rem"
                    onClick={openModalFilters}
                  >
                    <SearchSVG
                      maxHeight="1rem"
                      maxWidth="1rem"
                      height="1rem"
                      width="1rem"
                    />
                  </Button>
                }
                placeholder={capitalize(t('common.search'))}
                fontSize="0.875rem"
                fieldProps={{
                  borderRadius: 'full',
                  fontSize: '0.875rem',
                }}
              />
              <Button
                variant="outline"
                borderRadius="full"
                px="l"
                py="0.95rem"
                width="max-content"
                fontSize={['0.6rem', '0.6rem', '0.6rem', '0.875rem']}
                onClick={() =>
                  push({ pathname: Routes[RoutesEnum.EarnCreatePool] }).then()
                }
              >
                <PlusSVG maxWidth="1rem" maxHeight="1rem" width="1rem" />
                {t('common.v2.earnPool.createPool')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <EarnContainer columns={3}>
        {isPool
          ? EARN_POOL_DATA.map((earnItem) => (
              <PoolCard key={v4()} {...earnItem} />
            ))
          : EARN_POSITION_DATA.map((earnItem) => (
              <PositionCard key={v4()} {...earnItem} />
            ))}
      </EarnContainer>
    </Box>
  );
};

export default EarnListCard;
