import { HomeOutlined, TeamOutlined } from '@ant-design/icons';

export const ROUTES = {
  home: '/home',
  client: '/client',
};

export const MenuList = [
  {
    label: `홈`,
    path: ROUTES.home,
    icon: HomeOutlined,
  },
  { label: `내담자 관리`, path: ROUTES.client, icon: TeamOutlined },
];

export const userInfoKor = {
  age: '나이',
  tel: '전화번호',
  sex: '성별',
  birth: '생년월일',
};
