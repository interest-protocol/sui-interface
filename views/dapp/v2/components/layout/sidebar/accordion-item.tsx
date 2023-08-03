import { Box, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

import { AccordionItemProps } from './sidebar.types';

const AccordionItem: FC<AccordionItemProps> = ({ name, path }) => {
  const t = useTranslations();
  const { push } = useRouter();

  return (
    <Box
      display="flex"
      borderRadius="m"
      color="onSurface"
      transition="all 350ms ease-in-out"
      cursor={'pointer'}
      onClick={() => push(path)}
      nHover={{
        color: 'primary',
      }}
      width="100%"
      mx="auto"
    >
      <Typography
        variant="small"
        borderLeft="1px solid"
        borderColor="outline.outlineVariant"
        ml="1rem"
        pl="1.5rem"
        py="0.5rem"
      >
        {capitalize(t(`common.v2.navbar.${name}` as TTranslatedMessage))}
      </Typography>
    </Box>
  );
};

export default AccordionItem;
