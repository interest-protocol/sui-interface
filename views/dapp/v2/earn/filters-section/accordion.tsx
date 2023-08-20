import {
  Box,
  Motion,
  SwitchButton,
  Typography,
} from '@interest-protocol/ui-kit';
import { AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { MinusSVG } from '@/components/svg/v2';
import { TTranslatedMessage } from '@/interface';
import { PlusSVG, SingleDotsSVG } from '@/svg';

import { AccordionProps } from '../earn.types';

const Accordion: FC<AccordionProps> = ({ title, options }) => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box>
      <Motion initial={!isOpen} onClick={() => setIsOpen(not)}>
        <Box
          px="l"
          py="xl"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="onSurface"
          cursor="pointer"
        >
          <Typography variant="small" textTransform="capitalize">
            {title}
          </Typography>
          <Box
            height="2rem"
            width="2rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {!isOpen ? (
              <PlusSVG
                maxHeight="2rem"
                maxWidth="2rem"
                width="60%"
                height="60%"
              />
            ) : (
              <MinusSVG
                maxHeight="2rem"
                maxWidth="2rem"
                width="100%"
                height="100%"
              />
            )}
          </Box>
        </Box>
      </Motion>
      <AnimatePresence initial={!isOpen}>
        {isOpen && (
          <Motion
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            {options.map((option) => (
              <Box
                p="l"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                color="onSurface"
                key={v4()}
              >
                <Box display="flex">
                  <Box height="0.75rem" width="0.75rem" mr="l">
                    <SingleDotsSVG
                      maxHeight="2rem"
                      maxWidth="2rem"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Typography variant="small" textTransform="capitalize">
                    {t(
                      option.description as TTranslatedMessage,
                      option.descriptionConfig
                    )}
                  </Typography>
                </Box>
                <SwitchButton
                  activation
                  name="switch"
                  defaultValue={option.defaultState}
                  size="medium"
                />
              </Box>
            ))}
          </Motion>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Accordion;
