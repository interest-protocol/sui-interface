import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { MenuItemProps } from './header.types';

const MenuItem: FC<MenuItemProps> = ({ label, url }) => {
  const { pathname } = useRouter();
  const { colors } = useTheme() as Theme;

  return (
    <Box px="43px">
      <Box py="14px" position="relative">
        <Link href={url}>
          <Typography
            cursor="pointer"
            variant="small"
            color={pathname.includes(url) ? 'primary' : 'foreground'}
            nHover={{ color: `${colors.primary}` }}
            fontSize="14px"
          >
            {label}
          </Typography>
        </Link>
        <Box
          height="3px"
          bg={pathname.includes(url) ? 'primary' : 'none'}
          borderRadius="1px 1px 0px 0px"
          position="absolute"
          width="100%"
          bottom="0"
        />
      </Box>
    </Box>
  );
};

export default MenuItem;
