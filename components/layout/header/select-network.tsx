import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Network } from '@/constants';
import { Box, Dropdown, Typography } from '@/elements';
import { useSuiNetwork } from '@/hooks';
import { AnchorSVG, ArrowSVG, BinanceTestSVG, SuiSVG } from '@/svg';
import { capitalize } from '@/utils';

const SelectNetwork: FC = () => {
  const t = useTranslations();
  const { network, setNetwork } = useSuiNetwork();

  const handleSetNetwork = (x: Network) => {
    if (x === network) return;
    setNetwork(x);
  };

  return (
    <Dropdown
      buttonMode
      mode="select"
      suffix={
        <Box display="flex" alignItems="center">
          <Box as="span" display="inline-block" width="0.6rem">
            <ArrowSVG width="100%" maxHeight="0.6rem" maxWidth="0.6rem" />
          </Box>
        </Box>
      }
      title={
        <Typography
          variant="normal"
          display={['none', 'none', 'none', 'block']}
        >
          {t('common.chooseNetwork')}
        </Typography>
      }
      header={capitalize(t('common.chooseNetwork'))}
      defaultValue={`sui`}
      data={[
        {
          value: `sui`,
          onSelect: () => handleSetNetwork(Network.DEVNET),
          displayTitle: (
            <Box display="flex" alignItems="center" py="S">
              <Box
                as="span"
                display="inline-block"
                width={['1rem', '1rem', '1rem', '1.5rem']}
                height={['1rem', '1rem', '1rem', '1.5rem']}
                color="text"
              >
                <SuiSVG
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  maxHeight="1.5rem"
                  maxWidth="1.5rem"
                />
              </Box>
              <Typography
                variant="normal"
                mx="M"
                whiteSpace="nowrap"
                color="text"
                display={['none', 'none', 'flex', 'flex']}
              >
                SUI DevNet
              </Typography>
            </Box>
          ),
          displayOption: (
            <Box pl="L" display="flex" alignItems="center">
              <Box
                as="span"
                display="inline-block"
                width="1.5rem"
                height="1.5rem"
                color="text"
              >
                <SuiSVG
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  maxHeight="1.5rem"
                  maxWidth="1.5rem"
                />
              </Box>
              <Typography
                variant="normal"
                mx="M"
                whiteSpace="nowrap"
                color="text"
                display="flex"
              >
                SUI DevNet
              </Typography>
            </Box>
          ),
          disabled: Network.DEVNET === network,
        },
        {
          value: `sui-tesnet`,
          onSelect: () => handleSetNetwork(Network.TESTNET),
          displayTitle: (
            <Box display="flex" alignItems="center" py="S">
              <Box
                as="span"
                display="inline-block"
                width={['1rem', '1rem', '1rem', '1.5rem']}
                height={['1rem', '1rem', '1rem', '1.5rem']}
                color="text"
              >
                <SuiSVG
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  maxHeight="1.5rem"
                  maxWidth="1.5rem"
                />
              </Box>
              <Typography
                variant="normal"
                mx="M"
                whiteSpace="nowrap"
                color="text"
                display={['none', 'none', 'flex', 'flex']}
              >
                SUI TestNet
              </Typography>
            </Box>
          ),
          displayOption: (
            <Box pl="L" display="flex" alignItems="center">
              <Box
                as="span"
                display="inline-block"
                width="1.5rem"
                height="1.5rem"
                color="text"
              >
                <SuiSVG
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  maxHeight="1.5rem"
                  maxWidth="1.5rem"
                />
              </Box>
              <Typography
                variant="normal"
                mx="M"
                whiteSpace="nowrap"
                color="text"
                display="flex"
              >
                SUI TestNet
              </Typography>
            </Box>
          ),
          disabled: Network.TESTNET === network,
        },
        {
          value: 'bsct',
          onSelect: () => {
            window?.open('https://interestprotocol.com/dapp/dex', '_blank');
          },
          displayOption: (
            <Box
              px="L"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Box display="flex" alignItems="center" color="text">
                <BinanceTestSVG
                  width="1.5rem"
                  height="1.5rem"
                  maxHeight="1.5rem"
                  maxWidth="1.5rem"
                  fill="currentColor"
                />
                <Typography variant="normal" mx="M" whiteSpace="nowrap">
                  BSCT
                </Typography>
              </Box>
              <AnchorSVG
                width="100%"
                height="100%"
                maxWidth="1rem"
                maxHeight="1rem"
              />
            </Box>
          ),
          noSelectable: true,
        },
      ]}
    />
  );
};

export default SelectNetwork;
