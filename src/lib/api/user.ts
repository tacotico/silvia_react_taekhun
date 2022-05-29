import { USER_INFO_ENDPOINT } from '@lib/config/constants';
import { fetcher } from '.';

export const getUserInfo = async (userId: string) => {
  const res = await fetcher(USER_INFO_ENDPOINT);
  return res[userId];
};
