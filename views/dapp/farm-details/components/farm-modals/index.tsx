import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
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

const ClickMe = () => (
  <div>
    <button
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      click me
    </button>
  </div>
);

const FarmStakeModal: FC<FarmStakeModalProps> = ({
  farm,
  farmSymbol,
  setHasAccount,
  refetch,
}) => {
  const t = useTranslations();
  const { currentLocale } = useLocale();
  const { register, setValue, control, getValues } = useForm({
    defaultValues: { amount: '0' },
  });
  const Icons = getFarmsSVGByToken(farm.lpCoin.type);
  const closeModal = () => {};
  const isStake = true;

  const amount = FixedPointMath.toNumber(
    isStake ? farm.lpCoinData.totalBalance : farm.totalStakedAmount,
    farm.lpCoin.decimals
  );

  return (
    <div>
      <Box
        py="L"
        px="XL"
        as="form"
        color="text"
        bg="foreground"
        borderRadius="L"
        minWidth="20rem"
      >
        <ClickMe />
        {/*<Box display="flex" justifyContent="flex-end">*/}
        {/*  /!*<Box*!/*/}
        {/*  /!*  mt="-4.5rem"*!/*/}
        {/*  /!*  mr="-1em"*!/*/}
        {/*  /!*  display="flex"*!/*/}
        {/*  /!*  textAlign="right"*!/*/}
        {/*  /!*  position="absolute"*!/*/}
        {/*  /!*  justifyContent="flex-end"*!/*/}
        {/*  /!*>*!/*/}
        {/*  /!*  <Button*!/*/}
        {/*  /!*    px="L"*!/*/}
        {/*  /!*    variant="primary"*!/*/}
        {/*  /!*    onClick={closeModal}*!/*/}
        {/*  /!*    hover={{*!/*/}
        {/*  /!*      bg: 'accentActive',*!/*/}
        {/*  /!*    }}*!/*/}
        {/*  /!*  >*!/*/}
        {/*  /!*    <Box as="span" display="inline-block" width="1rem">*!/*/}
        {/*  /!*      <TimesSVG width="100%" maxHeight="1rem" maxWidth="1rem" />*!/*/}
        {/*  /!*    </Box>*!/*/}
        {/*  /!*  </Button>*!/*/}
        {/*  /!*</Box>*!/*/}
        {/*</Box>*/}
        {/*<Typography*/}
        {/*  variant="normal"*/}
        {/*  textAlign="center"*/}
        {/*  fontSize="L"*/}
        {/*  textTransform="capitalize"*/}
        {/*>*/}
        {/*  {t(*/}
        {/*    isStake*/}
        {/*      ? 'farmsDetails.modalStakedTitle'*/}
        {/*      : 'farmsDetails.modalUnstakedTitle'*/}
        {/*  )}{' '}*/}
        {/*  token*/}
        {/*</Typography>*/}
        <Box mt="XL"></Box>
        {/*<Box mt="XL">*/}
        {/*  <Typography variant="normal" textTransform="uppercase">*/}
        {/*    {t(*/}
        {/*      isStake ? 'common.yourBalance' : 'farmsDetails.modalLabelInput',*/}
        {/*      {*/}
        {/*        type: t(isStake ? 'common.stake' : 'common.unstake', {*/}
        {/*          isLoading: 0,*/}
        {/*        }),*/}
        {/*      }*/}
        {/*    )}*/}
        {/*  </Typography>*/}
        {/*  <Box display="flex" justifyContent="space-between">*/}
        {/*    <Typography variant="normal" my="L">*/}
        {/*      {farmSymbol} Token*/}
        {/*    </Typography>*/}
        {/*    <Typography variant="normal" my="L">*/}
        {/*      {formatMoney(amount)} {farmSymbol}*/}
        {/*    </Typography>*/}
        {/*  </Box>*/}
        {/*</Box>*/}
        {/*<Box display="flex" mt="L" mb="M">*/}
        {/*  <Button variant="neutral" onClick={closeModal}>*/}
        {/*    {capitalize(t('common.cancel'))}*/}
        {/*  </Button>*/}
        {/*  <ModalButton*/}
        {/*    setHasAccount={setHasAccount}*/}
        {/*    control={control}*/}
        {/*    refetch={refetch}*/}
        {/*    farm={farm}*/}
        {/*    getValues={getValues}*/}
        {/*    isStake={isStake}*/}
        {/*  />*/}
        {/*</Box>*/}
      </Box>
    </div>
  );
};

export default FarmStakeModal;
