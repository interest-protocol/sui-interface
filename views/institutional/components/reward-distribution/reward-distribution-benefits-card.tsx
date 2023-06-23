import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { BenefitsCardProps } from './reward-distribution.types';

const BenefitsLiquidityCard: FC<BenefitsCardProps> = ({
  title,
  description,
  Icon,
  link,
  colorBase,
}) => {
  const t = useTranslations();

  return (
    <Box
      p={['1.5rem', '1.5rem', '1.5rem', '0.5rem']}
      bg="#1F1F23"
      borderRadius="0.313rem"
      cursor="pointer"
    >
      <Box
        mb="6.375rem"
        width={['2.875rem', '2.875rem', '2.875rem', '3.5rem']}
        color={colorBase}
      >
        <Icon maxWidth="3.5rem" width="100%" maxHeight="3.5rem" height="100%" />
      </Box>
      <Box p={['unset', 'unset', 'unset', '0.75rem']} textAlign="left">
        <Typography
          as="span"
          display="block"
          variant="title5"
          fontSize={['1.125rem', '1.125rem', '1.125rem', '1.25rem']}
          fontWeight="400"
          color={colorBase}
          mb={['1rem', '1rem', '1rem', '0.5rem']}
        >
          {t(title as any)}
        </Typography>
        <Typography
          as="span"
          display="block"
          variant="medium"
          color="textSoft"
          fontSize={['0.875rem', '0.875rem', '0.875rem', '1rem']}
        >
          {link
            ? t.rich(description, {
                link: (chunks) => (
                  <Box
                    as="a"
                    textDecoration="underline"
                    {...{ href: link.url, target: '_blank', rel: 'noreferrer' }}
                    color="primary"
                  >
                    {chunks}
                  </Box>
                ),
              })
            : t(description)}
        </Typography>
      </Box>
    </Box>
  );
};

export default BenefitsLiquidityCard;
