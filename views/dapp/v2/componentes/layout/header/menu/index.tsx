import { Box, Button, Motion } from '@interest-protocol/ui-kit';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { DotsSVG, TimesSVG } from '@/svg';

import MenuDropdown from './menu-dropdown';

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

const Menu: FC = () => {
  const { query } = useRouter();
  const [isOpen, setIsOpen] = useState(Boolean(query.settings) === true);

  // const menuTracker =

  const handleOpen = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('settings', 'true');
    window.history.pushState('', '', url.toString());
    setIsOpen(true);
  };

  const handleClose = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('settings');
    window.history.pushState('', '', url.toString());
    setIsOpen(false);
  };

  return (
    <Box position="relative">
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
        bg={isOpen ? '#FFFFFF1A' : 'none'}
        onClick={!isOpen ? handleOpen : handleClose}
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
            <Motion initial={closeVariants.closed} animate={closeVariants.open}>
              <DotsSVG
                width="100%"
                height="100%"
                maxWidth="1.75rem"
                maxHeight="1.75rem"
              />
            </Motion>
          )}
        </AnimatePresence>
      </Button>
      {isOpen && <MenuDropdown isOpen={isOpen} />}
    </Box>
  );
};

export default Menu;
