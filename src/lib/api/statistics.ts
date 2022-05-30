import { StatisticsTitleKeys, StatisticsType } from '@customTypes';
import { STATISTICS_LIST_ENDPOINT, STATISTICS_IMG_MAP } from '@lib/config/constants';
import { fetcher } from '.';

type rawDataType = Omit<StatisticsType, 'imgSrc'>;

export const getStatistics = async (userId: string) => {
  const res = await fetcher(STATISTICS_LIST_ENDPOINT);
  const rawData: rawDataType[] = res[userId];
  return rawData.map((item) => ({ ...item, imgSrc: STATISTICS_IMG_MAP[item.title as StatisticsTitleKeys] }));
};
