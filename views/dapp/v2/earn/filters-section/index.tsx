import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

import { AccordionOptionProps, EarnFiltersProps } from '../earn.types';
import Accordion from './accordion';
import OptionFilter from './option';

const FilterSection: FC<EarnFiltersProps> = ({ handleClose }) => {
  const t = useTranslations();

  const OPTION_TYPE_LIST = [
    {
      description: t('common.all'),
      defaultState: true,
    },
    {
      description: t('common.stable', { count: 1 }),
      defaultState: true,
    },
    {
      description: t('common.volatile', { count: 1 }),
      defaultState: true,
    },
  ] as ReadonlyArray<AccordionOptionProps>;

  const OPTION_SORT_LIST = [
    {
      description: 'ID',
      defaultState: true,
    },
    {
      description: t('common.tvl'),
      defaultState: true,
    },
    {
      description: t('common.apr'),
      defaultState: true,
    },
    {
      description: t('common.allocation'),
      defaultState: true,
    },
  ] as ReadonlyArray<AccordionOptionProps>;

  return (
    <Box
      top="0"
      right="0"
      bg="#0008"
      zIndex={9999}
      display="flex"
      overflowY="auto"
      minHeight="100vh"
      maxHeight="100vh"
      position="absolute"
      justifyContent="flex-end"
    >
      <Box
        width="19.75rem"
        minHeight="100vh"
        height="fit-content"
        bg="surface.container"
        p="2xl"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Box
            p="m"
            display="grid"
            alignItems="center"
            gridTemplateColumns="3rem auto 3rem"
          >
            <Box ml="auto" gridColumn="3/4" borderRadius="full">
              <Button
                variant="icon"
                color="onSurface"
                borderRadius="full"
                onClick={handleClose}
              >
                <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
              </Button>
            </Box>
          </Box>
          <OptionFilter
            description={t('earn.filters.stakeOnly')}
            defaultState={true}
          />
          <OptionFilter
            description={t('earn.filters.life')}
            defaultState={true}
          />
          <Accordion title={t('common.type')} options={OPTION_TYPE_LIST} />
          <Accordion title={t('common.sort')} options={OPTION_SORT_LIST} />
        </Box>
        <Button
          size="small"
          width="calc(100% - 2.5rem)"
          variant="filled"
          mt="2xl"
        >
          <Typography variant="small" mx="auto" textTransform="capitalize">
            {capitalize(t('earn.filters.button'))}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default FilterSection;
