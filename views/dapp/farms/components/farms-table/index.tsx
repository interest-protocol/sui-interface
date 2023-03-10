import { useTheme } from '@emotion/react';
import BigNumber from 'bignumber.js';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { Routes, RoutesEnum } from '@/constants';
import { Theme } from '@/design-system';
import { Box, Button, Table, Typography } from '@/elements';
import { FixedPointMath, TOKEN_SYMBOL } from '@/sdk';
import { capitalize, formatDollars, formatMoney } from '@/utils';

import {
  getFarmsSVGByToken,
  handleFilterFarms,
  makeFarmSymbol,
} from '../../farms.utils';
import {
  DesktopFarmsSkeletonRow,
  MobileFarmsSkeletonRow,
} from './farms-skeleton-row';
import { FarmsTableProps } from './farms-table.types';

const FarmsTable: FC<FarmsTableProps> = ({ data, control, isDesktop }) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  const onlyFinished = useWatch({ control, name: 'onlyFinished' });
  const onlyStaked = useWatch({ control, name: 'onlyStaked' });
  const typeFilter = useWatch({ control, name: 'typeFilter' });
  const search = useWatch({ control, name: 'search' });
  const sortBy = useWatch({ control, name: 'sortBy' });

  const filteredFarms = handleFilterFarms(
    data.farms,
    sortBy,
    search,
    typeFilter,
    onlyStaked,
    onlyFinished
  );

  return (
    <Box display="flex" flexDirection="column" flex="1">
      {isDesktop ? (
        <Table
          hasButton
          isDesktop
          headings={[
            {
              item: (
                <Typography
                  as="span"
                  fontSize="S"
                  variant="normal"
                  textAlign="center"
                  display={['none', 'block']}
                >
                  Token
                </Typography>
              ),
            },
            {
              tip: t('farms.column1Tip'),
              item: (
                <Typography
                  as="span"
                  cursor="help"
                  variant="normal"
                  fontSize="inherit"
                >
                  {t('common.tvl')}
                </Typography>
              ),
            },
            {
              tip: t('farms.column2Tip'),
              item: (
                <Typography
                  as="span"
                  cursor="help"
                  variant="normal"
                  fontSize="inherit"
                  textTransform="capitalize"
                >
                  {t('common.stake', { isLoading: 0 })}
                </Typography>
              ),
            },
            {
              tip: t('farms.column3Tip'),
              item: (
                <Typography
                  as="span"
                  cursor="help"
                  variant="normal"
                  fontSize="inherit"
                >
                  {t('common.apr')}
                </Typography>
              ),
            },
            {
              tip: t('farms.column4Tip'),
              item: <>{t('farms.column4')}</>,
            },
            {
              tip: t('farms.column5Tip'),
              item: <>{capitalize(t('common.type'))}</>,
            },
          ]}
          backgroundColorMap={filteredFarms.map((farm) => ({
            desktopBg: farm.isLive ? 'foreground' : 'bottomBackground',
          }))}
          data={
            data.farms.length === 0
              ? DesktopFarmsSkeletonRow
              : filteredFarms.map(({ loading, ...farm }) => ({
                  button: (
                    <Link
                      href={{
                        pathname: Routes[RoutesEnum.FarmDetails],
                        query: { type: farm.farmType },
                      }}
                    >
                      <Button variant="primary" hover={{ bg: 'accentActive' }}>
                        {capitalize(t('common.enter'))}
                      </Button>
                    </Link>
                  ),
                  items: [
                    <Box key={v4()} display="flex" alignItems="center">
                      <Box display="inline-flex">
                        {getFarmsSVGByToken(farm.lpCoin.type).map(
                          ({ SVG, highZIndex }, index) => (
                            <Box
                              key={v4()}
                              width="1.6rem"
                              ml={index != 0 ? '-0.5rem' : 'NONE'}
                              zIndex={
                                index == 0
                                  ? highZIndex
                                    ? 3
                                    : 'unset'
                                  : 'unset'
                              }
                            >
                              <SVG
                                width="100%"
                                maxHeight="1.6rem"
                                maxWidth="1.6rem"
                              />
                            </Box>
                          )
                        )}
                      </Box>
                      <Typography variant="normal" ml="M">
                        {farm.id === 0
                          ? TOKEN_SYMBOL.IPX
                          : makeFarmSymbol(farm.coin0.type, farm.coin1.type)}
                      </Typography>
                    </Box>,
                    loading || farm.tvl === -1 ? (
                      <Skeleton key={v4()} />
                    ) : (
                      formatDollars(farm.tvl)
                    ),
                    loading ? (
                      <Skeleton key={v4()} />
                    ) : (
                      formatMoney(
                        FixedPointMath.toNumber(
                          farm.accountBalance,
                          farm.lpCoin.decimals
                        )
                      )
                    ),
                    loading || farm.apr.isEqualTo(BigNumber(-1)) ? (
                      <Skeleton key={v4()} />
                    ) : farm.apr.isZero() ? (
                      '0%'
                    ) : (
                      `${farm.apr.decimalPlaces(2).toString()}%`
                    ),
                    loading ? (
                      <Skeleton key={v4()} />
                    ) : (
                      `${
                        farm.allocationPoints.isZero()
                          ? '0%'
                          : `${farm.allocationPoints
                              .dividedBy(data.totalAllocationPoints)
                              .multipliedBy(100)
                              .decimalPlaces(2)
                              .toString()}%`
                      }`
                    ),
                    <Typography
                      variant="normal"
                      fontSize="0.70rem"
                      bg={farm.stable ? 'accent' : 'accentAlternativeActive'}
                      borderRadius="M"
                      p="0.15rem"
                      textAlign="center"
                      cursor="pointer"
                      width="70%"
                      color={dark ? 'text' : 'textInverted'}
                      key={v4()}
                      textTransform="capitalize"
                    >
                      {t(farm.stable ? 'common.stable' : 'common.volatile', {
                        count: 1,
                      })}
                    </Typography>,
                  ],
                }))
          }
        />
      ) : (
        <Box display="flex" alignItems="center">
          <Table
            hasButton
            backgroundColorMap={filteredFarms.map((farm) => ({
              bg: farm.isLive ? 'foreground' : 'bottomBackground',
            }))}
            headings={[
              {
                tip: t('farms.column1Tip'),
                item: (
                  <Typography
                    as="span"
                    cursor="help"
                    variant="normal"
                    fontSize="inherit"
                  >
                    {t('common.tvl')}
                  </Typography>
                ),
              },
              {
                tip: t('farms.column2Tip'),
                item: (
                  <Typography
                    as="span"
                    cursor="help"
                    variant="normal"
                    fontSize="inherit"
                    textTransform="capitalize"
                  >
                    {t('common.stake', { isLoading: 0 })}
                  </Typography>
                ),
              },
              {
                tip: t('farms.column3Tip'),
                item: (
                  <Typography
                    as="span"
                    cursor="help"
                    variant="normal"
                    fontSize="inherit"
                  >
                    {t('common.apr')}
                  </Typography>
                ),
              },
              {
                tip: t('farms.column4Tip'),
                item: <>{t('farms.column4')}</>,
              },
              {
                tip: t('farms.column5Tip'),
                item: <>{capitalize(t('common.type'))}</>,
              },
            ]}
            data={
              data.farms.length === 0
                ? MobileFarmsSkeletonRow
                : filteredFarms.map(({ loading, ...farm }) => ({
                    mobileSide: (
                      <Box
                        mb="L"
                        key={v4()}
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                        justifyContent="center"
                      >
                        <Box display="inline-flex">
                          {getFarmsSVGByToken(farm.lpCoin.type).map(
                            ({ SVG, highZIndex }, index) => (
                              <Box
                                key={v4()}
                                width="1.6rem"
                                ml={index != 0 ? '-0.5rem' : 'NONE'}
                                zIndex={
                                  index == 0
                                    ? highZIndex
                                      ? 3
                                      : 'unset'
                                    : 'unset'
                                }
                              >
                                <SVG
                                  width="100%"
                                  maxHeight="1.6rem"
                                  maxWidth="1.6rem"
                                />
                              </Box>
                            )
                          )}
                        </Box>
                        <Typography
                          mt="M"
                          variant="normal"
                          textAlign="center"
                          whiteSpace="nowrap"
                        >
                          {farm.id === 0
                            ? TOKEN_SYMBOL.SUI
                            : makeFarmSymbol(farm.coin0.type, farm.coin1.type)}
                        </Typography>
                      </Box>
                    ),
                    button: (
                      <Link
                        href={{
                          pathname: Routes[RoutesEnum.FarmDetails],
                          query: { type: farm.farmType },
                        }}
                      >
                        <Button
                          variant="primary"
                          hover={{ bg: 'accentActive' }}
                        >
                          {capitalize(t('common.enter'))}
                        </Button>
                      </Link>
                    ),
                    items: [
                      loading || farm.tvl === -1 ? (
                        <Skeleton key={v4()} />
                      ) : (
                        formatDollars(farm.tvl)
                      ),
                      loading ? (
                        <Skeleton key={v4()} />
                      ) : (
                        formatMoney(
                          FixedPointMath.toNumber(
                            farm.accountBalance,
                            farm.lpCoin.decimals
                          )
                        )
                      ),
                      loading || farm.apr.isEqualTo(BigNumber(-1)) ? (
                        <Skeleton key={v4()} />
                      ) : farm.apr.isZero() ? (
                        '0%'
                      ) : (
                        `${farm.apr.decimalPlaces(2).toString()}%`
                      ),
                      loading ? (
                        <Skeleton key={v4()} />
                      ) : (
                        `${
                          farm.allocationPoints.isZero()
                            ? '0%'
                            : `${farm.allocationPoints
                                .dividedBy(data.totalAllocationPoints)
                                .multipliedBy(100)
                                .decimalPlaces(2)
                                .toString()}%`
                        }`
                      ),
                      <Typography
                        variant="normal"
                        fontSize="0.70rem"
                        bg={farm.stable ? 'accent' : 'accentAlternativeActive'}
                        borderRadius="M"
                        py="XS"
                        px="L"
                        color={dark ? 'text' : 'textInverted'}
                        textAlign="center"
                        cursor="pointer"
                        key={v4()}
                        textTransform="capitalize"
                        as="span"
                      >
                        {t(farm.stable ? 'common.stable' : 'common.volatile', {
                          count: 1,
                        })}
                      </Typography>,
                    ],
                  }))
            }
          />
        </Box>
      )}
    </Box>
  );
};

export default FarmsTable;
