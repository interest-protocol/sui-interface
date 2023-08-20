import { Box, Button, Tabs, TextField } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC, useEffect } from 'react';

import { SearchSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { useModal } from '@/hooks';
import { PlusSVG } from '@/svg';
import { capitalize } from '@/utils';

import { EarnHeaderProps } from './earn.types';
import FilterSection from './filters-section';

const EarnHeader: FC<EarnHeaderProps> = ({ isPool, handleTab }) => {
  const t = useTranslations();
  const { push } = useRouter();

  const { setModal, handleClose } = useModal();

  const openModalFilters = () =>
    setModal(<FilterSection handleClose={handleClose} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });

  useEffect(() => {
    console.log('>> rerender ');
  }, []);

  return (
    <Box
      gap="m"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Tabs
        onChangeTab={handleTab}
        defaultTabIndex={+!isPool}
        items={[
          capitalize(t('common.pool')),
          capitalize(t('earn.tabs.myPosition')),
        ]}
      />
      <Box display="flex" gap="s" alignItems="center">
        <TextField
          fontSize="0.875rem"
          placeholder={capitalize(t('common.search'))}
          Prefix={
            <Button
              width="1rem"
              height="1rem"
              variant="icon"
              borderRadius="full"
              onClick={openModalFilters}
            >
              <SearchSVG
                width="1rem"
                height="1rem"
                maxWidth="1rem"
                maxHeight="1rem"
              />
            </Button>
          }
          fieldProps={{
            fontSize: '0.875rem',
            borderRadius: 'full',
          }}
        />
        <Button
          px="l"
          py="0.95rem"
          variant="outline"
          width="max-content"
          borderRadius="full"
          fontSize={['0.6rem', '0.6rem', '0.6rem', '0.875rem']}
          onClick={() =>
            push({ pathname: Routes[RoutesEnum.EarnCreatePool] }).then()
          }
        >
          <PlusSVG maxWidth="1rem" maxHeight="1rem" width="1rem" />
          {t('common.v2.earnPool.createPool')}
        </Button>
      </Box>
    </Box>
  );
};

export default EarnHeader;
