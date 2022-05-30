import {
  trainingImgSrc,
  mealImgSrc,
  meditationImgSrc,
  sleepImgSrc,
  memoImgSrc,
  workOutRedImgSrc,
  workOutBlueImgSrc,
} from '@assets/userStatistics';
import UserStatisticsIcon from '@assets/userStatistics/UserStatisticsIcon';
import React from 'react';
import styled from 'styled-components';

interface Props {}

const StatisticsListContainer = (props: Props) => {
  return (
    <Wrapper>
      <ItemList>
        {statisticsList.map(({ title, main, imgSrc, sub }, key) => (
          <Item key={key}>
            <UserStatisticsIcon imgSrc={imgSrc} title={title} main={main} sub={sub} />
          </Item>
        ))}
      </ItemList>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  background: #e5e5e5;
  padding: ${({ theme }) => theme.padding.contentBox};
  padding-right: 0;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 2rem;
`;

const ItemList = styled.ul`
  display: flex;
  gap: 1.5rem;
  overflow: auto;
  padding-bottom: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.li``;

const statisticsList = [
  {
    imgSrc: trainingImgSrc,
    title: '평균 인지 훈련 시간',
    main: { count: 80, suffix: '분' },
    sub: { prefix: '+', count: 20, suffix: '분' },
  },
  {
    imgSrc: meditationImgSrc,
    title: '평균 명상 훈련 시간',
    main: { count: 80, suffix: '분' },
    sub: { prefix: '+', count: 70, suffix: '분' },
  },
  {
    imgSrc: workOutBlueImgSrc,
    title: '평균 운동 시간',
    main: { count: 80, suffix: '분' },
    sub: { prefix: '+', count: 30, suffix: '분' },
  },
  {
    imgSrc: workOutRedImgSrc,
    title: '평균 운동 횟수',
    main: { count: 2, suffix: '회' },
    sub: { prefix: '-', count: 3, suffix: '회' },
  },
  {
    imgSrc: mealImgSrc,
    title: '평균 식사 기록 횟수',
    main: { count: 0, suffix: '회' },
    sub: { prefix: '-', count: 3, suffix: '회' },
  },
  {
    imgSrc: sleepImgSrc,
    title: '평균 수면 시간',
    main: { count: 80, suffix: '시간' },
    sub: { prefix: '+', count: 20, suffix: '시간' },
  },
  {
    imgSrc: memoImgSrc,
    title: '평균 메모 기록 횟수',
    main: { count: 7, suffix: '회' },
    sub: { prefix: '+', count: 3, suffix: '회' },
  },
];

export default StatisticsListContainer;
