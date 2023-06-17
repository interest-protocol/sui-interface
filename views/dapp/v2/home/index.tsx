import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Layout } from '../components';
import LinearChart from '../components/charts/linear';

const Home: FC = () => {
  const data = [
    { name: 'YT', uv: 2000, pv: 332, amt: 2290 },
    { name: '1D', uv: 4000, pv: 52, amt: 2400 },
    { name: '1W', uv: 3000, pv: 232, amt: 2210 },
    { name: '1M', uv: 2000, pv: 5234, amt: 2290 },
    { name: '2M', uv: 2000, pv: 5234, amt: 2290 },
    { name: '3M', uv: 2000, pv: 23, amt: 2290 },
    { name: '4M', uv: 2000, pv: 525, amt: 2290 },
    { name: '5M', uv: 2000, pv: 4164, amt: 2290 },
    { name: '6M', uv: 2000, pv: 734, amt: 2290 },
    { name: '7M', uv: 2000, pv: 574, amt: 2290 },
    { name: '8M', uv: 2000, pv: 346, amt: 2290 },
    { name: '9M', uv: 2000, pv: 236, amt: 2290 },
    { name: '10M', uv: 2000, pv: 853, amt: 2290 },
    { name: '11M', uv: 2000, pv: 674, amt: 2290 },
    { name: '1Y', uv: 2780, pv: 124, amt: 2000 },
    { name: 'All', uv: 1890, pv: 844, amt: 2181 },
    { name: '1M', uv: 2000, pv: 346, amt: 2290 },
    { name: '1M', uv: 2000, pv: 123, amt: 2290 },
    { name: '1M', uv: 2000, pv: 795, amt: 2290 },
  ];
  const visibleData = ['1D', '1W', '1M', '1Y', 'All'];
  return (
    <Layout dashboard>
      <Box variant="container">
        <Box
          width="100%"
          gridColumn="1/7"
          height="371px"
          color="onSurface"
          borderRadius="m"
          bg="surface.containerLow"
        >
          <Box
            display="flex"
            flexDirection="column"
            rowGap="1rem"
            margin="1.125rem 1.1875rem 2.3681rem"
          >
            <Typography variant="medium" color="white">
              Performance
            </Typography>
            <Typography variant="title4" color="white">
              USD 19.90
            </Typography>
          </Box>
          <LinearChart visibleData={visibleData} data={data} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
