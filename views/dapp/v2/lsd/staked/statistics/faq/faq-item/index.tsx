import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { TTranslatedMessage } from '@/interface';

import { FaqItemProps } from '../faq.type';
import CollapseIcon from './collapsible-icon';

const FaqItem: FC<FaqItemProps> = ({ title, description, index }) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const [openFAQ, setOpenFAQ] = useState(false);

  return (
    <Box
      p="xl"
      mb="m"
      borderRadius="0.5rem"
      bg={openFAQ ? 'surface.containerHigh' : 'unset'}
    >
      <Box display="flex" gap="l" justifyContent="space-between">
        <Box display="flex" width="90%">
          <Typography variant="medium" color="onSurface" opacity={0.6}>
            {index < 9 ? `0${index + 1}` : index + 1}
          </Typography>
          <Typography
            variant="medium"
            color={dark ? 'white' : 'black'}
            width="100%"
            ml="xl"
          >
            {t(title as TTranslatedMessage)}
          </Typography>
        </Box>
        <Motion
          width="1.75rem"
          height="1.75rem"
          bg="onSurface"
          borderRadius="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="surface"
          initial="rest"
          animate={openFAQ ? 'clicked' : 'rest'}
          onClick={() => setOpenFAQ(not)}
          cursor="pointer"
        >
          <CollapseIcon />
        </Motion>
      </Box>
      {openFAQ && (
        <Typography pl="2.75rem" pt="xl" variant="small" color="onSurface">
          {t(description as TTranslatedMessage)}
        </Typography>
      )}
    </Box>
  );
};

export default FaqItem;
