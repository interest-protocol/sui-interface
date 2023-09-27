import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { PlusSVG, UserSVG } from '@/svg';
import { capitalize } from '@/utils';

import { ValidatorsUserActionsProps } from '../validators-details.types';

const ValidatorComments: FC<Pick<ValidatorsUserActionsProps, 'comments'>> = ({
  comments,
}) => {
  const t = useTranslations();
  return (
    <Box width="100%" mt="1.5rem">
      <Box
        pb="m"
        display="flex"
        alignItems="center"
        borderBottom="1px solid"
        justifyContent="space-between"
        borderColor="outline.outlineVariant"
      >
        <Typography variant="medium" textTransform="uppercase">
          {capitalize(
            t(
              'lst.validators.validatorSection.validatorDetailsPage.detailsSection.comments'
            )
          )}
        </Typography>
        <Button
          variant="text"
          size="small"
          PrefixIcon={<PlusSVG width="100%" maxHeight="1rem" maxWidth="1rem" />}
        >
          <Typography variant="small">
            {capitalize(
              t(
                'lst.validators.validatorSection.validatorDetailsPage.detailsSection.sortBy'
              )
            )}
          </Typography>
        </Button>
      </Box>

      {comments?.map((props) => (
        <Box display="flex" gap="1.125rem" mt="1.5rem" key={v4()}>
          <Box
            display="flex"
            minWidth="2.5rem"
            color="onSurface"
            maxHeight="2.5rem"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
            bg="surface.containerLow"
          >
            <UserSVG width="100%" maxHeight="1.5rem" maxWidth="1.5rem" />
          </Box>
          <Box>
            <Typography variant="medium" mb="s">
              {props.userAddress}
            </Typography>
            <Typography variant="medium" opacity=".6">
              {props.commentText}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ValidatorComments;
