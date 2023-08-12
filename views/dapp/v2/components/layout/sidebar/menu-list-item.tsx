import {
  Box,
  Motion,
  TooltipWrapper,
  Typography,
} from '@interest-protocol/ui-kit';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import RefBox from '@/elements/ref-box';
import { useLocalStorage, useNetwork } from '@/hooks';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';
import { TTranslatedMessage } from '@/interface';
import { MinusSVG, PlusSVG } from '@/svg';
import { capitalize } from '@/utils';

import AccordionItem from './accordion-item';
import { MenuItemVariants } from './sidebar.data';
import { MenuListItemProps } from './sidebar.types';

const BOX_ID = 'Menu-List-Item-';

const SidebarMenuListItem: FC<MenuListItemProps> = ({
  Icon,
  name,
  path,
  disabled,
  accordionList,
  setIsCollapsed,
  isCollapsed,
  index,
}) => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { asPath, push } = useRouter();
  const [isMenuCollapsed] = useLocalStorage('sui-interest-menu-collapse', true);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const closeAccordion = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == `${BOX_ID}${index}`) ||
      event
        ?.composedPath()
        ?.some((node: any) => node?.id == `${BOX_ID}${index}`)
    )
      return;

    setIsAccordionOpen(false);
  };

  const connectedBoxRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeAccordion);

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
    <RefBox
      id={`${BOX_ID}${index}`}
      ref={connectedBoxRef}
      onClick={() => {
        accordionList && setIsAccordionOpen(not);
      }}
      onMouseEnter={() => {
        accordionList && setIsCollapsed(false);
      }}
      onMouseLeave={() => {
        accordionList && setIsCollapsed(isMenuCollapsed);
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
        <Motion
          p="s"
          key={v4()}
          zIndex="1"
          pl="0.60rem"
          display="flex"
          borderRadius="m"
          color="onSurface"
          opacity={disabled ? 0.7 : 1}
          cursor={disabled ? 'not-allowed' : 'pointer'}
          height="2.2rem"
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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          position="relative"
          justifyContent="space-between"
          alignItems="center"
          mx="auto"
        >
          <Motion
            width="0"
            left="50%"
            zIndex="-1"
            height="100%"
            borderRadius="m"
            position="absolute"
            initial={{ width: 0 }}
            transform="translate(-50%)"
            bg="surface.containerHighest"
            animate={
              isHovered
                ? { width: '100%', transition: { duration: 0.3 } }
                : { width: '0' }
            }
          />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="1.2rem" />

            <Motion
              initial={isCollapsed ? 'closed' : 'open'}
              variants={MenuItemVariants}
              animate={
                isCollapsed
                  ? MenuItemVariants.collapsed
                  : MenuItemVariants.unCollapsed
              }
            >
              <Typography variant="small" ml="l" width="max-content">
                {capitalize(
                  t(`common.v2.navbar.${name}` as TTranslatedMessage)
                )}
              </Typography>
            </Motion>
          </Box>
          {getSuffixIcon()}
        </Motion>
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
              {accordionList
                .filter(({ networks }) => networks.includes(network))
                .map((item) => (
                  <AccordionItem key={v4()} {...item} />
                ))}
            </Motion>
          )}
        </AnimatePresence>
      )}
    </RefBox>
  );
};

export default SidebarMenuListItem;
