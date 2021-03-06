import { HomeOutlined, TeamOutlined } from '@ant-design/icons';
import {
  trainingImgSrc,
  mealImgSrc,
  meditationImgSrc,
  sleepImgSrc,
  memoImgSrc,
  workOutRedImgSrc,
  workOutBlueImgSrc,
} from '@assets/userStatistics';

export const USER1_IMAGE_URL = 'https://avatars.githubusercontent.com/u/19265753?v=4';
export const USER2_IMAGE_URL = 'https://randomuser.me/api/portraits/lego/1.jpg';

export const ROUTES = {
  base: '/',
  home: '/home',
  client: '/client',
  etc: '/*',
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

export const STATISTICS_LIST_ENDPOINT = '/data/mock_statistics_list.json';

export const BREAKPOINT_CONSTANT = 1.5;

export const CHART_TYPE_LIST = ['콘텐츠 이용 추이', '인지훈련 수행 현황', '생활관리 수행 현황'];

export const CHART_TAB_ITEM_LIST = ['종합', '집행기능', '주의집중력', '언어능력', '시공간능력', '기억력'];

export const STATISTICS_IMG_MAP = {
  '평균 인지 훈련 시간': trainingImgSrc,
  '평균 명상 훈련 시간': meditationImgSrc,
  '평균 운동 시간': workOutBlueImgSrc,
  '평균 운동 횟수': workOutRedImgSrc,
  '평균 식사 기록 횟수': mealImgSrc,
  '평균 수면 시간': sleepImgSrc,
  '평균 메모 기록 횟수': memoImgSrc,
};
