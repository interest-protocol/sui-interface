import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';

import { LinesModalProps } from './modal.types';

const LineModal: FC<LinesModalProps> = ({ description, value }) => {
  const t = useTranslations();

  return (
    <Box
      p="1rem"
      display="flex"
      justifyContent="space-between"
      color="onSurface"
    >
      <Typography variant="small" lineHeight="1.25rem">
        {t(description as TTranslatedMessage)}
      </Typography>
      <Typography variant="small" lineHeight="1.25rem">
        {value}
      </Typography>
    </Box>
  );
};

export default LineModal;
