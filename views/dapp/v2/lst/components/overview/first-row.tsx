import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { UsersSVG } from '@/components/svg/v2';
import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

import TokenIcon from '../../bonds/components/token-icon';
import { DERIVATED_SUI_SYMBOL } from '../../lst.types';
import { OverviewRowProps } from './overview.type';

const FirstOverviewRow: FC<OverviewRowProps> = ({ data }) => {
  const t = useTranslations();

  return (
    <>
      {data.map((item) => (
        <Box
          key={v4()}
          display="flex"
          columnGap="l"
          alignItems="center"
          flex={['unset', 'unset', '1 1 200px', '1 1 200px']}
        >
          <Box
            display="flex"
            width="2.5rem"
            height="2.5rem"
            borderRadius="m"
            aspectRatio="1/1"
            alignItems="center"
            justifyContent="center"
            bg={item.type == 'users' ? 'surface.containerHigh' : 'unset'}
            color={item.type == 'users' ? 'primary' : 'unset'}
          >
            {item.type == 'users' ? (
              <UsersSVG width="100%" maxHeight="1.25rem" maxWidth="1.25rem" />
            ) : (
              <TokenIcon
                id={item.type as DERIVATED_SUI_SYMBOL}
                size={2.5}
                lessRadius
              />
            )}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="extraSmall" opacity="0.6" color="onSurface">
              {capitalize(t(item.description as TTranslatedMessage))}
            </Typography>
            <Typography variant="large" color="onSurface">
              {item.value}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default FirstOverviewRow;
