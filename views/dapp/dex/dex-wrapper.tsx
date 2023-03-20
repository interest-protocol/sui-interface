import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

import { Container, Switch } from '@/components';
import { Routes, RoutesEnum } from '@/constants';
import { Box } from '@/elements';
import { IEmptyObj } from '@/interface';

const DEXViewWrapper: FC<PropsWithChildren<IEmptyObj>> = ({ children }) => {
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
        p="L"
        mt="0.5rem"
        bg="foreground"
        borderRadius="L"
        textAlign="center"
        minWidth={['17rem', '40rem']}
      >
        <Switch
          defaultValue={isSwap ? 'swap' : 'pool'}
          options={[
            { value: 'swap', onSelect: () => push(Routes[RoutesEnum.DEX]) },
            { value: 'pool', onSelect: () => push(Routes[RoutesEnum.DEXPool]) },
          ]}
        />
      </Box>
      {children}
    </Container>
  );
};

export default DEXViewWrapper;
