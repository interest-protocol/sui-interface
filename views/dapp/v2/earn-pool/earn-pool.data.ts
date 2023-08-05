export const INPUT_TOKEN: ReadonlyArray<{
  name: 'token1' | 'token2';
  isFirstToken: boolean;
}> = [
  { name: 'token1', isFirstToken: true },
  { name: 'token2', isFirstToken: false },
];

export const PERCENTUAL_BUTTON = [
  { value: 25, isMax: false },
  { value: 50, isMax: false },
  { value: 75, isMax: false },
  { value: 100, isMax: true },
];
