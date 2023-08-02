import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CarteUpSVG } from '@/svg';
import { capitalize } from '@/utils';

import { MenuSettingsListHeaderProps } from '../menu.types';

const MenuSettingsListHeaderMobile: FC<MenuSettingsListHeaderProps> = ({
  handleButton,
  isOpen,
}) => {
  const t = useTranslations();

  return (
    <Box
      p="xl"
      mt="2xs"
      borderTop={['1px solid', '1px solid', '1px solid', 'unset']}
      borderTopColor="outline.outlineVariant"
      onClick={handleButton}
      display={['flex', 'flex', 'flex', 'none']}
      justifyContent="space-between"
    >
      <Typography variant="small" color="onSurface">
        {capitalize(t('common.v2.menu.settings'))}
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        <Motion
          transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
          display="flex"
          width="1.25rem"
          height="1.25rem"
          whileTap={{
            scale: 0.97,
            transition: { duration: 0.05, ease: easeInOut },
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.05, ease: easeInOut },
          }}
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          transition={{ duration: 0.5 }}
        >
          <CarteUpSVG
            width="0.469rem"
            height="0.469rem"
            maxWidth="1.25rem"
            maxHeight="1.25rem"
          />
        </Motion>
      </Box>
    </Box>
  );
};

export default MenuSettingsListHeaderMobile;
