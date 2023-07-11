import {
  Box,
  Button,
  Motion,
  SwitchButton,
  Typography,
} from '@interest-protocol/ui-kit';
import { AnimatePresence } from 'framer-motion';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { MinusSVG, TimesSVG } from '@/components/svg/v2';
import { PlusSVG, SingleDotsSVG } from '@/svg';

import { EarnFiltersProps } from './earn.types';

const FilterSection: FC<EarnFiltersProps> = ({ handleClose }) => {
  const [typeAccordion, setTypeAccordion] = useState(true);
  const [sortAccordion, setSortAccordion] = useState(true);

  return (
    <Box
      top="0"
      right="0"
      bg="#0008"
      zIndex={9999}
      display="flex"
      overflowY="auto"
      minHeight="100vh"
      maxHeight="100vh"
      position="absolute"
      justifyContent="flex-end"
    >
      <Box
        width="19.75rem"
        minHeight="100vh"
        height="fit-content"
        bg="surface.container"
        p="1.5rem"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Box
            p="12px"
            display="grid"
            alignItems="center"
            gridTemplateColumns="3rem auto 3rem"
          >
            <Box ml="auto" gridColumn="3/4" borderRadius="full">
              <Button
                variant="icon"
                color="onSurface"
                borderRadius="full"
                onClick={handleClose}
              >
                <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
              </Button>
            </Box>
          </Box>
          <Box
            p="1rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color="onSurface"
          >
            <Typography variant="small">Stake only</Typography>
            <SwitchButton
              activation
              name="switch"
              defaultValue={true}
              size="medium"
            />
          </Box>
          <Box
            p="1rem"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color="onSurface"
          >
            <Typography variant="small">Life</Typography>
            <SwitchButton
              activation
              name="switch"
              defaultValue={true}
              size="medium"
            />
          </Box>
          <Box>
            <Motion
              initial={!typeAccordion}
              onClick={() => setTypeAccordion(not)}
            >
              <Box
                px="1rem"
                py="1.125rem"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                color="onSurface"
                cursor="pointer"
              >
                <Typography variant="small">Type</Typography>
                <Box
                  height="2rem"
                  width="2rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {!typeAccordion ? (
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
            <AnimatePresence initial={!typeAccordion}>
              {typeAccordion && (
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
                  <Box
                    p="1rem"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    color="onSurface"
                  >
                    <Box display="flex">
                      <Box height="0.75rem" width="0.75rem" mr="1rem">
                        <SingleDotsSVG
                          maxHeight="2rem"
                          maxWidth="2rem"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                      <Typography variant="small">All</Typography>
                    </Box>
                    <SwitchButton
                      activation
                      name="switch"
                      defaultValue={true}
                      size="medium"
                    />
                  </Box>
                  <Box
                    p="1rem"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    color="onSurface"
                  >
                    <Box display="flex">
                      <Box height="0.75rem" width="0.75rem" mr="1rem">
                        <SingleDotsSVG
                          maxHeight="2rem"
                          maxWidth="2rem"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                      <Typography variant="small">Stable</Typography>
                    </Box>
                    <SwitchButton
                      activation
                      name="switch"
                      defaultValue={true}
                      size="medium"
                      disabled
                    />
                  </Box>
                  <Box
                    p="1rem"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    color="onSurface"
                  >
                    <Box display="flex">
                      <Box height="0.75rem" width="0.75rem" mr="1rem">
                        <SingleDotsSVG
                          maxHeight="2rem"
                          maxWidth="2rem"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                      <Typography variant="small">Volatile</Typography>
                    </Box>
                    <SwitchButton
                      activation
                      name="switch"
                      defaultValue={true}
                      size="medium"
                      disabled
                    />
                  </Box>
                </Motion>
              )}
            </AnimatePresence>
          </Box>
          <Box>
            <Motion
              initial={!sortAccordion}
              onClick={() => setSortAccordion(!sortAccordion)}
            >
              <Box
                px="1rem"
                py="1.125rem"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                color="onSurface"
                cursor="pointer"
              >
                <Typography variant="small">Sort</Typography>
                <Box
                  height="2rem"
                  width="2rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {!sortAccordion ? (
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
            <AnimatePresence initial={!sortAccordion}>
              {sortAccordion && (
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
                  <Box
                    p="1rem"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    color="onSurface"
                  >
                    <Box display="flex">
                      <Box height="0.75rem" width="0.75rem" mr="1rem">
                        <SingleDotsSVG
                          maxHeight="2rem"
                          maxWidth="2rem"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                      <Typography variant="small">ID</Typography>
                    </Box>
                    <SwitchButton
                      activation
                      name="switch"
                      defaultValue={false}
                      size="medium"
                      disabled
                    />
                  </Box>
                  <Box
                    p="1rem"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    color="onSurface"
                  >
                    <Box display="flex">
                      <Box height="0.75rem" width="0.75rem" mr="1rem">
                        <SingleDotsSVG
                          maxHeight="2rem"
                          maxWidth="2rem"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                      <Typography variant="small">TVL</Typography>
                    </Box>
                    <SwitchButton
                      activation
                      name="switch"
                      defaultValue={false}
                      size="medium"
                      disabled
                    />
                  </Box>
                  <Box
                    p="1rem"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    color="onSurface"
                  >
                    <Box display="flex">
                      <Box height="0.75rem" width="0.75rem" mr="1rem">
                        <SingleDotsSVG
                          maxHeight="2rem"
                          maxWidth="2rem"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                      <Typography variant="small">APR</Typography>
                    </Box>
                    <SwitchButton
                      activation
                      name="switch"
                      defaultValue={false}
                      size="medium"
                      disabled
                    />
                  </Box>
                  <Box
                    p="1rem"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    color="onSurface"
                  >
                    <Box display="flex">
                      <Box height="0.75rem" width="0.75rem" mr="1rem">
                        <SingleDotsSVG
                          maxHeight="2rem"
                          maxWidth="2rem"
                          width="100%"
                          height="100%"
                        />
                      </Box>
                      <Typography variant="small">Allocation</Typography>
                    </Box>
                    <SwitchButton
                      activation
                      name="switch"
                      defaultValue={false}
                      size="medium"
                      disabled
                    />
                  </Box>
                </Motion>
              )}
            </AnimatePresence>
          </Box>
        </Box>
        <Button
          size="small"
          width="calc(100% - 2.5rem)"
          variant="filled"
          mt="1.5rem"
        >
          <Typography variant="small" mx="auto">
            Reset Filter
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default FilterSection;
