import { useCallback } from 'react';
import styled from 'styled-components';
import { PageHeader } from 'antd';

import Icon from '@components/commons/Icon';
import bgPatternSrc from '@assets/icons/bgPattern.svg';
import { ROUTES, userInfoKor } from '@lib/config/constants';
import { UserInfoKeys } from '@customTypes/user';
import { useNavigate } from 'react-router';

interface Props {}

const ClientPage = (props: Props) => {
  const navigate = useNavigate();

  const handleBackClick = useCallback(() => {
    navigate(ROUTES.home);
  }, [navigate]);

  const userInfo = {
    nickname: '남택훈',
    age: '12',
    tel: '010-0000-0000',
    sex: '남성',
    birth: '1997.08.13',
    profileImg: 'https://avatars.githubusercontent.com/u/19265753?v=4',
  };

  const userInfoList = Object.entries(userInfo).filter(([key]) => key !== 'nickname' && key !== 'profileImg');

  return (
    <Wrapper>
      <Header title='내담자 대시보드' onBack={handleBackClick} />
      <UserInfoContainer>
        <ProfileImageWrapper>
          <Icon src={userInfo.profileImg} alt='profile-image' width='10rem' style={{ borderRadius: '50%' }} />
        </ProfileImageWrapper>

        <UserInfoBox>
          <InfoBoxRow1>
            <Nickname>{userInfo.nickname}</Nickname>
            <NicknameEditButton>button</NicknameEditButton>
          </InfoBoxRow1>
          <InfoBoxRow2>
            {userInfoList.map(([label, data], key) => (
              <TextWrapper key={key}>
                <Label>{userInfoKor[label as UserInfoKeys]}</Label>
                <Text>{data}</Text>
              </TextWrapper>
            ))}
          </InfoBoxRow2>
        </UserInfoBox>
      </UserInfoContainer>
      {/* <BgPattern width='33rem' src={bgPatternSrc} alt='background_pattern' /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.padding.contentBox};
  background: none;
`;

const Header = styled(PageHeader)`
  padding: 0;
  margin-bottom: 2.4rem;
`;

const UserInfoContainer = styled.div`
  display: flex;
  gap: 4.4rem;
  width: 100%;
  position: relative;
`;

const ProfileImageWrapper = styled.div`
  border-radius: 50%;
`;

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
`;

const InfoBoxRow1 = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

const InfoBoxRow2 = styled.div`
  display: flex;
  font-size: 1.6rem;
  gap: 5.6rem;
`;

const Nickname = styled.h2`
  font-size: 3rem;
  font-weight: 500;
`;
const NicknameEditButton = styled.button``;

const TextWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;
const Label = styled.span`
  color: rgba(0, 0, 0, 0.45);
`;
const Text = styled.span``;

const BgPattern = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
`;

export default ClientPage;
