import Icon from '@components/commons/Icon';
import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  imgSrc: string;
  main: {
    count: number;
    suffix: string;
  };
  sub: {
    prefix: string;
    count: number;
    suffix: string;
  };
}

const UserStatisticsIcon = ({ title, main, sub, imgSrc }: Props) => (
  <Wrapper>
    <TextBox>
      <Title>{title}</Title>
      <Main>{main.count + main.suffix}</Main>
      <Sub>{sub.prefix + sub.count + sub.suffix}</Sub>
    </TextBox>
    <Icon src={imgSrc} />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 16rem;
  position: relative;
`;

const TextBox = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 0 0.8rem;
`;

const Title = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.2rem;
`;

const Main = styled.p`
  font-size: 3rem;
  font-weight: 500;
  line-height: 4rem;
  margin-bottom: 1.4rem;
`;

const Sub = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.2rem;
`;

export default UserStatisticsIcon;
