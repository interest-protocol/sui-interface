export interface OverviewItemProps {
  label: string;
  value: string;
}

export interface OverviewProps {
  title: string;
  data: ReadonlyArray<OverviewItemProps>;
}
