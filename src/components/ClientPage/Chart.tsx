import React, { Key, useCallback, useState } from 'react';
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
import moment from 'moment';
import 'moment/locale/ko';
import { BREAKPOINT_CONSTANT, CHART_TAB_ITEM_LIST } from '@lib/config/constants';

const { TabPane } = Tabs;

interface Props {
  title: string;
  data: any;
}

const Chart = ({ title, data }: Props) => {
  const [selectedTab, setSelectedTab] = useState<string>('집행기능');

  const onChangeTab = useCallback((key: string) => {
    setSelectedTab(key);
  }, []);

  const xAxisLabelFormatter = useCallback(<T,>(tick: T) => {
    return moment.utc(tick).format('MM/DD(dd)');
  }, []);

  const getTickValues = useCallback((data: any) => {
    return data.map(({ x }: any) => x);
  }, []);

  const getBreakpoint = useCallback((data: any) => {
    return (data.reduce((acc: any, { y }: any) => acc + y, 0) / data.length) * BREAKPOINT_CONSTANT;
  }, []);

  const getBreakpointLine = useCallback(
    (data: any) => {
      const breakpoint = getBreakpoint(data);
      return data.map(({ x }: any) => ({ x: x, y: breakpoint }));
    },
    [getBreakpoint],
  );

  const getBreakpointReachedCount = useCallback(
    (data: any) => {
      const breakpoint = getBreakpoint(data);
      return data.reduce((acc: any, { y }: any) => (y >= breakpoint ? acc + 1 : acc), 0);
    },
    [getBreakpoint],
  );

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Tabs onChange={onChangeTab} type='card' defaultActiveKey={selectedTab}>
        {CHART_TAB_ITEM_LIST.map((type, key) => (
          <TabPane tab={type} key={key}>
            {data[type] ? (
              <ChartBox>
                <VictoryChart animate={{ duration: 2000, onLoad: { duration: 1000 } }} width={1024} height={500}>
                  {/* x축 */}
                  <VictoryLabel x={16} y={16} text={'시간(분)'} />
                  <VictoryAxis tickValues={getTickValues(data[type])} tickFormat={xAxisLabelFormatter} />

                  {/* y축 */}
                  <VictoryAxis
                    dependentAxis
                    style={{ grid: { stroke: 'rgb(204, 201, 201', strokeDasharray: '2, 4', strokeWidth: '1px' } }}
                  />

                  {/* 중재점 */}
                  <VictoryLine
                    labels={({ data, index }) => (data.length === Number(index) + 1 ? '중재점' : '')}
                    data={getBreakpointLine(data[type])}
                    style={{
                      data: { stroke: '#757575', strokeWidth: '1px' },
                    }}
                  />

                  <VictoryGroup domainPadding={50}>
                    {/* 추세선 */}
                    <VictoryLine data={data[type]} style={{ data: { stroke: '#4165ff' } }} />

                    {/* 막대 그래프 */}
                    <VictoryBar
                      name='bar'
                      data={data[type]}
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
                          fill: ({ datum: { y } }) => (y >= getBreakpoint(data[type]) ? '#788cff' : '#d9d9d9'),
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
                    <VictoryScatter name='scatter' size={5} style={{ data: { fill: 'gray' } }} data={data[type]} />
                  </VictoryGroup>
                </VictoryChart>

                <ReachedBreakpoint>
                  <h5>중재점 도달 횟수</h5>
                  <h3>{getBreakpointReachedCount(data[type])}</h3>
                </ReachedBreakpoint>
              </ChartBox>
            ) : (
              <EmptyBox key={key}>
                <p>데이터가 존재하지 않습니다.</p>
              </EmptyBox>
            )}
          </TabPane>
        ))}
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
