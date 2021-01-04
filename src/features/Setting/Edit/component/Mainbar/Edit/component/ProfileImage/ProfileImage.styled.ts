import styled from 'styled-components';

type ProfileImageImageProp = {
  imageURL: string;
};

const ProfileImageWrapper = styled.div`
  display: flex;
  width: 480px;
  height: 55px;
`;

const ProfileImageImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  width: 130px;
`;

const ProfileImageImage = styled.div<ProfileImageImageProp>`
  width: 45px;
  height: 45px;
  border-radius: 22px;
  background-image: url(${({ imageURL }) => `${imageURL}`});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
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

export default {
  ProfileImageChangeButton,
  ProfileImageImage,
  ProfileImageNickname,
  ProfileImageWrapper,
  ProfileImageTextWrapper,
  ProfileImageImageWrapper,
};
