import { CHART_TAB_ITEM_LIST, CHART_TYPE_LIST } from '@lib/config/constants';

export type UserInfoKeys = 'age' | 'tel' | 'sex' | 'birth';

export type StatisticsTitleKeys =
  | '평균 인지 훈련 시간'
  | '평균 명상 훈련 시간'
  | '평균 운동 시간'
  | '평균 운동 횟수'
  | '평균 식사 기록 횟수'
  | '평균 수면 시간'
  | '평균 메모 기록 횟수';

export type UserInfoType = {
  nickname: string;
  age: number;
  tel: string;
  sex: '남성' | '여성' | '기타';
  birth: string;
  profileImg: string;
};

export interface SessionType {
  index: string;
  date: string;
  time: string;
  sessionName: string;
  attachmentUrl: string | null;
  attachmentSize?: string | null;
}

export interface ChartDataType {
  x: number;
  y: number;
}

export interface ChartDataListType {
  [key: typeof CHART_TAB_ITEM_LIST[number]]: ChartDataType[];
}

export interface ChartType {
  type: typeof CHART_TYPE_LIST[number];
  data: ChartDataListType;
}

export interface StatisticsType {
  title: StatisticsTitleKeys;
  imgSrc: string;
  main: {
    count: number;
    suffix: string;
  };
  sub: {
    prefix: '+' | '-';
    count: number;
    suffix: string;
  };
}
