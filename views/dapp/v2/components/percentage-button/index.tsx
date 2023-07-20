import { Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

interface PercentageButtonProps {
  value: '25%' | '50%' | '75%' | 'Max';
}
const PercentageButton: FC<PercentageButtonProps> = ({ value }) => {
  return (
    <Button variant="outline" size="small" p=".125rem .75rem" bg="transparent">
      <Typography variant="extraSmall" color="onSurface">
        {value}
      </Typography>
    </Button>
  );
};

export default PercentageButton;
