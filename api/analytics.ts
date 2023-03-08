export const incrementTX = (address: string) =>
  fetch(
    'https://ipx-analytics-server.vercel.app/api/v1/analytics/incrementTX',
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
