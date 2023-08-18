import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useNetwork } from '@/hooks';

import { MenuItemCollapsibleProps } from '../sidebar.types';
import AccordionItem from './accordion-item';

const variants = {
  rest: {
    height: '0rem',
  },
  hover: {
    height: 'auto',
  },
};

const MenuItemCollapsible: FC<MenuItemCollapsibleProps> = ({
  accordionList,
}) => {
  const { network } = useNetwork();

  if (!accordionList || !accordionList.length) return null;

  return (
    <Motion overflow="hidden" variants={variants}>
      {accordionList
        .filter(({ networks }) => networks.includes(network))
        .map((item) => (
          <AccordionItem key={v4()} {...item} />
        ))}
    </Motion>
  );
};

export default MenuItemCollapsible;
