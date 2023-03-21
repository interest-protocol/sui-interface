import { useTranslations } from 'next-intl';
import { FC, MouseEvent as ReactMouseEvent } from 'react';
import toast from 'react-hot-toast';
import { TooltipWrapper } from 'react-tooltip';

import { Box } from '@/elements';
import { CopySVG } from '@/svg';
import { capitalize } from '@/utils';

import { CopyToClipboardProps } from './copy-to-clipboard';

const CopyToClipboard: FC<CopyToClipboardProps> = ({
  data,
  onClick,
  children,
  ...props
}) => {
  const t = useTranslations();
  const copyToClipboard = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    window.navigator.clipboard.writeText(data || '');
    onClick?.(e);
    toast(capitalize(t('common.copyClipboard')));
  };

  return (
    <>
      <TooltipWrapper content={capitalize(t('common.copyObjectNumber'))}>
        <Box
          as="span"
          cursor="pointer"
          nHover={{ color: 'accent' }}
          onClick={copyToClipboard}
          {...props}
        >
          <Box as="span" display="inline-block" width="1rem">
            <CopySVG width="100%" maxWidth="1rem" maxHeight="1rem" />
          </Box>
          {children}
        </Box>
      </TooltipWrapper>
    </>
  );
};

export default CopyToClipboard;
