import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PageHeader } from 'antd';

import bgPatternSrc from '@assets/icons/bgPattern.svg';
import { ROUTES } from '@lib/config/constants';
import { UserInfoType } from '@customTypes/user';
import { useNavigate } from 'react-router';
import UserInfoContainer from '@components/ClientPage/UserInfoContainer';
import SessionListContainer from '@components/ClientPage/SessionListContainer';
import { getUserInfo } from '@lib/api/user';
import { getSessionList } from '@lib/api/session';
import { SessionType } from '@customTypes/session';
import StatisticsListContainer from '@components/ClientPage/StatisticsListContainer';
import ContentUsageGraphContainer from '@components/ClientPage/ChartContainer';

interface Props {}

const ClientPage = (props: Props) => {
  const [userId, setUserId] = useState<string>('user1');
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const [sessionList, setSessionList] = useState<SessionType[] | []>([]);

  const navigate = useNavigate();

  const handleBackClick = useCallback(() => {
    navigate(ROUTES.home);
  }, [navigate]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const res = await getUserInfo(userId);
      res && setUserInfo(res);
    };

    fetchUserInfo();
  }, [userId]);

  useEffect(() => {
    const fetchSessionList = async () => {
      const res = await getSessionList(userId);
      res && setSessionList(res);
    };

    fetchSessionList();
  }, [userId]);

  return (
    <Wrapper>
      <Header title='내담자 대시보드' onBack={handleBackClick} />
      <UserInfoContainer userInfo={userInfo} />
      <SessionListContainer sessionList={sessionList} />
      <StatisticsListContainer />
      <ContentUsageGraphContainer />
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
