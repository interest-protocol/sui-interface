import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';

import { BondsCardProps } from './bonds-card.types';
import { ILLUSTRATIONS } from './bonds-card-illustration';

const bondsLinks = {
  unstake: Routes[RoutesEnum.LSTBondsUnstake],
  stake: Routes[RoutesEnum.LSTBondsStake],
  rewards: Routes[RoutesEnum.LSTBondsRewards],
};

const BondsCard: FC<BondsCardProps> = ({ type }) => {
  const t = useTranslations();
  const { push } = useRouter();
  const { dark } = useTheme() as Theme;
  const Illustration = ILLUSTRATIONS[type];

  return (
    <Box
      p="xl"
      display="flex"
      borderRadius="m"
      bg="surface.container"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Typography
        variant="title6"
        textAlign="center"
        color={dark ? 'white' : 'black'}
      >
        {t.rich(`lst.bonds.menu.${type}.title`, { br: () => <br /> })}
      </Typography>
      <Box
        height="15rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="surface.container"
      >
        {Illustration}
      </Box>
      <Box display="flex" flexDirection="column" gap="l">
        <Typography
          opacity="0.6"
          fontSize="small"
          variant="medium"
          textAlign="center"
          color={dark ? 'white' : 'black'}
        >
          {t.rich(`lst.bonds.menu.${type}.description`, { br: () => <br /> })}
        </Typography>
        <Button
          size="small"
          variant="filled"
          justifyContent="center"
          onClick={() => push(bondsLinks[type], undefined, { shallow: true })}
        >
          {t(`lst.bonds.menu.${type}.button`)}
        </Button>
      </Box>
    </Box>
  );
};

export default BondsCard;
