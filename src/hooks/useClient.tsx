import { useEffect, useState } from 'react';
import { UserInfoType, SessionType, ChartType, StatisticsType } from '@customTypes';
import { getUserInfo } from '@lib/api/user';
import { getSessionList } from '@lib/api/session';
import { getChartList } from '@lib/api/chart';
import { getStatistics } from '@lib/api/statistics';

const useClient = (userId: string) => {
  const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
  const [sessionList, setSessionList] = useState<SessionType[] | []>([]);
  const [chartList, setChartList] = useState<ChartType[] | []>([]);
  const [statisticsList, setStatisticsList] = useState<StatisticsType[] | []>([]);

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

  useEffect(() => {
    const fetchChartList = async () => {
      const res = await getChartList(userId);
      res && setChartList(res);
    };

    fetchChartList();
  }, [userId]);

  useEffect(() => {
    const fetchStatisticsList = async () => {
      const res = await getStatistics(userId);
      res && setStatisticsList(res);
    };

    fetchStatisticsList();
  }, [userId]);

  return {
    userInfo,
    sessionList,
    statisticsList,
    chartList,
  };
};

export default useClient;
