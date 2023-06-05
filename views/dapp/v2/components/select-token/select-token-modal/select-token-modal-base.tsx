import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TOKENS_SVG_MAP_V2 } from '@/constants';

import { SelectTokenBaseTokensProps } from '../select-token.types';
import BaseTokenModalItem from './base-token-modal-item';

const SelectTokenBaseTokens: FC<SelectTokenBaseTokensProps> = ({
  tokens,
  onSelectToken,
  currentTokenType,
}) => (
  <Box p="l" gap="s" flex="1" display="flex" overflowY="auto">
    {tokens.map(({ symbol, type, decimals }) => (
      <BaseTokenModalItem
        key={v4()}
        symbol={symbol}
        selected={currentTokenType === type}
        Icon={TOKENS_SVG_MAP_V2[type] ?? TOKENS_SVG_MAP_V2.default}
        onClick={async () => onSelectToken({ symbol, decimals, type })}
      />
    ))}
  </Box>
);

export default SelectTokenBaseTokens;
