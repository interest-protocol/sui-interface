import { Box, Button, Motion } from '@interest-protocol/ui-kit';
import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';

import { DotsSVG, MenuSVG, TimesSVG } from '@/svg';

import { MenuButtonProps } from './menu.types';

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

const MenuButton: FC<MenuButtonProps> = ({
  isOpen,
  handleOpen,
  handleClose,
}) => (
  <Button
    color="text"
    variant="icon"
    borderRadius="50%"
    bg={['none', isOpen ? '#FFFFFF1A' : 'none']}
    onClick={!isOpen ? handleOpen : handleClose}
    border={['1px solid', '1px solid', '1px solid', 'none']}
    borderColor="#FFFFFF1A"
  >
    <AnimatePresence initial={false}>
      {isOpen ? (
        <Motion
          as="span"
          display="flex"
          alignItems="center"
          justifyContent="center"
          animate={menuVariants.open}
          initial={menuVariants.closed}
        >
          <TimesSVG
            width="100%"
            height="100%"
            maxWidth="1.75rem"
            maxHeight="1.75rem"
          />
        </Motion>
      ) : (
        <Motion
          as="span"
          display="flex"
          alignItems="center"
          justifyContent="center"
          animate={closeVariants.open}
          initial={closeVariants.closed}
        >
          <Box as="span" display={['none', 'none', 'none', 'inline-block']}>
            <DotsSVG
              width="100%"
              height="100%"
              maxWidth="1.75rem"
              maxHeight="1.75rem"
            />
          </Box>
          <Box
            as="span"
            display={['inline-block', 'inline-block', 'inline-block', 'none']}
          >
            <MenuSVG
              width="100%"
              height="100%"
              maxWidth="1.5rem"
              maxHeight="1.5rem"
            />
          </Box>
        </Motion>
      )}
    </AnimatePresence>
  </Button>
);

export default MenuButton;
