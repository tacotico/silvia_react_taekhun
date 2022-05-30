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

export const USER_INFO_ENDPOINT = '/data/mock_user_info.json';

export const SESSION_LIST_ENDPOINT = '/data/mock_session_list.json';

export const CHART_LIST_ENDPOINT = '/data/mock_chart_list.json';

export const BREAKPOINT_CONSTANT = 1.5;

export const CHART_TYPE_LIST = ['콘텐츠 이용 추이', '인지훈련 수행 현황', '생활관리 수행 현황'];

export const CHART_TAB_ITEM_LIST = ['종합', '집행기능', '주의집중력', '언어능력', '시공간능력', '기억력'];
