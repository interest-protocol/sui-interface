import { Network } from '@interest-protocol/sui-sdk';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Box, Dropdown, Typography } from '@/elements';
import { useNetwork } from '@/hooks';
import { ArrowSVG, StarLightSVG, SuiSVG } from '@/svg';
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
          value: Network.MAINNET,
          onSelect: () => setNetwork(Network.MAINNET),
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
            <Box display="flex" justifyContent="space-between" width="100%">
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
                  SUI
                </Typography>
              </Box>
              <Box width="2.5rem" height="2rem" position="relative">
                <Box position="absolute" top="0" left="0.5rem" width="0.7rem">
                  <StarLightSVG
                    height="100%"
                    maxWidth="0.7rem"
                    maxHeight="0.7rem"
                  />
                </Box>
                <Box
                  position="absolute"
                  left="0"
                  bottom="0.3rem"
                  width="0.7rem"
                >
                  <StarLightSVG
                    height="100%"
                    maxWidth="0.7rem"
                    maxHeight="0.7rem"
                  />
                </Box>
                <Box
                  position="absolute"
                  bottom="0"
                  left="0.6rem"
                  width="0.7rem"
                >
                  <StarLightSVG
                    height="100%"
                    maxWidth="0.7rem"
                    maxHeight="0.7rem"
                  />
                </Box>
              </Box>
            </Box>
          ),
        },
      ].concat(
        process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
          ? [
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
            ]
          : []
      )}
    />
  );
};

export default SelectNetwork;
