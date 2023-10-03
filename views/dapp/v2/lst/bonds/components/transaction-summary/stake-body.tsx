import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { MONTHS } from '@/constants';

import { useLstData } from '../../../lst.hooks';
import { DERIVATED_SUI_SYMBOL } from '../../../lst.types';
import { useBondsContext } from '../../bonds.hooks';
import TokenIcon from '../token-icon';

const TransactionSummaryStakeBody: FC = () => {
  const t = useTranslations();
  const { activeValidators, validatorsApy } = useLstData();
  const { form } = useBondsContext();
  const { maturity, amount, validator } = useWatch({ control: form.control });

  const validatorData = validator
    ? {
        ...activeValidators.find(({ suiAddress }) => suiAddress === validator),
        apy:
          validatorsApy?.apys.find(({ address }) => address === validator)
            ?.apy ?? 0,
      }
    : null;

  const rating = useMemo(() => Number((Math.random() * 10).toFixed(0)), []);

  const value = form.getValues('amount');

  return (
    <Box>
      <Typography
        variant="small"
        fontSize="0.688rem"
        color="onSurface"
        opacity="0.6"
        mb="0.5rem"
      >
        {t('lst.bonds.transactionSummary.receive')}
      </Typography>
      <Box
        gap="l"
        key={v4()}
        mb="0.5rem"
        display="flex"
        position="relative"
        borderRadius="0.25rem"
        flexDirection="column"
      >
        {['iSUIP', 'iSUIY'].map((symbol) => (
          <Box
            px="m"
            key={v4()}
            height="4rem"
            display="flex"
            borderRadius="m"
            alignItems="center"
            bg="surface.containerHigh"
            justifyContent="space-between"
          >
            <Box
              gap="l"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <TokenIcon
                size={2.5}
                lessRadius
                id={symbol as DERIVATED_SUI_SYMBOL}
              />
              <Box display="flex" flexDirection="column" width="max-content">
                <Typography
                  width="100%"
                  opacity="0.6"
                  variant="medium"
                  color="onSurface"
                >
                  {maturity?.date
                    ? `${new Date(+maturity.date).getDate()} • ${
                        MONTHS[new Date(+maturity.date).getMonth()]
                      } • ${new Date(+maturity.date).getFullYear()}`
                    : 'Maturity:MM/DD/YY'}
                </Typography>
                <Typography
                  width="100%"
                  opacity={0.6}
                  color="onSurface"
                  lineHeight="1rem"
                  variant="extraSmall"
                >
                  {symbol}
                </Typography>
              </Box>
            </Box>
            <Typography variant="medium" color="onSurface" opacity="0.6">
              {value ?? '--'}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography
        variant="small"
        fontSize="0.688rem"
        color="onSurface"
        opacity="0.6"
        mb="0.5rem"
      >
        {t('lst.bonds.transactionSummary.stake')}
      </Typography>
      <Box
        gap="l"
        key={v4()}
        mb="0.5rem"
        display="flex"
        position="relative"
        borderRadius="0.25rem"
        flexDirection="column"
      >
        <Box
          px="m"
          height="4rem"
          display="flex"
          borderRadius="m"
          alignItems="center"
          bg="surface.containerHigh"
          justifyContent="space-between"
        >
          <Box
            gap="l"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <TokenIcon id="SUI" size={2.5} lessRadius />
            <Box display="flex" flexDirection="column" width="max-content">
              <Typography
                width="100%"
                opacity="0.6"
                variant="medium"
                color="onSurface"
              >
                SUI
              </Typography>
            </Box>
          </Box>
          <Typography variant="medium" color="onSurface">
            {amount || '--'}
          </Typography>
        </Box>
      </Box>
      {validatorData && (
        <>
          <Typography
            variant="small"
            fontSize="0.688rem"
            color="onSurface"
            opacity="0.6"
            mb="0.5rem"
          >
            {t('lst.bonds.transactionSummary.validatorDetails.title')}
          </Typography>
          <Box
            gap="l"
            key={v4()}
            mb="0.5rem"
            display="flex"
            position="relative"
            borderRadius="0.25rem"
            flexDirection="column"
          >
            <Box
              p="m"
              display="flex"
              borderRadius="m"
              flexDirection="column"
              bg="surface.containerHigh"
            >
              <Box gap="l" display="flex" alignItems="center">
                <Box
                  width="2.5rem"
                  height="2.5rem"
                  borderRadius="m"
                  backgroundColor="white"
                  backgroundSize="contain"
                  backgroundPosition="center center"
                  backgroundImage={`url(${validatorData.imageUrl})`}
                />
                <Box display="flex" flexDirection="column" width="max-content">
                  <Typography
                    width="100%"
                    opacity="0.6"
                    variant="medium"
                    color="onSurface"
                  >
                    {validatorData.name}
                  </Typography>
                </Box>
              </Box>
              <Box
                mt="xl"
                gap="s"
                opacity="0.6"
                display="grid"
                gridTemplateColumns="1fr auto"
              >
                <Typography variant="extraSmall" color="onSurface">
                  {t('lst.bonds.transactionSummary.validatorDetails.ranking')}
                </Typography>
                <Typography
                  color="onSurface"
                  textAlign="right"
                  variant="extraSmall"
                >
                  <Typography
                    as="span"
                    variant="extraSmall"
                    color={
                      rating > 6 ? 'success' : rating < 5 ? 'error' : 'warning'
                    }
                  >
                    {rating}
                  </Typography>
                  /10
                </Typography>
                <Typography variant="extraSmall" color="onSurface">
                  {t('lst.validators.tableSection.votingPower')}
                </Typography>
                <Typography
                  color="onSurface"
                  textAlign="right"
                  variant="extraSmall"
                >
                  {Number(validatorData.votingPower ?? 0) / 100}%
                </Typography>
                <Typography variant="extraSmall" color="onSurface">
                  {t('lst.validators.tableSection.commission')}
                </Typography>
                <Typography
                  color="onSurface"
                  textAlign="right"
                  variant="extraSmall"
                >
                  {Number(validatorData.commissionRate ?? 0) / 100}%
                </Typography>
                <Typography variant="extraSmall" color="onSurface">
                  APY
                </Typography>
                <Typography
                  color="onSurface"
                  textAlign="right"
                  variant="extraSmall"
                >
                  {Number((validatorData.apy * 100).toFixed(2)).toPrecision()}%
                </Typography>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default TransactionSummaryStakeBody;
