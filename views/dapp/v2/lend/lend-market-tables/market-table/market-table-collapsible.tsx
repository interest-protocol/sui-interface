import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';
import { CarteUpSVG } from '@/svg';

import { MarketTableCollapsibleProps } from './market-table.types';

const MarketTableCollapsible: FC<MarketTableCollapsibleProps> = ({
  isOpen,
  description,
  handleButton,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  return (
    <Box
      py="1.25rem"
      pl="1.125rem"
      display="grid"
      cursor="pointer"
      onClick={handleButton}
      gridTemplateColumns="3fr 1fr"
    >
      <Box px="l">
        <Typography
          variant="extraSmall"
          whiteSpace="nowrap"
          color={dark ? '#77767A' : '#47464A'}
        >
          {t(description as TTranslatedMessage)}
        </Typography>
      </Box>
      <Box paddingRight="l" display="flex" justifyContent="flex-end">
        <Motion
          transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
          display="flex"
          width="1.25rem"
          height="1.25rem"
          whileTap={{
            scale: 0.97,
            transition: { duration: 0.05, ease: easeInOut },
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.05, ease: easeInOut },
          }}
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          transition={{ duration: 0.5 }}
        >
          <CarteUpSVG
            width="0.469rem"
            height="0.469rem"
            maxWidth="1.25rem"
            maxHeight="1.25rem"
          />
        </Motion>
      </Box>
    </Box>
  );
};

export default MarketTableCollapsible;
