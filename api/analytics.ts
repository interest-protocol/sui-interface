export const getMetrics = () =>
  fetch(
    `${process.env.NEXT_PUBLIC_IPX_ANALYTICS_SERVER_URL}api/v2/analytics/getProtocolData`,
    {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then(async (response) => await response.json())
    .catch(console.error);
