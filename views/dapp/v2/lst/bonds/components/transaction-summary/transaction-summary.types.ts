import { ActionButtonsProps } from './action-buttons/action-buttons.types';

export interface TransactionSummaryProps
  extends Omit<ActionButtonsProps, 'disable'> {
  withValidatorData?: boolean;
}
