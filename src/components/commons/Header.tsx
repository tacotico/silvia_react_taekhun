import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import Icon from '@components/commons/Icon';
import logoImgSrc from '@assets/icons/logo.svg';

interface Props {}

const { Header: AntdHeader } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const Header = (props: Props) => {
  return (
    <Wrapper>
      <Icon src={logoImgSrc} width='10rem' />
      <Menu mode='horizontal' defaultSelectedKeys={['2']} items={items1} />
    </Wrapper>
  );
};

const Wrapper = styled(AntdHeader)`
  ${({ theme: { flexMixin } }) => flexMixin('row', 'center', 'space-between')};
  background-color: white;
  padding: 0 2.4rem;
`;

export default Header;
