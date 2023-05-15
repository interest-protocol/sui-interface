import { Dispatch, SetStateAction } from 'react';

export interface ThenCardProps {
  index: number;
  isSelected: boolean;
  setSelected: Dispatch<SetStateAction<number>>;
  description: string;
}
