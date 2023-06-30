import { Box, Button, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ArrowSpecial from '@/components/svg/arrow-special';
import { TOKENS_SVG_MAP_V2 } from '@/constants';

const Faucet: FC = () => {
  const t = useTranslations();
  const SVG = TOKENS_SVG_MAP_V2.default;
  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box pb="1rem" width="100%" gridColumn="1/-1">
        <Typography
          display={['block', 'block', 'block', 'none']}
          variant="displayLarge"
          color="onSurface"
          textTransform="capitalize"
          textAlign="center"
        >
          {t('faucet.metadata.title')}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          gap="1.5rem"
          flexDirection="column"
        >
          <Box
            width="32.375rem"
            bg="inverseOnSurface"
            p="1.5rem"
            borderRadius="8px"
          >
            <Typography variant="small" mb="1rem" color="onSurface">
              Choose Token
            </Typography>
            <TextField
              Prefix={
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="primary"
                  borderRadius="4px"
                  color="inverseOnSurface"
                  height="2.5rem"
                  width="2.5rem"
                  mr="1rem"
                >
                  <SVG
                    maxHeight="100%"
                    maxWidth="2.5rem"
                    width="1.5rem"
                    height="1.5rem"
                  />
                </Box>
              }
              Suffix={
                <Button
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="4px"
                  color="onSurface"
                  variant="icon"
                >
                  <ArrowSpecial
                    maxHeight="100%"
                    maxWidth="2.5rem"
                    width="1.5rem"
                    height="1.5rem"
                  />
                </Button>
              }
              fieldProps={{
                bg: 'surface.containerLowest',
                border: 'none',
                height: '58px',
              }}
              fontSize="1rem"
              value="Search Token"
              disabled
            />
            <Button
              variant="filled"
              py="0.625rem"
              px="1.5rem"
              fontSize="0.875rem"
              mt="1.25rem"
            >
              Mint
            </Button>
          </Box>
          <Box
            width="32.375rem"
            bg="inverseOnSurface"
            p="1.5rem"
            borderRadius="8px"
          >
            <Typography variant="small" mb="1rem" color="onSurface">
              Balance
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="primary"
                  borderRadius="4px"
                  color="inverseOnSurface"
                  mr="1.25rem"
                  height="2.5rem"
                  width="2.5rem"
                >
                  <SVG
                    maxHeight="100%"
                    maxWidth="2.5rem"
                    width="1.5rem"
                    height="1.5rem"
                  />
                </Box>
                <Typography variant="medium" color="onSurface">
                  0.00000
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="medium" color="onSurface">
                  SUI{' '}
                  <Typography variant="small" as="span" color="#ACAAAF">
                    (0)
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Faucet;
