import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import Box from '@/elements/box';
import Typography from '@/elements/typography';
import { TOKEN_SYMBOL } from '@/sdk';
import { capitalize, formatDollars } from '@/utils';
import {
  getFarmsSVGByToken,
  makeFarmSymbol,
} from '@/views/dapp/farms/farms.utils';

import { DetailsProps } from './farm-details.types';

const Details: FC<DetailsProps> = ({ farm }) => {
  const t = useTranslations();

  return (
    <Box>
      <Box display="flex" alignItems="center" px="L">
        {getFarmsSVGByToken(farm.token0, farm.token1).map(
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
          {farm.id === 0
            ? `${TOKEN_SYMBOL.SUI} ${capitalize(t('common.pool'))} `
            : `${makeFarmSymbol(farm.token0, farm.token1)} ${capitalize(
                t('common.farm')
              )} `}
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
          {t(farm.stable ? 'common.stable' : 'common.volatile', {
            count: 1,
          })}
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
          {farm.apr.value().isZero() ? '0%' : farm.apr.toPercentage()}
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
          {farm.allocation.value().isZero()
            ? '0%'
            : farm.allocation.toPercentage(2)}
        </Box>
      </Box>
    </Box>
  );
};
export default Details;
