import { CHART_TAB_ITEM_LIST, CHART_TYPE_LIST } from '@lib/config/constants';

export type UserInfoKeys = 'age' | 'tel' | 'sex' | 'birth';

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
