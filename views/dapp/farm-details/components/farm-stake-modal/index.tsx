import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import { Box, Button, Modal, Typography } from '@/elements';
import { useLocale } from '@/hooks';
import { TimesSVG } from '@/svg';
import { capitalize, formatMoney } from '@/utils';
import { getFarmsSVGByToken } from '@/views/dapp/farms/farms.utils';

import { StakeState } from '../../farm-details.types';
import ModalButton from '../buttons/modal-button';
import { FarmStakeModalProps } from './farm-stake-modal.types';
import InputStake from './input-stake';

const FarmStakeModal: FC<FarmStakeModalProps> = ({
  farm,
  modal,
  amount,
  handleClose,
  farmSymbol,
  setHasAccount,
  refetch,
}) => {
  const t = useTranslations();
  const { currentLocale } = useLocale();
  const { setValue, register, control } = useForm({
    defaultValues: { value: '0' },
  });

  const { isOpen, isStake } = useMemo(
    () => ({
      isOpen: modal === StakeState.Stake || modal === StakeState.Unstake,
      isStake: modal === StakeState.Stake,
    }),
    [modal]
  );

  const Icons = getFarmsSVGByToken(farm.token0, farm.token1);

  return (
    <Modal
      background="#0008"
      modalProps={{
        isOpen,
        shouldCloseOnEsc: true,
        onRequestClose: handleClose,
        shouldCloseOnOverlayClick: true,
      }}
    >
      <Box
        py="L"
        px="XL"
        as="form"
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
            setValue={setValue}
            register={register}
            amount={amount}
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
            modal={modal}
            setHasAccount={setHasAccount}
            handleClose={handleClose}
            control={control}
            isStake={isStake}
            refetch={refetch}
            farm={farm}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default FarmStakeModal;
