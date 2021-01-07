import styled from 'styled-components';

type ProfileImageImageProp = {
  imageURL: string;
  width: string;
  height: string;
};

const ProfileImageImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  width: 130px;
`;

const ProfileImageImage = styled.div<ProfileImageImageProp>`
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
  border-radius: ${({ height }) => `${parseInt(height, 10) / 2}px`};
  background-image: url(${({ imageURL }) => `${imageURL}`});
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export default {
  ProfileImageImageWrapper,
  ProfileImageImage,
};
