import {
  Box,
  InfoCard,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { useModal } from '@/hooks';
import { DollarSVG } from '@/svg';

import { Layout } from '../components';
import EarnListCard from './earn-list';
import FilterSection from './filter-section';
import TVLCardInfo from './tvl-card-info';
//import DetailedHeader from '../components/earn-detailed-header';

const Earn: FC = () => {
  const { setModal, handleClose } = useModal();
  const { dark } = useTheme() as Theme;

  const openModalFilters = () =>
    setModal(<FilterSection handleClose={handleClose} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });

  return (
    <Layout dashboard titlePage="EARN">
      <Box display="flex" variant="container">
        <Box display="grid" gridColumn="1/-1">
          <Box
            gap="8px"
            display="grid"
            overflowX="auto"
            gridTemplateColumns="repeat(4, 1fr)"
          >
            <InfoCard
              info={<TVLCardInfo value={0.45} />}
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
                    <DollarSVG
                      maxWidth="0.75rem"
                      maxHeight="0.75rem"
                      width="100%"
                    />
                  </Box>
                  TVL
                </Box>
              }
            >
              $82,123.01
            </InfoCard>
            <InfoCard
              info={
                <Typography
                  variant="small"
                  as="span"
                  color="secondary.onSecondaryContainer"
                >
                  24h
                </Typography>
              }
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
                    <DollarSVG
                      maxWidth="0.75rem"
                      maxHeight="0.75rem"
                      width="100%"
                    />
                  </Box>
                  Volume
                </Box>
              }
            >
              $15,123.01
            </InfoCard>
          </Box>
        </Box>
      </Box>
      <EarnListCard openModalFilters={openModalFilters} />
    </Layout>
  );
};

export default Earn;
