import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { formatAddress } from '@mysten/sui.js';
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
import {
  ValidatorDetailsProps,
  ValidatorsUserActionsProps,
} from '../validators-details.types';
import ValidatorComments from './comments';

const ValidatorInformation: FC<
  ValidatorDetailsProps & Pick<ValidatorsUserActionsProps, 'comments'>
> = ({
  apy,
  name,
  gasPrice,
  comments,
  imageUrl,
  lstStaked,
  suiAddress,
  projectUrl,
  votingPower,
  description,
  commissionRate,
  nextEpochGasPrice,
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
          bg="white"
          display="flex"
          width="6.25rem"
          borderRadius="s"
          height="6.25rem"
          alignItems="center"
          justifyContent="center"
        >
          <img src={imageUrl} width="100px" height="100px" alt={name} />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="flex-start">
          <Box color="onSurface">
            <Typography variant="displaySmall">
              <Box as="span" textTransform="capitalize" fontSize="2.25rem">
                {name}
              </Box>
            </Typography>
          </Box>
          <Typography variant="medium">{description}</Typography>
        </Box>
      </Box>

      <Box display="flex" gap="m" alignItems="center">
        <Typography variant="medium">
          {capitalize(
            t(
              'lst.validators.validatorSection.validatorDetailsPage.detailsSection.address'
            )
          )}
          : {formatAddress(suiAddress)}
        </Typography>
        <CopyToClipboard data={suiAddress} />
      </Box>

      <Box display="flex" gap="m" alignItems="center">
        <Typography variant="medium">
          {capitalize(
            t(
              'lst.validators.validatorSection.validatorDetailsPage.detailsSection.web'
            )
          )}
          :{' '}
          <a href={projectUrl} target="_blank" rel="noreferrer">
            {projectUrl}
          </a>
        </Typography>
        <ArrowLink maxHeight=".625rem" maxWidth=".625rem" width="100%" />
      </Box>

      <Box display="grid" gridTemplateColumns="1fr 1fr 1fr">
        <InlineInformation
          Icon={SUI}
          bg="#6FBCF0"
          color={dark ? 'white' : 'onSurface'}
          description="lst.validators.validatorSection.validatorDetailsPage.detailsSection.totalSuiStaked"
          value={lstStaked}
        />
        <InlineInformation
          Icon={PercentageSVG}
          value={`${apy}%`}
          description="lst.validators.validatorSection.validatorDetailsPage.detailsSection.apy"
        />
        <InlineInformation
          Icon={TVLSVG}
          value={`${commissionRate}%`}
          description="lst.validators.validatorSection.validatorDetailsPage.detailsSection.commission"
        />
        <InlineInformation
          Icon={HandPalmSVG}
          value={`${votingPower}%`}
          description="lst.validators.validatorSection.validatorDetailsPage.detailsSection.votingPower"
        />
        <InlineInformation
          Icon={CurrencyCircleDollar}
          value={gasPrice}
          description="lst.validators.validatorSection.validatorDetailsPage.detailsSection.gasPrice"
        />
        <InlineInformation
          Icon={ClockWiseSVG}
          value={nextEpochGasPrice}
          description="lst.validators.validatorSection.validatorDetailsPage.detailsSection.nextEpochGasPrice"
        />
      </Box>
      <ValidatorComments comments={comments} />
    </Box>
  );
};

export default ValidatorInformation;
