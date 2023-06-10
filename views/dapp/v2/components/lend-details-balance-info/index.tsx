import { Box, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ArrowLeft from '@/components/svg/arrow-left';
import InfoLight from '@/components/svg/info-light';
import { Routes, RoutesEnum } from '@/constants';
import { SuiSVG } from '@/svg';

const LendDetailsBalanceInfo: FC = () => {
  const t = useTranslations();
  const { push } = useRouter();

  return (
    <Box variant="container" color="text">
      <Box
        gridColumn="1 / -1"
        width="100%"
        display="flex"
        columnGap={['4.375rem', '9.375rem', '11.25rem', '6.25rem']}
        rowGap={['2.25rem', '2.25rem', '2.25rem', '']}
        flexWrap="wrap"
        alignItems={['center', 'center', 'center', 'flex-end']}
        justifyContent="space-between"
        color="onSurface"
      >
        <Box display="flex" flexDirection="column" gap="l">
          <Box
            display={['none', 'none', 'none', 'block']}
            onClick={() => push(Routes[RoutesEnum.Lend])}
            cursor="pointer"
          >
            <ArrowLeft maxHeight="1.5rem" maxWidth="1.5rem" />
          </Box>
          <Box display="flex">
            <Box
              width="3rem"
              height="3rem"
              bg="#A5F3FC"
              color="#000000"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="2px"
              mr="1rem"
            >
              <SuiSVG
                maxHeight="1.5rem"
                maxWidth="1.5rem"
                width="100%"
                height="100%"
                filled
              />
            </Box>
            <Typography variant="displayLarge" color="onSurface">
              SUI
            </Typography>
          </Box>
        </Box>
        <Box marginLeft="auto">
          <Box display="flex" gap="m">
            <Typography variant="small" color="foreground">
              {t('common.v2.lend.firstSection.netAPY')}
            </Typography>
            <Box width="1rem" color="textHighlighter">
              <InfoLight maxHeight="1rem" maxWidth="1rem" />
            </Box>
          </Box>

          <Typography
            variant="title1"
            textAlign={['right', 'right', 'right', 'left']}
          >
            0%
          </Typography>
        </Box>
        <Box>
          <Typography variant="small" color="foreground">
            Borrow Balance
          </Typography>
          <Typography
            variant="title1"
            textAlign={['left', 'left', 'left', 'center']}
          >
            $0
          </Typography>
        </Box>
        <Box>
          <Typography variant="small" color="foreground">
            {t('common.v2.lend.firstSection.walletBalance')}
          </Typography>
          <Typography variant="title1" textAlign="right">
            0.0
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LendDetailsBalanceInfo;
