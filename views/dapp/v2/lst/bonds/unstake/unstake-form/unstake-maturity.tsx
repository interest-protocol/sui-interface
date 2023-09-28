import { Box, Typography } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import {
  ArrowDownSVG,
  CalendarSVG,
  CheckSVG,
  ISuiPSVG,
  ISuiYNSVG,
} from '@/components/svg/v2';
import { MONTHS } from '@/constants';
import { ISUI_PRINCIPAL_TYPE, ISUI_YIELD_TYPE } from '@/constants/lst';

import { useBondsContext } from '../../bonds.hooks';

const MATURITIES = [
  {
    date: Date.now() - 1000 * 60 * 60 * 24 * 2,
    id: '0',
    amounts: { [ISUI_PRINCIPAL_TYPE]: 10, [ISUI_YIELD_TYPE]: 10 },
  },
  {
    date: Date.now() + 1000 * 60 * 60 * 24 * 20,
    id: '1',
    amounts: { [ISUI_PRINCIPAL_TYPE]: 20, [ISUI_YIELD_TYPE]: 20 },
  },
];

const DerivativeIcon: FC<{ type: string }> = ({ type }) => {
  if (type === ISUI_PRINCIPAL_TYPE)
    return <ISuiPSVG maxWidth="2rem" maxHeight="2rem" width="2rem" />;
  if (type === ISUI_YIELD_TYPE)
    return <ISuiYNSVG maxWidth="2rem" maxHeight="2rem" width="2rem" />;
  return null;
};

const UnstakeMaturity: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { form } = useBondsContext();
  const tokens = form.getValues('tokens');
  const maturityId = useWatch({ control: form.control, name: 'maturity.id' });

  const maturities = MATURITIES; // TODO: maturities amounts based on tokens

  const selectMaturity = MATURITIES.find(({ id }) => maturityId === id);

  return (
    <Box
      cursor="pointer"
      borderRadius="m"
      border="1px solid"
      onClick={() => setIsOpen(not)}
      borderColor="outline.outlineVariant"
    >
      <Box
        p="xl"
        gap="l"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {selectMaturity ? (
          <CheckSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
        ) : (
          <CalendarSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
        )}
        <Box flex="1" ml="xl" display="grid" gridTemplateColumns="1fr 1fr">
          {selectMaturity ? (
            <>
              <Box display="flex" alignItems="center">
                <Typography variant="medium">
                  {new Date(selectMaturity.date).getDate()}
                  {' • '}
                  {MONTHS[new Date(selectMaturity.date).getMonth()]}
                  {' • '}
                  {new Date(selectMaturity.date).getFullYear()}
                </Typography>
                <Typography
                  ml="m"
                  variant="extraSmall"
                  color={
                    selectMaturity.date > Date.now() ? 'success' : 'primary'
                  }
                >
                  {selectMaturity.date > Date.now()
                    ? `(${(
                        (selectMaturity.date - Date.now()) /
                        (1000 * 60 * 60 * 24)
                      ).toFixed(0)}D)`
                    : 'Matured'}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="xl">
                {tokens.map((type) => (
                  <Box key={v4()} display="flex" alignItems="center" gap="m">
                    <DerivativeIcon type={type} />
                    <Typography variant="medium">
                      {selectMaturity.amounts[type]}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </>
          ) : (
            <Typography variant="medium">DD • MM • YYYY</Typography>
          )}
        </Box>
        <ArrowDownSVG maxHeight="0.7rem" maxWidth="0.7rem" />
      </Box>
      {isOpen &&
        maturities.map(({ date, id, amounts }) => (
          <Box
            p="xl"
            key={v4()}
            onClick={() =>
              form.setValue('maturity', {
                id,
                date: String(date),
              })
            }
            bg={maturityId == id ? 'primary.primaryContainer' : 'unset'}
          >
            <Box
              display="grid"
              alignItems="center"
              gridTemplateColumns="2rem 1fr 1fr"
            >
              <Box>
                {maturityId == id && (
                  <CheckSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
                )}
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="medium">
                  {new Date(date).getDate()}
                  {' • '}
                  {MONTHS[new Date(date).getMonth()]}
                  {' • '}
                  {new Date(date).getFullYear()}
                </Typography>
                <Typography
                  ml="m"
                  variant="extraSmall"
                  color={date > Date.now() ? 'success' : 'primary'}
                >
                  {date > Date.now()
                    ? `(${((date - Date.now()) / (1000 * 60 * 60 * 24)).toFixed(
                        0
                      )}D)`
                    : 'Matured'}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" ml="4xl" gap="xl">
                {tokens.map((type) => (
                  <Box gap="m" key={v4()} display="flex" alignItems="center">
                    <DerivativeIcon type={type} />
                    <Typography variant="medium">{amounts[type]}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
    </Box>
  );
};

export default UnstakeMaturity;
