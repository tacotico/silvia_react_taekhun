import { Layout, Button, Badge, Avatar } from 'antd';
import { MessageOutlined, BellOutlined } from '@ant-design/icons';

import styled from 'styled-components';
import Icon from '@components/commons/Icon';
import logoImgSrc from '@assets/icons/logo.svg';
import { useRecoilValue } from 'recoil';
import { userInfoSelector } from '@store/user';
import { Suspense } from 'react';
const { Header: AntdHeader } = Layout;

const Header = () => {
  const userInfo = useRecoilValue(userInfoSelector);

  return (
    <Wrapper>
      <Logo>
        <Icon src={logoImgSrc} width='10rem' />
      </Logo>
      <Button type='primary' icon={<MessageOutlined />}>
        상담 대기실 입장
      </Button>
      <Badge count={1} size='small'>
        <Button type='default' style={{ border: 'none' }} icon={<BellOutlined style={{ fontSize: '22px' }} />} />
      </Badge>

      <Suspense fallback={<Avatar />}>
        <Avatar src={userInfo?.profileImg} />
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled(AntdHeader)`
  ${({ theme: { flexMixin } }) => flexMixin('row', 'center', 'space-between')};
  background-color: white;
  padding: 0 2.4rem;
  gap: 2rem;
`;

const Logo = styled.div`
  ${({ theme: { flexMixin } }) => flexMixin()};
  margin-right: auto;
`;

export default Header;
