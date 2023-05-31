import { Box, Button, TextField, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CheckmarkSVG, PercentageSVG } from '@/components/svg/v2';
import { TimesSVG } from '@/svg';

const SettingsModal: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <Box
      px="xl"
      width="100%"
      bg="#1F1F23"
      display="flex"
      color="#C7C6CA"
      maxHeight="90vh"
      overflow="hidden"
      borderRadius="1rem"
      maxWidth="24.375rem"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
    >
      <Box
        py="m"
        display="grid"
        alignItems="center"
        gridTemplateColumns="2rem auto 2rem"
      >
        <Typography gridColumn="2" variant="medium" textAlign="center">
          Swap
        </Typography>
        <Button variant="icon" onClick={closeModal}>
          <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
      </Box>
      <Typography variant="small" my="m">
        Transaction settings
      </Typography>
      <Box
        p="xl"
        mb="xl"
        bg="#0D0E11"
        display="flex"
        borderRadius="m"
        alignItems="center"
        flexDirection="column"
      >
        <Box>
          <Typography variant="extraSmall" alignSelf="start" mb="s">
            Slippage tolerance
          </Typography>
          <TextField
            Suffix={
              <Box px="s" color="#C7C6CA" width="3.5rem" textAlign="right">
                <PercentageSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
              </Box>
            }
            Prefix={
              <Button
                p="0"
                size="small"
                width="2.5rem"
                height="2.5rem"
                variant="filled"
                fontWeight="700"
                fontSize="0.6rem"
                justifyContent="center"
                textTransform="uppercase"
              >
                Auto
              </Button>
            }
            textAlign="right"
            placeholder="0.10"
          />
        </Box>
        <Box mt="2xl">
          <Typography variant="extraSmall" alignSelf="start" mb="s">
            Transaction deadline
          </Typography>
          <TextField
            textAlign="right"
            width="100%"
            placeholder="10"
            SuffixIcon={
              <Typography
                px="s"
                width="3.5rem"
                color="#C7C6CA"
                variant="medium"
                textAlign="right"
              >
                min
              </Typography>
            }
          />
        </Box>
      </Box>
      <Typography variant="small" my="m">
        Panel settings
      </Typography>
      <Box
        p="xl"
        mb="4xl"
        bg="#0D0E11"
        display="flex"
        borderRadius="m"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="extraSmall" alignSelf="start" mb="s">
          Automated Price
        </Typography>
        <Box
          my="s"
          bg="#1B1B1F"
          width="100%"
          display="grid"
          borderRadius="m"
          overflow="hidden"
          textAlign="center"
          gridTemplateColumns="1fr 1fr"
        >
          <Typography
            py="m"
            bg="primary"
            variant="small"
            cursor="pointer"
            color="textAccent"
          >
            <Box as="span" mr="m">
              <CheckmarkSVG maxWidth="0.8rem" maxHeight="0.8rem" width="100%" />
            </Box>
            Auto
          </Typography>
          <Typography variant="small" py="m" cursor="pointer">
            Manual
          </Typography>
        </Box>
      </Box>
      <Box display="grid" gridTemplateColumns="1fr 1fr">
        <Button variant="text" justifyContent="center" size="small" mb="2xl">
          <Typography variant="small">Cancel</Typography>
        </Button>
        <Button
          variant="filled"
          justifyContent="center"
          size="small"
          mb="2xl"
          fontSize="0.9rem"
        >
          <Typography variant="small">Confirm Changes</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsModal;
