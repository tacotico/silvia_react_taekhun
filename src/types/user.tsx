export type UserInfoKeys = 'age' | 'tel' | 'sex' | 'birth';

export type UserInfoType = {
  nickname: string;
  age: number;
  tel: string;
  sex: '남성' | '여성' | '기타';
  birth: string;
  profileImg: string;
};
