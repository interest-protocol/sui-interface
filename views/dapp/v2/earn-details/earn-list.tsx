import { Box, Button, Tabs } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { SearchSVG } from '@/components/svg/v2';
import { SettingsSVG } from '@/svg';

import { EARN_POOL_DATA, EARN_POSITION_DATA } from './earn.data';
import { EarnListCardsProps } from './earn.types';
import EarnContainer from './earn-card/earn-container';
import PoolCard from './earn-card/pool-card';
import PositionCard from './earn-card/position-card';
//import DetailedHeader from '../components/earn-detailed-header';

const EarnListCard: FC<EarnListCardsProps> = ({ openModalFilters }) => {
  const [isPool, setIsPool] = useState(true);

  const handleTab = () => {
    setIsPool(not);
  };

  return (
    <Box>
      <Box variant="container">
        <Box display="grid" gridColumn="1/-1" width="100%">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Tabs
              items={['Pools', 'My Position']}
              defaultTabIndex={+!isPool}
              onChangeTab={handleTab}
            />
            <Box display="flex" gap="8px">
              <Button
                variant="icon"
                borderRadius="full"
                border="1px solid"
                borderColor="outline.outlineVariant"
                height="1rem"
                width="1rem"
              >
                <SearchSVG
                  maxHeight="1rem"
                  maxWidth="1rem"
                  height="1rem"
                  width="1rem"
                />
              </Button>
              <Button
                variant="icon"
                borderRadius="full"
                border="1px solid"
                borderColor="outline.outlineVariant"
                height="1rem"
                width="1rem"
                onClick={openModalFilters}
              >
                <SettingsSVG
                  maxHeight="1rem"
                  maxWidth="1rem"
                  height="1rem"
                  width="1rem"
                />
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
