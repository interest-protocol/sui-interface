import { Box } from '@interest-protocol/ui-kit';
import { FC, useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';

import useEventListener from '@/hooks/use-event-listener';

import LiquidityProgramTitle from './liquidity-program-title';
import LiquiditySimpleInformation from './liquidity-simple-informations';
import LiquidityWarning from './liquidity-warning-information';
import { POOL_PROVIDERS_LIST } from './pool-provider.data';
import PoolProviderCard from './pool-provider-card';

const LiquidityProgram: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouseOver, setMouseOver] = useState(false);

  useEffect(() => {
    console.log('>> mouseOver :: ', mouseOver);
  }, [mouseOver]);

  const onWheel = (e: WheelEvent) => {
    if (ref.current) {
      e.stopImmediatePropagation();
      ref.current.scrollLeft += e.deltaY;
    }
  };

  useEventListener('wheel', onWheel as any, false, ref.current!);

  return (
    <Box variant="container">
      <LiquidityProgramTitle />
      <Box
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={ref}
        width="100%"
        gridColumn="1/-1"
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <Box gap="s" display="flex" width="100%">
          {POOL_PROVIDERS_LIST.map((poolProvider) => (
            <PoolProviderCard key={v4()} {...poolProvider} />
          ))}
        </Box>
      </Box>
      <LiquiditySimpleInformation />
      <LiquidityWarning />
    </Box>
  );
};

export default LiquidityProgram;
