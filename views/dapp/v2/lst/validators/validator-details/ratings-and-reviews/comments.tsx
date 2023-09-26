// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  Box,
  TextField,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { capitalize } from '@/utils';

const LeaveAComment: FC = () => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;
  return (
    <Box>
      <Typography mb=".25rem" variant="extraSmall">
        {capitalize(
          t(
            'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.comment'
          )
        )}
      </Typography>
      <TextField
        rows={6}
        cols={10}
        as="textarea"
        borderColor="surface.containerLow"
        fieldProps={{
          border: 0,
          bg: colors['surface.containerLow'],
        }}
        fontSize="1rem"
        placeholder="(optional) Leave a comments"
      />
    </Box>
  );
};

export default LeaveAComment;
