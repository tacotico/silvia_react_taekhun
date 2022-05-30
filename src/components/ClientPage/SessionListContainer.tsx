import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { SessionType } from '@customTypes/session';
import styled from 'styled-components';

interface Props {
  sessionList: SessionType[] | [];
}

const SessionListContainer = ({ sessionList }: Props) => {
  const [, setSelectedRowKeys] = useState<React.Key[]>([]);

  const columns: ColumnsType<SessionType> = [
    {
      title: '상담일',
      dataIndex: 'date',
    },
    {
      title: '상담시간',
      dataIndex: 'time',
    },
    {
      title: '상담명',
      dataIndex: 'sessionName',
    },
    {
      title: '첨부 파일',
      dataIndex: 'attachmentUrl',
      render: (text) =>
        text && (
          <a href={text} download target='_blank' rel='noreferrer'>
            📂
          </a>
        ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(selectedRowKeys);
    },
    getCheckboxProps: (record: SessionType) => ({
      name: record.index,
    }),
  };

  return (
    sessionList && (
      <Wrapper>
        <Table
          pagination={{ pageSize: 5 }}
          rowKey={'index'}
          rowSelection={{
            ...rowSelection,
          }}
          columns={columns}
          dataSource={sessionList}
        />
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  padding: 0 ${({ theme }) => theme.padding.contentBox};
`;

export default SessionListContainer;
