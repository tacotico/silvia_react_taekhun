import { Tabs } from 'antd';
import styled from 'styled-components';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
} from 'victory';
import { CHART_TAB_ITEM_LIST } from '@lib/config/constants';
import useChart from '@hooks/useChart';
import { ChartType } from '@customTypes';

const { TabPane } = Tabs;

interface Props extends ChartType {}

const Chart = ({ type, data }: Props) => {
  const {
    selectedTab,
    onChangeTab,
    getTickValues,
    xAxisLabelFormatter,
    getBreakpoint,
    getBreakpointLine,
    getBreakpointReachedCount,
  } = useChart();

  return (
    <Wrapper>
      <Title>{type}</Title>
      <Tabs onChange={onChangeTab} type='card' defaultActiveKey={selectedTab}>
        {CHART_TAB_ITEM_LIST.map((tab, key) => {
          const currData = data[tab] || [];

          return (
            <TabPane tab={tab} key={key}>
              {currData.length ? (
                <ChartBox>
                  <VictoryChart width={1024} height={500}>
                    {/* 중재점 */}
                    <VictoryLine
                      labels={({ data, index }) => (data.length === Number(index) + 1 ? '중재점' : '')}
                      data={getBreakpointLine(currData)}
                      style={{
                        data: { stroke: '#757575', strokeWidth: '1px' },
                      }}
                    />

                    <VictoryGroup domainPadding={50}>
                      {/* 추세선 */}
                      <VictoryLine data={currData} style={{ data: { stroke: '#4165ff' } }} />

                      {/* 막대 그래프 */}
                      <VictoryBar
                        name='bar'
                        data={currData}
                        labels={({ datum: { y } }) => y}
                        labelComponent={
                          <VictoryTooltip
                            style={{ fontSize: '14px' }}
                            flyoutWidth={62}
                            flyoutHeight={54}
                            cornerRadius={2}
                            flyoutStyle={{
                              stroke: 'rgba(0, 0, 0, 0.15)',
                              fill: 'white',
                            }}
                          />
                        }
                        cornerRadius={{ top: 4, bottom: 0 }}
                        barWidth={30}
                        style={{
                          labels: { fontSize: '10px' },
                          data: {
                            fill: ({ datum: { y } }) => (y >= getBreakpoint(currData) ? '#788cff' : '#d9d9d9'),
                            width: 30,
                          },
                        }}
                        events={[
                          {
                            target: 'data',
                            eventHandlers: {
                              onMouseOver: () => [
                                {
                                  target: 'data',
                                  mutation: () => ({ style: { fill: 'blue' } }),
                                },
                                {
                                  target: 'labels',
                                  mutation: () => ({ active: true }),
                                },
                              ],
                              onMouseOut: () => [
                                {
                                  target: 'data',
                                  mutation: () => ({}),
                                },
                                {
                                  target: 'labels',
                                  mutation: () => ({ active: false }),
                                },
                              ],
                            },
                          },
                        ]}
                      />
                      {/* 스캐터 */}
                      <VictoryScatter name='scatter' size={5} style={{ data: { fill: 'gray' } }} data={currData} />

                      {/* x축 */}
                      <VictoryAxis tickValues={getTickValues(currData)} tickFormat={xAxisLabelFormatter} />
                      <VictoryLabel x={16} y={16} text={'시간(분)'} />

                      {/* y축 */}
                      <VictoryAxis dependentAxis />
                    </VictoryGroup>
                  </VictoryChart>

                  <ReachedBreakpoint>
                    <h5>중재점 도달 횟수</h5>
                    <h3>{getBreakpointReachedCount(currData)}</h3>
                  </ReachedBreakpoint>
                </ChartBox>
              ) : (
                <EmptyBox key={key}>
                  <p>데이터가 존재하지 않습니다.</p>
                </EmptyBox>
              )}
            </TabPane>
          );
        })}
      </Tabs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.padding.contentBox};
`;

const Title = styled.h5`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

const ChartBox = styled.div`
  display: flex;
  align-items: center;
`;

const EmptyBox = styled.div`
  height: 30rem;

  & p {
    margin-left: 1rem;
  }
`;

const ReachedBreakpoint = styled.div`
  ${({ theme: { flexMixin } }) => flexMixin('column')};
  flex: none;
  gap: 0.4rem;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  border: 0.6rem solid rgb(117, 117, 117);

  @media ${({ theme }) => theme.size.tablet} {
    width: 10rem;
    height: 10rem;
  }

  & h5 {
    color: rgb(117, 117, 117);
    font-size: 1.4rem;
    font-weight: 700;

    @media ${({ theme }) => theme.size.tablet} {
      font-size: 1rem;
    }
  }

  & h3 {
    color: rgb(117, 117, 117);
    font-size: 2.4rem;
    font-weight: 500;

    &::after {
      content: '회';
    }

    @media ${({ theme }) => theme.size.tablet} {
      font-size: 2rem;
    }
  }
`;

export default Chart;
