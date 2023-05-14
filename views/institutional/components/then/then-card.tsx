import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useCallback, useState } from 'react';

import useEventListener from '@/hooks/use-event-listener';

import { ThenCardProps } from './then.types';

const thenCardDesktopVariants = {
  active: {
    width: '100%',
    height: '100%',
  },
  inactive: {
    width: 'fit-content',
  },
};

const thenCardMobileVariants = {
  active: {
    height: '100%',
    width: '100%',
  },
  inactive: {
    height: 'fit-content',
  },
};

const ThenCard: FC<ThenCardProps> = ({
  index,
  isSelected,
  setSelected,
  description,
}) => {
  const t = useTranslations();
  const [desktop, setDesktop] = useState(false);

  const handleSetDesktop = useCallback(() => {
    console.log('>>>>1');
    const mediaIsDesktop = window.matchMedia('(min-width: 64em)').matches;
    setDesktop(mediaIsDesktop);
  }, []);

  useEventListener('resize', handleSetDesktop, true);
  return (
    <Motion
      cursor="pointer"
      initial="active"
      variants={desktop ? thenCardDesktopVariants : thenCardMobileVariants}
      onClick={() => setSelected(index)}
      animate={isSelected ? 'active' : 'inactive'}
      mr={['unset', 'unset', 'unset', '0.5rem']}
      mb={['0.5rem', '0.5rem', '0.5rem', 'unset']}
      display="grid"
    >
      {isSelected ? (
        <Box
          border="1px solid"
          borderColor="border"
          p="1rem"
          borderRadius="4px"
        >
          <Box
            bg="primary"
            borderRadius="4px"
            height="14.25rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="extraSmall"
              fontSize={['2.75rem', '2.75rem', '2.75rem', '6rem']}
              lineHeight="6.762rem"
              fontFamily="Share Tech Mono"
              color="#002A78"
              as="span"
              textTransform="uppercase"
            >
              {t('liquidity.then.step', { value: index + 1 })}
            </Typography>
          </Box>
          <Box
            width={['fit-content', 'fit-content', 'fit-content', '35rem']}
            p="1rem"
            minHeight={['unset', 'unset', 'unset', '7.25rem']}
            display="flex"
            alignItems="flex-end"
          >
            <Typography
              variant="large"
              fontSize="1.125rem"
              textAlign="left"
              color="textSoft"
            >
              {description}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          width={['unset', 'unset', 'unset', '2.5rem']}
          border="1px solid"
          borderColor="#45464F"
          p="1rem"
          borderRadius="4px"
        >
          <Box
            bg="primary"
            borderRadius="4px"
            height="2.5rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={['100%', '100%', '100%', '2.5rem']}
          >
            <Typography
              variant="extraSmall"
              fontSize="0.75rem"
              lineHeight="0.75rem"
              fontFamily="Share Tech Mono"
              color="#002A78"
              as="span"
              textTransform="uppercase"
            >
              {index + 1}
            </Typography>
          </Box>
        </Box>
      )}
    </Motion>
  );
};

export default ThenCard;