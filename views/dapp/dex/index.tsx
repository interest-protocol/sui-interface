import { useRouter } from 'next/router';
import { FC } from 'react';

import { Container, Switch } from '@/components';
import { Routes, RoutesEnum } from '@/constants';
import { Box } from '@/elements';

import Pool from './pool';
import Swap from './swap';

const DEXView: FC = () => {
  const { pathname, push } = useRouter();

  const isSwap = !pathname.includes(Routes[RoutesEnum.DEXPool]);

  return (
    <Container
      width={['100%', '100%', '100%', 'auto']}
      minHeight="60vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        bg="foreground"
        textAlign="center"
        mt="0.5rem"
        p="L"
        borderRadius="L"
        minWidth={['20rem', '40rem']}
      >
        <Switch
          defaultValue={isSwap ? 'swap' : 'pool'}
          options={[
            { value: 'swap', onSelect: () => push(Routes[RoutesEnum.DEX]) },
            { value: 'pool', onSelect: () => push(Routes[RoutesEnum.DEXPool]) },
          ]}
        />
      </Box>
      {isSwap ? <Swap /> : <Pool />}
    </Container>
  );
};

export default DEXView;
