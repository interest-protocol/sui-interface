import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { MONTHS } from '@/constants';

import { DERIVATED_SUI_SYMBOL } from '../../../lst.types';
import { useBondsContext } from '../../bonds.hooks';
import TokenIcon from '../token-icon';

const TransactionSummaryUnstakeBody: FC = () => {
  const t = useTranslations();
  const { form } = useBondsContext();
  const { maturity, amount } = useWatch({ control: form.control });

  const value = undefined; // TODO: calculated value

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
        {[
          { symbol: 'iSui-PC', title: 'iSuiP' },
          { symbol: 'iSui-YN', title: 'iSuiYn' },
        ].map(({ symbol, title }) => (
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
                symbol={symbol as DERIVATED_SUI_SYMBOL}
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
                  {title}
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
            <TokenIcon symbol="SUI" size={2.5} lessRadius />
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
    </Box>
  );
};

export default TransactionSummaryUnstakeBody;
