import { useTranslations } from 'next-intl';
import { always, cond, equals, T } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { Box, Dropdown, Typography } from '@/elements';
import { TTranslatedMessage } from '@/interface';
import { ArrowSVG } from '@/svg';
import { capitalize } from '@/utils';

import { FarmSortByFilter } from '../../farms.types';
import { SortFilterProps } from './farms-filters.types';

const parseFarmSortByEnum = cond([
  [equals(FarmSortByFilter.Default), always('select')],
  [equals(FarmSortByFilter.Allocation), always('allocation')],
  [equals(FarmSortByFilter.TVL), always('tvl')],
  [equals(FarmSortByFilter.APR), always('apr')],
  [T, always('select')],
]);

const SortFilter: FC<SortFilterProps> = ({ control, setValue }) => {
  const t = useTranslations();
  const sortBy = useWatch({ control, name: 'sortBy' });

  return (
    <Box width={['48%', '48%', '48%', 'unset']} my={['M', 'M', 'M', 'NONE']}>
      <Typography
        as="label"
        fontSize="S"
        mb="M"
        variant="normal"
        display="inline-block"
      >
        {capitalize(t('common.sort'))}:
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        width={['100%', '100%', '100%', '10rem']}
        height="3rem"
      >
        <Dropdown
          buttonMode
          mode="select"
          bgSelected="accentOutline"
          emptyMessage={capitalize(t('common.notFound'))}
          suffix={
            <Box ml="L" width="0.6rem">
              <ArrowSVG width="100%" maxHeight="0.6rem" maxWidth="0.6rem" />
            </Box>
          }
          title={
            <Box display="flex" width="100%" py="S" alignItems="center">
              <Typography
                variant="normal"
                whiteSpace="nowrap"
                textTransform="capitalize"
              >
                {t(
                  ('common.' +
                    parseFarmSortByEnum(sortBy)) as TTranslatedMessage
                )}
              </Typography>
            </Box>
          }
          data={[
            {
              value: 'id',
              displayOption: 'Id',
              displayTitle: (
                <Box display="flex" width="100%" py="S" alignItems="center">
                  <Typography variant="normal" whiteSpace="nowrap">
                    Id
                  </Typography>
                </Box>
              ),
              onSelect: () => {
                setValue('sortBy', FarmSortByFilter.Default);
              },
            },
            {
              value: 'tvl',
              displayOption: 'TVL',
              displayTitle: (
                <Box display="flex" width="100%" py="S" alignItems="center">
                  <Typography variant="normal" whiteSpace="nowrap">
                    TVL
                  </Typography>
                </Box>
              ),
              onSelect: () => {
                setValue('sortBy', FarmSortByFilter.TVL);
              },
            },
            {
              value: 'apr',
              displayOption: 'APR',
              displayTitle: (
                <Box display="flex" width="100%" py="S" alignItems="center">
                  <Typography variant="normal" whiteSpace="nowrap">
                    APR
                  </Typography>
                </Box>
              ),
              onSelect: () => {
                setValue('sortBy', FarmSortByFilter.APR);
              },
            },
            {
              value: 'Allocation',
              displayOption: 'Allocation',
              displayTitle: (
                <Box display="flex" width="100%" py="S" alignItems="center">
                  <Typography variant="normal" whiteSpace="nowrap">
                    {capitalize(t('common.allocation'))}
                  </Typography>
                </Box>
              ),
              onSelect: () => {
                setValue('sortBy', FarmSortByFilter.Allocation);
              },
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default SortFilter;
