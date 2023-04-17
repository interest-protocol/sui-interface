import { FC, PropsWithChildren } from 'react';

import Box from '@/elements/box';
import { IEmptyObj } from '@/interface';

import Header from './header';
import Footer from './footer';

const Layout: FC<PropsWithChildren<IEmptyObj>> = ({ children }) => (
  <Box minHeight="100vh" display="flex" flexDirection="column">
    <Header />
    {children}
    <Footer />
  </Box>
);

export default Layout;
