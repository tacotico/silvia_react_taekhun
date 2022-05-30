import { ROUTES, USER1_IMAGE_URL, USER2_IMAGE_URL } from '@lib/config/constants';
import { userIdState } from '@store/user';
import { Avatar } from 'antd';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

interface Props {}

const HomePage = (props: Props) => {
  const setUserId = useSetRecoilState(userIdState);
  const navigate = useNavigate();

  const onClickAvatar: React.MouseEventHandler = useCallback(
    (e) => {
      const id = (e.target as HTMLElement).closest('span')?.dataset.id;
      if (id) {
        setUserId(id);
        navigate(ROUTES.client);
      }
    },
    [navigate, setUserId],
  );

  return (
    <Wrapper>
      <Title>로그인 할 계정을 선택해 주세요.</Title>
      <ProfileBox onClick={onClickAvatar}>
        <Profile src={USER1_IMAGE_URL} data-id='user1' />
        <Profile src={USER2_IMAGE_URL} data-id='user2' />
      </ProfileBox>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Title = styled.h1`
  text-align: center;
  margin: 5rem;
  font-size: 2rem;
`;

const Profile = styled(Avatar)`
  width: 12rem;
  height: 12rem;
  cursor: pointer;
`;

const ProfileBox = styled.div`
  ${({ theme: { flexMixin } }) => flexMixin()};
  margin: 3rem;
  gap: 1.2rem;
`;

export default HomePage;
