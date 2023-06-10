import { Typography } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';
import { useTranslations } from 'use-intl';

import { capitalize } from '@/utils';

import { WalletItemProps } from '../wallet.types';

const WalletItem: FC<PropsWithChildren<WalletItemProps>> = ({
  name,
  children,
}) => {
  const t = useTranslations();

  return (
    <Typography
      variant="medium"
      whiteSpace="nowrap"
      letterSpacing="0.031rem"
      fontFamily="'Roboto', sans-serif"
    >
      {children ?? capitalize(t(`common.v2.wallet.${name!}`))}
    </Typography>
  );
};

export default WalletItem;
