import React, { useEffect, useState } from 'react';
import { fetcher } from '@utils/fetcher';
import styled from 'styled-components';

export const MainPage = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    (async function fetchData() {
      const data = await fetcher();
      setApiData(data);
    })();
  }, []);

  console.log(apiData);

  return (
    <PageContainer>
      <h2>들어온 요청</h2>
      <span>파트너님에게 딱 맞는 요청서를 찾아보세요.</span>
      <div></div>
    </PageContainer>
  );
};

const PageContainer = styled.main`
  max-width: 1130px;
  margin: 40px auto;
`;
