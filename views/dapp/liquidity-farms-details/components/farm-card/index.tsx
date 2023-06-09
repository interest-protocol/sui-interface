import { FC } from 'react';

import Box from '@/elements/box';
import Typography from '@/elements/typography';
import { WalletGuardButton } from '@/views/dapp/components';

import { FarmCardProps } from './farm-card.types';

const FarmCard: FC<FarmCardProps> = ({
  title,
  amount,
  shadow,
  button,
  amountUSD,
}) => {
  return (
    <Box
      p="L"
      display="flex"
      bg="background"
      borderRadius="L"
      alignItems="center"
      my={['S', 'S', 'S', 'NONE']}
      justifyContent="space-between"
      flexDirection={['row', 'row', 'row', 'column']}
      {...(shadow && {
        boxShadow: 'inset 0px -90px 45px -60px rgba(0, 203, 57, 0.3)',
      })}
    >
      <Box>
        <Typography
          variant="title4"
          fontWeight="400"
          mb={['L', 'L', 'L', 'XXL']}
          textAlign={['left', 'left', 'left', 'center']}
          maxWidth={['10rem', '10rem', '10rem', '14rem']}
          textTransform="capitalize"
        >
          {title}
        </Typography>
        <Box
          mb={['L', 'L', 'L', 'XL']}
          textAlign={['left', 'left', 'left', 'center']}
        >
          <Typography variant="normal" width="100%">
            {amount}
          </Typography>
          <Typography variant="normal" width="100%">
            {amountUSD}
          </Typography>
        </Box>
      </Box>
      <Box
        textAlign="center"
        display="inline-block"
        ml={['M', 'M', 'M', 'NONE']}
      >
        <WalletGuardButton>{button}</WalletGuardButton>
      </Box>
    </Box>
  );
};
export default FarmCard;
