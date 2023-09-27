export interface ValidatorItemDetailsProps {
  label: string;
  value: string | number;
  isRanking?: boolean;
}

export interface ValidatorDetailsProps {
  name: string;
  imageURL: string;
  data: ReadonlyArray<ValidatorItemDetailsProps>;
}
