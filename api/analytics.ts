export const incrementTX = (address: string) =>
  fetch(
    `${process.env.NEXT_PUBLIC_IPX_ANALYTICS_SERVER_URL}api/v1/analytics/incrementTX`,
    {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }), // body data type must match "Content-Type" header
    }
  )
    .then()
    .catch(console.error);

export const incrementCreatedCoins = (address: string) =>
  fetch(
    `${process.env.NEXT_PUBLIC_IPX_ANALYTICS_SERVER_URL}api/v1/analytics/incrementCreatedCoins`,
    {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }), // body data type must match "Content-Type" header
    }
  )
    .then()
    .catch(console.error);

export const getMetrics = () =>
  fetch(
    `${process.env.NEXT_PUBLIC_IPX_ANALYTICS_SERVER_URL}api/v1/analytics/getProtocolData`,
    {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then(async (response) => await response.json())
    .catch(console.error);
