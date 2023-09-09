import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { SUISVG } from '@/components/svg/v2';
import { useLocalStorage, useModal } from '@/hooks';
import { ISuiSVG } from '@/svg';
import { capitalize, noop } from '@/utils';

import Switcher from '../../components/switch';
import { MINT_TYPE_OPTION } from '../../lsd.type';
import AmountField from './amount-field';
import MintType from './mint-type';
import PreviewTransaction from './modal/preview';

const YourInfo: FC = () => {
  const t = useTranslations();
  const [proMode] = useLocalStorage<boolean>('sui-interest-pro-mode', false);
  const [isStake, setIsStake] = useState(true);

  const [mintTypeOption, setMintTypeOption] =
    useState<MINT_TYPE_OPTION>('NONE');

  const onChangeMintType = (type: string) =>
    setMintTypeOption(type as MINT_TYPE_OPTION);

  const handleSelect = () => setIsStake(!isStake);

  const { setModal, handleClose } = useModal();

  const openStakeModal = () => {
    setModal(
      <PreviewTransaction
        depositFee={0}
        rewards={0}
        handleClose={handleClose}
        lines={[
          {
            title: t('lsd.modal.preview.stakeLabel'),
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
            title: t('lsd.modal.preview.receiveLabel'),
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
            title: t('lsd.modal.preview.stakeLabel'),
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
            title: t('lsd.modal.preview.receiveLabel'),
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
      bg="surface.container"
      p="2xl"
      borderRadius="0.5rem"
      display="flex"
      flexDirection="column"
    >
      <Box mb="2xl">
        <Typography
          variant="medium"
          textTransform="uppercase"
          fontWeight="700"
          color="inverseSurface"
          mb="2xl"
        >
          {t('lsd.stakingForm.title')}
        </Typography>
        <Switcher
          defaultValue={+isStake}
          options={[
            {
              value: +true,
              displayValue: capitalize(t('common.stake', { isLoading: 0 })),
              onSelect: handleSelect,
            },
            {
              value: +false,
              displayValue: capitalize(t('common.unstake', { isLoading: 0 })),
              onSelect: handleSelect,
            },
          ]}
        />
      </Box>
      <Typography variant="extraSmall" color="onSurface" display="none">
        {capitalize(
          t(`common.${isStake ? 'stake' : 'unstake'}`, { isLoading: 0 })
        )}
      </Typography>
      <AmountField balance={0.434} />
      {proMode && (
        <MintType onChange={onChangeMintType} mintTypeOption={mintTypeOption} />
      )}
      <Button
        variant="filled"
        mt="1.875rem"
        py="0.625rem"
        px="1.5rem"
        width="fill-available"
        textAlign="center"
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
          {t('lsd.infoButton', { isStake: +isStake })}
        </Typography>
      </Button>
    </Box>
  );
};

export default YourInfo;
