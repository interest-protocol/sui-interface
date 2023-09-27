import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useBondsContext } from '../../bonds.hooks';
// import { v4 } from 'uuid';
// import { useBondsContext } from '../../bonds.hooks';
import ActionButtons from './action-buttons';
import Amount from './amount';
import Overview from './overview';
import { TransactionSummaryProps } from './transaction-summary.types';
// import ValidatorDetails from './validator-details';

const TransactionSummary: FC<TransactionSummaryProps> = ({
  submitText,
  handleClear,
  handleSubmit,
}) => {
  const disable = false;
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const { form } = useBondsContext();

  const type = form.getValues('type');

  return (
    <Box
      p="l"
      display="flex"
      borderRadius="0.5rem"
      bg="surface.container"
      flexDirection="column"
      justifyContent="space-between"
      minHeight={['max-content', 'max-content', 'max-content', '90vh']}
    >
      <Box>
        <Typography
          variant="medium"
          py="l"
          textAlign="center"
          color={dark ? 'white' : 'black'}
          textTransform="uppercase"
        >
          {t('lst.clamRewards.transactionSummary.title')}
        </Typography>
        <Box
          py={['xs', 'xs', 'xs', 'l']}
          display="flex"
          flexDirection="column"
          gap="l"
        >
          {type === 'stake' && <Amount value={''} fieldList={[]} />}
          {/* {amountList.map((amount) => (
            <Amount
              key={v4()}
              label={amount.label}
              fieldList={amount.fieldList}
              value={disable ? '--' : amount.value}
            />
          ))} */}
          {/* {validatorDetailsData && (
            <ValidatorDetails {...validatorDetailsData} />
          )} */}
        </Box>
      </Box>
      <Box mt="5rem">
        <Overview fee={0.12} />
        <ActionButtons
          disable={disable}
          submitText={submitText}
          handleClear={handleClear}
          handleSubmit={handleSubmit}
        />
      </Box>
    </Box>
  );
};

export default TransactionSummary;
