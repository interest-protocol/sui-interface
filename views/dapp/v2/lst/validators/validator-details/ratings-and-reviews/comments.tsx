import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Textarea } from '@/elements';
import { capitalize } from '@/utils';

import { LeaveACommentProps } from '../validators-details.types';

const LeaveAComment: FC<LeaveACommentProps> = ({ setValue }) => {
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
      <Textarea
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        rows="6"
        border="0"
        width="100%"
        resize="none"
        fontSize="1rem"
        p=".75rem .8125rem"
        borderRadius="0.25rem"
        color={colors['onSurfaceVariant']}
        bg={colors['surface.containerLow']}
        placeholder="(optional) Leave a comments"
        onBlur={(event) => setValue((event.target as any).value)}
      />
    </Box>
  );
};

export default LeaveAComment;
