import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';
import { v4 } from 'uuid';

import { CopySVG, UserSVG } from '@/components/svg/v2';
import { wrapperVariants } from '@/constants';
import { ArrowLeft } from '@/svg';

import MenuItemWrapper from '../header/menu/menu-item-wrapper';
import { SwitchAccountDropdownProps } from './switch-account.types';

const USERS = [
  '0x025f6e...',
  '0x025f6e...',
  '0x025f6e...',
  '0x025f6e...',
  '0x025f6e...',
];

const SwitchAccountDropdown: FC<SwitchAccountDropdownProps> = ({ isOpen }) => {
  const t = useTranslations();
  const colorsArray = useMemo(
    () => ['#fde68a', '#fed7aa', '#d9f99d', '#a5f3fc', '#e9d5ff', '#fecaca'],
    []
  );

  return (
    <Motion
      right="0"
      top="3rem"
      zIndex={1}
      initial="closed"
      borderRadius="m"
      position="absolute"
      bg="surface.container"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      <Box p="xl" display="flex" gap="l" color="onSurface" alignItems="center">
        <ArrowLeft maxHeight="1rem" maxWidth="1rem" width="100%" />
        <Typography variant="small" textTransform="capitalize">
          {t('common.v2.wallet.switch')}
        </Typography>
      </Box>
      {USERS.map((user) => (
        <MenuItemWrapper key={v4()}>
          <Box display="flex" alignItems="center" gap="l">
            <Box
              bg={colorsArray[Math.floor(Math.random() * colorsArray.length)]}
              color="rgba(0,0,0,0.4)"
              width="1.5rem"
              height="1.5rem"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <UserSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
            </Box>
            <Typography variant="small" color="onSurface">
              {user}
            </Typography>
          </Box>
          <CopySVG maxHeight="1rem" maxWidth="1rem" width="100%" />
        </MenuItemWrapper>
      ))}
    </Motion>
  );
};

export default SwitchAccountDropdown;
