import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { ArrowLeft } from '@/svg';

import { DetailedHeaderProps } from './earn.types';
import { getSymbolsByCoins } from './earn.utils';

const DetailedHeader: FC<DetailedHeaderProps> = ({ coins, headerOption }) => {
  const { push } = useRouter();
  const t = useTranslations();

  return (
    <Box display="flex" gap="1.5rem" alignItems="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="2.5rem"
        height="2.5rem"
        border="1px solid"
        borderColor="outiline.outlineVariant"
        borderRadius="50%"
        color="onSurface"
        onClick={() => push({ pathname: Routes[RoutesEnum.Earn] }).then()}
        cursor="pointer"
      >
        <ArrowLeft maxHeight="100%" maxWidth="100%" width="60%" />
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="title4">{getSymbolsByCoins(coins)}</Typography>
      </Box>
      <Box display="flex" gap=".5rem">
        {headerOption.isVolatile && (
          <Button variant="filled" size="small" bg="#FED7AA">
            <Typography variant="small" margin="0 auto" color="#92400E">
              {t('earn.buttons.volatile')}
            </Typography>
          </Button>
        )}
        {headerOption.isStable && (
          <Button variant="filled" size="small" bg="#A5F3FC">
            <Typography variant="small" margin="0 auto" color="#155E75">
              {t('earn.buttons.stable')}
            </Typography>
          </Button>
        )}
        {headerOption.isFarm && (
          <Button variant="filled" size="small" bg="#D9F99D">
            <Typography variant="small" margin="0 auto" color="#3F6212">
              {t('earn.buttons.farm')}
            </Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
};
export default DetailedHeader;
