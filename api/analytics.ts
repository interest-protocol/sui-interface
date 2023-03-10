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
