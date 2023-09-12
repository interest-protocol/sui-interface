import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { SUISVG } from '@/components/svg/v2';
import { useModal } from '@/hooks';
import { ISuiSVG } from '@/svg';
import { capitalize, noop } from '@/utils';
import { YourInfoProps } from '@/views/dapp/v2/lst/staked/staking-form/your-info/your-info.types';

import Switcher from '../../../components/switch';
import AmountField from './amount-field';
import PreviewTransaction from './modal/preview';
import Overview from './overview';

const YourInfo: FC<YourInfoProps> = ({ form, iSuiExchangeRate, suiPrice }) => {
  const t = useTranslations();
  const [isStake, setIsStake] = useState(true);

  const handleSelect = () => setIsStake(!isStake);

  const { setModal, handleClose } = useModal();

  const openStakeModal = () => {
    setModal(
      <PreviewTransaction
        rewards={0}
        depositFee={0}
        handleClose={handleClose}
        lines={[
          {
            title: t('lst.modal.preview.stakeLabel'),
            token: { main: 'SUI', secondary: 'SUI' },
            Icon: (
              <Box
                width="3rem"
                height="3rem"
                borderRadius="0.34rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                bg="#6FBCF0"
              >
                <SUISVG
                  maxHeight="2.5rem"
                  maxWidth="2.5rem"
                  width="100%"
                  height="100%"
                />
              </Box>
            ),
            children: (
              <Box textAlign="right">
                <Typography
                  variant="small"
                  fontWeight="400"
                  fontSize="1rem"
                  color="onSurface"
                >
                  1.1234
                </Typography>
                <Typography
                  variant="extraSmall"
                  fontWeight="400"
                  fontSize="0.6875rem"
                  color="onSurface"
                  opacity="0.6"
                >
                  $100.000
                </Typography>
              </Box>
            ),
          },
          {
            title: t('lst.modal.preview.receiveLabel'),
            token: { main: 'iSUI', secondary: 'SUI' },
            Icon: (
              <Box
                width="3rem"
                height="3rem"
                borderRadius="0.34rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
              >
                <ISuiSVG
                  maxHeight="3rem"
                  maxWidth="3rem"
                  width="100%"
                  height="100%"
                  filled
                />
              </Box>
            ),
            children: (
              <Box textAlign="right">
                <Typography
                  variant="small"
                  fontWeight="400"
                  fontSize="1rem"
                  color="onSurface"
                >
                  1
                </Typography>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography
                    variant="extraSmall"
                    fontWeight="400"
                    fontSize="0.6875rem"
                    color="onSurface"
                    opacity="0.6"
                  >
                    1.1234
                  </Typography>
                  <Box
                    color="white"
                    bg="#6FBCF0"
                    borderRadius="full"
                    width="1rem"
                    height="1rem"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <SUISVG
                      maxHeight="0.825rem"
                      maxWidth="0.825rem"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                </Box>
              </Box>
            ),
            reverse: true,
          },
        ]}
        onClick={noop}
        isStake={isStake}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const openUnstakeModal = () => {
    setModal(
      <PreviewTransaction
        depositFee={0}
        rewards={0}
        handleClose={handleClose}
        lines={[
          {
            title: t('lst.modal.preview.stakeLabel'),
            token: { main: 'SUI', secondary: 'SUI' },
            Icon: (
              <Box
                width="3rem"
                height="3rem"
                borderRadius="0.34rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
              >
                <ISuiSVG
                  maxHeight="3rem"
                  maxWidth="3rem"
                  width="100%"
                  height="100%"
                  filled
                />
              </Box>
            ),
            children: (
              <Box textAlign="right">
                <Typography
                  variant="small"
                  fontWeight="400"
                  fontSize="1rem"
                  color="onSurface"
                >
                  1
                </Typography>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography
                    variant="extraSmall"
                    fontWeight="400"
                    fontSize="0.6875rem"
                    color="onSurface"
                    opacity="0.6"
                  >
                    1.1234
                  </Typography>
                  <Box
                    color="white"
                    bg="#6FBCF0"
                    borderRadius="full"
                    width="1rem"
                    height="1rem"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <SUISVG
                      maxHeight="0.825rem"
                      maxWidth="0.825rem"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                </Box>
              </Box>
            ),
            reverse: true,
          },
          {
            title: t('lst.modal.preview.receiveLabel'),
            token: { main: 'iSUI', secondary: 'SUI' },
            Icon: (
              <Box
                width="3rem"
                height="3rem"
                borderRadius="0.34rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
                bg="#6FBCF0"
              >
                <SUISVG
                  maxHeight="2.5rem"
                  maxWidth="2.5rem"
                  width="100%"
                  height="100%"
                />
              </Box>
            ),
            children: (
              <Box textAlign="right">
                <Typography
                  variant="small"
                  fontWeight="400"
                  fontSize="1rem"
                  color="onSurface"
                >
                  1.1234
                </Typography>
                <Typography
                  variant="extraSmall"
                  fontWeight="400"
                  fontSize="0.6875rem"
                  color="onSurface"
                  opacity="0.6"
                >
                  $100.000
                </Typography>
              </Box>
            ),
          },
        ]}
        onClick={noop}
        isStake={isStake}
      />,
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
      p="2xl"
      display="flex"
      borderRadius="0.5rem"
      flexDirection="column"
      bg="surface.container"
    >
      <Box mb="2xl">
        <Typography
          variant="medium"
          textTransform="uppercase"
          fontWeight="700"
          color="inverseSurface"
          mb="2xl"
        >
          {t('lst.stakingForm.title')}
        </Typography>
        <Switcher
          defaultValue={+isStake}
          options={[
            {
              value: +true,
              onSelect: handleSelect,
              displayValue: capitalize(t('common.stake', { isLoading: 0 })),
            },
            {
              value: +false,
              onSelect: handleSelect,
              displayValue: capitalize(t('common.unstake', { isLoading: 0 })),
            },
          ]}
        />
      </Box>
      <Typography variant="extraSmall" color="onSurface" display="none">
        {capitalize(
          t(`common.${isStake ? 'stake' : 'unstake'}`, { isLoading: 0 })
        )}
      </Typography>
      <AmountField
        form={form}
        isStake={isStake}
        suiUSDPrice={suiPrice}
        exchangeRate={iSuiExchangeRate}
      />
      <Button
        px="1.5rem"
        mt="1.875rem"
        py="0.625rem"
        variant="filled"
        textAlign="center"
        width="fill-available"
        onClick={isStake ? openStakeModal : openUnstakeModal}
      >
        <Typography
          variant="small"
          fontWeight="500"
          textAlign="center"
          fontSize="0.875rem"
          width="100%"
          color="primary.onPrimary"
          textTransform="capitalize"
        >
          {t('lst.infoButton', { isStake: +isStake })}
        </Typography>
      </Button>
      <Overview form={form} isStake={isStake} />
    </Box>
  );
};

export default YourInfo;
