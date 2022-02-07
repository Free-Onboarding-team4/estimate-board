export const fetcher = async () => {
  const response = await fetch('/requests', {
    method: 'GET',
  });

  if (response) {
    const data = await response.json();
    return data;
  } else {
    return [];
  }
};
