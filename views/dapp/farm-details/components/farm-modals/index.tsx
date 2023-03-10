import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { StakeState } from '@/constants';
import { Box, Button, Modal, Typography } from '@/elements';
import { useLocale } from '@/hooks';
import { FixedPointMath } from '@/sdk';
import { TimesSVG } from '@/svg';
import { capitalize, formatMoney } from '@/utils';
import { getFarmsSVGByToken } from '@/views/dapp/farms/farms.utils';

import ModalButton from '../buttons/modal-button';
import { FarmStakeModalProps } from './farm-stake-modal.types';
import InputStake from './input-stake';

const FarmStakeModal: FC<FarmStakeModalProps> = ({
  farm,
  farmSymbol,
  modalState,
  mutateFarms,
  mutatePools,
  mutatePendingRewards,
  setModalState,
  form,
}) => {
  const t = useTranslations();
  const { currentLocale } = useLocale();

  const Icons = getFarmsSVGByToken(farm.lpCoin.type);
  const isStake = modalState.state === StakeState.Stake;

  const amount = FixedPointMath.toNumber(
    isStake ? farm.lpCoinData.totalBalance : farm.accountBalance,
    farm.lpCoin.decimals
  );

  const handleClose = () =>
    setModalState({ isOpen: false, state: StakeState.Stake });

  return (
    <Modal
      background="#0008"
      modalProps={{
        isOpen: modalState.isOpen,
        shouldCloseOnEsc: true,
        onRequestClose: handleClose,
        shouldCloseOnOverlayClick: true,
      }}
    >
      <Box
        py="L"
        px="XL"
        color="text"
        bg="foreground"
        borderRadius="L"
        minWidth="20rem"
      >
        <Box display="flex" justifyContent="flex-end">
          <Box
            mt="-4.5rem"
            mr="-1em"
            display="flex"
            textAlign="right"
            position="absolute"
            justifyContent="flex-end"
          >
            <Button
              px="L"
              variant="primary"
              onClick={handleClose}
              hover={{
                bg: 'accentActive',
              }}
            >
              <Box as="span" display="inline-block" width="1rem">
                <TimesSVG width="100%" maxHeight="1rem" maxWidth="1rem" />
              </Box>
            </Button>
          </Box>
        </Box>
        <Typography
          variant="normal"
          textAlign="center"
          fontSize="L"
          textTransform="capitalize"
        >
          {t(
            isStake
              ? 'farmsDetails.modalStakedTitle'
              : 'farmsDetails.modalUnstakedTitle'
          )}{' '}
          token
        </Typography>
        <Box mt="XL">
          <InputStake
            setValue={form.setValue}
            register={form.register}
            balance={amount}
            currencyPrefix={
              <Box display="flex" alignItems="center">
                <Box display="inline-flex">
                  {Icons.map(({ SVG, highZIndex }, index) => (
                    <Box
                      key={v4()}
                      width="1.6rem"
                      ml={index != 0 ? '-0.5rem' : 'NONE'}
                      zIndex={index == 0 ? (highZIndex ? 3 : 'unset') : 'unset'}
                    >
                      <SVG width="100%" maxHeight="1.6rem" maxWidth="1.6rem" />
                    </Box>
                  ))}
                </Box>
                <Typography variant="normal" ml="M">
                  {farmSymbol}
                </Typography>
              </Box>
            }
            label={t('farmsDetails.modalLabelInput', {
              currentLocale,
              type: t(isStake ? 'common.stake' : 'common.unstake', {
                isLoading: 0,
              }),
            })}
          />
        </Box>
        <Box mt="XL">
          <Typography variant="normal" textTransform="uppercase">
            {t(
              isStake ? 'common.yourBalance' : 'farmsDetails.modalLabelInput',
              {
                type: t(isStake ? 'common.stake' : 'common.unstake', {
                  isLoading: 0,
                }),
              }
            )}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="normal" my="L">
              {farmSymbol} Token
            </Typography>
            <Typography variant="normal" my="L">
              {formatMoney(amount)} {farmSymbol}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" mt="L" mb="M">
          <Button variant="neutral" onClick={handleClose}>
            {capitalize(t('common.cancel'))}
          </Button>
          <ModalButton
            isStake={isStake}
            mutateFarms={mutateFarms}
            mutatePools={mutatePools}
            mutatePendingRewards={mutatePendingRewards}
            farm={farm}
            getValues={form.getValues}
            resetForm={form.reset}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default FarmStakeModal;
