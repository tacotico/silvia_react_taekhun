import styled from 'styled-components';
import UserStatisticsIcon from '@assets/userStatistics/UserStatisticsIcon';
import { StatisticsType } from '@customTypes';

interface Props {
  statisticsList: StatisticsType[];
}

const StatisticsListContainer = ({ statisticsList }: Props) => {
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

export default StatisticsListContainer;
