import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

import MenuItemWrapper from '../../menu-item-wrapper';
import { ProfileMenuItemProps } from '../profile.types';

const MenuProfileItem: FC<ProfileMenuItemProps> = ({
  name,
  description,
  Icon,
  hasBorder,
  disabled,
  handleAction,
}) => {
  const t = useTranslations();

  return (
    <Box
      borderTop={['unset', 'unset', 'unset', hasBorder ? '1px solid' : 'unset']}
      borderColor="outline.outlineVariant"
    >
      <MenuItemWrapper
        disabled={disabled}
        onClick={() => {
          !disabled && handleAction && handleAction[name]?.();
        }}
      >
        <Box display="flex" alignItems="center" gap="l">
          <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          <Typography
            variant="small"
            color="onSurface"
            opacity={disabled ? 0.7 : 1}
          >
            {capitalize(t(description as TTranslatedMessage))}
          </Typography>
        </Box>
      </MenuItemWrapper>
    </Box>
  );
};

export default MenuProfileItem;
