import { Button, Theme, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { VotingButtonsProps } from '../validators-details.types';

const SubmitButton: FC<
  Omit<VotingButtonsProps, 'setValue'> & { openModal: () => void }
> = ({ control, openModal }) => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;
  const rating = useWatch({ control, name: 'rating' });
  const isDisabled = rating !== 'positive' && rating !== 'negative';

  return (
    <Button
      ml="auto"
      size="small"
      variant="filled"
      width="fit-content"
      onClick={openModal}
      textTransform="capitalize"
      nDisabled={{
        bg: colors['surface.containerLowest'],
      }}
      disabled={isDisabled}
    >
      {t(
        'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.publish'
      )}
    </Button>
  );
};

export default SubmitButton;
