import { Box } from '@interest-protocol/ui-kit';
import { SUI_TYPE_ARG } from '@mysten/sui.js';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { DEFAULT_VALIDATOR, ISUI_COIN_TYPE } from '@/constants/lst';
import { useNetwork } from '@/hooks';
import { formatDollars } from '@/utils';
import { StakingFormProps } from '@/views/dapp/v2/lst/staked/staked.types';

import YourInfo from './your-info';

const StakingForm: FC<StakingFormProps> = ({ form }) => {
  const { network } = useNetwork();
  const [isStake, setIsStake] = useState(true);

  const handleChangeStake = () => {
    setIsStake(not(isStake));

    form.setValue('amount', '0');
    form.setValue('amountUSD', formatDollars(0));
    form.setValue('validator', DEFAULT_VALIDATOR[network]);
    form.setValue('coinType', isStake ? ISUI_COIN_TYPE : SUI_TYPE_ARG);
  };

  return (
    <Box height="max-content" width={['100%', '100%', '100%', '45%']}>
      <YourInfo
        form={form}
        isStake={isStake}
        handleChangeStake={handleChangeStake}
      />
    </Box>
  );
};

export default StakingForm;
