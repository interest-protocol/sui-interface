import { Button } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

const SwapFormPreview: FC = () => {
  const [, setIsOpen] = useState(false);

  return (
    <Button
      variant="filled"
      size="small"
      mx="auto"
      mt="2xl"
      onClick={() => setIsOpen(true)}
    >
      Preview
    </Button>
  );
};
export default SwapFormPreview;
