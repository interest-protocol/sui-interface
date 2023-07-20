import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { MidCardsDataProps } from './mid-card.data';

interface MidCardProps {
  data: ReadonlyArray<MidCardsDataProps>;
  title: string;
  withSuffix?: boolean;
  hasSuffixWithDesc?: boolean;
  hasPrefixWithDesc?: boolean;
}

const MidCard: FC<MidCardProps> = ({
  data,
  title,
  withSuffix,
  hasSuffixWithDesc,
  hasPrefixWithDesc,
}) => {
  const { dark } = useTheme() as Theme;
  const t = useTranslations();

  return (
    <Box gridColumn="span 4" bg="surface.containerLow" height="100%" p="1.5rem">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="large" color="onSurface">
          {title}
        </Typography>
        <Link href="">
          <Typography variant="extraSmall" color={dark ? '#E9D5FF' : '#C084FC'}>
            {t('dapp.seeMore')}
          </Typography>
        </Link>
      </Box>
      {data.map((item, index) => {
        return (
          <Box
            display="flex"
            alignItems="center"
            px="1.5rem"
            py="2rem"
            borderBottomWidth={index === data.length - 1 ? '0px' : '1px'}
            borderBottomStyle="dashed"
            borderBottomColor="outline.outlineVariant"
            key={index}
          >
            <Box
              bg="primary"
              p="0.5rem"
              width="fit-content"
              display="flex"
              borderRadius=".25rem"
              mr="1.5rem"
              color={dark ? 'surface.containerLow' : 'white'}
            >
              <item.icon maxHeight="25px" maxWidth="25px" width="100%" />
            </Box>
            <Box
              display="flex"
              flexDirection={hasPrefixWithDesc ? 'column' : 'row'}
            >
              <Typography
                variant={hasPrefixWithDesc ? 'medium' : 'medium'}
                color={hasPrefixWithDesc && dark ? 'white' : 'onSurface'}
              >
                {item.title}
              </Typography>
              {hasPrefixWithDesc && (
                <Typography variant="small" color="onSurface">
                  {item.description}
                </Typography>
              )}
            </Box>

            {withSuffix && (
              <Box ml="auto">
                <Typography
                  variant="medium"
                  color={dark ? 'white' : 'onSurface'}
                >
                  {item.value}
                </Typography>
                {hasSuffixWithDesc && (
                  <Typography variant="medium" color="onSurface">
                    {item.price}
                  </Typography>
                )}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default MidCard;
