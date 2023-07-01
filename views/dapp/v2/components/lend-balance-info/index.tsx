import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ArrowLeft from '@/components/svg/arrow-left';
import InfoLight from '@/components/svg/info-light';

const LendBalanceInfo: FC = () => {
  const t = useTranslations();
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
      >
        <Box display="flex" flexDirection="column" gap="l">
          <Box display={['none', 'none', 'none', 'block']}>
            <ArrowLeft maxHeight="1.5rem" maxWidth="1.5rem" />
          </Box>
          <Typography variant="displayLarge">
            {t('lend.metadata.title')}
          </Typography>
        </Box>
        <Box marginLeft="auto">
          <Box display="flex" gap="m">
            <Typography variant="small" color="foreground">
              {t('lend.firstSection.netAPR')}
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
            {t('lend.firstSection.supplyAPR')}
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
            {t('lend.firstSection.walletBalance')}
          </Typography>
          <Typography variant="title1" textAlign="right">
            0
          </Typography>
        </Box>
        <Box
          marginTop="2.5rem"
          marginLeft="auto"
          display="flex"
          flexDirection="column"
          rowGap="1rem"
          color="foreground"
          width={['100%', '100%', '100%', 'fit-content']}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            columnGap={['9.375rem', '9.375rem', '11.25rem', '6.25rem']}
          >
            <Typography variant={'small'}>
              {t('lend.firstSection.borrowLimit')}
            </Typography>
            <Typography variant={'small'}>+100</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            columnGap={['', '', '', '21.625rem']}
          >
            <Typography variant={'small'}>
              {t('lend.firstSection.borrowLimitUsed')}
            </Typography>
            <Typography variant={'small'}>+100</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LendBalanceInfo;
