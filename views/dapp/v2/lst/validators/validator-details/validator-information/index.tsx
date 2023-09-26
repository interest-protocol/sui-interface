import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CopyToClipboard } from '@/components';
import ArrowLink from '@/components/svg/arrow-link';
import {
  ClockWiseSVG,
  HandPalmSVG,
  PercentageSVG,
  TVLSVG,
} from '@/components/svg/v2';
import CurrencyCircleDollar from '@/components/svg/v2/currency-circle-dollar';
import SUI from '@/components/svg/v2/sui';
import { capitalize } from '@/utils';

import InlineInformation from '../../../components/inline-information';
import { ValidatorDetailsProps } from '../validators-details.types';
import ValidatorComments from './comments';
import ValidatorsLogoSVG from './logo-svg';

const ValidatorInformations: FC<ValidatorDetailsProps> = ({
  address,
  comments,
  validatorDescription,
  validatorName,
  wesite,
  activity,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  return (
    <Box
      gap="2rem"
      display="flex"
      color="onSurface"
      flexDirection="column"
      p={['l', 'l', 'l', 'unset']}
      width={['100%', '100%', '100%', '55%']}
    >
      <Box width="100%" display="flex" gap="1.5rem">
        <Box
          p=".5rem"
          bg="white"
          borderRadius="s"
          minWidth="5.0625rem"
          maxHeight="5.0625rem"
        >
          <ValidatorsLogoSVG
            width="100%"
            maxWidth="5.0625rem"
            maxHeight="5.0625rem"
          />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="flex-start">
          <Box color="onSurface">
            <Typography variant="displaySmall">
              <Box as="span" textTransform="capitalize" fontSize="2.25rem">
                {validatorName}
              </Box>
            </Typography>
          </Box>
          <Typography variant="medium">{validatorDescription}</Typography>
        </Box>
      </Box>

      <Box display="flex" gap="m" alignItems="center">
        <Typography variant="medium">
          {capitalize(
            t(
              'lst.validators.validatorSection.validatorDetailsPage.detailsSection.address'
            )
          )}
          : {address}
        </Typography>
        <CopyToClipboard data={'Test'} />
      </Box>

      <Box display="flex" gap="m" alignItems="center">
        <Typography variant="medium">
          {capitalize(
            t(
              'lst.validators.validatorSection.validatorDetailsPage.detailsSection.web'
            )
          )}
          : {wesite}
        </Typography>
        <ArrowLink maxHeight=".625rem" maxWidth=".625rem" width="100%" />
      </Box>

      <Box display="grid" gridTemplateColumns="1fr 1fr 1fr">
        <InlineInformation
          Icon={SUI}
          bg="#6FBCF0"
          color={dark ? 'white' : 'onSurface'}
          description="lst.validators.validatorSection.validatorDetailsPage.detailsSection.totalSuiStaked"
          value={activity.totalSuiStaked}
        />
        <InlineInformation
          Icon={PercentageSVG}
          value={activity.apy}
          description="lst.validators.validatorSection.validatorDetailsPage.detailsSection.apy"
        />
        <InlineInformation
          Icon={TVLSVG}
          value={activity.commission}
          description="lst.validators.validatorSection.validatorDetailsPage.detailsSection.commission"
        />
        <InlineInformation
          Icon={HandPalmSVG}
          value={activity.votingPower}
          description="lst.validators.validatorSection.validatorDetailsPage.detailsSection.votingPower"
        />
        <InlineInformation
          Icon={CurrencyCircleDollar}
          value={activity.gasPrice}
          description="lst.validators.validatorSection.validatorDetailsPage.detailsSection.gasPrice"
        />
        <InlineInformation
          Icon={ClockWiseSVG}
          value={activity.nextEpochGasPrice}
          description="lst.validators.validatorSection.validatorDetailsPage.detailsSection.nextEpochGasPrice"
        />
      </Box>

      <ValidatorComments comments={comments} />
    </Box>
  );
};

export default ValidatorInformations;
