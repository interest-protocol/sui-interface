import { FC, useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import { v4 } from 'uuid';

import { FAUCET_TOKENS_V2 } from '@/constants';
import { useNetwork } from '@/hooks';

import { FaucetChooseTokenModalBodyProps } from '../faucet.types';
import NotFound from './not-found';
import TokenModalItem from './token-modal-item';

const FaucetChooseTokenModalBody: FC<FaucetChooseTokenModalBodyProps> = ({
  onSelectCurrency,
  control,
}) => {
  const { network } = useNetwork();
  const tokens = FAUCET_TOKENS_V2[network];

  const [currentToken, setCurrentToken] = useState(tokens);

  const search = useWatch({ control, name: 'search' });

  const [debouncedSearch, { isPending }] = useDebounce(search, 1000);

  useEffect(() => {
    if (
      search &&
      !isPending() &&
      debouncedSearch &&
      search === debouncedSearch
    ) {
      setCurrentToken(
        tokens.filter(
          (token) =>
            token.name.toLowerCase().search(debouncedSearch.toLowerCase()) ==
              0 ||
            token.symbol.toLowerCase().search(debouncedSearch.toLowerCase()) ==
              0 ||
            token.type.toLowerCase().search(debouncedSearch.toLowerCase()) == 0
        )
      );
    } else setCurrentToken(tokens);
  }, [debouncedSearch, search]);

  if (debouncedSearch && currentToken.length == 0) return <NotFound />;

  return (
    <>
      {currentToken.map(({ symbol, type }) => (
        <TokenModalItem
          type={type}
          key={v4()}
          symbol={symbol}
          onSelectCurrency={onSelectCurrency}
        />
      ))}
    </>
  );
};

export default FaucetChooseTokenModalBody;
