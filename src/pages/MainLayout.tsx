import { Layout } from 'antd';
import Header from '@components/commons/Header';
import Sidebar from '@components/commons/Sidebar';
import styled from 'styled-components';

const { Content: AntdContent } = Layout;

interface Props {
  children: React.ReactElement;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Layout>
        <Sidebar />
        <Content>{children}</Content>
      </Layout>
    </Wrapper>
  );
};

const Wrapper = styled(Layout)``;

const Content = styled(AntdContent)`
  background-color: ${({ theme }) => theme.color.backgroundColor};
`;

export default MainLayout;
