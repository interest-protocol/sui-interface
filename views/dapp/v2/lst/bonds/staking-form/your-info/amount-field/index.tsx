import { Box, Tabs, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import TokenIcon from '../token-icon';
import { AmountFieldProps } from '../your-info.types';
import AmountFieldInputStake from './amount-field-input-stake';
import AmountFieldInputUnstake from './amount-field-input-unstake';

const AmountField: FC<AmountFieldProps> = (props) => {
  const t = useTranslations();

  return (
    <>
      {!props.isStake && (
        <Box
          display="flex"
          overflowX="auto"
          overflowY="hidden"
          flexDirection="column"
        >
          <Box borderBottom="1px solid" borderColor="outline.outlineVariant">
            <Tabs
              key={v4()}
              defaultTabIndex={props.tabIndex}
              onChangeTab={props.tabHandle}
              items={[
                <Box key={v4()} display="flex" width="max-content" gap="0.2rem">
                  <Box display="flex" gap="0.25rem" width="max-content">
                    <Typography
                      variant="small"
                      fontSize="0.875rem"
                      fontWeight="500"
                    >
                      iSuiP
                    </Typography>
                    <TokenIcon symbol="iSui-YN" size={1} />
                  </Box>
                  <Typography
                    variant="small"
                    fontSize="0.875rem"
                    fontWeight="500"
                  >
                    +
                  </Typography>
                  <Box display="flex" gap="0.25rem" width="max-content">
                    <Typography
                      variant="small"
                      fontSize="0.875rem"
                      fontWeight="500"
                    >
                      iSuiP
                    </Typography>
                    <TokenIcon symbol="iSui-PC" size={1} />
                  </Box>
                </Box>,
                <Box
                  key={v4()}
                  display="flex"
                  gap="0.25rem"
                  width="max-content"
                >
                  <Typography
                    variant="small"
                    fontSize="0.875rem"
                    fontWeight="500"
                  >
                    iSuiP
                  </Typography>
                  <TokenIcon symbol="iSui-PC" size={1} />
                </Box>,
                <Box
                  key={v4()}
                  display="flex"
                  gap="0.25rem"
                  width="max-content"
                >
                  <Typography
                    variant="small"
                    fontSize="0.875rem"
                    fontWeight="500"
                  >
                    iSuiY
                  </Typography>
                  <TokenIcon symbol="iSui-YN" size={1} />
                </Box>,
              ]}
            />
          </Box>
        </Box>
      )}
      <Box mt="l">
        <Box display="flex" justifyContent="space-between">
          <Typography
            mb="s"
            color="onSurface"
            fontSize="0.688rem"
            variant="extraSmall"
            textTransform="uppercase"
            opacity={0.6}
          >
            {t('lst.amountField.title')}
          </Typography>
          {!props.isStake && (
            <Typography
              mb="s"
              color="onSurface"
              fontSize="0.688rem"
              variant="extraSmall"
              textTransform="uppercase"
              opacity={0.6}
            >
              {t('common.balance')}: --
            </Typography>
          )}
        </Box>
        <Box display="flex" flexDirection="column" gap="0.5rem" mb="l">
          {props.isStake ? (
            <AmountFieldInputStake {...props} />
          ) : (
            props.unstakeAmountType.map((symbol) => (
              <Box
                key={v4()}
                pl="0.25rem"
                pr="0.75rem"
                py="0.25rem"
                bg="surface.containerHigh"
                borderRadius="0.25rem"
              >
                <AmountFieldInputUnstake {...props} symbol={symbol} />
              </Box>
            ))
          )}
        </Box>
      </Box>
    </>
  );
};

export default AmountField;
