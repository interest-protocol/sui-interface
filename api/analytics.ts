export const getMetrics = () =>
  fetch(`/api/v1/get-dex-metrics`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(async (response) => await response.json())
    .catch(console.error);
