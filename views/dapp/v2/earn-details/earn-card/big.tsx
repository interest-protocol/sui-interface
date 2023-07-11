import { Box, Button, Slider, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { MinusSVG, SUISVG } from '@/components/svg/v2';
import { PlusSVG } from '@/svg';

interface BigCardProps {
  action?: 'add' | 'remove';
}

const BigCard: FC<BigCardProps> = ({ action }) => {
  const t = useTranslations();
  return (
    <Box bg="red" px="1.5rem" width="100%" my="2rem">
      <Box
        borderBottom="1px dashed"
        borderColor="outline.outlineVariant"
        py="1.5rem"
      >
        <Box display="flex" gap="1.5rem" alignItems="center">
          <Box
            display="flex"
            width="1.25rem"
            height="1.25rem"
            borderRadius="50%"
            bg="inverseSurface"
            alignItems="center"
            justifyContent="center"
          >
            {action === 'add' ? (
              <PlusSVG maxHeight="100%" maxWidth="100%" width="1rem" />
            ) : action === 'remove' ? (
              <MinusSVG maxHeight="100%" maxWidth="100%" width="1rem" />
            ) : null}
          </Box>
          <Typography
            color="white"
            variant="title6"
            fontSize="1.125rem"
            textTransform="uppercase"
          >
            {action === 'add'
              ? t('earn.buttons.addLiquidity')
              : action === 'remove'
              ? t('earn.buttons.removeLiquidity')
              : null}
          </Typography>
        </Box>
      </Box>
      <Box pt="1.5rem">
        <Typography mb="1rem" variant="medium" color="onSurface">
          {t('earn.previewInformations.balance')} 2.123
        </Typography>
        <Box display="flex" gap="1.5rem" alignItems="center">
          <Box
            bg="primary"
            color="inverseOnSurface"
            p=".5rem"
            borderRadius=".25rem"
          >
            <SUISVG maxHeight="100%" maxWidth="100%" width="2rem" />
          </Box>
          <Typography variant="medium" color="white">
            BTCB
          </Typography>
          <Typography
            ml="auto"
            px="1rem"
            variant="medium"
            color="onSurfaceVariant"
          >
            0.00000
          </Typography>
        </Box>
        <Slider
          max={100}
          onChange={() => {
            return;
          }}
        />
      </Box>
      <Box pt="1.5rem">
        <Typography mb="1rem" variant="medium" color="onSurface">
          {t('earn.previewInformations.balance')} 2.123
        </Typography>
        <Box display="flex" gap="1.5rem" alignItems="center">
          <Box
            bg="primary"
            color="inverseOnSurface"
            p=".5rem"
            borderRadius=".25rem"
          >
            <SUISVG maxHeight="100%" maxWidth="100%" width="2rem" />
          </Box>
          <Typography variant="medium" color="white">
            BTCB
          </Typography>
          <Typography
            ml="auto"
            px="1rem"
            variant="medium"
            color="onSurfaceVariant"
          >
            0.00000
          </Typography>
        </Box>
        <Slider
          max={100}
          onChange={() => {
            return;
          }}
        />
      </Box>
      <Box
        ml="auto"
        py="1.5rem"
        gap=".5rem"
        display="flex"
        width="17.875rem"
        justifyContent="space-between"
      >
        <Button flex="1" size="small" variant="outline">
          <Typography textAlign="center" width="100%" variant="small">
            {t('earn.buttons.reset')}
          </Typography>
        </Button>
        <Button flex="1" size="small" variant="filled">
          <Typography textAlign="center" width="100%" variant="small">
            {t('earn.buttons.add')}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default BigCard;
