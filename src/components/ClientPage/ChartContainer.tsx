import React, { useState } from 'react';
import { Tabs } from 'antd';
import Graph from './Chart';
import styled from 'styled-components';
import { CHART_TYPE_LIST } from '@lib/config/constants';

const { TabPane } = Tabs;

const ChartContainer = () => {
  const [selectedType, setSelectedType] = useState<string>('1');

  const onChange = (key: string) => {
    setSelectedType(key);
  };

  return (
    <Wrapper>
      <Tabs onChange={onChange} defaultActiveKey={selectedType}>
        {CHART_TYPE_LIST.map(({ type, data }, key) => (
          <TabPane tab={type} key={key}>
            <Graph title={type} data={data} />
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
