import {
  Box,
  Motion,
  TooltipWrapper,
  Typography,
} from '@interest-protocol/ui-kit';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { useLocalStorage } from '@/hooks';
import { TTranslatedMessage } from '@/interface';
import { MinusSVG, PlusSVG } from '@/svg';
import { capitalize } from '@/utils';

import AccordionItem from './accordion-item';
import { MenuListItemProps } from './sidebar.types';

const SidebarMenuListItem: FC<MenuListItemProps> = ({
  Icon,
  name,
  path,
  disabled,
  accordionList,
  setIsCollapsed,
  isCollapsed,
}) => {
  const t = useTranslations();
  const { asPath, push } = useRouter();
  const [isMenuCollapsed] = useLocalStorage('sui-interest-menu-collapse', true);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const getSuffixIcon = () =>
    !isCollapsed &&
    accordionList &&
    (isAccordionOpen ? (
      <MinusSVG
        maxHeight={isCollapsed ? '1.5rem' : '1.2rem'}
        maxWidth={isCollapsed ? '1.5rem' : '1.2rem'}
        width={isCollapsed ? '1.5rem' : '100%'}
      />
    ) : (
      <PlusSVG
        maxHeight={isCollapsed ? '1.5rem' : '1.2rem'}
        maxWidth={isCollapsed ? '1.5rem' : '1.2rem'}
        width={isCollapsed ? '1.5rem' : '100%'}
      />
    ));

  return (
    <Box
      onMouseEnter={() => {
        accordionList && setIsCollapsed(false);
        setIsAccordionOpen(true);
      }}
      onMouseLeave={() => {
        accordionList && setIsCollapsed(isMenuCollapsed);
        setIsAccordionOpen(false);
      }}
    >
      <TooltipWrapper
        bg="inverseSurface"
        tooltipPosition="right"
        display={isCollapsed ? (disabled ? 'none' : 'block') : 'none'}
        width="max-content"
        tooltipContent={
          <Typography
            variant="extraSmall"
            color="inverseOnSurface"
            textTransform="capitalize"
          >
            {capitalize(t(`common.v2.navbar.${name}` as TTranslatedMessage))}
          </Typography>
        }
      >
        <Box
          p="0.5rem"
          key={v4()}
          display="flex"
          borderRadius="m"
          color="onSurface"
          opacity={disabled ? 0.7 : 1}
          transition="all 350ms ease-in-out"
          cursor={disabled ? 'not-allowed' : 'pointer'}
          width={isCollapsed ? '2.5rem' : '100%'}
          height="2.5rem"
          bg={
            accordionList
              ? isAccordionOpen
                ? 'surface.containerHighest'
                : asPath === path
                ? 'surface.containerHighest'
                : undefined
              : asPath === path
              ? 'surface.containerHighest'
              : undefined
          }
          onClick={disabled ? undefined : () => !accordionList && push(path)}
          nHover={{
            bg: !disabled && 'surface.containerHighest',
          }}
          justifyContent={isCollapsed ? 'center' : 'space-between'}
          alignItems="center"
          mx="auto"
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="1.2rem" />
            {!isCollapsed && (
              <Typography variant="small" ml="l">
                {capitalize(
                  t(`common.v2.navbar.${name}` as TTranslatedMessage)
                )}
              </Typography>
            )}
          </Box>
          {getSuffixIcon()}
        </Box>
      </TooltipWrapper>
      {accordionList && (
        <AnimatePresence>
          {isAccordionOpen && (
            <Motion
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {accordionList.map((item) => (
                <AccordionItem key={v4()} {...item} />
              ))}
            </Motion>
          )}
        </AnimatePresence>
      )}
    </Box>
  );
};

export default SidebarMenuListItem;
