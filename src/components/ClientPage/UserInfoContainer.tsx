import styled from 'styled-components';
import Icon from '@components/commons/Icon';
import { UserInfoKeys, UserInfoType } from '@customTypes';
import { userInfoKor } from '@lib/config/constants';

interface Props {
  userInfo: UserInfoType | null;
}

const UserInfoContainer = ({ userInfo }: Props) => {
  const userInfoList =
    userInfo && Object.entries(userInfo).filter(([key]) => key !== 'nickname' && key !== 'profileImg');

  return (
    userInfo && (
      <Wrapper>
        <ProfileImageWrapper>
          <Icon src={userInfo.profileImg} alt='profile-image' width='10rem' style={{ borderRadius: '50%' }} />
        </ProfileImageWrapper>

        <UserInfoBox>
          <InfoBoxRow1>
            <Nickname>{userInfo.nickname}</Nickname>
            <NicknameEditButton>button</NicknameEditButton>
          </InfoBoxRow1>
          <InfoBoxRow2>
            {userInfoList?.map(([label, data], key) => (
              <TextWrapper key={key}>
                <Label>{userInfoKor[label as UserInfoKeys]}</Label>
                <Text>{data}</Text>
              </TextWrapper>
            ))}
          </InfoBoxRow2>
        </UserInfoBox>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 4.4rem;
  width: 100%;
  position: relative;
  margin-bottom: 4rem;
  padding: 0 ${({ theme }) => theme.padding.contentBox};
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const ProfileImageWrapper = styled.div`
  border-radius: 50%;
`;

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  flex: 0 0 auto;
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

export default UserInfoContainer;
