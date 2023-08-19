import { XAxisProps } from 'recharts';
import { Payload } from 'recharts/types/component/DefaultLegendContent';

export interface CustomXAxisTickProps extends XAxisProps {
  payload?: Payload;
}
