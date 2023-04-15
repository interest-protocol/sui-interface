import { FixedPointMath } from 'lib';
import { useTranslations } from 'next-intl';
import { FC, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { TooltipWrapper } from 'react-tooltip';
import { v4 } from 'uuid';

import { CopyToClipboard } from '@/components';
import space from '@/design-system/common/space';
import { Box, RefBox, Typography } from '@/elements';
import { ArrowSVG } from '@/svg';
import { capitalize } from '@/utils';

import { ItemBalanceProps } from './faucet-form.types';

const AnimatedBox = animated(Box);

const OpenDetails: FC<{
  tip: string;
  isOpen: boolean;
  handleClick: () => void;
}> = ({ tip, isOpen, handleClick }) => {
  const { transform } = useSpring({
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    },
    config: {
      duration: 300,
    },
  });

  return (
    <Box as="span" cursor="pointer" onClick={handleClick}>
      <TooltipWrapper content={tip}>
        <AnimatedBox
          as="span"
          ml="1rem"
          color="text"
          width="0.5rem"
          display="inline-block"
          nHover={{ color: 'accent' }}
          style={{ transform }}
        >
          <ArrowSVG
            width="100%"
            maxWidth="1rem"
            maxHeight="1rem"
            fill="currentColor"
          />
        </AnimatedBox>
      </TooltipWrapper>
    </Box>
  );
};

const ItemBalance: FC<ItemBalanceProps> = ({
  SVG,
  symbol,
  objectsData,
  totalBalance,
  decimals,
}) => {
  const t = useTranslations();
  const containerRef = useRef<HTMLDivElement>(null);
  const [openDetails, setOpenDetails] = useState(false);

  const style = useSpring({
    from: { height: '0px', margin: '0rem 0' },
    to: {
      margin: `${openDetails ? space.M : '0rem'} 0`,
      height: `${openDetails ? containerRef.current?.clientHeight : 0}px`,
    },
    config: {
      duration: 300,
    },
  });

  return (
    <>
      <Box py="XS" overflow="hidden">
        <Box mr="M" display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center" color="text">
            <SVG
              width="1rem"
              maxHeight="1rem"
              maxWidth="1rem"
              fill="currentColor"
            />
            <Typography ml="M" variant="normal">
              {FixedPointMath.toNumber(totalBalance, decimals)}
            </Typography>
          </Box>
          <Box
            display="grid"
            alignItems="center"
            gridTemplateColumns={`3rem 1rem 1rem`}
          >
            <Typography variant="normal" color="textSecondary">
              {symbol}
            </Typography>
            <Typography variant="normal" color="textSecondary">
              ({objectsData.length})
            </Typography>
            {objectsData.length != 0 && (
              <OpenDetails
                isOpen={openDetails}
                tip={capitalize(t('common.moreDetails'))}
                handleClick={() => setOpenDetails(!openDetails)}
              />
            )}
          </Box>
        </Box>
        <AnimatedBox style={style} overflow="hidden">
          <RefBox
            p="M"
            bg="background"
            overflow="auto"
            borderRadius="M"
            maxHeight="8rem"
            ref={containerRef}
          >
            {objectsData.map(({ balance, id }) => (
              <Box
                display="flex"
                justifyContent="space-between"
                key={v4()}
                py="XS"
                alignItems="center"
              >
                <Typography variant="normal" fontSize="S">
                  {capitalize(t('common.coin'))} ...{id?.slice(-4)}:{' '}
                  {FixedPointMath.from(balance).toNumber(decimals)}
                </Typography>
                <Box as="span">
                  <CopyToClipboard data={id} />
                </Box>
              </Box>
            ))}
          </RefBox>
        </AnimatedBox>
      </Box>
    </>
  );
};

export default ItemBalance;
