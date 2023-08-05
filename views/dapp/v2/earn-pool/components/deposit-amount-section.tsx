import { Box, Button, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { WarningCircle } from '@/svg';
import { capitalize } from '@/utils';

import PercentageButton from '../../components/percentage-button';
import TokenIcon from '../../components/token-icon/token-icon';
import { DepositAmountProps } from '../earn.types';
import { INPUT_TOKEN, PERCENTUAL_BUTTON } from '../earn-pool.data';

const DepositAmountSection: FC<DepositAmountProps> = ({ form, action }) => {
  const t = useTranslations();
  return (
    <>
      {INPUT_TOKEN.map((item) => (
        <Box
          key={v4()}
          py="l"
          display="flex"
          flexDirection="column"
          bg="surface.containerLow"
        >
          <Box
            display="flex"
            fontWeight="300"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="extraSmall"
              textTransform="capitalize"
              color="onSurface"
            >
              {t('common.balance')}: 0.000
            </Typography>
          </Box>
          <TextField
            Prefix={
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="primary"
                borderRadius="m"
                color="inverseOnSurface"
                height="2.5rem"
                width="2.5rem"
                mr="l"
              >
                <TokenIcon type={form.getValues(`${item.name}.type`)} />
              </Box>
            }
            fieldProps={{
              bg: 'surface.containerLowest',
              border: 'none',
              height: '3.625rem',
              textAlign: 'right',
              my: 'm',
            }}
            fontSize="m"
            defaultValue={0}
          />
          <Box display="flex" columnGap=".25rem" justifyContent="flex-end">
            {PERCENTUAL_BUTTON.map((item) => (
              <PercentageButton
                key={v4()}
                value={item.value as 25 | 50 | 75 | 100}
                total={item.value}
                onSelect={() => {
                  console.log(item.isMax, '======Percentual_Button');
                }}
              />
            ))}
          </Box>
        </Box>
      ))}
      <Box
        px="s"
        py="0.625rem"
        gap="s"
        display="flex"
        color="primary"
        borderRadius="m"
        alignItems="center"
        bg="secondary.secondaryContainer"
      >
        <WarningCircle
          width="1.375rem"
          height="1.375rem"
          maxWidth="100%"
          maxHeight="100%"
        />
        <Typography variant="small">
          {capitalize(t('common.v2.banner.earn.createToken'))}
        </Typography>
      </Box>
      <Button
        variant="filled"
        color="primary.OnPrimary"
        py="0.625rem"
        width="fill-available"
        display="flex"
        justifyContent="center"
        mt="l"
        onClick={action}
      >
        {capitalize(t('common.v2.earnPool.createPool'))}
      </Button>
    </>
  );
};

export default DepositAmountSection;
