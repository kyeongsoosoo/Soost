import React from 'react';
import S from './ProfileImage.styled';

type ProfileImageImageProp = {
  imageURL: string;
  width: string;
  height: string;
};

function ProfileImage(props: ProfileImageImageProp) {
  return (
    <S.ProfileImageImage
      width={props.width}
      height={props.height}
      imageURL={props.imageURL}
    />
  );
}

export default ProfileImage;
