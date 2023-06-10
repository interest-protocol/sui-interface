export const getUSDPriceByCoinSymbol = (symbols: ReadonlyArray<string>) =>
  fetch(
    `/api/v1/quote-by-symbol?symbol=${symbols.map((x) => x.toUpperCase())}`,
    {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then(async (response) => await response.json())
    .catch(console.error);

export const getUSDPriceById = (ids: ReadonlyArray<string>) =>
  fetch(`/api/v1/quote?id=${ids.map((x) => x.toUpperCase())}`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(async (response) => await response.json())
    .catch(console.error);
