import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import Box from '@/elements/box';
import Typography from '@/elements/typography';
import { useNetwork } from '@/hooks';
import { TOKEN_SYMBOL } from '@/sdk';
import { capitalize, formatDollars } from '@/utils';
import {
  getFarmsSVGByToken,
  makeFarmSymbol,
} from '@/views/dapp/farms/farms.utils';

import { DetailsProps } from './farm-details.types';

const Details: FC<DetailsProps> = ({ farm, loading }) => {
  const t = useTranslations();
  const { network } = useNetwork();
  return (
    <Box>
      <Box display="flex" alignItems="center" px="L">
        {getFarmsSVGByToken(farm.lpCoin.type).map(
          ({ SVG, highZIndex }, index) => (
            <Box
              mr="M"
              key={v4()}
              width="1.6rem"
              ml={index != 0 ? '-1rem' : 'NONE'}
              zIndex={index == 0 ? (highZIndex ? 3 : 'unset') : 'unset'}
            >
              <SVG width="100%" maxHeight="1.6rem" maxWidth="1.6rem" />
            </Box>
          )
        )}
        <Typography variant="normal" textTransform="capitalize">
          {loading ? (
            <Skeleton />
          ) : farm.id === 0 ? (
            `${TOKEN_SYMBOL.IPX} ${capitalize(t('common.pool'))} `
          ) : (
            `${makeFarmSymbol(
              network,
              farm.coin0.type,
              farm.coin1.type
            )} ${capitalize(t('common.farm'))} `
          )}
          {t('farmsDetails.title')}
        </Typography>
        <Typography
          ml="L"
          px="L"
          py="XS"
          fontSize="S"
          cursor="pointer"
          borderRadius="M"
          variant="normal"
          textAlign="center"
          color="textInverted"
          display="inline-block"
          textTransform="capitalize"
          bg={farm.stable ? 'accent' : 'accentAlternativeActive'}
        >
          {loading ? (
            <Skeleton />
          ) : (
            t(farm.stable ? 'common.stable' : 'common.volatile', {
              count: 1,
            })
          )}
        </Typography>
      </Box>
      <Box
        p="L"
        my="L"
        rowGap="2rem"
        display="grid"
        bg="foreground"
        borderRadius="L"
        textAlign="center"
        gridTemplateColumns={['1fr 1fr', '1fr 1fr 1fr 1fr']}
      >
        <Box>
          <Typography variant="normal" fontSize="S" mb="L">
            TVL
          </Typography>
          {formatDollars(farm.tvl)}
        </Box>
        <Box>
          <Typography
            variant="normal"
            textTransform="capitalize"
            fontSize="S"
            mb="L"
          >
            {t('common.state')}
          </Typography>
          {capitalize(t(farm.isLive ? 'common.live' : 'common.finished'))}
        </Box>
        <Box>
          <Typography variant="normal" fontSize="S" mb="L">
            APR
          </Typography>
          {farm.apr.isZero()
            ? '0%'
            : `${farm.apr.decimalPlaces(2).toString()}%`}
        </Box>
        <Box>
          <Typography
            variant="normal"
            fontSize="S"
            mb="L"
            textTransform="capitalize"
          >
            {t('common.allocation')}
          </Typography>
          {farm.allocationPoints.isZero()
            ? '0%'
            : `${farm.allocationPoints
                .multipliedBy(100)
                .decimalPlaces(3)
                .toNumber()}%`}
        </Box>
      </Box>
    </Box>
  );
};
export default Details;
