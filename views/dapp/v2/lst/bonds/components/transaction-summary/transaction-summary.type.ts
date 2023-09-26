import { ActionButtonsProps } from './action-buttons/action-buttons.type';
import { AmountProps } from './amount/amount.type';
import { OverviewProps } from './overview/overview.type';
import { ValidatorDetailsProps } from './validator-details/validator-details.type';

export interface TransactionSummaryProps extends ActionButtonsProps {
  amountList: ReadonlyArray<AmountProps>;
  validatorDetailsData?: ValidatorDetailsProps;
  overviewData: OverviewProps;
}
