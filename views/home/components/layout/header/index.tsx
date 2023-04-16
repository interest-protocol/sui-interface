import { Box, Button, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { DotsSVG, LogoSVG, TimesSVG } from '@/svg';

import SwitchLang from '../../switch-lang';

const Header: FC = () => {
  const { colors } = useTheme() as Theme;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Box bg="background">
      <Box variant="container" alignItems="center" justifyItems="unset">
        <Box>
          <LogoSVG
            width="100%"
            height="100%"
            maxWidth="2.125rem"
            maxHeight="1.75rem"
            fill={colors.primary}
          />
        </Box>
        <Box
          color="text"
          display="flex"
          position="relative"
          alignItems="flex-end"
          flexDirection="column"
          gridColumn={['2/5', '2/9', '2/13']}
        >
          <Button
            color="text"
            variant="icon"
            onClick={handleOpen}
            bg={isOpen ? '#FFFFFF1A' : 'none'}
          >
            {isOpen ? (
              <TimesSVG
                width="100%"
                height="100%"
                maxWidth="1.75rem"
                maxHeight="1.75rem"
              />
            ) : (
              <DotsSVG
                width="100%"
                height="100%"
                maxWidth="1.75rem"
                maxHeight="1.75rem"
              />
            )}
          </Button>
          <SwitchLang isOpen={isOpen} onClose={handleClose} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
