import { SessionType } from '@customTypes';
import { SESSION_LIST_ENDPOINT } from '@lib/config/constants';
import { fetcher } from '.';

type rawDataType = Omit<SessionType, 'time' | 'sessionName'>;

interface newDataType extends rawDataType {
  startTime: string;
  endTime: string;
  type: string;
  round: number;
}

export const getSessionList = async (userId: string) => {
  const res = await fetcher(SESSION_LIST_ENDPOINT);
  const data: newDataType[] = res[userId];

  return data.map(({ startTime, endTime, type, round, ...rest }) => ({
    time: `${startTime}-${endTime}`,
    sessionName: `${type} | ${round}`,
    ...rest,
  })) as SessionType[];
};
