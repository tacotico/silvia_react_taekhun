import { CHART_LIST_ENDPOINT } from '@lib/config/constants';
import { fetcher } from '.';

export const getChartList = async (userId: string) => {
  const res = await fetcher(CHART_LIST_ENDPOINT);
  return res[userId];
};
