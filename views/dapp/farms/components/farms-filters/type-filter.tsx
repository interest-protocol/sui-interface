import { useTranslations } from 'next-intl';
import { always, cond, equals, T } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import MessageKeys from 'use-intl/dist/utils/MessageKeys';

import { Box, Dropdown, Typography } from '@/elements';
import { ArrowSVG } from '@/svg';
import { capitalize } from '@/utils';

import { FarmTypeFilter } from '../../farms.types';
import { TypeFilterProps } from './farms-filters.types';

const parseFarmTypeByEnum = cond([
  [equals(FarmTypeFilter.All), always('all')],
  [equals(FarmTypeFilter.Stable), always('stable')],
  [equals(FarmTypeFilter.Volatile), always('volatile')],
  [T, always('all')],
]);

const TypeFilter: FC<TypeFilterProps> = ({ control, setValue }) => {
  const t = useTranslations();
  const typeFilter = useWatch({ control, name: 'typeFilter' });

  return (
    <Box width={['48%', '48%', '48%', 'unset']} my={['M', 'M', 'M', 'NONE']}>
      <Typography
        as="label"
        fontSize="S"
        mb="M"
        variant="normal"
        display="inline-block"
        textTransform="capitalize"
      >
        {t('common.type')}:
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
          bgSelected="accentAlternativeBackground"
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
                    parseFarmTypeByEnum(
                      typeFilter
                    ).toLowerCase()) as MessageKeys<
                    IntlMessages,
                    keyof IntlMessages
                  >,
                  {
                    count: 2,
                  }
                )}
              </Typography>
            </Box>
          }
          data={[
            {
              value: 'all',
              displayOption: capitalize(t('common.all')),
              displayTitle: (
                <Box display="flex" width="100%" py="S" alignItems="center">
                  <Typography
                    variant="normal"
                    whiteSpace="nowrap"
                    textTransform="capitalize"
                  >
                    {t('common.all')}
                  </Typography>
                </Box>
              ),
              onSelect: () => {
                setValue('typeFilter', FarmTypeFilter.All);
              },
            },
            {
              value: 'stable',
              displayOption: capitalize(t('common.stable', { count: 2 })),
              displayTitle: (
                <Box display="flex" width="100%" py="S" alignItems="center">
                  <Typography
                    variant="normal"
                    whiteSpace="nowrap"
                    textTransform="capitalize"
                  >
                    {t('common.stable', { count: 2 })}
                  </Typography>
                </Box>
              ),
              onSelect: () => {
                setValue('typeFilter', FarmTypeFilter.Stable);
              },
            },
            {
              value: 'volatile',
              displayOption: capitalize(t('common.volatile', { count: 2 })),
              displayTitle: (
                <Box display="flex" width="100%" py="S" alignItems="center">
                  <Typography
                    variant="normal"
                    whiteSpace="nowrap"
                    textTransform="capitalize"
                  >
                    {t('common.volatile', { count: 2 })}
                  </Typography>
                </Box>
              ),
              onSelect: () => {
                setValue('typeFilter', FarmTypeFilter.Volatile);
              },
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default TypeFilter;
