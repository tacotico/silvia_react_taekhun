import { useEffect, useState } from 'react';
import { SessionType, ChartType, StatisticsType } from '@customTypes';
import { getSessionList } from '@lib/api/session';
import { getChartList } from '@lib/api/chart';
import { getStatistics } from '@lib/api/statistics';
import { useRecoilValue } from 'recoil';
import { userIdState } from '@store/user';

const useClient = () => {
  const userId = useRecoilValue(userIdState) as string;
  const [sessionList, setSessionList] = useState<SessionType[] | []>([]);
  const [chartList, setChartList] = useState<ChartType[] | []>([]);
  const [statisticsList, setStatisticsList] = useState<StatisticsType[] | []>([]);

  useEffect(() => {
    const fetchSessionList = async () => {
      const res = await getSessionList(userId);
      res && setSessionList(res);
    };

    userId && fetchSessionList();
  }, [userId]);

  useEffect(() => {
    const fetchChartList = async () => {
      const res = await getChartList(userId);
      res && setChartList(res);
    };

    userId && fetchChartList();
  }, [userId]);

  useEffect(() => {
    const fetchStatisticsList = async () => {
      const res = await getStatistics(userId);
      res && setStatisticsList(res);
    };

    userId && fetchStatisticsList();
  }, [userId]);

  return {
    sessionList,
    statisticsList,
    chartList,
  };
};

export default useClient;
