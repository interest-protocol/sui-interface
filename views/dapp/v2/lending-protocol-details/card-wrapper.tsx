import { Box, Button } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';

import { CardWrapperProps } from './lending-protocol.types';
import Modallending from './modal';

const CardWrapper: FC<CardWrapperProps> = ({
  position,
  buttonDescription,
  control,
  name,
  children,
}) => {
  const [closed, setClosed] = useState(true);
  const value = useWatch({ control, name: `${name}.value` });

  const handleClosed = () => {
    setClosed(!closed);
  };

  const backToLend = () => {
    setClosed(true);
  };

  return (
    <>
      <Modallending
        amount={value}
        type={name}
        closed={closed}
        handleClosed={handleClosed}
        backToLend={backToLend}
      />
      <Box
        display="flex"
        width={['100%', '100%', '100%', '34rem']}
        float={position}
      >
        <Box
          width="calc(100% + .635rem)"
          color="text"
          borderRadius=".25rem"
          gridColumn={['1 / -1', '1 / -1', '1 / -1', '1 / 7']}
          height="fit-content"
        >
          {children}
          <Box
            display="flex"
            textAlign="center"
            justifyContent={[
              'unset',
              'unset',
              'unset',
              position == 'right' ? 'flex-start' : 'flex-end',
            ]}
          >
            <Button
              disabled={!value ? true : false}
              variant={value ? 'filled' : 'outline'}
              mt="0.5rem"
              width={[
                'fill-available',
                'fill-available',
                'fill-available',
                'auto',
              ]}
              p="1.25rem 2rem"
              onClick={handleClosed}
            >
              {buttonDescription}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardWrapper;
