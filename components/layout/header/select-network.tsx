import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Network } from '@/constants';
import { Box, Dropdown, Typography } from '@/elements';
import { useNetwork } from '@/hooks';
import { ArrowSVG, SuiSVG } from '@/svg';
import { capitalize } from '@/utils';

const SelectNetwork: FC = () => {
  const t = useTranslations();
  const { network, setNetwork } = useNetwork();

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
      defaultValue={network}
      data={[
        {
          value: 'mainnet',
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
                SUI
              </Typography>
            </Box>
          ),
          displayOption: (
            <Box
              pl="L"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
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
                  SUI
                </Typography>
              </Box>
              <Typography
                px="M"
                py="S"
                mr="L"
                variant="normal"
                borderRadius="L"
                bg="accentSecondary"
              >
                {t('common.soon')}
              </Typography>
            </Box>
          ),
          disabled: true,
          noSelectable: true,
        },
        {
          value: Network.DEVNET,
          onSelect: () => setNetwork(Network.DEVNET),
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
        },
        {
          value: Network.TESTNET,
          onSelect: () => setNetwork(Network.TESTNET),
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
            <Box
              px="L"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
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
            </Box>
          ),
        },
      ]}
    />
  );
};

export default SelectNetwork;
