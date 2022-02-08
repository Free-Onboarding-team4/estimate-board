import React, { useEffect, useState } from 'react';
import { EstimateList } from 'components/EstimateList';
import { Estimate } from 'types/card';
import { Toggle } from 'components/Toggle';
import { fetcher } from 'utils/fetcher';
import { COLOR } from 'constants/';
import styled from 'styled-components';

export const MainPage = () => {
  const [apiData, setApiData] = useState<Estimate[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    (async function fetchData() {
      const data = await fetcher();
      setApiData(data);
    })();
  }, []);

  return (
    <PageContainer>
      <MainHeader>
        <h2>들어온 요청</h2>
        <span>파트너님에게 딱 맞는 요청서를 찾아보세요.</span>
      </MainHeader>
      <OptionContainer>
        <div>filter</div>
        <Toggle isChecked={isChecked} setIsChecked={setIsChecked} />
      </OptionContainer>
      <EstimateList apiData={apiData} isChecked={isChecked} />
    </PageContainer>
  );
};

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 30px;
`;

const PageContainer = styled.main`
  max-width: 1130px;
  margin: 40px auto;
  padding: 0 15px;
`;

const MainHeader = styled.div`
  padding-left: 2px;
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  span {
    font-size: 16px;
    color: ${COLOR.GRAY};
  }
`;
