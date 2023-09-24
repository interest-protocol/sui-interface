import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { useModal } from '@/hooks';
import { noop } from '@/utils';

import { BondsProps } from '../../bonds.type';
import Amount from '../../components/amount';
import BondsFormConfirmModal from '../../components/modal/confirm-modal';
import BondsFormFailModal from '../../components/modal/fail-modal';
import BondsFormLoadingModal from '../../components/modal/loading-modal';

const BondsClaimRewardsTransactionSummary: FC<BondsProps> = ({ form }) => {
  const t = useTranslations();
  const { dark, colors } = useTheme() as Theme;
  const { setModal, handleClose } = useModal();
  const control = form.control;
  const maturity = useWatch({ control, name: 'maturity' });
  const amount = useWatch({ control, name: 'amount' });

  const handleClaimRewards = () => {
    openModal('loading');
    setTimeout(() => {
      openModal('success');
    }, 4000);
  };

  const openModal = (type: 'loading' | 'success' | 'error') => {
    setModal(
      type == 'loading' ? (
        <BondsFormLoadingModal handleClose={handleClose} />
      ) : type == 'error' ? (
        <BondsFormFailModal handleClose={handleClose} />
      ) : (
        <BondsFormConfirmModal handleClose={handleClose} onClick={noop} />
      ),
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  return (
    <Box
      bg="surface.container"
      p="l"
      borderRadius="0.5rem"
      height={['max-content', 'max-content', 'max-content', '90vh']}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Typography
          variant="medium"
          py="l"
          textAlign="center"
          color={dark ? 'white' : 'black'}
          textTransform="uppercase"
        >
          {t('lst.claimnRewards.transactionSummary.title')}
        </Typography>
        <Box
          py={['xs', 'xs', 'xs', 'l']}
          display="flex"
          flexDirection="column"
          gap="l"
        >
          <Amount
            label={t('lst.claimnRewards.transactionSummary.receive')}
            symbol="SUI"
            title="SUI"
            value={!isEmpty(maturity.date) ? amount : '--'}
          />
          <Amount
            label={t('lst.claimnRewards.transactionSummary.redeem')}
            symbol="iSui-YN"
            title={
              !isEmpty(maturity.date)
                ? maturity.date
                : t('lst.maturity', { date: 'DD/MM/YYYY' })
            }
            description="iSUIY"
            value={!isEmpty(maturity.date) ? amount : '--'}
          />
        </Box>
      </Box>
      <Box mt="3xl">
        <Typography
          variant="medium"
          fontSize={['0.588rem', '0.588rem', '0.588rem', '0.688rem']}
          color="onSurface"
          lineHeight="1rem"
          opacity={0.6}
          width="100%"
          mb="0.5rem"
          textTransform="uppercase"
        >
          {t('lst.transactionOverview.title')}
        </Typography>
        <Box
          bg="surface.containerHigh"
          p="l"
          display="flex"
          justifyContent="space-between"
          borderRadius="0.5rem"
          mb="3xl"
        >
          <Typography variant="small" fontSize="0.75rem" color="onSurface">
            {t('lst.claimnRewards.transactionSummary.depositFee')}
          </Typography>
          <Typography
            variant="small"
            fontSize="0.75rem"
            color="onSurface"
            fontWeight="700"
          >
            0.12
          </Typography>
        </Box>
        <Box
          display={['flex', 'flex', 'flex', 'grid']}
          flexDirection="column"
          gridTemplateColumns="1fr 1fr"
          gap="0.5rem"
        >
          <Button variant="outline" p="0.625rem 0 !important" px="auto">
            <Typography
              variant="small"
              fontSize="0.875rem"
              width="100%"
              textAlign="center"
              color="onSurface"
              onClick={() => {
                form.setValue('maturity', { date: '', id: '' });
                form.setValue('amount', '0');
              }}
              textTransform="capitalize"
            >
              {t('lst.claimnRewards.transactionSummary.buttonClear')}
            </Typography>
          </Button>
          <Button
            variant="filled"
            p="0.625rem 0 !important"
            py="0.625rem"
            disabled={isEmpty(maturity.date)}
            onClick={handleClaimRewards}
            bg={
              isEmpty(maturity.date)
                ? `${colors['surface.dim']} !important`
                : 'primary'
            }
          >
            <Typography
              variant="small"
              fontSize="0.875rem"
              textAlign="center"
              width="100%"
              textTransform="capitalize"
            >
              {t('lst.claimnRewards.transactionSummary.buttonClear')}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default BondsClaimRewardsTransactionSummary;
