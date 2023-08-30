import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { TRANSACTIONS_DATA } from './transactions.data';
import WalletTabItem from './wallet-tab-item';

const WalletTabs: FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Box
        p=".125rem"
        width="100%"
        display="flex"
        cursor="pointer"
        borderRadius="full"
        bg="inverseSurface"
        justifyContent="space-between"
      >
        <Box
          flex="1"
          p=".5rem 1.5rem"
          borderRadius="full"
          onClick={() => setToggle(false)}
          bg={toggle ? 'transparent' : 'surface'}
          color={!toggle ? 'onSurface' : 'inverseOnSurface'}
        >
          <Typography textAlign="center" variant="small">
            Token
          </Typography>
        </Box>
        <Box
          flex="1"
          p=".5rem 1.5rem"
          borderRadius="full"
          onClick={() => setToggle(true)}
          bg={toggle ? 'surface' : 'transparent'}
          color={toggle ? 'onSurface' : 'inverseOnSurface'}
        >
          <Typography textAlign="center" variant="small">
            Activity
          </Typography>
        </Box>
      </Box>
      {toggle ? (
        <Box overflow="auto" height="400px" mt="4xl">
          <Box display="flex" flexDirection="column" gap="m">
            {TRANSACTIONS_DATA.map((transaction) => (
              <WalletTabItem {...transaction} key={v4()} />
            ))}
          </Box>
        </Box>
      ) : (
        <Box overflow="auto" maxHeight="400px" mt="4xl">
          <Box display="flex" flexDirection="column" gap="m">
            {TRANSACTIONS_DATA.map((transaction) => (
              <WalletTabItem {...transaction} key={v4()} />
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default WalletTabs;
