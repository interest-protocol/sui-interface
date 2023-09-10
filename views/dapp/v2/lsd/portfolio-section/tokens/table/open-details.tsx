import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ArrowSpecialSVG } from '@/svg';

import { OpenDetailsProps } from '../../portfolio.type';

const OpenDetails: FC<OpenDetailsProps> = ({ isOpen, handleClick }) => (
  <Motion
    as="span"
    width="0.5rem"
    lineHeight="0"
    cursor="pointer"
    color="onSurface"
    alignItems="center"
    display="inline-flex"
    onClick={handleClick}
    nHover={{ color: 'accent' }}
    animate={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
  >
    <ArrowSpecialSVG
      width="100%"
      maxWidth="1rem"
      maxHeight="1rem"
      fill="currentColor"
    />
  </Motion>
);

export default OpenDetails;
