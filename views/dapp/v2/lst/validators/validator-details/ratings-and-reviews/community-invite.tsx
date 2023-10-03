import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ISuiYIllustration } from '@/components/svg/v2';

const Illustration = () => (
  <Box display="flex" py="3.125rem" alignItems="center" justifyContent="center">
    <ISuiYIllustration width="100%" maxHeight="9.375rem" maxWidth="6.25rem" />
  </Box>
);

const CommunityInvite: FC<{ vote: () => void }> = ({ vote }) => {
  const t = useTranslations();
  return (
    <Box
      p="l"
      width="100%"
      display="flex"
      borderRadius="0.5rem"
      flexDirection="column"
      bg="surface.container"
    >
      <Typography variant="medium" width="45%" mx="auto" textAlign="center">
        {t(
          'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.communityInvite'
        )}
      </Typography>
      <Illustration />
      <Typography
        mx="auto"
        width="50%"
        opacity=".6"
        variant="small"
        textAlign="center"
      >
        {t(
          'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.requisitesToVote'
        )}
      </Typography>
      <Box width="100%" display="flex">
        <Button
          mt="1.5rem"
          size="small"
          width="100%"
          onClick={vote}
          variant="filled"
        >
          <Typography variant="small" width="100%" textAlign="center">
            {t(
              'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.obtainSuiBondToken'
            )}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default CommunityInvite;
