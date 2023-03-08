export const incrementTX = async (address: string) => {
  // Default options are marked with *
  const response = await fetch(
    'https://ipx-analytics-server.vercel.app/api/v1/analytics/incrementTX',
    {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'include', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }), // body data type must match "Content-Type" header
    }
  );
  return response.json();
};
