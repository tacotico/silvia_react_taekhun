import { useCallback, useState } from 'react';
import { Tabs } from 'antd';
import Chart from './Chart';
import styled from 'styled-components';
import { ChartType } from '@customTypes';

const { TabPane } = Tabs;

interface Props {
  chartList: ChartType[];
}

const ChartContainer = ({ chartList }: Props) => {
  const [selectedType, setSelectedType] = useState<string>('2');

  const onChangeType = useCallback((key: string) => {
    setSelectedType(key);
  }, []);

  return (
    <Wrapper>
      <Tabs onChange={onChangeType} defaultActiveKey={selectedType}>
        {chartList.map(({ type, data }, key) => (
          <TabPane tab={type} key={key}>
            <Chart type={type} data={data} />
          </TabPane>
        ))}
      </Tabs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.padding.contentBox};
`;

export default ChartContainer;
