import { Box, Button, Motion, TextField } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { ArrowSpecialSVG } from '@/svg';
import { capitalize } from '@/utils';

import TokenIcon from '../../components/token-icon/token-icon';
import { ChoosePairTokenProps } from '../earn.types';
import { INPUT_TOKEN } from '../earn-pool.data';

const ChoosePairTokenSection: FC<ChoosePairTokenProps> = ({
  openModal,
  form,
  action,
}) => {
  const t = useTranslations();
  return (
    <Box>
      <Box
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
        gap="m"
        pb="xl"
      >
        {INPUT_TOKEN.map((item) => (
          <Motion
            key={v4()}
            cursor="pointer"
            onClick={() => openModal(item.isFirstToken)}
            transform="scale(1)"
            whileHover={{ transform: 'scale(0.99)' }}
          >
            <TextField
              Prefix={
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="primary"
                  borderRadius="m"
                  color="inverseOnSurface"
                  height="2.5rem"
                  width="2.5rem"
                  mr="l"
                >
                  <TokenIcon type={form.getValues(`${item.name}.type`)} />
                </Box>
              }
              Suffix={
                <Box mr="l">
                  <ArrowSpecialSVG
                    width="100%"
                    height="100%"
                    maxWidth="0.8rem"
                    maxHeight="0.8rem"
                  />
                </Box>
              }
              fieldProps={{
                bg: 'surface.containerLowest',
                border: 'none',
                height: '3.625rem',
              }}
              fontSize="m"
              value={form.getValues(`${item.name}.symbol`)}
              disabled
            />
          </Motion>
        ))}
      </Box>
      <Button variant="filled" py="m" px="2xl" fontSize="s" onClick={action}>
        {capitalize(t('earnFindPool.find'))}
      </Button>
    </Box>
  );
};

export default ChoosePairTokenSection;
