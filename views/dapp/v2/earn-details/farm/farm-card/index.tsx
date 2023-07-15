import { FC } from 'react';

import RowTokenField from '../../components/row-token-field';
import { FarmCardProps } from '../../earn.types';
import RewardRow from './reward-row';
import FarmCardWrapper from './wrapper';

const FarmCard: FC<FarmCardProps> = ({
  type,
  action,
  reset,
  disabled,
  coin,
  amount,
  balance,
  currentAmount,
}) => {
  return (
    <FarmCardWrapper
      type={type}
      action={action}
      reset={reset}
      disabled={disabled}
    >
      {type == 'rewards' ? (
        <RewardRow
          coin={coin}
          amount={amount}
          balance={balance}
          currentAmount={currentAmount || '0.000'}
        />
      ) : (
        <RowTokenField coins={[coin]} amount={amount} balance={balance} />
      )}
    </FarmCardWrapper>
  );
};

export default FarmCard;
