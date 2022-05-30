import { UserInfoType } from '@customTypes';
import { getUserInfo } from '@lib/api/user';
import { atom, selector } from 'recoil';

export const userIdState = atom<string | null>({
  key: 'user_id',
  default: null,
});

export const userInfoSelector = selector({
  key: 'user_info_selector',
  get: async ({ get }) => {
    const userId = get(userIdState);
    if (!userId) return null;
    return (await getUserInfo(userId)) as UserInfoType;
  },
});

export const isLoggedInState = selector({
  key: 'user_login_status',
  get: ({ get }) => !!get(userIdState),
});
