import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { FAQ_DATA } from './faq.data';
import FaqItem from './faq-item';

const FAQ: FC = () => {
  const t = useTranslations();
  return (
    <Box bg="surface.container" p="l" borderRadius="0.5rem" maxHeight="24rem">
      <Typography
        mb="l"
        color="onSurface"
        fontSize="0.688rem"
        variant="extraSmall"
        textTransform="capitalize"
      >
        {t('lst.faq.title')}
      </Typography>
      <Box maxHeight="21rem" overflowY="auto">
        {FAQ_DATA.map((faqItem, index) => (
          <FaqItem key={v4()} {...faqItem} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;
