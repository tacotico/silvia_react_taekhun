import React, { useCallback, useState } from 'react';
import 'antd/dist/antd.min.css';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { MenuList } from '@lib/config/constants';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';

const { Sider } = Layout;

const items = MenuList.map(({ icon, label, path }) => ({
  icon: React.createElement(icon),
  label: <Link to={path}>{label}</Link>,
  key: path,
}));

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { pathname: selectedMenu } = location;

  const handleClickMenu: MenuClickEventHandler = useCallback(
    (e) => {
      navigate(e.key);
    },
    [navigate],
  );

  const handleToggleMenu = useCallback((e: boolean) => {
    setCollapsed(e);
  }, []);

  return (
    <StyledSider collapsible collapsed={collapsed} onCollapse={handleToggleMenu}>
      <StyledMenu onClick={handleClickMenu} theme='dark' mode='inline' selectedKeys={[selectedMenu]} items={items} />
    </StyledSider>
  );
};

const StyledSider = styled(Sider)`
  height: 100vh;
  overflow: auto;

  & .ant-layout-sider-trigger {
    background: none;
  }
`;

const StyledMenu = styled(Menu)`
  & .ant-menu-item {
    margin: 0;
  }
`;

export default Sidebar;
