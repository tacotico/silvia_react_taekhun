import styled from 'styled-components';
import { PageHeader } from 'antd';
import { useCallback } from 'react';

import { ROUTES } from '@lib/config/constants';
import { useNavigate } from 'react-router';
import UserInfoContainer from '@components/ClientPage/UserInfoContainer';
import SessionListContainer from '@components/ClientPage/SessionListContainer';
import StatisticsListContainer from '@components/ClientPage/StatisticsListContainer';
import ChartContainer from '@components/ClientPage/ChartContainer';
import useClient from '@hooks/useClient';

interface Props {}

const ClientPage = (props: Props) => {
  const { userInfo, sessionList, statisticsList, chartList } = useClient('user2');

  const navigate = useNavigate();
  const handleBackClick = useCallback(() => {
    navigate(ROUTES.home);
  }, [navigate]);

  return (
    <Wrapper>
      <Header title='내담자 대시보드' onBack={handleBackClick} />
      <UserInfoContainer userInfo={userInfo} />
      <SessionListContainer sessionList={sessionList} />
      <StatisticsListContainer statisticsList={statisticsList} />
      <ChartContainer chartList={chartList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: none;
`;

const Header = styled(PageHeader)`
  margin-bottom: 2.4rem;
  padding: ${({ theme }) => theme.padding.contentBox};
`;

export default ClientPage;
