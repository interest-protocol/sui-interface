import { BondsProps } from '../../bonds.type';

export interface MaturityProps extends BondsProps {
  maturityList: ReadonlyArray<{ date: string; amount: string; id: string }>;
}
