import React, { useEffect, useState } from 'react';
import { fetcher } from '@utils/fetcher';

export const MainPage = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    (async function fetchData() {
      const data = await fetcher();
      setApiData(data);
    })();
  }, []);

  console.log(apiData);

  return <div></div>;
};
