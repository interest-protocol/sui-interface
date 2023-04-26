import { Box, Button, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, useCallback, useState } from 'react';

import useEventListener from '@/hooks/use-event-listener';
import { ArrowLeftFullSVG, TimesSVG } from '@/svg';

import LanguageOptions from './language-options';
import NormalOptions from './normal-options';

const Settings: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [openLanguageOptions, setOpenLanguageOptions] = useState(false);
  const { colors, dark } = useTheme() as Theme;
  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 55em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);
  return !isMobile ? (
    !openLanguageOptions ? (
      <NormalOptions
        isOpen={isOpen}
        setOpenLanguageOptions={setOpenLanguageOptions}
        openLanguageOptions={openLanguageOptions}
      />
    ) : (
      <LanguageOptions
        isOpen={isOpen}
        setOpenLanguageOptions={setOpenLanguageOptions}
        openLanguageOptions={openLanguageOptions}
      />
    )
  ) : isOpen ? (
    <Box
      width="100vw"
      height="100vh"
      top={['-0.5rem', '-0.5rem', '-0.5rem', 'unset']}
      bg={dark ? colors.background : colors.textDisabled}
      zIndex={5}
      position="absolute"
      pt="2.25rem"
      px="1.25rem"
    >
      <Box display="flex" justifyContent="space-between" mb="2.188rem">
        <Button variant="outline" p="0.5rem" color="text">
          <ArrowLeftFullSVG
            maxWidth="1.5rem"
            maxHeight="1.5rem"
            width="1.5rem"
            height="1.5rem"
          />
        </Button>
        <Button variant="outline" p="0.5rem" color="text">
          <TimesSVG
            maxWidth="1.5rem"
            maxHeight="1.5rem"
            width="1.5rem"
            height="1.5rem"
          />
        </Button>
      </Box>
    </Box>
  ) : null;
};

export default Settings;
