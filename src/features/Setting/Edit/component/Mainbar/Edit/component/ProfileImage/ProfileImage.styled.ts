import styled from 'styled-components';

type ProfileImageImageProp = {
  imageURL: string;
  width: string;
  height: string;
};

const ProfileImageWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  width: 480px;
  height: 55px;
`;

const ProfileImageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileImageNickname = styled.div`
  color: #262626;
  font-size: 22px;
`;

const ProfileImageChangeButton = styled.div`
  color: #0095f6;
  font-size: 14px;
  font-weight: 600;
`;

const ProfileImageImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  width: 130px;
`;

export default {
  ProfileImageChangeButton,
  ProfileImageImageWrapper,
  ProfileImageNickname,
  ProfileImageWrapper,
  ProfileImageTextWrapper,
};
