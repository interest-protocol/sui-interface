import { Box, Button, Motion } from '@interest-protocol/ui-kit';
import { AnimatePresence } from 'framer-motion';
import { FC, useState } from 'react';

import { DotsSVG, ListMenuSVG, TimesSVG } from '@/svg';

import Settings from './settings';

const closeVariants = {
  open: {
    scaleY: 1,
  },
  closed: {
    scaleY: 0,
  },
};

const menuVariants = {
  open: {
    rotate: '0deg',
    scaleY: 1,
  },
  closed: {
    rotate: '180deg',
    scaleY: 0,
  },
};

const OptionButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <Box
          top="0"
          left="0"
          right="0"
          bottom="0"
          position="fixed"
          onClick={handleClose}
        />
      )}
      <Button
        color="text"
        variant="icon"
        bg="#FFFFFF1A"
        ml="0.3rem"
        onClick={!isOpen ? handleOpen : handleClose}
        mr={!isOpen ? '1rem' : 'unset'}
      >
        <AnimatePresence initial={false}>
          {isOpen ? (
            <Motion initial={menuVariants.closed} animate={menuVariants.open}>
              <TimesSVG
                width="100%"
                height="100%"
                maxWidth="1.75rem"
                maxHeight="1.75rem"
              />
            </Motion>
          ) : (
            <>
              <Motion
                initial={closeVariants.closed}
                animate={closeVariants.open}
                display={['none', 'none', 'none', 'flex']}
              >
                <DotsSVG
                  width="100%"
                  height="100%"
                  maxWidth="1.75rem"
                  maxHeight="1.75rem"
                />
              </Motion>
              <Motion
                initial={closeVariants.closed}
                animate={closeVariants.open}
                display={['flex', 'flex', 'flex', 'none']}
              >
                <ListMenuSVG
                  width="100%"
                  height="100%"
                  maxWidth="1.75rem"
                  maxHeight="1.75rem"
                />
              </Motion>
            </>
          )}
        </AnimatePresence>
      </Button>
      <Settings isOpen={isOpen} />
    </>
  );
};

export default OptionButton;
