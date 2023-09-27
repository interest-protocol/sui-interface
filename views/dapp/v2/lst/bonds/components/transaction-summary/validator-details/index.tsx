import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { ValidatorDetailsProps } from './validator-details.types';

const ValidatorDetails: FC<ValidatorDetailsProps> = ({
  name,
  imageURL,
  data,
}) => {
  const t = useTranslations();

  return (
    <Box>
      <Typography
        variant="medium"
        fontSize={['0.588rem', '0.588rem', '0.588rem', '0.688rem']}
        color="onSurface"
        lineHeight="1rem"
        opacity={0.6}
        width="100%"
        mb="0.5rem"
        textTransform="uppercase"
      >
        {t('lst.bonds.transactionSummary.validatorDetails.title')}
      </Typography>
      <Box
        bg="surface.containerHigh"
        p="l"
        display="flex"
        flexDirection="column"
        gap="0.5rem"
        borderRadius="0.5rem"
        mb="3xl"
        color="onSurface"
      >
        <Box display="flex" gap="m" alignItems="center">
          <Box display="flex">
            <Box
              width="2rem"
              height="2rem"
              borderRadius="0.25rem"
              backgroundColor="white"
              backgroundSize="contain"
              backgroundPosition="center center"
              backgroundImage={`url(${imageURL})`}
            />
          </Box>
          <Typography variant="medium">{name}</Typography>
        </Box>
        {data.map((item) => (
          <Box key={v4()} display="flex" justifyContent="space-between">
            <Typography variant="small" fontSize="0.75rem">
              {item.label}
            </Typography>
            <Typography
              variant="small"
              fontSize="0.75rem"
              color="onSurface"
              fontWeight="400"
            >
              {item.isRanking ? (
                <>
                  <Typography
                    as="span"
                    variant="small"
                    fontSize="0.75rem"
                    color={Number(item.value) > 5 ? 'success' : 'error'}
                  >
                    {item.value}
                  </Typography>
                  /10
                </>
              ) : (
                item.value
              )}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ValidatorDetails;
