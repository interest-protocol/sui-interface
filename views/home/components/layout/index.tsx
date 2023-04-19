import { FC, PropsWithChildren } from 'react';

import Box from '@/elements/box';
import { IEmptyObj } from '@/interface';

import Footer from './footer';
import Header from './header';

const Layout: FC<PropsWithChildren<IEmptyObj>> = ({ children }) => (
  <Box minHeight="100vh" display="flex" flexDirection="column">
    <Header />
    {children}
    <Footer />
  </Box>
);

export default Layout;
