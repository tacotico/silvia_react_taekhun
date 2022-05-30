import { BREAKPOINT_CONSTANT } from '@lib/config/constants';
import { useCallback, useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { ChartDataType } from '@customTypes';

const useChart = () => {
  const [selectedTab, setSelectedTab] = useState<string>('집행기능');

  const onChangeTab = useCallback((key: string) => {
    setSelectedTab(key);
  }, []);

  const xAxisLabelFormatter = useCallback(<T,>(tick: T) => moment.utc(tick).format('MM/DD(dd)'), []);

  const getTickValues = useCallback((data: ChartDataType[]) => {
    return data.map(({ x }) => x);
  }, []);

  const getBreakpoint = useCallback((data: ChartDataType[]) => {
    return (data.reduce((acc, { y }) => acc + y, 0) / data.length) * BREAKPOINT_CONSTANT;
  }, []);

  const getBreakpointLine = useCallback(
    (data: ChartDataType[]) => {
      const breakpoint = getBreakpoint(data);
      return data.map(({ x }) => ({ x: x, y: breakpoint }));
    },
    [getBreakpoint],
  );

  const getBreakpointReachedCount = useCallback(
    (data: ChartDataType[]) => {
      const breakpoint = getBreakpoint(data);
      return data.reduce((acc, { y }) => (y >= breakpoint ? acc + 1 : acc), 0);
    },
    [getBreakpoint],
  );

  return {
    selectedTab,
    onChangeTab,
    xAxisLabelFormatter,
    getTickValues,
    getBreakpoint,
    getBreakpointLine,
    getBreakpointReachedCount,
  };
};

export default useChart;
