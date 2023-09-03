export interface ISwitchOption {
  value: string | number;
  onSelect?: () => void;
  displayValue?: string;
}

export interface SwitchProps {
  defaultValue: string | number;
  options: ReadonlyArray<ISwitchOption>;
}
