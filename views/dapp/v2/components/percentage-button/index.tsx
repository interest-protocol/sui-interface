import { Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { PercentageButtonProps } from './percentage-button.types';

const PercentageButton: FC<PercentageButtonProps> = ({
  value,
  total,
  isFilled,
  onSelect,
}) => {
  const handleClick = () => {
    const parsedValue = Number(
      ((value / 100) * total).toFixed(6)
    ).toPrecision();

    onSelect(parsedValue);
  };

  return (
    <Button
      size="small"
      bg={isFilled ? 'surface.containerHighest' : 'transparent'}
      borderColor={isFilled ? 'transparent' : 'outline.outlineVariant'}
      variant="outline"
      p=".125rem .75rem"
      onClick={handleClick}
    >
      <Typography variant="extraSmall" color="onSurface">
        {value === 100 ? 'Max' : `${value}%`}
      </Typography>
    </Button>
  );
};

export default PercentageButton;
