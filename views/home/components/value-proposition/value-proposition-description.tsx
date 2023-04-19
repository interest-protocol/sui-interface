import { Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

export const MobileValuePropositionDescription: FC = () => (
  <Typography
    variant="medium"
    color="textSoft"
    p={['l', 'l', 'l', '0']}
    pl={['l', 'l', 'l', '4xl']}
    mb={['0', '0', '0', '4xl']}
    display={['block', 'block', 'block', 'none']}
  >
    Interest aims to establish a cross-chain asset exchange network, providing
    all necessary underlying support for their DeFi ecosystem. Let every digital
    asset holder experience a truly safe, free and transparent service.
  </Typography>
);

export const DesktopValuePropositionDescription: FC = () => (
  <Typography
    mb="4xl"
    pl="4xl"
    gridArea="c"
    variant="medium"
    color="textSoft"
    display={['none', 'none', 'none', 'block']}
  >
    Interest aims to establish a cross-chain asset exchange network, providing
    all necessary underlying support for their DeFi ecosystem. Let every digital
    asset holder experience a truly safe, free and transparent service.
  </Typography>
);
