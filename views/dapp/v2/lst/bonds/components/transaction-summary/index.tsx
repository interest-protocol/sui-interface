import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import ActionButtons from './action-buttons';
import Amount from './amount';
import Overview from './overview';
import { TransactionSummaryProps } from './transaction-summary.type';
import ValidatorDetails from './validator-details';

const TransactionSummaryContainer: FC<TransactionSummaryProps> = ({
  amountList,
  disable,
  handleClear,
  handleSubmit,
  validatorDetailsData,
  overviewData,
  submitText,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  return (
    <Box
      bg="surface.container"
      p="l"
      borderRadius="0.5rem"
      minHeight={['max-content', 'max-content', 'max-content', '90vh']}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
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
          {amountList.map((amount) => (
            <Amount
              key={v4()}
              label={amount.label}
              fieldList={amount.fieldList}
              value={disable ? '--' : amount.value}
            />
          ))}
          {validatorDetailsData && (
            <ValidatorDetails {...validatorDetailsData} />
          )}
        </Box>
      </Box>
      <Box mt="5rem">
        <Overview {...overviewData} />
        <ActionButtons
          disable={disable}
          submitText={submitText}
          handleSubmit={handleSubmit}
          handleClear={handleClear}
        />
      </Box>
    </Box>
  );
};

export default TransactionSummaryContainer;
